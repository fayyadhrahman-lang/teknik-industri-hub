export interface FacilityPhoto {
  id: string;
  url: string;
  title: string;
  badge: string;
  highlight: string;
  academicDescription: string;
  keyInstruments: {
    name: string;
    description: string;
  }[];
  learningOutcomes: string[];
  locationInfo: string;
  standardCompliance: string;
}

export interface FacilityItem {
  id: string;
  code: string;
  name: string;
  category: 'ergonomi' | 'manufaktur' | 'komputasi' | 'logistik' | 'kualitas' | 'classroom' | 'produk';
  categoryLabel: string;
  building: string;
  floor: string;
  roomCode: string;
  tagline: string;
  overview: string;
  academicSignificance: string;
  status: 'active_with_photos' | 'expanding' | 'available';
  photos: FacilityPhoto[];
  specs: {
    label: string;
    value: string;
  }[];
  supportedCourses: string[];
  hasSimulation?: boolean;
  simulationType?: 'ergonomics' | 'manufacturing';
  contactPerson?: string;
}

export const PRODI_FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'wsda',
    code: 'WSDA',
    name: 'Work System Design and Analysis Laboratory',
    category: 'ergonomi',
    categoryLabel: 'Ergonomi & Rekayasa Sistem Kerja',
    building: 'Gedung Tokong Nanas (Gedung 10 Lantai)',
    floor: 'Lantai 3',
    roomCode: 'KU3.03.14',
    tagline: 'Pusat Keunggulan Rekayasa Faktor Manusia, Biomekanika Kerja, dan Ergonomi Terpadu',
    overview: 'Laboratorium WSDA berfokus pada integrasi optimal antara manusia, mesin, metode kerja, serta lingkungan fisik guna menghasilkan sistem kerja industri yang produktif, aman, nyaman, dan bebas dari kelelahan berlebih. Lab ini mendukung penuh pemenuhan kriteria IABEE (Washington Accord) untuk kompetensi perancangan sistem terintegrasi.',
    academicSignificance: 'Membekali mahasiswa kemampuan empiris dalam menganalisis postur biomekanika, mengukur dimensi fisik antropometri populasi, menghitung pengeluaran energi kerja (energy expenditure), serta merancang tata letak stasiun kerja yang efisien dengan prinsip ekonomi gerakan.',
    status: 'active_with_photos',
    supportedCourses: [
      'Analisis & Perancangan Sistem Kerja (APSK)',
      'Ergonomi Industri & K3',
      'Perancangan Stasiun Kerja Manufaktur',
      'Senior Capstone Design Project'
    ],
    hasSimulation: true,
    simulationType: 'ergonomics',
    specs: [
      { label: 'Luas Ruangan', value: '144 m² (Area Eksperimen & Asistensi)' },
      { label: 'Kapasitas Praktikum', value: '35 Mahasiswa per Sesi' },
      { label: 'Standar Laboratorium', value: 'IABEE Engineering Criteria 6 & ISO 9001' },
      { label: 'Kondisi Lingkungan', value: 'Terkontrol Suhu & Pencahayaan Standar K3' }
    ],
    photos: [
      {
        id: 'wsda-photo-1',
        url: '/assets/aistudio/WhatsApp_Image_2026-10-09_at_10.40.05__1__43daffd8.jpeg',
        title: 'Stasiun Pengujian Biomekanika & Kapasitas Fisiologis Kerja',
        badge: 'Ruang Eksperimen & Instrumentasi Presisi',
        highlight: 'Uji beban kerja fisik, denyut kardiovaskular, dan pemetaan antropometri statis/dinamis',
        academicDescription: 'Fasilitas eksperimen biomekanika dan ergonomi fisik yang mengintegrasikan instrumen kursi antropometri terstandarisasi untuk mengukur persentil tubuh masyarakat Indonesia, serta stasiun uji faal menggunakan Ergocycle (sepeda statis berbeban) dan treadmill dinamis. Instrumen ini digunakan untuk memantau pengeluaran energi metabolisme pekerja, beban kardiovaskular (%CVL), dan ambang batas kelelahan operator pada lingkungan kerja nyata.',
        keyInstruments: [
          {
            name: 'Kursi Antropometri Multi-Sumbu Presisi',
            description: 'Memetakan 36+ dimensi tubuh statis dan dinamis untuk penentuan dimensi meja, kursi kerja, dan jangkauan alat berdasarkan persentil 5th, 50th, hingga 95th.'
          },
          {
            name: 'Ergocycle Uji Kardiovaskular Terkalibrasi',
            description: 'Pengukuran beban kerja fisik bergradasi dan estimasi konsumsi oksigen (VO₂ Max) untuk menetapkan waktu istirahat yang proporsional.'
          },
          {
            name: 'Dynamic Treadmill Testing Unit',
            description: 'Simulasi mobilitas gerak pekerja material handling untuk mengevaluasi postur gerak dinamis dan biomekanika pembebanan sendi.'
          },
          {
            name: 'Sistem Pengendalian Lingkungan Uji',
            description: 'Pengondisian udara ganda (Dual AC), pencahayaan terstandar lux meter, dan sistem presentasi multimedia untuk asistensi interaktif.'
          }
        ],
        learningOutcomes: [
          'Mampu merancang layout stasiun kerja berbasis data antropometri inklusif.',
          'Mampu menghitung kebutuhan energi kerja dan rekomendasi waktu jeda istirahat operator.',
          'Mampu mengevaluasi risiko Musculoskeletal Disorders (MSDs) menggunakan metode RULA & REBA.'
        ],
        locationInfo: 'Gedung Tokong Nanas (Gedung 10 Lantai) - Lantai 3, Ruang KU3.03.14 (Area Eksperimen Fisiologi & Antropometri)',
        standardCompliance: 'Standar Pengukuran Ergonomi Internasional & IABEE Criteria 6'
      },
      {
        id: 'wsda-photo-2',
        url: '/assets/aistudio/WhatsApp_Image_2026-10-09_at_10.40.05_feba56c1.jpeg',
        title: 'Studio Praktikum Analisis & Perancangan Sistem Kerja (APSK)',
        badge: 'Sesi Praktikum Terbimbing & Asistensi',
        highlight: 'Simulasi lini perakitan modular, Operation Process Chart, dan studi waktu baku',
        academicDescription: 'Lingkungan praktikum kolaboratif mata kuliah Analisis & Perancangan Sistem Kerja. Mahasiswa secara berkelompok mengoperasikan meja kerja perakitan modular dengan part-bin berkode warna untuk menganalisis urutan operasi perakitan, mengeliminasi gerakan tidak produktif (Therblig analysis), menyusun Peta Tangan Kiri-Kanan, serta menghitung waktu baku melalui stopwatch time study dan penetapan faktor penyesuaian (rating factor).',
        keyInstruments: [
          {
            name: 'Meja Perakitan Modular Fleksibel',
            description: 'Stasiun kerja dengan konfigurasi ketinggian dan susunan material bin fleksibel guna meminimalkan jangkauan lengan dan sudut tekuk leher.'
          },
          {
            name: 'Peralatan Digital Stopwatch Time Study',
            description: 'Pengambilan sampel waktu siklus berulang dengan uji kecukupan dan uji keseragaman data statistik secara ketat.'
          },
          {
            name: 'Template Analisis Peta Kerja ASME',
            description: 'Penyusunan Operation Process Chart (OPC), Flow Process Chart (FPC), dan Multiple Activity Chart secara terstruktur.'
          },
          {
            name: 'Sistem Asistensi Mentoring IABEE',
            description: 'Pembimbingan teknis oleh asisten laboratorium bersertifikasi dengan rubrik penilaian capaian pembelajaran (PLO) yang transparan.'
          }
        ],
        learningOutcomes: [
          'Mampu menyusun peta kerja makro dan mikro untuk memangkas pemborosan waktu perakitan.',
          'Mampu menentukan waktu normal dan waktu baku produksi dengan mempertimbangkan faktor kelonggaran (allowance).',
          'Mampu mendemonstrasikan kepemimpinan dan kerja sama tim dalam memecahkan masalah sistem kerja.'
        ],
        locationInfo: 'Gedung Tokong Nanas (Gedung 10 Lantai) - Lantai 3, Ruang KU3.03.14 (Area Studio Praktikum & Asistensi APSK)',
        standardCompliance: 'Kurikulum Berbasis Luaran (OBE) S1 Teknik Industri'
      }
    ]
  },
  {
    id: 'pdev',
    code: 'PDEV Lab',
    name: 'Product Development Laboratory (PDEV Lab)',
    category: 'produk',
    categoryLabel: 'Perancangan & Pengembangan Produk',
    building: 'Graha Cacuk Sudarijanto-B Lecture Center 2',
    floor: 'Lantai 2',
    roomCode: 'LCB2',
    tagline: 'Pusat Riset Inovasi Desain Produk, Pemodelan CAD 3D, dan Fabrikasi Rapid Prototyping Cetak 3D',
    overview: 'Laboratorium Pengembangan Produk (PDEV Lab) berfokus pada siklus hidup perancangan produk terintegrasi (Integrated Product Development), penyusunan matriks Quality Function Deployment (QFD), rekayasa nilai (Value Engineering), target costing, hingga purwarupa cepat menggunakan deretan mesin cetak 3D printer presisi tinggi.',
    academicSignificance: 'Membekali mahasiswa kemampuan menerjemahkan suara konsumen (Voice of Customer) menjadi spesifikasi teknis rekayasa, pemodelan geometri 3D parametric surface, serta pencetakan purwarupa fisik fungsional untuk uji ergonomi dan perakitan.',
    status: 'active_with_photos',
    supportedCourses: [
      'Pengembangan Produk Terintegrasi (Integrated Product Development)',
      'Perancangan & Pengembangan Produk (PPP)',
      'Rekayasa Nilai & Biaya Target (Value Engineering)',
      'Senior Capstone Design Project'
    ],
    hasSimulation: false,
    specs: [
      { label: 'Fasilitas Utama', value: 'Studio Cetak 3D & Laboratorium Komputer Desain' },
      { label: 'Kapasitas Praktikum', value: '40 Mahasiswa per Sesi Praktikum' },
      { label: 'Standar Laboratorium', value: 'Kurikulum OBE S1 Teknik Industri & IABEE Criteria 6' },
      { label: 'Peralatan Inti', value: 'Multi-Unit 3D Printer (FDM/Resin) & CAD Workstations' }
    ],
    photos: [
      {
        id: 'pdev-photo-1',
        url: '/assets/pdev_lab_3d_printing_workshop.jpeg',
        title: 'Studio Fabrikasi Cepat & Workshop Cetak 3D (Rapid Prototyping)',
        badge: 'Area Fabrikasi Purwarupa Produk',
        highlight: 'Deretan 3D Printer FDM & stasiun workstation pengendali pencetakan purwarupa fisik produk',
        academicDescription: 'Fasilitas pencetakan purwarupa cepat (rapid prototyping) yang dilengkapi dengan jajaran 3D printer presisi tinggi dan workstation komputasi untuk mewujudkan rancangan CAD 3D menjadi purwarupa produk fisik nyata guna evaluasi fungsi dan estetika.',
        keyInstruments: [
          {
            name: 'Array Mesin Cetak 3D Printer Presisi',
            description: 'Deretan unit 3D printer untuk fabrikasi aditif lapisan demi lapisan (Additive Manufacturing) dengan material filamen PLA/ABS/PETG.'
          },
          {
            name: 'Workstation Komputer Slicing & Kendali Mesin',
            description: 'Komputer pengendali untuk proses slicing model 3D, pengaturan parameter infill, orientasi cetak, dan pemantauan suhu nozzle secara realtime.'
          }
        ],
        learningOutcomes: [
          'Mampu mentransformasikan model 3D CAD menjadi purwarupa fisik fungsional.',
          'Mampu menganalisis toleransi geometri dan kecocokan perakitan (fit and tolerance) hasil cetak.'
        ],
        locationInfo: 'Graha Cacuk Sudarijanto-B Lecture Center 2',
        standardCompliance: 'Standar Prototipe Industri & Akreditasi Internasional IABEE'
      },
      {
        id: 'pdev-photo-2',
        url: '/assets/pdev_lab_computer_practicum.jpeg',
        title: 'Studio Praktikum Komputasi & Perancangan Desain Produk Terintegrasi',
        badge: 'Sesi Praktikum Terbimbing & Asistensi Komputasi',
        highlight: 'Ruang ber-AC luas berkapasitas 40+ mahasiswa dengan asistensi perancangan produk dan pemodelan CAD',
        academicDescription: 'Ruang praktikum komputasi modern berkapasitas puluhan mahasiswa yang dilengkapi PC berkinerja tinggi, layar proyektor ganda, dan pendingin ruangan terstandar. Mahasiswa didampingi asisten laboratorium merancang model digital, menyusun matriks House of Quality (QFD), dan mensimulasikan perancangan produk terintegrasi.',
        keyInstruments: [
          {
            name: 'Workstation PC High-Performance Desain CAD',
            description: 'Komputer dengan software pemodelan perancangan produk 3D parametric dan platform simulasi rekayasa.'
          },
          {
            name: 'Sistem Presentasi & Asistensi Terbimbing',
            description: 'Proyektor multimedia, partisi kaca kedap suara, dan pendampingan intensif oleh asisten laboratorium bersertifikasi.'
          }
        ],
        learningOutcomes: [
          'Mampu memodelkan produk secara digital dengan software CAD modern.',
          'Mampu menyusun matriks perencanaan produk terintegrasi dan analisis ergonomi produk.'
        ],
        locationInfo: 'Graha Cacuk Sudarijanto-B Lecture Center 2',
        standardCompliance: 'Kurikulum Berbasis Luaran (OBE) S1 Teknik Industri'
      }
    ]
  },
  {
    id: 'sispromasi',
    code: 'SISPROMASI',
    name: 'Sistem Produksi dan Otomasi Laboratory',
    category: 'manufaktur',
    categoryLabel: 'Manufaktur & Otomasi Cerdas',
    building: 'Gedung Cacuk Sudarijanto',
    floor: 'Lantai 1',
    roomCode: 'CS1.01.08',
    tagline: 'Pusat Riset Otomasi Manufaktur, Programmable Logic Controller (PLC), dan Sistem Pneumatik',
    overview: 'Laboratorium SISPROMASI mengintegrasikan perangkat keras kontrol industri seperti PLC Siemens & Omron, sensor elektromekanik, konveyor cerdas, dan aktuator elektro-pneumatik untuk menyimulasikan sistem manufaktur otomatis berkecepatan tinggi.',
    academicSignificance: 'Melatih mahasiswa merancang sekuens logika otomasi, memprogram kendali logika industri, dan memahami konsep Flexible Manufacturing Systems (FMS) serta industri 4.0.',
    status: 'expanding',
    supportedCourses: [
      'Otomasi Sistem Industri',
      'Sistem Manufaktur Cerdas',
      'Perancangan Tata Letak Pabrik'
    ],
    hasSimulation: true,
    simulationType: 'manufacturing',
    specs: [
      { label: 'Modul Otomasi', value: 'Trainer PLC Siemens S7-1200 & Omron' },
      { label: 'Aktuator', value: 'Sistem Elektro-Pneumatik Festo' },
      { label: 'Konveyor', value: 'Miniature Automated Conveyor Loop' }
    ],
    photos: []
  },
  {
    id: 'es-erp',
    code: 'ES',
    name: 'Enterprise Systems & ERP Laboratory',
    category: 'komputasi',
    categoryLabel: 'Enterprise Systems & Komputasi Industri',
    building: 'Gedung Cacuk Sudarijanto',
    floor: 'Lantai 2',
    roomCode: 'CS2.02.10',
    tagline: 'Laboratorium Integrasi Proses Bisnis Terpadu SAP S/4HANA Enterprise',
    overview: 'Fasilitas komputasi enterprise tingkat lanjut yang memberikan sertifikasi internasional SAP kepada mahasiswa. Mahasiswa memodelkan proses pengadaan (Procurement), produksi (Manufacturing Execution), dan penjualan (Sales Order Processing) secara terintegrasi.',
    academicSignificance: 'Memberikan keunggulan kompetitif bagi lulusan dalam arsitektur sistem informasi bisnis korporasi global.',
    status: 'expanding',
    supportedCourses: [
      'Enterprise Resource Planning (ERP)',
      'Sistem Informasi Manajemen Industri',
      'Arsitektur Bisnis Perusahaan'
    ],
    hasSimulation: false,
    specs: [
      { label: 'Sistem ERP', value: 'SAP S/4HANA Academic Alliance' },
      { label: 'Workstation Komputer', value: '50 Unit PC High-Performance Core i7' },
      { label: 'Jaringan', value: 'Dedicated High-Speed Gigabit Fiber' }
    ],
    photos: []
  },
  {
    id: 'simpro',
    code: 'SIMPRO',
    name: 'Simulasi Sistem Industri & Optimasi Laboratory',
    category: 'komputasi',
    categoryLabel: 'Simulasi & Pemodelan Stokastik',
    building: 'Gedung Tokong Nanas',
    floor: 'Lantai 4',
    roomCode: 'KU4.04.05',
    tagline: 'Pemodelan Antrean Kompleks, Simulasi Kejadian Diskrit, dan Riset Operasi Lanjutan',
    overview: 'Laboratorium riset kuantitatif yang dilengkapi dengan perangkat lunak simulasi stokastik terkemuka di dunia seperti Rockwell Arena Simulation, Simio, serta solver optimasi LINGO dan Python Optimization.',
    academicSignificance: 'Membekali mahasiswa kemampuan menganalisis bottleneck operasional, optimasi throughput manufaktur, dan penentuan kapasitas optimal sistem layanan.',
    status: 'expanding',
    supportedCourses: [
      'Pemodelan & Simulasi Sistem',
      'Riset Operasi I & II',
      'Analisis Stokastik Industri'
    ],
    hasSimulation: false,
    specs: [
      { label: 'Software Simulasi', value: 'Rockwell Arena Education Edition & Simio' },
      { label: 'Solver Optimasi', value: 'LINGO Enterprise, IBM ILOG CPLEX Academic' }
    ],
    photos: []
  },
  {
    id: 'smart-classrooms',
    code: 'SMART-CR',
    name: 'Smart Classrooms & Collaborative Learning Studios',
    category: 'classroom',
    categoryLabel: 'Smart Classroom & Ruang Kolaborasi',
    building: 'Gedung Cacuk Sudarijanto & Tokong Nanas',
    floor: 'Lantai 1-5',
    roomCode: 'Smart Pods',
    tagline: 'Ruang Perkuliahan Interaktif Berbasis Pembelajaran Kolaboratif Aktif',
    overview: 'Ruang kelas cerdas yang dilengkapi interactive smart boards, proyektor nirkabel ganda, furnitur modular yang dapat digeser untuk diskusi kelompok dinamis, serta sistem telekonferensi hybrid berkecepatan tinggi.',
    academicSignificance: 'Mendukung metode Student-Centered Learning (SCL), pemecahan studi kasus industri riil, dan presentasi Capstone Design Project.',
    status: 'expanding',
    supportedCourses: [
      'Capstone Design Project',
      'Pengantar Teknik Industri',
      'Manajemen Inovasi & Kewirausahaan'
    ],
    hasSimulation: false,
    specs: [
      { label: 'Display Interaktif', value: 'Smart Interactive Flat Panel 86 Inch' },
      { label: 'Konektivitas', value: 'Wireless Multi-Screen Casting' },
      { label: 'Akustik Ruang', value: 'Peredam Suara Standar Akreditasi Internasional' }
    ],
    photos: []
  }
];
