# Teknik Industri Telkom University - Official Academic Hub 🎓⚙️

Website resmi dan interaktif Program Studi S1 Teknik Industri, Fakultas Rekayasa Industri, Telkom University. Dilengkapi dengan eksplorasi laboratorium riset, kurikulum terstruktur (berstandar internasional IABEE dan akreditasi BAN-PT UNGGUL), profil dosen, simulator akademik, serta asisten AI akademik.

---

## 🚀 Fitur Utama

- **🏛️ Laboratorium & Riset Interaktif**: Showcase lengkap 10 laboratorium spesialisasi (Sispromasi, Prosman, Tekmi, SIPO, SIMBI, PDEV, Ensyse, GTX, APK, WSDA) dengan logo resmi dan fokus keilmuan.
- **📚 Struktur Kurikulum**: Eksplorasi 4 peminatan utama (Enterprise Systems, Supply Chain, Human Factors & Ergonomics, Manufacturing & Operations Systems).
- **👨‍🏫 Direktori Dosen & Peneliti**: Profil lengkap jajaran dosen FRI Telkom University beserta keahlian riset.
- **🤖 Asisten Akademik AI**: Layanan tanya-jawab kurikulum dan perkuliahan berbasis Gemini AI.
- **📝 Formulir Publikasi Informasi**: Tautan langsung terintegrasi untuk pengajuan publikasi informasi program studi.

---

## 🛠️ Prasyarat (Prerequisites)

Pastikan salah satu runtime berikut telah terpasang di komputer/server Anda:
- **Node.js**: Versi `18.x` atau lebih baru (disarankan `v20.x` LTS)
- **NPM**: Versi `9.x` atau lebih baru (otomatis terpasang bersama Node.js)
- *(Opsional)* **Bun**: Versi `1.2+` jika Anda lebih menyukai runtime Bun.

---

## ⚙️ Langkah Instalasi & Menjalankan (Lokal)

### 1. Salin Proyek & Konfigurasi Lingkungan (.env)
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Isi konfigurasi dalam file `.env`:
```env
# Opsional: Masukkan Gemini API Key untuk mengaktifkan AI Assistant
# Dapatkan gratis di: https://aistudio.google.com/
GEMINI_API_KEY=

# Port server (default: 3000)
PORT=3000

# Mode environment
NODE_ENV=development
```
> **Catatan:** Jika `GEMINI_API_KEY` dikosongkan, aplikasi tetap berjalan normal 100% dan fitur chat akan beralih ke mode offline cerdas yang tetap menjawab informasi kurikulum.

---

### 2. Pasang Dependencies
Gunakan salah satu package manager:
```bash
# Menggunakan NPM
npm install

# Atau jika menggunakan Bun
bun install
```

---

### 3. Menjalankan Mode Pengembangan (Development)
```bash
# Menggunakan NPM
npm run dev

# Atau menggunakan Bun
bun dev
```
Buka browser di: `http://localhost:3000`

---

### 4. Build Proyek untuk Produksi
Sebelum deploy, pastikan build berjalan sukses:
```bash
npm run build
# atau
bun run build
```
File hasil optimasi akan berada di folder `dist/`.

---

### 5. Menjalankan Server Produksi
```bash
npm start
# atau
bun start
```
Server Express akan menyajikan aplikasi yang sudah dibuild beserta API endpoint di port yang ditentukan.

---

## 🌐 Panduan Deployment (Cara Deploy)

Aplikasi ini adalah aplikasi **Full-stack (React + Vite di-bundle dengan backend Express & API)**. Anda dapat mendeploynya ke berbagai platform berikut:

### Opsi A: Railway / Render (Sangat Mudah & Direkomendasikan)
1. Hubungkan repository GitHub Anda ke [Railway](https://railway.app/) atau [Render](https://render.com/).
2. Tentukan konfigurasi berikut:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
3. Di tab **Environment Variables**, tambahkan:
   - `PORT=3000` (atau biarkan Railway/Render mengaturnya secara otomatis)
   - `NODE_ENV=production`
   - `GEMINI_API_KEY` (jika ingin mengaktifkan fitur AI)
4. Klik **Deploy**. Selesai!

---

### Opsi B: VPS (Ubuntu / Debian dengan PM2 atau Nginx)
1. Clone repository ke server Anda.
2. Pasang dependensi dan lakukan build:
   ```bash
   npm install
   npm run build
   ```
3. Jalankan menggunakan proses manager seperti `pm2`:
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "teknik-industri-hub"
   pm2 save
   ```
4. Arahkan reverse proxy Nginx ke `http://localhost:3000`.

---

### Opsi C: Vercel / Netlify (Deployment Khusus Frontend)
Jika ingin mendeploy khusus bagian frontend tampilan website saja:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
*(Catatan: endpoint `/api/chat` membutuhkan backend server Express aktif atau Vercel Serverless Function jika ingin digunakan di Vercel).*

---

## 📂 Struktur Folder Proyek

```
├── public/                 # Aset statis & logo resmi laboratorium
│   └── assets/
│       ├── aistudio/       # Logo resmi lab (Sispromasi, Prosman, Tekmi, dll.)
│       └── lecturers/      # Foto dosen FRI Telkom University
├── src/                    # Kode sumber frontend
│   ├── assets/             # Gambar & ikon pelengkap
│   ├── components/         # Komponen React (Carousel Lab, Dosen, Fasilitas, dll.)
│   ├── data/               # Data terstruktur (Kurikulum, Lab, Profil Dosen)
│   ├── App.tsx             # Halaman utama aplikasi
│   ├── main.tsx            # Entry point React
│   └── index.css           # Konfigurasi Tailwind CSS
├── server.ts               # Server backend Express & integrasi Gemini API
├── vite.config.ts          # Konfigurasi Vite & Tailwind v4
├── package.json            # Daftar dependensi & script build/start
├── bun.lock                # Lockfile Bun yang sinkron dan valid
├── package-lock.json       # Lockfile NPM yang sinkron dan valid
├── .env.example            # Contoh template konfigurasi environment
└── .gitignore              # Konfigurasi file yang diabaikan Git
```

---

## 🧪 Pemeriksaan Kualitas & Pengujian

- **Linting & Tipe Data**:
  ```bash
  npm run lint
  ```
- **Kompilasi & Build**:
  ```bash
  npm run build
  ```

Kedua perintah di atas dipastikan lolos tanpa error.
