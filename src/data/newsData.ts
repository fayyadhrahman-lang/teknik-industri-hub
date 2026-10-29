export interface NewsEventItem {
  id: string;
  type: 'berita' | 'acara';
  title: string;
  slug: string;
  date: string;
  authorOrSpeaker: string;
  category: string;
  summary: string;
  content: string;
  location?: string;
  time?: string;
  badge: string;
  readTime?: string;
  image: string;
  featured?: boolean;
}

export const newsEventsData: NewsEventItem[] = [
  {
    id: 'news-1',
    type: 'berita',
    title: 'S1 Teknik Industri Telkom University Raih Akreditasi Internasional IABEE Penuh',
    slug: 'akreditasi-internasional-iabee-telkom-university',
    date: '02 Oktober 2026',
    authorOrSpeaker: 'Tim Humas Prodi S1 TI',
    category: 'Prestasi & Akreditasi',
    badge: 'Akreditasi Unggul',
    readTime: '4 menit baca',
    image: '/assets/aistudio/rektorat_54c1b252.jpeg',
    featured: true,
    summary: 'Program Studi S1 Teknik Industri resmi mempertahankan akreditasi internasional IABEE (Indonesian Accreditation Board for Engineering Education) yang diakui Washington Accord secara global.',
    content: 'Pencapaian akreditasi internasional ini membuktikan komitmen Program Studi S1 Teknik Industri Telkom University dalam menyelenggarakan pendidikan berstandar mutu dunia berbasis Outcome-Based Education (OBE). Lulusan diakui secara global setara dengan insinyur profesional internasional di negara-negara anggota Washington Accord seperti Amerika Serikat, Inggris, Australia, dan Jepang.'
  },
  {
    id: 'event-1',
    type: 'acara',
    title: 'Industrial Engineering Grand Seminar 2026: AI & Smart Manufacturing in Industry 5.0',
    slug: 'industrial-engineering-grand-seminar-2026',
    date: '28 Oktober 2026',
    time: '09:00 - 15:30 WIB',
    location: 'Auditorium Damar, Gedung Kuliah Bersama & Hybrid Zoom',
    authorOrSpeaker: 'Keynote: Ir. Satrio Wicaksono, M.Sc. (VP Smart Factory PT Toyota Motor)',
    category: 'Seminar Nasional',
    badge: 'Pendaftaran Terbuka',
    image: '/src/assets/images/students_group_project_1790926271150.jpg',
    featured: true,
    summary: 'Seminar tahunan berskala nasional menghadirkan praktisi industri terkemuka membahas integrasi Artificial Intelligence, Lean Automation, dan Cyber-Physical System di era Industri 5.0.',
    content: 'Acara tahunan bergengsi HMTI dan Prodi S1 Teknik Industri Telkom University menghadirkan para pakar dari Toyota, Accenture, dan SAP untuk membedah tantangan transformasi rantai pasok digital dan implementasi cobot di lini manufaktur modern. Mahasiswa dan peserta umum akan mendapatkan e-certificate dan doorprize.'
  },
  {
    id: 'news-2',
    type: 'berita',
    title: 'Kolaborasi Riset Laboratorium ESE dengan Mitra Industri Multinasional SAP Indonesia',
    slug: 'kolaborasi-riset-lab-ese-sap',
    date: '24 September 2026',
    authorOrSpeaker: 'Fahmy Habib Hasanudin, S.T., M.T.',
    category: 'Riset & Industri',
    badge: 'Kemitraan Industri',
    readTime: '3 menit baca',
    image: '/src/assets/images/hero_industrial_engineering_telkom_1790926241598.jpg',
    featured: false,
    summary: 'Enterprise System Engineering Laboratory memperkuat kurikulum praktikum dengan sertifikasi SAP S/4HANA terkini untuk meningkatkan serapan lulusan di level konsultan korporasi.',
    content: 'Dalam upaya mempercepat kesiapan karir mahasiswa, Laboratorium ESE menjalin kerjasama strategis dengan SAP University Alliance. Sebanyak 150 mahasiswa aktif semester 6 telah tersertifikasi modul dasar proses bisnis SAP dan siap bersaing di bursa kerja konsultan teknologi nasional dan regional.'
  },
  {
    id: 'event-2',
    type: 'acara',
    title: 'Workshop Sertifikasi Pengukuran Kerja & Biomekanika Laboratorium WSDA',
    slug: 'workshop-biomekanika-wsda-2026',
    date: '12 November 2026',
    time: '13:00 - 17:00 WIB',
    location: 'Work System Design & Analysis Lab, Gedung Cacuk Sudarijanto',
    authorOrSpeaker: 'Instruktur: Dr. Atya Nur Aisha, S.T., M.T. & Tim Asisten WSDA',
    category: 'Pelatihan Kompetensi',
    badge: 'Kuota Terbatas (40 Org)',
    image: '/src/assets/images/lab_ergonomics_simulation_1790926257371.jpg',
    featured: false,
    summary: 'Pelatihan praktis penggunaan instrumen antropometri digital, surface EMG, dan analisis postur kerja dengan metode RULA/REBA bagi mahasiswa tingkat akhir.',
    content: 'Workshop intensif 1 hari ini dirancang untuk mahasiswa yang sedang mengerjakan tugas akhir di bidang Ergonomi dan Keselamatan Kerja (K3). Peserta akan mempraktikkan langsung pengukuran beban kardiovaskular dan pengoperasian software ergonomic modeling 3D.'
  },
  {
    id: 'news-3',
    type: 'berita',
    title: 'Mahasiswa Teknik Industri Boyong Juara 1 National Industrial Competition 2026',
    slug: 'juara-1-national-industrial-competition',
    date: '15 September 2026',
    authorOrSpeaker: 'Divisi Prestasi HMTI',
    category: 'Prestasi Mahasiswa',
    badge: 'Juara 1 Nasional',
    readTime: '3 menit baca',
    image: '/src/assets/images/students_group_project_1790926271150.jpg',
    featured: false,
    summary: 'Tim "Telkom Optimizers" sukses merancang model simulasi antrean logistik pelabuhan terintegrasi yang memangkas waktu dwell time kapal kontainer hingga 34%.',
    content: 'Prestasi gemilang ditorehkan mahasiswa angkatan 2023 dalam ajang kompetisi rekayasa industri tingkat nasional di Surabaya. Melalui bimbingan dosen riset operasi, tim berhasil menyisihkan 48 tim dari universitas negeri dan swasta se-Indonesia.'
  },
  {
    id: 'event-3',
    type: 'acara',
    title: 'Sosialisasi & Pameran Capstone Design Project Semester Ganjil 2026/2027',
    slug: 'expo-capstone-design-project-2026',
    date: '05 Desember 2026',
    time: '08:30 - 16:00 WIB',
    location: 'Selasar Gedung Tokong Nanas & Live Virtual Expo',
    authorOrSpeaker: 'Koordinator Capstone: Tiara Verita Yastica, S.T., M.T.',
    category: 'Pameran Akademik',
    badge: 'Terbuka untuk Umum',
    image: '/assets/aistudio/rektorat_54c1b252.jpeg',
    featured: false,
    summary: 'Pameran karya rancangan sistem industri terintegrasi hasil kolaborasi mahasiswa semester akhir bersama industri mitra manufaktur, ritel, dan e-commerce.',
    content: 'Capstone Design Expo memamerkan lebih dari 30 prototipe inovatif, mulai dari rancangan stasiun kerja ergonomis ramah disabilitas, sistem routing logistik berbasis heuristik cerdas, hingga miniatur jalur konveyor sortir otomatis.'
  }
];
