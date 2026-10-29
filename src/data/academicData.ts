export interface PeoItem {
  id: string;
  title: string;
  profile: string;
  indicators: string[];
}

export interface PloItem {
  id: string;
  title: string;
  description: string;
  category: 'Keilmuan Teknik' | 'Komunikasi & Tim' | 'Etika & Sosial' | 'Inovasi & Teknologi';
}

export interface MbkmProgram {
  title: string;
  tagline: string;
  description: string;
  logoText: string;
  logoBg: string;
}

export const peoData: PeoItem[] = [
  {
    id: 'PEO1',
    title: 'Penerapan Keilmuan Industri Terintegrasi TIK',
    profile: 'Lulusan mampu berperan dalam mengimplementasikan keilmuan teknik industri yang berbasis teknologi informasi untuk mengidentifikasi, merancang, memperbaiki dan menerapkan solusi permasalahan kompleks pada sistem terintegrasi di dunia kerja sesuai dengan etika profesi dan nilai-nilai Pancasila.',
    indicators: [
      '60% dari lulusan bekerja langsung sebagai insinyur profesional di industri nasional atau global.',
      '50% dari lulusan bekerja aktif dengan memanfaatkan teknologi informasi terbaru (seperti sistem ERP, IoT, analitik data).'
    ]
  },
  {
    id: 'PEO2',
    title: 'Inovasi, Kepemimpinan, dan Kewirausahaan',
    profile: 'Lulusan mampu berperan dalam mengidentifikasi peluang inovasi dan bisnis secara individu maupun tim, dengan menerapkan prinsip Teknik Industri berbasis teknologi informasi untuk menciptakan nilai tambah yang berkelanjutan.',
    indicators: [
      '10% dari lulusan sukses merintis usaha mandiri atau mempraktikkan kewirausahaan (entrepreneurship).'
    ]
  },
  {
    id: 'PEO3',
    title: 'Pembelajaran Sepanjang Hayat & Adaptabilitas',
    profile: 'Lulusan mampu menjadi pembelajar mandiri secara adaptif dan berkelanjutan dalam menghadapi disrupsi dan dinamika zaman.',
    indicators: [
      '25% dari lulusan aktif melanjutkan studi ke jenjang magister/doktoral, mengambil sertifikasi kompetensi global (SAP, CSCP, Six Sigma), atau mengembangkan karir kepemimpinan di organisasi.'
    ]
  }
];

export const ploData: PloItem[] = [
  {
    id: 'CPL-1',
    title: 'Penguasaan Matematika & Sains',
    description: 'Mampu menguasai dan menerapkan matematika, sains, dan prinsip rekayasa (engineering principles) untuk menyelesaikan masalah rekayasa kompleks pada sistem terintegrasi (meliputi manusia, material, peralatan, energi, dan informasi).',
    category: 'Keilmuan Teknik'
  },
  {
    id: 'CPL-2',
    title: 'Perancangan Sistem Terintegrasi',
    description: 'Mampu merancang sistem terintegrasi sesuai standar teknis, keselamatan dan kesehatan lingkungan yang berlaku menggunakan pendekatan sistem untuk menjadi solusi terhadap masalah rekayasa kompleks pada sistem terintegrasi dengan mempertimbangkan aspek kinerja dan keandalan, kemudahan penerapan dan keberlanjutan, serta memperhatikan faktor ekonomi, sosial, dan kultural.',
    category: 'Keilmuan Teknik'
  },
  {
    id: 'CPL-3',
    title: 'Eksperimen & Analisis Data',
    description: 'Mampu untuk melakukan eksperimen laboratorium dan/atau lapangan dan menganalisis, serta menerjemahkan data untuk mendukung proses pengambilan keputusan keteknikindustrian.',
    category: 'Inovasi & Teknologi'
  },
  {
    id: 'CPL-4',
    title: 'Formulasi Masalah Rekayasa',
    description: 'Mampu mengidentifikasi, memformulasikan dan menganalisis masalah rekayasa kompleks pada sistem terintegrasi berdasarkan pendekatan analitik, komputasional atau eksperimental.',
    category: 'Keilmuan Teknik'
  },
  {
    id: 'CPL-5',
    title: 'Penerapan Alat Rekayasa Modern',
    description: 'Mampu menerapkan metode dan memilih sumberdaya dalam melakukan perancangan dan analisis rekayasa keteknikindustrian.',
    category: 'Inovasi & Teknologi'
  },
  {
    id: 'CPL-6',
    title: 'Komunikasi Efektif',
    description: 'Mampu melakukan komunikasi secara tertulis maupun lisan yang efektif.',
    category: 'Komunikasi & Tim'
  },
  {
    id: 'CPL-7',
    title: 'Kinerja Mandiri & Terukur',
    description: 'Kemampuan untuk menunjukkan kinerja mandiri, bermutu, dan terukur dalam merencanakan, menyelesaikan, dan mengevaluasi tugas dengan memperhatikan batasan yang diberikan.',
    category: 'Komunikasi & Tim'
  },
  {
    id: 'CPL-8',
    title: 'Kerjasama Kelompok Multidisiplin',
    description: 'Mampu melakukan kerjasama dalam sebuah kelompok kerja dengan multi disiplin dan/atau multi budaya.',
    category: 'Komunikasi & Tim'
  },
  {
    id: 'CPL-9',
    title: 'Etika Profesi & Tanggung Jawab Sosial',
    description: 'Mampu untuk bertanggungjawab kepada masyarakat, akuntabel, dan menjalankan etika profesi dalam menyelesaikan permasalahan keteknikindustrian serta menjunjung tinggi nilai kemanusiaan berdasarkan agama dan moral.',
    category: 'Etika & Sosial'
  },
  {
    id: 'CPL-10',
    title: 'Pembelajaran Seumur Hidup (Lifelong Learning)',
    description: 'Mampu mengenali kebutuhan, dan mengelola pembelajaran diri seumur hidup, termasuk akses pengetahuan terhadap issue terkini dalam bidang ekonomi, sosial, ekologi, teknologi dan komunikasi.',
    category: 'Etika & Sosial'
  },
  {
    id: 'CPL-11',
    title: 'Kreativitas & Peluang Inovasi',
    description: 'Mampu berpikir kreatif dan memanfaatkan pengetahuan dan keterampilan menggunakan teknologi untuk menghasilkan dan/atau mengembangkan peluang inovasi.',
    category: 'Inovasi & Teknologi'
  },
  {
    id: 'CPL-12',
    title: 'Pemanfaatan Teknologi Informasi & Komputasi',
    description: 'Mampu memanfaatkan teknologi informasi dan komputasi dalam melakukan praktik keteknikindustrian.',
    category: 'Inovasi & Teknologi'
  }
];

export const mbkmPrograms: MbkmProgram[] = [
  {
    title: 'Kampus Mengajar',
    tagline: 'Mengajar di Sekolah 3T',
    description: 'Bantu peningkatan kualitas pendidikan dasar dengan terlibat langsung pada proses pengajaran di sekolah-sekolah yang berlokasi di seluruh daerah di Indonesia.',
    logoText: 'KM',
    logoBg: 'bg-blue-600'
  },
  {
    title: 'Magang Bersertifikat (MSIB)',
    tagline: 'Pengalaman Dunia Kerja Riil',
    description: 'Dapatkan pengalaman dunia kerja secara langsung di korporasi nasional terkemuka sebagai akselerasi kariermu sebelum kelulusan.',
    logoText: 'M1',
    logoBg: 'bg-amber-600'
  },
  {
    title: 'Studi Independen Bersertifikat',
    tagline: 'Keahlian Teknologi Masa Depan',
    description: 'Jalankan proyek penelitian atau kursus teknologi mutakhir dengan studi kasus nyata dibimbing oleh para pakar industri global.',
    logoText: 'SI',
    logoBg: 'bg-emerald-600'
  },
  {
    title: 'Wirausaha Merdeka',
    tagline: 'Lahirnya Entrepreneur Baru',
    description: 'Ikuti program unggulan kemahasiswaan dari berbagai Perguruan Tinggi terpilih bertujuan menumbuhkan kemampuan kewirausahaan berbasis inovasi.',
    logoText: 'WM',
    logoBg: 'bg-rose-600'
  },
  {
    title: 'Pertukaran Mahasiswa Merdeka',
    tagline: 'Maknai Kebhinekaan Nusantara',
    description: 'Program pertukaran mahasiswa dalam negeri selama satu semester untuk saling mengenal keragaman budaya daerah di luar kampus asal.',
    logoText: 'PM',
    logoBg: 'bg-purple-600'
  },
  {
    title: 'IISMA',
    tagline: 'Beasiswa Pertukaran Luar Negeri',
    description: 'Indonesian International Student Mobility Awards menawarkan peluang kuliah 1 semester di universitas peringkat top dunia di Asia, Amerika, Eropa.',
    logoText: 'IS',
    logoBg: 'bg-cyan-600'
  },
  {
    title: 'Magang Mandiri (WRAP)',
    tagline: 'Peluang Rekrutmen Cepat',
    description: 'Work Ready Program (WRAP) yang dikerjakan langsung melalui bimbingan industri mitra khusus Universitas Telkom untuk jaminan kesiapan kerja.',
    logoText: 'MM',
    logoBg: 'bg-teal-700'
  },
  {
    title: 'Bangkit Academy',
    tagline: 'Inisiasi Google, GoTo, Traveloka',
    description: 'Program kesiapan karir spesifik bidang teknologi digital dengan 3 pilihan keahlian: Machine Learning, Mobile Development, dan Cloud Computing.',
    logoText: 'B!',
    logoBg: 'bg-slate-900'
  }
];
