export interface FacilityItem {
  id: string;
  name: string;
  building: string;
  buildingId: string;
  floorRoom: string;
  category: 'Laboratorium' | 'Ruang Kuliah' | 'Fasilitas Bersama' | 'Studio Riset';
  image: string;
  description: string;
  equipment?: string[];
  capacity?: string;
  relatedCourse?: string;
  tags: string[];
}

export interface BuildingCategory {
  id: string;
  name: string;
  code: string;
  description: string;
}

export const BUILDING_CATEGORIES: BuildingCategory[] = [
  {
    id: 'all',
    name: 'Semua Fasilitas',
    code: 'ALL',
    description: 'Seluruh infrastruktur laboratorium, ruang perkuliahan, dan sarana riset S1 Teknik Industri.'
  },
  {
    id: 'tokong-nanas',
    name: 'Gedung Tokong Nanas (Gedung 10)',
    code: 'G10',
    description: 'Pusat laboratorium rekayasa industri, ruang riset perancangan sistem kerja, otomasi, dan komputasi.'
  },
  {
    id: 'cacuk-sudarijanto',
    name: 'Gedung Cacuk Sudarijanto',
    code: 'GCS',
    description: 'Gedung perkuliahan, dekanat Fakultas Rekayasa Industri, dan auditorium utama.'
  },
  {
    id: 'gku',
    name: 'Gedung Kuliah Umum (GKU)',
    code: 'GKU',
    description: 'Fasilitas ruang kuliah bersama berkapasitas besar dengan teknologi smart classroom terintegrasi.'
  },
  {
    id: 'selaru',
    name: 'Gedung Selaru',
    code: 'SLR',
    description: 'Ruang interaksi himpunan mahasiswa, studio proyek mandiri, dan area bimbingan akademik.'
  }
];

export const INITIAL_FACILITIES: FacilityItem[] = [
  {
    id: 'wsda-lab-equipment',
    name: 'Ruang Eksperimen & Peralatan Biomekanika WSDA',
    building: 'Gedung Tokong Nanas (Gedung 10)',
    buildingId: 'tokong-nanas',
    floorRoom: 'Lantai 3 – Lab WSDA',
    category: 'Laboratorium',
    image: '/src/assets/images/wsda_facility_equipment.jpg',
    description: 'Ruang uji biomekanika dan perancangan sistem kerja ergonomis. Dilengkapi instrumen pengukuran dimensi antropometri tubuh manusia, sepeda statis pengukur beban kardiovaskular, treadmill analisis kelelahan metabolik, serta pendingin udara ganda dan proyektor multimedia.',
    equipment: [
      'Kursi Antropometri Terstandarisasi (Persentil 5th, 50th, 95th)',
      'Ergometer Sepeda Statis (Ergocycle Pengukur Beban Fisik Kardiovaskular)',
      'Treadmill Kettler (Pengujian Konsumsi Energi Metabolik & Kelelahan)',
      'Sound Level Meter & Lux Meter Digital (Evaluasi Kebisingan & Pencahayaan)',
      'Proyektor Presentasi Overhead & Fasilitas AC Ganda'
    ],
    capacity: '35 Mahasiswa / Sesi',
    relatedCourse: 'Ergonomi & Perancangan Sistem Kerja (IEG2B3)',
    tags: ['Antropometri', 'Biomekanika', 'Fisiologi Kerja', 'K3']
  },
  {
    id: 'wsda-lab-practicum',
    name: 'Stasiun Kerja Perakitan & Praktikum Terpadu WSDA',
    building: 'Gedung Tokong Nanas (Gedung 10)',
    buildingId: 'tokong-nanas',
    floorRoom: 'Lantai 3 – Lab WSDA',
    category: 'Laboratorium',
    image: '/src/assets/images/wsda_practicum_session.jpg',
    description: 'Area praktikum interaktif mahasiswa untuk simulasi lini perakitan manual (manual assembly line) dan penyeimbangan lini kerja. Mahasiswa menggunakan modul part-bin berkode warna untuk perancangan tata letak kerja modular, pembuatan peta kerja keseluruhan (Operation Process Chart), dan pengukuran waktu baku produksi.',
    equipment: [
      'Meja Kerja Modular Perakitan (Assembly Workstation dengan Part-Bins Berwarna)',
      'Papan Display Layout Praktikum & Peta Kerja Keseluruhan (OPC)',
      'Stopwatch Digital Presisi Tinggi untuk Analisis Time Study & Motion Study',
      'Display Timer & Kuis Pemahaman Asistensi Terintegrasi',
      'Instrumen Kuesioner NASA-TLX & Software Analisis Postur RULA/REBA'
    ],
    capacity: '40 Mahasiswa / Sesi',
    relatedCourse: 'Praktikum Perancangan Sistem Kerja Terpadu (IEG2C1)',
    tags: ['Perakitan', 'Peta Kerja (OPC)', 'Waktu Baku', 'Tata Letak']
  }
];
