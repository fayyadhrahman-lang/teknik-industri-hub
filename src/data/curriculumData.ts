export interface CourseItem {
  no: number;
  code: string;
  name: string;
  sks: number;
  description?: string;
  category: 'Sains Dasar' | 'Keahlian Rekayasa' | 'Manajemen & Ekonomi' | 'Karakter & Bahasa' | 'Praktikum/Tugas Akhir';
}

export interface SemesterCurriculum {
  semester: number;
  totalSks: number;
  courses: CourseItem[];
}

export const curriculumData: SemesterCurriculum[] = [
  {
    semester: 1,
    totalSks: 18,
    courses: [
      { no: 1, code: 'BAK1BAB1', name: 'Praktikum Fisika Dasar', sks: 1, category: 'Praktikum/Tugas Akhir', description: 'Praktikum laboratorium mandiri untuk menguji prinsip mekanika, termodinamika, dan optik secara eksperimental.' },
      { no: 2, code: 'BAK1DAB2', name: 'Kimia Dasar 1', sks: 2, category: 'Sains Dasar', description: 'Pemahaman konsep dasar struktur atom, tabel periodik, ikatan kimia, stoikiometri, dan kinetika reaksi dalam sistem industri.' },
      { no: 3, code: 'BAK1GAB4', name: 'Fisika Dasar 1', sks: 4, category: 'Sains Dasar', description: 'Mata kuliah inti mekanika benda titik, hukum Newton, gerak rotasi, getaran, gelombang, dan sifat termal zat.' },
      { no: 4, code: 'BAK1HAB4', name: 'Kalkulus 1', sks: 4, category: 'Sains Dasar', description: 'Mempelajari limit, turunan (derivatif), diferensial fungsi tunggal, serta aplikasinya dalam optimasi matematis.' },
      { no: 5, code: 'BAK1FAB2', name: 'Pengantar Teknik Industri', sks: 2, category: 'Keahlian Rekayasa', description: 'Sejarah keilmuan TI, ruang lingkup profesi, pengantar sistem kerja, ergonomi, manajemen rantai pasok, dan metodologi pemecahan masalah.' },
      { no: 6, code: 'BAK1CAB2', name: 'Algoritma dan Pemrograman Komputer', sks: 2, category: 'Keahlian Rekayasa', description: 'Logika pemrograman dasar, algoritma runtunan, percabangan, perulangan, array, dan penulisan skrip terstruktur menggunakan Python.' },
      { no: 7, code: 'UCKXDDDB2', name: 'Literasi Teknologi', sks: 2, category: 'Karakter & Bahasa', description: 'Pemanapan ekosistem digital, literasi data, keamanan siber dasar, cloud computing, dan etika pemanfaatan kecerdasan buatan.' },
      { no: 8, code: 'UCKXFDB1', name: 'Internalisasi Budaya dan Pembentukan Karakter', sks: 1, category: 'Karakter & Bahasa', description: 'Penguatan karakter disiplin, integritas, dan budaya HEI (Harmony, Excellence, Integrity) Universitas Telkom.' }
    ]
  },
  {
    semester: 2,
    totalSks: 20,
    courses: [
      { no: 1, code: 'BAK1KAB2', name: 'Teori Probabilitas', sks: 2, category: 'Sains Dasar', description: 'Konsep ruang sampel, kejadian probabilistik, distribusi diskrit (Binomial, Poisson) dan kontinu (Normal), serta pengenalan estimasi parameter.' },
      { no: 2, code: 'BAK1IAB2', name: 'Kimia Dasar 2', sks: 2, category: 'Sains Dasar', description: 'Lanjutan reaksi kimia organik, polimerisasi, sel elektrokimia, korosi logam, serta aplikasinya pada material teknik industri.' },
      { no: 3, code: 'BAK1NAB4', name: 'Fisika Dasar 2', sks: 4, category: 'Sains Dasar', description: 'Materi muatan listrik, hukum Coulomb, medan magnet, elektromagnetisme, rangkaian arus searah/bolak-balik, serta optika modern.' },
      { no: 4, code: 'BAK1OAB4', name: 'Kalkulus 2', sks: 4, category: 'Sains Dasar', description: 'Prinsip integral fungsi tunggal, teknik pengintegralan, deret tak hingga, serta aplikasi integral dalam menghitung luas dan volume benda putar.' },
      { no: 5, code: 'BAK1LAB3', name: 'Matriks Dan Ruang Vektor', sks: 3, category: 'Sains Dasar', description: 'Teori persamaan linier, eliminasi Gauss-Jordan, determinan, nilai eigen (eigenvalues) dan eigenvektor, serta konsep ruang vektor linier.' },
      { no: 6, code: 'BAK1MAB3', name: 'Menggambar Teknik Dan Praktikum', sks: 3, category: 'Praktikum/Tugas Akhir', description: 'Standarisasi gambar teknik proyeksi ortogonal, gambar potongan, dan toleransi menggunakan CAD (Computer-Aided Design) Autocad/Solidworks.' },
      { no: 7, code: 'BAK1JAB2', name: 'Mekanika Teknik', sks: 2, category: 'Keahlian Rekayasa', description: 'Analisis statika gaya struktur rangka batang (truss), momen inersia, tegangan regangan, dan kekuatan geser material.' }
    ]
  },
  {
    semester: 3,
    totalSks: 19,
    courses: [
      { no: 1, code: 'BAK2CAB3', name: 'Kalkulus 3', sks: 3, category: 'Sains Dasar', description: 'Turunan parsial fungsi multivariabel, kalkulus vektor, integral lipat dua/tiga untuk optimasi fungsi parametrik yang kompleks.' },
      { no: 2, code: 'BAK2BAB2', name: 'Statistika Industri', sks: 2, category: 'Sains Dasar', description: 'Interval kepercayaan, pengujian hipotesis satu/dua populasi, analisis variansi (ANOVA), statistika non-parametrik, dan regresi linier.' },
      { no: 3, code: 'BAK2DAB3', name: 'Material Dan Proses Manufaktur', sks: 3, category: 'Keahlian Rekayasa', description: 'Karakteristik struktur logam, plastik, keramik, komposit, serta metode pembentukan seperti pengecoran, permesinan, pencetakan, dan pengelasan.' },
      { no: 4, code: 'BAK2EAB3', name: 'Penelitian Operasional 1', sks: 3, category: 'Keahlian Rekayasa', description: 'Formulasi model pemrograman linier, penyelesaian grafik, metode Simpleks, konsep dualitas, analisis sensitivitas, dan model transportasi.' },
      { no: 5, code: 'BAK2GAB3', name: 'Perancangan Sistem Kerja Dan Ergonomi', sks: 3, category: 'Keahlian Rekayasa', description: 'Analisis antropometri tubuh, biomekanika kerja statis/dinamis, beban kerja fisiologis, lingkungan fisik kerja (suhu, cahaya, bising), serta studi gerakan mikro.' },
      { no: 6, code: 'BAK2FAB3', name: 'Pengantar Ilmu Ekonomi Dan Ekonomi Teknik', sks: 3, category: 'Manajemen & Ekonomi', description: 'Mempelajari nilai waktu dari uang (time value of money), depresiasi, NPV, IRR, BCR, payback period, dan analisis sensitivitas investasi proyek.' },
      { no: 7, code: 'BAK2AAB2', name: 'Praktikum Teknik Industri 1: Proses Produksi Dan Perancangan Sistem Kerja', sks: 2, category: 'Praktikum/Tugas Akhir', description: 'Praktikum lapangan terpadu mengukur anthropometri pekerja nyata, merancang meja kerja ergonomis, dan mengoperasikan mesin manufaktur konvensional.' }
    ]
  },
  {
    semester: 4,
    totalSks: 19,
    courses: [
      { no: 1, code: 'BAK2NAB3', name: 'Penelitian Operasional 2', sks: 3, category: 'Keahlian Rekayasa', description: 'Pemrograman bilangan bulat (integer programming), teori antrean, rantai Markov, teori keputusan statistik, dan pemrograman dinamis.' },
      { no: 2, code: 'BAK2OAB3', name: 'Pengendalian Dan Penjaminan Mutu', sks: 3, category: 'Keahlian Rekayasa', description: 'Metode penjaminan mutu, bagan kendali variabel/atribut, analisis kapabilitas proses, sampling penerimaan, konsep Six Sigma (DMAIC), dan ISO 9001.' },
      { no: 3, code: 'BAK2JAB2', name: 'Perencanaan Dan Pengendalian Produksi', sks: 2, category: 'Keahlian Rekayasa', description: 'Siklus PPIC: peramalan permintaan (forecasting), perencanaan produksi agregat, MRP (Material Requirement Planning), manajemen persediaan, dan penjadwalan mesin.' },
      { no: 4, code: 'BAK2HAB2', name: 'Pemodelan Sistem', sks: 2, category: 'Keahlian Rekayasa', description: 'Metodologi sistem berpikir, identifikasi batas sistem menggunakan rich picture dan cusal loop diagram, verifikasi serta validasi model konseptual.' },
      { no: 5, code: 'BAK2KAB2', name: 'Perilaku Organisasi', sks: 2, category: 'Manajemen & Ekonomi', description: 'Teori perilaku individu, motivasi kerja, dinamika kelompok, kepemimpinan (leadership), budaya organisasi, serta manajemen konflik korporat.' },
      { no: 6, code: 'BAK2MAB3', name: 'Akuntansi Biaya', sks: 3, category: 'Manajemen & Ekonomi', description: 'Penggolongan biaya bahan baku, biaya tenaga kerja langsung, overhead pabrik, sistem biaya pesanan (job order costing), dan Activity-Based Costing (ABC).' },
      { no: 7, code: 'BAK2LAB2', name: 'Praktikum Teknik Industri 2: Perancangan Sistem Produksi Dan Optimasi Industri', sks: 2, category: 'Praktikum/Tugas Akhir', description: 'Implementasi terpadu program optimasi riset operasi dan penyusunan modul PPIC dengan software optimasi komputer.' },
      { no: 8, code: 'BAK2ICB2', name: 'Pendidikan Pancasila', sks: 2, category: 'Karakter & Bahasa', description: 'Sejarah, nilai luhur, dan implementasi ideologi Pancasila sebagai pilar kehidupan berbangsa dan etika profesi.' }
    ]
  },
  {
    semester: 5,
    totalSks: 18,
    courses: [
      { no: 1, code: 'BAK3GAB2', name: 'Simulasi Komputer', sks: 2, category: 'Keahlian Rekayasa', description: 'Pemodelan simulasi kejadian diskrit (discrete event simulation) untuk sistem layanan dan pabrik menggunakan software simulasi (Arena/FlexSim).' },
      { no: 2, code: 'BAK3AAB2', name: 'Data Analitik', sks: 2, category: 'Keahlian Rekayasa', description: 'Pengantar data science, visualisasi data interaktif, regresi berganda, klasifikasi data, clustering algoritma, menggunakan R atau Python.' },
      { no: 3, code: 'BAK3HAB2', name: 'Sistem Manajemen Organisasi Industri', sks: 2, category: 'Manajemen & Ekonomi', description: 'Fungsi perencanaan, pengorganisasian, penyusunan staf, kepemimpinan, evaluasi kerja operasional perusahaan manufaktur.' },
      { no: 4, code: 'BAK3EAB2', name: 'Praktikum Teknik Industri 3: Pengembangan Produk dan Simulasi Industri', sks: 2, category: 'Praktikum/Tugas Akhir', description: 'Praktikum kolaboratif membuat prototipe fisik produk baru serta memodelkan simulasi antrean 3D pabrik.' },
      { no: 5, code: 'BAK3DAB2', name: 'Pengembangan Produk', sks: 2, category: 'Keahlian Rekayasa', description: 'Tahapan perancangan produk (QFD), penyusunan spesifikasi teknis, konsep arsitektur produk, serta rekayasa nilai (value engineering).' },
      { no: 6, code: 'BAK3CCB2', name: 'Pendidikan Kewarganegaraan', sks: 2, category: 'Karakter & Bahasa', description: 'Membahas ketatanegaraan, hak asasi manusia, geopolitik, wawasan nusantara, serta ketahanan nasional RI.' },
      { no: 7, code: 'BAK3IAB2', name: 'Sistem Produksi dan Otomasi Industri', sks: 2, category: 'Keahlian Rekayasa', description: 'Konsep manufaktur fleksibel (FMS), pemrograman kontrol logis (PLC), pneumatik, hidrolik, sensor konveyor, serta integrasi IoT industri.' },
      { no: 8, code: 'UCKXBDB2', name: 'Kewirausahaan', sks: 2, category: 'Manajemen & Ekonomi', description: 'Perancangan rencana bisnis (business plan), analisis kelayakan model bisnis Lean Canvas, serta strategi pendanaan startup.' },
      { no: 9, code: 'BAK3FAB2', name: 'Rekayasa Proses Bisnis', sks: 2, category: 'Keahlian Rekayasa', description: 'Pemodelan alur kerja bisnis menggunakan Business Process Model and Notation (BPMN), identifikasi redundansi, serta rekayasa ulang (BPR).' }
    ]
  },
  {
    semester: 6,
    totalSks: 18,
    courses: [
      { no: 1, code: 'BAK3QAB3', name: 'Kesehatan dan Keselamatan Kerja & Lingkungan Industri', sks: 3, category: 'Keahlian Rekayasa', description: 'Prinsip K3 industri, identifikasi bahaya (HAZOP/FMEA), ergonomi lingkungan kerja makro, analisis polusi limbah industri, dan sertifikasi SMK3.' },
      { no: 2, code: 'BAKMAB2', name: 'Manajemen Rantai Pasok', sks: 2, category: 'Keahlian Rekayasa', description: 'Manajemen rantai pasok global (SCM), strategi sourcing, manajemen persediaan terdistribusi, koordinasi rantai pasok, dan mitigasi risiko kelangkaan.' },
      { no: 3, code: 'BAK3PAB3', name: 'Analisis Perancangan Sistem Informasi dan Basis Data', sks: 3, category: 'Keahlian Rekayasa', description: 'Perancangan sistem informasi perusahaan, Entity Relationship Diagram (ERD), normalisasi tabel basis data, dan SQL query terintegrasi.' },
      { no: 4, code: 'BAK3OAB2', name: 'Praktikum Teknik Industri 4: Perancangan Bisnis dan Fasilitas Industri', sks: 2, category: 'Praktikum/Tugas Akhir', description: 'Uji klinis perancangan tata letak pabrik menggunakan algoritma CRAFT/CORELAP dan penyusunan kelayakan bisnis.' },
      { no: 5, code: 'BAK3KAB2', name: 'Analisis dan Perancangan Perusahaan', sks: 2, category: 'Manajemen & Ekonomi', description: 'Penyusunan studi kelayakan bisnis komprehensif, menguji kelayakan pasar, kesiapan operasional teknis, serta kelayakan ekonomi makro.' },
      { no: 6, code: 'BAK3NAB2', name: 'Perancangan Tata Letak Fasilitas', sks: 2, category: 'Keahlian Rekayasa', description: 'Metodologi tata letak pabrik, minimasi ongkos material handling (OMH), perancangan diagram alir material, serta perancangan luas area departemen.' },
      { no: 7, code: 'BAK3JCB2', name: 'Agama', sks: 2, category: 'Karakter & Bahasa', description: 'Penguatan nilai spritual keagamaan, toleransi umat beragama, moralitas, dan etika berperilaku sosial.' },
      { no: 8, code: 'UCKXADB2', name: 'Bahasa Inggris', sks: 2, category: 'Karakter & Bahasa', description: 'Penguasaan komunikasi verbal bisnis, negosiasi profesional, serta persiapan menghadapi ujian TOEFL/EPrT standar industri.' }
    ]
  },
  {
    semester: 7,
    totalSks: 20,
    courses: [
      { no: 1, code: 'BAK4EAB2', name: 'Penyusunan Proposal Ilmiah', sks: 2, category: 'Keahlian Rekayasa', description: 'Metodologi penelitian ilmiah, penelusuran literatur Scopus/IEEE, penyusunan rumusan masalah, dan teknik penulisan daftar pustaka.' },
      { no: 2, code: 'BAK4HAB4', name: 'Perancangan Sistem Terpadu', sks: 4, category: 'Keahlian Rekayasa', description: 'Mata kuliah integrasi utama (Capstone) merancang solusi menyeluruh bagi permasalahan manufaktur atau layanan industri berskala besar.' },
      { no: 3, code: 'UBKXCCB2', name: 'Bahasa Indonesia', sks: 2, category: 'Karakter & Bahasa', description: 'Sintaksis penulisan karya ilmiah berbahasa Indonesia yang baik, benar, lugas, dan baku.' },
      { no: 4, code: 'BAK4CAB2', name: 'Kerja Praktek dan Pengabdian Masyarakat', sks: 2, category: 'Praktikum/Tugas Akhir', description: 'Magang kerja mandiri di industri riil selama minimal 1-2 bulan guna mempraktikkan teori rekayasa langsung di lapangan.' },
      { no: 5, code: 'BAK4DAB2', name: 'Manajemen Proyek Industri', sks: 2, category: 'Manajemen & Ekonomi', description: 'Siklus manajemen proyek, analisis CPM/PERT, optimasi durasi (crashing), penganggaran biaya proyek, serta alokasi sumber daya manusia.' },
      { no: 6, code: 'BAK4BAC3', name: 'Enterprise Resource Planning (ERP)', sks: 2, category: 'Keahlian Rekayasa', description: 'Konsep dasar software ERP terintegrasi, konfigurasi modul Sales/Purchase/Inventory menggunakan aplikasi industri kelas dunia (SAP).' },
      { no: 7, code: 'BAK4FBB3', name: 'MK Pilihan 1', sks: 3, category: 'Keahlian Rekayasa', description: 'Mata kuliah elektif pendalaman pertama disesuaikan dengan topik spesialisasi peminatan tugas akhir mahasiswa.' },
      { no: 8, code: 'BAK4GBB3', name: 'MK Pilihan 2', sks: 3, category: 'Keahlian Rekayasa', description: 'Mata kuliah elektif pendalaman kedua disesuaikan dengan topik spesialisasi peminatan tugas akhir mahasiswa.' }
    ]
  },
  {
    semester: 8,
    totalSks: 13,
    courses: [
      { no: 1, code: 'BAK4LAB4', name: 'Tugas Akhir', sks: 4, category: 'Praktikum/Tugas Akhir', description: 'Penyusunan karya tulis ilmiah mandiri (Skripsi) memecahkan problematika rekayasa industri orisinal melalui bimbingan komprehensif.' },
      { no: 2, code: 'BAK4IBA3', name: 'MK Pilihan 3', sks: 3, category: 'Keahlian Rekayasa', description: 'Mata kuliah elektif pendalaman ketiga disesuaikan dengan topik spesialisasi peminatan tugas akhir mahasiswa.' },
      { no: 3, code: 'BAK4JBB3', name: 'MK Pilihan 4', sks: 3, category: 'Keahlian Rekayasa', description: 'Mata kuliah elektif pendalaman keempat disesuaikan dengan topik spesialisasi peminatan tugas akhir mahasiswa.' },
      { no: 4, code: 'BAK4KBB3', name: 'Mk Pilihan 5', sks: 3, category: 'Keahlian Rekayasa', description: 'Mata kuliah elektif pendalaman kelima disesuaikan dengan topik spesialisasi peminatan tugas akhir mahasiswa.' }
    ]
  }
];
