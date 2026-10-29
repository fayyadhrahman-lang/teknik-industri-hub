import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static assets reliably in dev and production
app.use('/assets/aistudio', express.static(path.resolve(__dirname, 'public/assets/aistudio')));
app.use('/assets', express.static(path.resolve(__dirname, 'public/assets')));
app.use('/src/assets', express.static(path.resolve(__dirname, 'src/assets')));
app.use(express.static(path.resolve(__dirname, 'public')));

// Initialize GoogleGenAI SDK
// Using standard process.env.GEMINI_API_KEY
const aiKey = process.env.GEMINI_API_KEY;
const ai = aiKey ? new GoogleGenAI({ apiKey: aiKey }) : null;

// Endpoint for Industrial Engineering AI Assistant
app.post('/api/chat', async (req, res) => {
  try {
    if (!ai) {
      // Return a friendly fallback notice
      return res.json({ 
        text: "Halo! Saya adalah Asisten Akademik Teknik Industri Telkom University. (Catatan: API Key belum dikonfigurasi, menggunakan mode offline cerdas). Untuk bertanya tentang kurikulum, silakan coba simulator kurikulum interaktif di bawah atau ketik pertanyaan umum." 
      });
    }
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages body.' });
    }

    const systemInstruction = `
Anda adalah Asisten Akademik AI untuk Program Studi Teknik Industri (Industrial Engineering) di Telkom University, Bandung, Indonesia.
Program Studi Teknik Industri Telkom University berada di bawah Fakultas Rekayasa Industri (FRI) dan telah terakreditasi UNGGUL oleh BAN-PT serta berstandar internasional (IABEE).

Tugas Anda adalah memberikan informasi yang akurat, profesional, ramah, dan memotivasi tentang:
1. Kurikulum dan 4 Bidang Keahlian Utama (Peminatan):
   - Rekayasa Sistem Perusahaan (Enterprise Systems Engineering): Fokus pada perancangan proses bisnis terintegrasi, penerapan ERP (seperti SAP), arsitektur enterprise, dan optimasi organisasi.
   - Rekayasa Rantai Pasok & Logistik (Supply Chain & Logistics Engineering): Fokus pada manajemen rantai pasok global, logistik, manajemen pergudangan, peramalan permintaan, dan manajemen transportasi.
   - Ergonomi & Rekayasa Faktor Manusia (Ergonomics & Human Factors Engineering): Fokus pada perancangan sistem kerja yang aman, nyaman, sehat, dan efektif (ASPEK), interaksi manusia-komputer, beban kerja kognitif, dan keselamatan kerja (K3).
   - Sistem Manufaktur & Operasi (Manufacturing & Operations Systems): Fokus pada otomasi pabrik, kontrol kualitas, lean manufacturing, sistem produksi fleksibel, dan kecerdasan buatan dalam manufaktur.

2. Fasilitas Laboratorium Terkemuka di Teknik Industri Telkom:
   - EWD (Ergonomics and Work Design Laboratory): Praktikum ergonomi, analisis postur kerja (REBA, RULA), dan biomekanika.
   - SISPROM (Sistem Produksi / Production System Laboratory): Simulasi lini manufaktur, penjadwalan produksi, peramalan, dan analisis inventaris.
   - EAL (Enterprise Application Laboratory): Praktikum ERP, pemodelan proses bisnis, implementasi SAP, dan basis data perusahaan.
   - SIMS (Simulation & Industrial Modeling Laboratory): Pemodelan simulasi sistem diskrit, optimasi sistem antrean, dan riset operasi lanjut.
   - PSD (Product Design & Development Laboratory): Perancangan produk baru, prototyping, CAD/CAM, dan analisis kegunaan produk.

3. Prospek Karir Lulusan:
   - Industrial Engineer / Process Engineer
   - Supply Chain & Logistics Specialist
   - Enterprise Resource Planning (ERP) Consultant (terutama bersertifikasi SAP)
   - Quality Control / Quality Assurance Specialist
   - Health and Safety (K3) Coordinator
   - Operations Manager / Production Planner
   - Data & Business Analyst di industri teknologi, perbankan, manufaktur, atau startup.

4. Informasi Umum Kampus:
   - Berlokasi di Landmark Kampus Telkom University, Jalan Telekomunikasi, Bandung.
   - Program internasional (International Class) juga tersedia dengan pengantar bahasa Inggris penuh.

Format respons Anda dengan Markdown yang rapi, buat agar mudah dibaca, gunakan daftar (bullet points), tebalkan istilah penting, dan sampaikan dalam bahasa Indonesia yang ramah, profesional, serta penuh semangat akademik.
    `;

    // Map conversation history for the SDK
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents,
      config: {
        systemInstruction,
        temperature: 0.6,
      }
    });

    const replyText = response.text || 'Maaf, saya tidak dapat merumuskan respon saat ini. Silakan coba lagi.';
    res.json({ text: replyText });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: error.message || 'Terjadi kesalahan pada server AI.' });
  }
});

// Setup fallback route or dynamic build middleware
const isProduction = process.env.NODE_ENV === 'production' || fs.existsSync(path.resolve(__dirname, 'dist'));

if (!isProduction) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
} else {
  // Production serving
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port} (Production: ${isProduction})`);
});
