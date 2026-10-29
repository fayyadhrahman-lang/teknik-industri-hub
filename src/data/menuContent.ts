export interface MenuItemData {
  title: string;
  subtitle?: string;
  category: string;
  content: string;
  bullets?: string[];
  meta?: { label: string; value: string }[];
}

export const menuContentMap: Record<string, MenuItemData> = {
  // ABOUT US
  'sejarah': {
    title: 'Sejarah S1 Teknik Industri',
    subtitle: 'Perjalanan panjang pelopor pendidikan teknik industri berbasis teknologi informasi.',
    category: 'About Us',
    content: 'Program Studi S1 Teknik Industri Telkom University didirikan pada tanggal 28 September 1990 di bawah naungan Sekolah Tinggi Teknologi Telkom (STT Telkom). Sebagai institusi perintis yang menggabungkan keilmuan teknik industri dengan teknologi informasi dan komunikasi (TIK), program studi ini terus tumbuh pesat seiring bertransformasi menjadi Universitas Telkom pada tahun 2013. Selama lebih dari 3 dekade, kami telah meluluskan ribuan profesional yang berkontribusi aktif di berbagai industri manufaktur, logistik, konsultansi bisnis, serta sektor teknologi nasional dan global.',
    bullets: [
      '1990: Didirikan di bawah Sekolah Tinggi Teknologi Telkom (STT Telkom).',
      '2002: Memperoleh Akreditasi A pertama kali dari BAN-PT.',
      '2013: Bergabung dalam pembentukan Universitas Telkom di bawah Fakultas Rekayasa Industri.',
      '2018: Mendapatkan akreditasi internasional penuh dari IABEE (Washington Accord).',
      '2021: Meraih peringkat Akreditasi UNGGUL (peringkat tertinggi di Indonesia).'
    ],
    meta: [
      { label: 'Tahun Berdiri', value: '1990' },
      { label: 'Jumlah Alumni', value: '8,500+' },
      { label: 'Status Akreditasi', value: 'UNGGUL' }
    ]
  },
  'visi-misi': {
    title: 'Visi & Misi Departemen',
    subtitle: 'Menatap masa depan sebagai kiblat riset dan pendidikan rekayasa industri.',
    category: 'About Us',
    content: 'Kami berkomitmen untuk menyediakan lingkungan akademik yang dinamis, memupuk inovasi, dan menghasilkan kontribusi nyata bagi pembangunan bangsa.',
    bullets: [
      'VISI: Menjadi Program Studi S1 Teknik Industri berkelas dunia yang berperan aktif dalam pengembangan ilmu pengetahuan dan seni berbasis teknologi informasi untuk memecahkan tantangan industri global.',
      'MISI 1: Menyelenggarakan pendidikan Teknik Industri berstandar internasional yang relevan dengan kebutuhan industri digital masa kini.',
      'MISI 2: Mengembangkan riset mutakhir dalam optimasi sistem terintegrasi, rantai pasok cerdas, ergonomi kognitif, dan cyber-physical systems.',
      'MISI 3: Melaksanakan pengabdian masyarakat guna memecahkan problematika operasional pada UMKM maupun industri manufaktur nasional.',
      'MISI 4: Menjalin kemitraan strategis dengan industri global dan lembaga akademik dunia guna mempercepat transfer pengetahuan.'
    ]
  },
  'profile': {
    title: 'Profil Program Studi',
    subtitle: 'Sekilas tentang S1 Teknik Industri Universitas Telkom.',
    category: 'About Us',
    content: 'Program Studi S1 Teknik Industri merupakan bagian dari Fakultas Rekayasa Industri yang memfokuskan pendidikannya pada perancangan, peningkatan, dan instalasi sistem terintegrasi yang terdiri atas manusia, material, informasi, peralatan, dan energi. Karakter khas kurikulum kami terletak pada penekanan yang kuat pada implementasi teknologi informasi dan komunikasi (TIK) sebagai enabler utama untuk mencapai keunggulan operasional di industri modern.',
    bullets: [
      'Gelar Kelulusan: Sarjana Teknik (S.T.)',
      'Masa Studi Efektif: 3.5 - 4 Tahun (8 Semester)',
      'Total Beban Kuliah: 144 SKS (Sistem Kredit Semester)',
      'Bahasa Pengantar: Bahasa Indonesia (Reguler) & Bahasa Inggris (International Class)'
    ]
  },
  'dosen-s1-teknik-industri': {
    title: 'Dosen & Tenaga Pendidik',
    subtitle: 'Bimbingan langsung dari para praktisi dan doktor lulusan universitas top dunia.',
    category: 'About Us',
    content: 'Staf pengajar kami terdiri atas para profesional berpengalaman yang aktif dalam proyek riset nasional dan internasional, memiliki kualifikasi sertifikasi industri (SAP, Lean Six Sigma, CSCP), serta berdedikasi tinggi terhadap pengembangan mahasiswa.',
    bullets: [
      'Rino Andias Anugraha, S.T., M.M., Ph.D. (RNO) — Spesialisasi: Manajemen Teknologi & Riset Operasional Lanjut',
      'Tiara Verita Yastica, S.T., M.T. (TVY) — Spesialisasi: Pemodelan Simulasi Kejadian Diskrit (DES)',
      'Ayudita Oktafiani, S.T., M.Sc. (OKF) — Spesialisasi: Rekayasa Manufaktur & Proses Termal Material',
      'Agus Kusnayat, S.T., M.T. (AKY) — Spesialisasi: Gambar Teknik CAD & Geometrical Dimensioning & Tolerancing (GD&T)',
      'Fahmy Habib Hasanudin, S.T., M.T. (FHB) — Spesialisasi: Arsitektur Enterprise & Solusi Enterprise Resource Planning (ERP SAP)'
    ]
  },
  'struktur-organisasi': {
    title: 'Struktur Organisasi Prodi',
    subtitle: 'Manajemen solid di balik kelancaran akademik S1 Teknik Industri.',
    category: 'About Us',
    content: 'S1 Teknik Industri dipimpin oleh jajaran akademisi berpengalaman yang fokus menjaga kualitas pengajaran, kenyamanan fasilitas praktikum, serta kemitraan eksternal.',
    bullets: [
      'Ketua Program Studi (Kaprodi): Rino Andias Anugraha, S.T., M.M., Ph.D.',
      'Sekretaris Program Studi: Tiara Verita Yastica, S.T., M.T.',
      'Sekretaris Internasional Program Studi: Ayudita Oktafiani, S.T., M.Sc.',
      'Kepala Laboratorium Gambar Teknik (CAD): Agus Kusnayat, S.T., M.T.',
      'Kepala Laboratorium Enterprise System Engineering (ESE): Fahmy Habib Hasanudin, S.T., M.T.'
    ]
  },
  'tur-kampus': {
    title: 'Virtual Tur Kampus',
    subtitle: 'Eksplorasi infrastruktur modern tempat lahirnya para insinyur handal.',
    category: 'About Us',
    content: 'Program studi kami terpusat di kawasan kampus utama Telkom University, Bandung, yang asri dan hijau. Mahasiswa menikmati berbagai ruang kuliah multimedia terintegrasi, teater kuliah umum, perpustakaan modern Open Library, serta gedung laboratorium 10 lantai Tokong Nanas yang ikonik.',
    bullets: [
      'Gedung Tokong Nanas (Gedung 10): Pusat kegiatan administrasi fakultas dan ruang laboratorium utama.',
      'Gedung Kuliah Umum (GKU): Ruang kuliah besar berkapasitas tinggi dengan AC, proyektor, dan smartboard.',
      'Open Library Telkom University: Perpustakaan digital terlengkap dengan akses ke jurnal ilmiah Scopus dan IEEE.',
      'Kawasan Hijau (Green Campus): Area teduh untuk belajar mandiri maupun kolaborasi proyek kelompok.'
    ]
  },

  // AKADEMIK
  'program-educational-objective-(peo)': {
    title: 'Program Educational Objectives (PEO)',
    subtitle: 'Tujuan jangka panjang lulusan Teknik Industri setelah memasuki dunia profesi.',
    category: 'Akademik',
    content: 'Dalam waktu 3 hingga 5 tahun setelah kelulusan, alumni S1 Teknik Industri Telkom University ditargetkan memiliki karakter profesional sebagai berikut:',
    bullets: [
      'PEO-1: Insinyur yang sukses menerapkan ilmu teknik industri untuk merancang, memperbaiki, dan menginstalasi sistem terintegrasi yang kompleks di lingkungan digital.',
      'PEO-2: Pemimpin yang etis, komunikatif, mampu bekerja dalam tim multidisiplin, serta memiliki jiwa kewirausahaan (entrepreneurship).',
      'PEO-3: Profesional yang berkomitmen terhadap pembelajaran sepanjang hayat (life-long learning) dan adaptif terhadap kemajuan teknologi global.'
    ]
  },
  'program-learning-outcome-(plo)': {
    title: 'Program Learning Outcomes (PLO)',
    subtitle: 'Kompetensi lulusan yang terstandarisasi secara internasional oleh Washington Accord.',
    category: 'Akademik',
    content: 'Saat kelulusan, mahasiswa S1 Teknik Industri Telkom University menguasai 12 poin kemampuan standar rekayasa dunia:',
    bullets: [
      'PLO-1 (Engineering Knowledge): Menerapkan pengetahuan matematika, sains, dan prinsip rekayasa industri.',
      'PLO-2 (Problem Analysis): Mengidentifikasi, memformulasikan, dan menganalisis masalah rekayasa industri yang kompleks.',
      'PLO-3 (Design/Development): Mendesain solusi sistem terintegrasi dengan mempertimbangkan K3, budaya, sosial, dan lingkungan.',
      'PLO-4 (Investigation): Melakukan investigasi dan eksperimen untuk menarik kesimpulan yang valid.',
      'PLO-5 (Modern Tool Usage): Memanfaatkan metode, keterampilan, dan perangkat lunak modern (seperti SAP ERP, Arena Simulation, R/Python).',
      'PLO-6 (The Engineer and Society): Bertanggung jawab atas dampak praktik rekayasa terhadap aspek hukum, sosial, dan budaya.',
      'PLO-7 (Environment & Sustainability): Memahami konsep pembangunan berkelanjutan (green industry).'
    ]
  },
  'kurikulum': {
    title: 'Struktur Kurikulum Akademik',
    subtitle: 'Kurikulum berbasis Outcome-Based Education (OBE) adaptif industri 4.0.',
    category: 'Akademik',
    content: 'Kurikulum kami didesain agar mahasiswa menguasai teori dasar teknik industri sekaligus terampil dalam teknologi informasi. Terdiri dari total 144 SKS yang terbagi rata dalam 8 semester dengan beban optimal agar mahasiswa dapat lulus tepat waktu (3,5 hingga 4 tahun).',
    bullets: [
      'Mata Kuliah Dasar Rekayasa (Kalkulus, Fisika, Kimia Dasar, Algoritma Pemrograman).',
      'Mata Kuliah Inti Teknik Industri (Riset Operasi, Ergonomi, Sistem Produksi, Manajemen Rantai Pasok).',
      'Mata Kuliah Keahlian Manajemen (Ekonomi Teknik, Manajemen Keuangan Industri, Organisasi Perusahaan).',
      'Mata Kuliah Spesialisasi / Pilihan (Analisis Data, ERP SAP, Otomasi Robotik, K3 Lanjut).'
    ]
  },
  'registrasi-mata-kuliah': {
    title: 'Pedoman Registrasi Mata Kuliah',
    subtitle: 'Sistem pengisian KRS online yang mudah dan efisien melalui portal SAKTI.',
    category: 'Akademik',
    content: 'Mahasiswa menyusun rencana studi setiap semester melalui aplikasi SAKTI Telkom University. Beban SKS yang dapat diambil ditentukan secara objektif berdasarkan Indeks Prestasi Kumulatif (IPK) semester sebelumnya guna memastikan kemajuan belajar yang optimal.',
    bullets: [
      'IP semester >= 3.00: Berhak mengambil beban maksimal hingga 24 SKS.',
      'IP semester 2.00 - 2.99: Berhak mengambil beban hingga 20 - 22 SKS.',
      'IP semester < 2.00: Dibatasi maksimal mengambil 18 SKS untuk perbaikan mata kuliah.',
      'Konsultasi Wajib: Setiap pengisian KRS wajib disetujui secara digital oleh Dosen Wali Akademik.'
    ]
  },
  'capstone': {
    title: 'Senior Capstone Design Project',
    subtitle: 'Tantangan integrasi komprehensif sebagai pembuktian insinyur profesional.',
    category: 'Akademik',
    content: 'Capstone Project adalah mata kuliah puncak (capstone) di semester 7, di mana mahasiswa bekerja dalam kelompok lintas disiplin untuk memecahkan masalah industri riil. Mahasiswa ditantang menerapkan seluruh keilmuan teknik industri—mulai dari riset pasar, desain stasiun kerja, optimasi rantai pasok, hingga analisis kelayakan finansial.',
    bullets: [
      'Proyek Riil: Berkolaborasi langsung dengan mitra perusahaan manufaktur atau logistik nasional.',
      'Kriteria Penilaian: Kelayakan desain teknis, kepatuhan K3, dampak lingkungan, dan keekonomian.',
      'Output Utama: Laporan rancangan teknik terintegrasi, purwarupa fisik/digital, dan poster pameran ilmiah.'
    ]
  },
  'ijazah-&-transkip': {
    title: 'Layanan Ijazah & Transkrip Akademik',
    subtitle: 'Penerbitan dokumen kelulusan berstandar nasional dan global.',
    category: 'Akademik',
    content: 'Lulusan menerima Ijazah resmi, Transkrip Nilai bilingual (Indonesia-Inggris), serta SKPI (Surat Keterangan Pendamping Ijazah) yang mendokumentasikan sertifikasi profesional (seperti SAP ERP Consultant) dan kegiatan kemahasiswaan selama kuliah.',
    bullets: [
      'Sertifikasi SKPI: Bukti kompetensi sertifikasi SAP, bahasa Inggris (EPrT), dan kepemimpinan.',
      'Verifikasi Online: Ijazah terdaftar secara resmi di PDDikti Kemendikbudristek RI.',
      'Pengambilan Dokumen: Dapat diurus langsung di layanan satu pintu Direktorat Akademik.'
    ]
  },
  'international-class': {
    title: 'Program Kelas Internasional',
    subtitle: 'Membuka gerbang karir global dengan pengantar bahasa Inggris penuh.',
    category: 'Akademik',
    content: 'Program Kelas Internasional S1 Teknik Industri menawarkan kurikulum yang sepenuhnya diajarkan dalam bahasa Inggris. Mahasiswa dipersiapkan untuk lingkungan kerja multinasional melalui program wajib internasional (International Mobility), seperti kuliah musim panas, pertukaran pelajar, atau program gelar ganda (Dual Degree).',
    bullets: [
      'Mitra Dual Degree: Universiti Teknologi Malaysia (UTM), Kumamoto University (Jepang), Inha University (Korea).',
      'Lingkungan Belajar: Kelas interaktif multibudaya dengan dosen tamu internasional.',
      'Persyaratan Masuk: Skor TOEFL/EPrT minimal 500 dan wawancara akademik.'
    ]
  },
  'pedoman-akademik': {
    title: 'Buku Pedoman Akademik',
    subtitle: 'Panduan tata tertib dan aturan perkuliahan S1 Teknik Industri.',
    category: 'Akademik',
    content: 'Buku pedoman ini wajib dibaca dan dipahami oleh seluruh mahasiswa aktif. Mengatur tentang batas masa studi, sistem evaluasi kelulusan, kriteria kelulusan predikat (Cumlaude), hingga aturan etika berpakaian dan perilaku di lingkungan kampus.',
    bullets: [
      'Batas Evaluasi 2 Tahun Pertama: Wajib mengumpulkan minimal 36 SKS tanpa nilai E.',
      'Batas Masa Studi Maksimal: 14 semester (7 tahun akademik).',
      'Predikat Kelulusan: Dengan Pujian (Cumlaude) jika IPK >= 3.51 tanpa ada nilai mata kuliah mengulang.'
    ]
  },
  'mbkm-&-kedaireka': {
    title: 'Program MBKM & Kedaireka',
    subtitle: 'Belajar di luar kelas dengan pengakuan hingga 20 SKS per semester.',
    category: 'Akademik',
    content: 'Kami mendukung penuh program Merdeka Belajar Kampus Merdeka (MBKM) yang diinisiasi oleh pemerintah Indonesia. Mahasiswa semester 5 ke atas dapat mengikuti magang bersertifikat, studi independen, atau proyek kemanusiaan yang akan dikonversi langsung ke mata kuliah wajib.',
    bullets: [
      'Magang Industri Bersertifikat (MSIB): Di perusahaan terkemuka seperti Telkom Indonesia, PT KAI, Bio Farma, dan Shopee.',
      'Studi Independen Bersertifikat: Pembelajaran teknologi lanjut seperti AI, Cloud Computing, dan Enterprise Solution.',
      'Kedaireka Riset Terapan: Kolaborasi riset dosen dan mahasiswa dengan pendanaan langsung dari industri.'
    ]
  },
  'kalender-akademik': {
    title: 'Kalender Akademik Terintegrasi',
    subtitle: 'Peta waktu kegiatan perkuliahan, ujian, dan pengisian nilai.',
    category: 'Akademik',
    content: 'Kalender akademik menyajikan jadwal detail kegiatan perkuliahan selama satu tahun ajaran penuh yang terbagi atas Semester Ganjil (September - Januari) dan Semester Genap (Februari - Juli).',
    bullets: [
      'Perkuliahan Efektif: 14 minggu tatap muka per semester.',
      'Ujian Tengah Semester (UTS): Berlangsung pada minggu ke-8.',
      'Ujian Akhir Semester (UAS): Berlangsung pada minggu ke-16.'
    ]
  },
  'tugas-akhir': {
    title: 'Panduan Tugas Akhir / Skripsi',
    subtitle: 'Tahapan akhir penyusunan karya ilmiah orisinal lulusan Teknik Industri.',
    category: 'Akademik',
    content: 'Tugas Akhir (6 SKS) merupakan pembuktian akhir kemampuan mahasiswa dalam memecahkan masalah industri nyata secara metodologis. Mahasiswa dibimbing oleh dua orang dosen pembimbing ahli di bidangnya masing-masing.',
    bullets: [
      'Tahap 1: Pengajuan proposal penelitian dan penentuan dosen pembimbing.',
      'Tahap 2: Seminar Proposal (Sempro) untuk menguji kesiapan metodologi.',
      'Tahap 3: Penelitian lapangan, pengolahan data, simulasi, dan penulisan draf skripsi.',
      'Tahap 4: Sidang Sarjana Akhir di hadapan 3 orang dosen penguji.'
    ]
  },

  // CAMPUS LIFE
  'fasilitas-prodi': {
    title: 'Fasilitas Program Studi — Laboratorium WSDA',
    subtitle: 'Fasilitas riset dan praktikum Work System Design and Analysis Laboratory terintegrasi.',
    category: 'Campus Life',
    content: 'Program Studi S1 Teknik Industri Telkom University menyediakan sarana laboratorium dan ruang riset berstandar internasional. Salah satu fasilitas utama kami adalah Work System Design and Analysis Laboratory (WSDA) yang dilengkapi peralatan biomekanika, antropometri, serta stasiun kerja modular untuk pengujian sistem kerja terpadu.',
    bullets: [
      'Kursi Antropometri & Alat Ukur Fisik: Pengukuran dimensi tubuh tenaga kerja secara presisi untuk perancangan stasiun kerja ergonomis.',
      'Instrumen Fisiologi Kerja (Ergometer & Treadmill): Mengukur beban kardiovaskular, konsumsi energi metabolik, dan tingkat kelelahan fisik.',
      'Meja Kerja Modular Perakitan (Assembly Workstation): Praktikum lini kerja, penyeimbangan beban tugas, dan tata letak operasional (layout praktikum).',
      'Instrumen Evaluasi Lingkungan Fisik & Beban Mental: Dilengkapi Polar Heart Rate Sensor, Lux Meter, Sound Level Meter, dan kuesioner beban kognitif NASA-TLX.',
      'Software Analisis Postur Kerja Digital: Dukungan komputasi perangkat lunak RULA, REBA, dan OWAS untuk pencegahan cedera muskuloskeletal.'
    ]
  },
  'nomor-layanan': {
    title: 'Nomor Layanan & Helpdesk',
    subtitle: 'Respons cepat untuk kebutuhan administrasi dan konsultasi Anda.',
    category: 'Campus Life',
    content: 'Kami menyediakan saluran komunikasi langsung satu pintu bagi mahasiswa, orang tua, maupun pihak eksternal untuk berinteraksi dengan administrasi prodi.',
    bullets: [
      'Hotline Layanan Akademik (WA): +62 811-2300-4321',
      'Surel Resmi Administrasi: industrial-engineering@telkomuniversity.ac.id',
      'Layanan Pengaduan Mahasiswa: Melalui sistem terpadu i-Gracias Telkom.'
    ]
  },
  'asrama-telkom-university': {
    title: 'Fasilitas Asrama Telkom University',
    subtitle: 'Kawasan hunian terpadu mahasiswa tahun pertama (dormitory.telkomuniversity.ac.id).',
    category: 'Campus Life',
    content: 'Seluruh mahasiswa baru Universitas Telkom diwajibkan tinggal di asrama kampus selama satu tahun pertama. Untuk kejelasan informasi mengenai pendaftaran kamar, biaya, jadwal check-in/out, fasilitas hunian, serta tata tertib asrama, silakan langsung mengunjungi website resmi asrama di https://dormitory.telkomuniversity.ac.id/.',
    bullets: [
      'Website Resmi: https://dormitory.telkomuniversity.ac.id/ (Pusat pendaftaran & informasi hunian asrama resmi).',
      'Infrastruktur Lengkap: Kamar mandi dalam, kasur, lemari pakaian, meja belajar, internet nirkabel (Wi-Fi).',
      'Keamanan 24 Jam: Pengawas asrama (Senior Resident), pos satpam, dan akses kartu RFID.',
      'Lokasi Strategis: Hanya berjarak 5 menit jalan kaki dari gedung perkuliahan dan laboratorium FRI.'
    ]
  },
  'fasilitas-disabilitas': {
    title: 'Fasilitas Disabilitas Telkom University',
    subtitle: 'Penyediaan sarana & prasarana aksesibilitas ramah disabilitas berstandar inklusif (telkomuniversity.ac.id/fasilitas-disabilitas-3).',
    category: 'Campus Life',
    content: 'Telkom University berkomitmen menyediakan lingkungan kampus yang inklusif, ramah, dan setara bagi seluruh sivitas akademika maupun pengunjung penyandang disabilitas. Seluruh gedung perkuliahan, laboratorium, asrama, dan ruang publik dilengkapi dengan fasilitas ramah disabilitas. Informasi lengkap dan detail sarana aksesibilitas dapat diakses di situs resmi: https://telkomuniversity.ac.id/fasilitas-disabilitas-3/.',
    bullets: [
      'Website Resmi: https://telkomuniversity.ac.id/fasilitas-disabilitas-3/ (Portal resmi fasilitas disabilitas Telkom University).',
      'Jalur Guiding Block & Ramp: Jalur pemandu tactile paving untuk tuna netra serta ramp landai bersudut kemiringan aman bagi pengguna kursi roda.',
      'Lift Prioritas & Tombol Braille: Lift dengan akses tombol rendah berhuruf Braille, pengumuman suara lantai otomatis, dan pintu berlebar standar kursi roda.',
      'Toilet Khusus Difabel: Dilengkapi pegangan tangan pengaman (handrail), pintu lebar, wastafel rendah, dan tombol darurat (emergency button).',
      'Layanan Pendampingan Inklusif: Pendampingan akademik dan konseling bagi mahasiswa berkebutuhan khusus untuk menjamin kesetaraan proses belajar.'
    ],
    meta: [
      { label: 'Website Resmi', value: 'telkomuniversity.ac.id' },
      { label: 'Aksesibilitas', value: 'Inklusif & Ramah Difabel' },
      { label: 'Standar', value: 'Kampus Inklusif Ramah Akses' }
    ]
  },
  'fasilitas-gedung-telkom': {
    title: 'Fasilitas Gedung Telkom University',
    subtitle: 'Mengenal kluster fasilitas gedung unggulan Telkom University.',
    category: 'Campus Life',
    content: 'Kegiatan perkuliahan, riset, dan administrasi Telkom University didukung oleh infrastruktur modern dan gedung-gedung berstandar internasional. Seluruh fasilitas terintegrasi dalam smart campus Telkom University.',
    bullets: [
      'Gedung Tokong Nanas (Gedung 10): Pusat kegiatan administrasi Fakultas Rekayasa Industri, ruang dosen, dan ruang laboratorium terpadu.',
      'Gedung Cacuk Sudarijanto (Lecture Center): Pusat perkuliahan interaktif modern dengan sarana multimedia lengkap.',
      'Gedung Kuliah Umum (GKU): Gedung perkuliahan bersama berkapasitas tinggi dengan smart classroom.',
      'Gedung Rektorat (Gedung Bangkit) & Open Library: Pusat administrasi terpadu dan perpustakaan digital bersertifikasi internasional.'
    ],
    meta: [
      { label: 'Website Resmi', value: 'telkomuniversity.ac.id' },
      { label: 'Kategori', value: 'Fasilitas Unggulan' },
      { label: 'Akses', value: 'Publik & Sivitas' }
    ]
  },
  'nama-nama-gedung': {
    title: 'Fasilitas Gedung Telkom University',
    subtitle: 'Mengenal kluster fasilitas gedung unggulan Telkom University.',
    category: 'Campus Life',
    content: 'Kegiatan perkuliahan, riset, dan administrasi Telkom University didukung oleh infrastruktur modern dan gedung-gedung berstandar internasional. Seluruh fasilitas terintegrasi dalam smart campus Telkom University.',
    bullets: [
      'Gedung Tokong Nanas (Gedung 10): Pusat kegiatan administrasi Fakultas Rekayasa Industri, ruang dosen, dan ruang laboratorium terpadu.',
      'Gedung Cacuk Sudarijanto (Lecture Center): Pusat perkuliahan interaktif modern dengan sarana multimedia lengkap.',
      'Gedung Kuliah Umum (GKU): Gedung perkuliahan bersama berkapasitas tinggi dengan smart classroom.',
      'Gedung Rektorat (Gedung Bangkit) & Open Library: Pusat administrasi terpadu dan perpustakaan digital bersertifikasi internasional.'
    ]
  },
  'unit-kegiatan-mahasiswa': {
    title: '51 Unit Kegiatan Mahasiswa (UKM) Telkom University',
    subtitle: 'Mengembangkan bakat kepemimpinan, olahraga, seni budaya, teknologi & kerohanian (telkomuniversity.ac.id/51-unit-kegiatan-mahasiswa-ukm).',
    category: 'Campus Life',
    content: 'Pengembangan karakter dan soft skills mahasiswa tidak hanya terjadi di ruang kuliah. Telkom University memiliki 51 Unit Kegiatan Mahasiswa (UKM) aktif yang terbagi dalam rumpun Olahraga, Seni & Budaya, Kerohanian, Penalaran/Sains-Teknologi, dan Satuan Khusus. Seluruh informasi daftar 51 UKM resmi dapat diakses langsung melalui situs web resmi: https://telkomuniversity.ac.id/51-unit-kegiatan-mahasiswa-ukm/.',
    bullets: [
      'Website Resmi: https://telkomuniversity.ac.id/51-unit-kegiatan-mahasiswa-ukm/ (Daftar & profil lengkap 51 UKM Telkom University).',
      'UKM Olahraga: Badminton, Basket, Futsal, Voli, Tenis Meja, Taekwondo, Panahan, Catur, dll.',
      'UKM Seni & Budaya: Paduan Suara Mahasiswa (PSM), Telkom University Choir, Teater, Tari Tradisional Sunda & Nusantara, Band & Musik Klasik.',
      'UKM Penalaran, Sains & Teknologi: Robotika, Programming, AI & IoT Community, Esport, Aeromodelling, Astronomi.',
      'UKM Kerohanian & Sosial: Forum Kerohanian Islam, PMK (Kristen), KMK (Katolik), KMHD (Hindu), KMB (Buddha), Korps Sukarela PMI.',
      'HMTI (Himpunan Mahasiswa Teknik Industri): Organisasi resmi tingkat program studi pengayom aspirasi dan pengembangan profesi mahasiswa S1 Teknik Industri.'
    ],
    meta: [
      { label: 'Website Resmi', value: 'telkomuniversity.ac.id' },
      { label: 'Jumlah UKM', value: '51 Unit Aktif' },
      { label: 'Himpunan Prodi', value: 'HMTI FRI' }
    ]
  },

  // KAMPUS CABANG
  'kampus-surabaya': {
    title: 'Program Teknik Industri - Kampus Surabaya',
    subtitle: 'Fokus rekayasa industri di sektor maritim dan logistik pantai.',
    category: 'Kampus Cabang',
    content: 'Program studi Teknik Industri di Kampus Surabaya berfokus secara tematik pada efisiensi operasional galangan kapal, manajemen logistik maritim, serta rantai pasok industri pesisir dan pelabuhan internasional Tanjung Perak Surabaya.',
    bullets: [
      'Alamat: Jl. Gayungan PTT No. 17-19, Gayungan, Surabaya, Jawa Timur.',
      'Kemitraan Strategis: Bekerjasama dengan PT PAL Indonesia dan Pelindo untuk program magang kerja.'
    ]
  },
  'kampus-purwokerto': {
    title: 'Program Teknik Industri - Kampus Purwokerto',
    subtitle: 'Fokus pada agro-industrial supply chain dan teknologi pertanian digital.',
    category: 'Kampus Cabang',
    content: 'Program studi Teknik Industri di Kampus Purwokerto berfokus secara strategis pada manajemen rantai pasok pangan berkelanjutan, digitalisasi proses pengolahan hasil bumi, serta optimasi operasional manufaktur agro-industri Jawa Tengah.',
    bullets: [
      'Alamat: Jl. DI Panjaitan No. 128, Karangreja, Purwokerto Kidul, Jawa Tengah.',
      'Fasilitas Riset: Laboratorium Agro-Sistem Terintegrasi untuk pemodelan bisnis pertanian digital.'
    ]
  },

  // LAINNYA
  'akreditasi-internasional': {
    title: 'Sertifikasi Akreditasi Internasional IABEE',
    subtitle: 'Kualifikasi teknik berstandar internasional Washington Accord.',
    category: 'Lainnya',
    content: 'Program Studi S1 Teknik Industri Telkom University telah memperoleh akreditasi internasional penuh (Full Accreditation) dari IABEE (Indonesian Accreditation Board for Engineering Education) dalam disiplin Teknik Industri. Akreditasi ini merupakan pengakuan resmi bahwa kualitas kurikulum, sistem evaluasi, serta kompetensi lulusan kami setara dengan standar insinyur di negara maju seperti Amerika Serikat, Jepang, Australia, dan Inggris Raya.',
    bullets: [
      'Pengakuan Global: Lulusan kami diakui setara dengan lulusan teknik internasional di bawah aliansi Washington Accord.',
      'Insinyur Profesional: Lulusan berhak mendaftar untuk sertifikasi Insinyur Profesional Pratama (IPP) lebih cepat.'
    ]
  },
  'akreditasi-nasional': {
    title: 'Akreditasi Nasional UNGGUL LAM Teknik PII',
    subtitle: 'Pengakuan mutu keteknikan peringkat tertinggi di Indonesia (Masa Berlaku 2025 - 2030).',
    category: 'Lainnya',
    content: 'Program Studi S1 Teknik Industri Telkom University secara resmi memegang status peringkat Akreditasi UNGGUL dari Lembaga Akreditasi Mandiri Program Studi Keteknikan (LAM Teknik) Persatuan Insinyur Indonesia (PII) berdasarkan Keputusan No. 0156/SK/LAM Teknik/AS/IV/2025. Peringkat UNGGUL merupakan kategori tertinggi dalam sistem akreditasi keteknikan nasional yang membuktikan keunggulan mutu kurikulum, produktivitas riset dosen, kelengkapan laboratorium praktikum, dan serapan lulusan di dunia kerja.',
    bullets: [
      'Peringkat Mutu: UNGGUL (Kategori Tertinggi LAM Teknik PII).',
      'No. Keputusan: LAM Teknik No. 0156/SK/LAM Teknik/AS/IV/2025.',
      'Masa Berlaku: 21 April 2025 hingga 20 April 2030.'
    ]
  }
};
