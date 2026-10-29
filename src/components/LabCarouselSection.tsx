import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Activity, 
  Cpu, 
  Layers, 
  BarChart3, 
  Boxes, 
  Sparkles, 
  Play, 
  ArrowRight,
  Compass,
  Wrench,
  LineChart,
  HardHat,
  Eye
} from 'lucide-react';

export interface LabCardItem {
  id: string;
  index: string;
  shortCode: string;
  name: string;
  category: string;
  desc: string;
  equipment: string[];
  logoImage: string;
  hasSimulation?: boolean;
  simulationType?: 'ergonomics' | 'manufacturing';
  accentColor?: string;
}

export const TELKOM_LABORATORIES: LabCardItem[] = [
  {
    id: 'wsda',
    index: '01',
    shortCode: 'WSDA',
    name: 'Work System Design and Analysis Laboratory',
    category: 'Ergonomi & K3',
    logoImage: '/assets/aistudio/LOGO-APK-768x256_41689650.png',
    desc: 'Fokus pada evaluasi ergonomis tubuh kerja, biomekanika postur, beban mental manusia-mesin (NASA-TLX), antropometri fisik populasi Indonesia, serta perancangan lingkungan kerja aman & produktif.',
    equipment: [
      'Alat Ukur Antropometri Fisik',
      'Software Biomekanika RULA / REBA',
      'Polar Heart Rate Sensor',
      'Sound Level & Lux Meter',
      'Instrumen NASA-TLX Digital'
    ],
    hasSimulation: true,
    simulationType: 'ergonomics'
  },
  {
    id: 'cad',
    index: '02',
    shortCode: 'Gartex Lab',
    name: 'Gartex Lab (Laboratorium Gambar Teknik & Perancangan)',
    category: 'Desain Keteknikan & 3D',
    logoImage: '/assets/aistudio/GTX_PNG-v2-1-1-1-1024x348_c8f2c683.png',
    desc: 'Pengembangan kemampuan visualisasi spasial, perancangan draf mekanikal presisi, pemodelan geometri 3D, Computer-Aided Design, serta standarisasi toleransi geometrik ISO.',
    equipment: [
      'Workstation Komputasi CAD',
      'Autodesk AutoCAD Enterprise',
      'Dassault Systèmes SolidWorks',
      'Drafting Table Standar Teknik',
      'Plotter Format Besar A0 Presisi'
    ]
  },
  {
    id: 'mp',
    index: '03',
    shortCode: 'Prosman Lab',
    name: 'Prosman Lab (Manufacturing Process Laboratory)',
    category: 'Proses Manufaktur & Material',
    logoImage: '/assets/aistudio/logo-prosman-new-fix-1-1-1024x347_22336d3d.png',
    desc: 'Pembelajaran proses permesinan konvensional dan modern, pemrograman CNC (Lathe & Milling), manufaktur aditif (3D Printing), fabrikasi logam, metalurgi fisik, serta uji karakteristik bahan.',
    equipment: [
      'Mesin Bubut CNC Presisi',
      '3D Printer Aditif FDM & Resin',
      'Mesin Frais (Milling Machine)',
      'Mikroskop Metalurgi Optik',
      'Alat Uji Kekerasan Logam (Hardness Tester)'
    ]
  },
  {
    id: 'sispromasi',
    index: '04',
    shortCode: 'SISPROMASI',
    name: 'Laboratorium Sistem Produksi & Otomasi',
    category: 'Otomasi Pabrik & PLC',
    logoImage: '/assets/aistudio/Logo-Sispromasi-2_8323e48c.png',
    desc: 'Riset otomatisasi lini perakitan cerdas (Cyber-Physical Systems), pemrograman PLC industri, integrasi sensor elektro-pneumatik, konveyor cerdas, serta robotika manufaktur 4.0.',
    equipment: [
      'PLC OMRON & Siemens Industrial Trainer',
      'Kit Trainer Elektro-Pneumatik',
      'Modul Lengan Robotika 4-Axis',
      'Sensor Optik, Induktif & Kapasitif',
      'Miniature Automated Conveyor Loop'
    ],
    hasSimulation: true,
    simulationType: 'manufacturing'
  },
  {
    id: 'statspo',
    index: '05',
    shortCode: 'SIPO Lab',
    name: 'SIPO Lab (Laboratorium Statistika Industri & Riset Operasi)',
    category: 'Optimasi & Sains Data',
    logoImage: '/assets/aistudio/SIPO-906x1024_5438ea4a.png',
    desc: 'Pemodelan matematis optimasi linear dan non-linear sistem industri, perancangan eksperimen (DoE), pengendalian kualitas statistik secara digital, serta analisis data keputusan.',
    equipment: [
      'Solver Optimasi LINGO & CPLEX',
      'Software IBM SPSS Statistics',
      'Minitab Statistical Software',
      'Python & RStudio Data Science Suite',
      'High-Performance Computation Unit'
    ]
  },
  {
    id: 'bs',
    index: '06',
    shortCode: 'Simbi Lab',
    name: 'Simbi Lab (Business & Simulation Laboratory)',
    category: 'Simulasi Sistem Diskrit',
    logoImage: '/assets/aistudio/Logo-SIMBI-1-1024x493_520ab977.png',
    desc: 'Pemodelan simulasi komputer kejadian diskrit (Discrete Event Simulation) dan pemodelan sistem dinamis untuk optimasi antrean rumah sakit, pelabuhan, bandara, serta logistik rantai pasok.',
    equipment: [
      'Rockwell Arena Simulation Suite',
      'FlexSim 3D Simulation Platform',
      'AnyLogic Multi-Method Simulator',
      'Vensim System Dynamics Modeling',
      'Dual-Screen Visualization Rig'
    ]
  },
  {
    id: 'pd',
    index: '07',
    shortCode: 'PDEV Lab',
    name: 'PDEV Lab (Product Development Laboratory)',
    category: 'Inovasi & Riset Produk',
    logoImage: '/assets/aistudio/PDEV-1024x320_42269fb3.png',
    desc: 'Perancangan produk baru terintegrasi (Integrated Product Development), penyusunan matriks Quality Function Deployment (QFD), rekayasa nilai (Value Engineering), target costing, dan purwarupa cepat.',
    equipment: [
      'Rapid Prototyping Workshop Kit',
      'Software CAD Surface Modeling',
      'Design Collaboration Platform',
      'Digital Caliper & Micrometer Presisi',
      'Testing Rig Evaluasi Desain Produk'
    ]
  },
  {
    id: 'fastech',
    index: '08',
    shortCode: 'FASTECH',
    name: 'Fastech Laboratory (Lean Manufacturing)',
    category: 'Lean & Penyeimbangan Lini',
    logoImage: '/assets/aistudio/Screenshot_2026-10-26_134849_5786c134.png',
    desc: 'Penerapan konsep perampingan proses (Lean Manufacturing), eliminasi 7 pemborosan (Muda), Cellular Manufacturing, penyeimbangan lintasan perakitan (Line Balancing), serta budaya Kaizen.',
    equipment: [
      'Modular Lean Assembly Workstation',
      'Software Value Stream Mapping (VSM)',
      'Digital Stopwatch Waktu Siklus Standar',
      'Visual Management & Kanban Board Kit',
      'Andon Light System Simulation'
    ]
  },
  {
    id: 'te',
    index: '09',
    shortCode: 'Tekmi Lab',
    name: 'Tekmi Lab (Techno Economy Laboratory)',
    category: 'Kelayakan Finansial & Investasi',
    logoImage: '/assets/aistudio/LOGO-TEKMI-1-1024x373_65861f29.png',
    desc: 'Analisis kelayakan investasi modal teknik, nilai waktu uang (Time Value of Money), kalkulasi parameter NPV, IRR, Payback Period, B/C Ratio, serta penyusunan studi kelayakan pabrik baru.',
    equipment: [
      'Financial Feasibility Modeling Platform',
      'Database Indeks Biaya Industri Riil',
      'Template Analisis Sensitivitas & Risiko',
      'Software Simulasi Monte Carlo Keuangan',
      'Integrated Project Evaluation Suite'
    ]
  },
  {
    id: 'ese',
    index: '10',
    shortCode: 'ENSYSe Lab',
    name: 'ENSYSe Lab (Enterprise System Engineering Laboratory)',
    category: 'ERP SAP & Enterprise Systems',
    logoImage: '/assets/aistudio/Logo-Ensyse-FIX-1-1024x1024_aa579582.png',
    desc: 'Pengembangan arsitektur proses bisnis korporasi terintegrasi, konfigurasi modul ERP SAP kelas dunia, pengelolaan rantai pasok enterprise, serta transformasi digital industri terintegrasi.',
    equipment: [
      'Lisensi Resmi SAP S/4HANA Enterprise',
      'Modul Sertifikasi SAP University Alliance',
      'Platform BPMN 2.0 Business Modeler',
      'Visual Paradigm Enterprise Suite',
      'Cloud Server Enterprise Network'
    ]
  }
];

interface LabCarouselSectionProps {
  onOpenLabDetail?: (labIndex: number) => void;
  onOpenSimulation?: (type: 'ergonomics' | 'manufacturing') => void;
  onOpenFacilityShowcase?: (slug: string) => void;
}

export const LabCarouselSection: React.FC<LabCarouselSectionProps> = ({
  onOpenLabDetail,
  onOpenSimulation,
  onOpenFacilityShowcase
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);

    // Approximate active card index
    const cardWidth = 320 + 24; // card width + gap
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(TELKOM_LABORATORIES.length - 1, Math.max(0, idx)));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 344; // approx card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 344;
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveSlideIndex(index);
  };

  // Helper icons per lab
  const getLabIcon = (shortCode: string) => {
    switch (shortCode) {
      case 'WSDA':
        return <Activity className="w-5 h-5 text-emerald-700" />;
      case 'Gartex Lab':
      case 'CAD':
        return <Compass className="w-5 h-5 text-blue-700" />;
      case 'Prosman Lab':
      case 'MP':
        return <Wrench className="w-5 h-5 text-amber-700" />;
      case 'SISPROMASI':
        return <Cpu className="w-5 h-5 text-emerald-700" />;
      case 'SIPO Lab':
      case 'STATS & PO':
        return <BarChart3 className="w-5 h-5 text-indigo-700" />;
      case 'Simbi Lab':
      case 'B&S':
        return <Boxes className="w-5 h-5 text-teal-700" />;
      case 'PDEV Lab':
      case 'PD':
        return <Layers className="w-5 h-5 text-rose-700" />;
      case 'FASTECH':
        return <HardHat className="w-5 h-5 text-orange-700" />;
      case 'Tekmi Lab':
      case 'TE':
        return <LineChart className="w-5 h-5 text-emerald-700" />;
      case 'ENSYSe Lab':
      case 'ESE':
        return <Sparkles className="w-5 h-5 text-[#800000]" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-slate-50/70 border-t border-b border-emerald-100/60 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Fasilitas Riset & Praktikum Terpadu</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              10 Laboratorium Utama <br />
              <span className="text-[#800000]">S1 Teknik Industri Telkom University</span>
            </h2>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Seluruh fasilitas laboratorium modern berstandar internasional yang disesuaikan dengan kurikulum teknik industri, dilengkapi peralatan fisik mutakhir dan lisensi perangkat lunak global.
            </p>
          </div>

          {/* Navigation Buttons & Swipe Hint */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <span>Geser ke kanan</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
            </span>

            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByDirection('left')}
                disabled={!canScrollLeft}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'bg-white hover:bg-[#800000] text-slate-800 hover:text-white border border-slate-200 shadow-sm active:scale-95'
                    : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
                }`}
                aria-label="Geser ke kiri"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollByDirection('right')}
                disabled={!canScrollRight}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? 'bg-[#800000] hover:bg-red-900 text-white shadow-md active:scale-95'
                    : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
                }`}
                aria-label="Geser ke kanan"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HORIZONTAL SCROLL SLIDER / CAROUSEL
            Cards slide to the right smoothly with snap-x
           ========================================================================= */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TELKOM_LABORATORIES.map((lab, index) => {
            const labNum = parseInt(lab.index, 10);
            return (
              <div
                key={lab.id}
                className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Header Card */}
                <div className="p-6 space-y-4">
                  {/* Top Row: Index Badge & Category Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#800000] text-slate-700 group-hover:text-white flex items-center justify-center font-mono font-bold text-sm transition-colors shadow-2xs">
                      {lab.index}
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-100 uppercase tracking-wide">
                      {lab.category}
                    </span>
                  </div>

                  {/* Official Laboratory Logo Display */}
                  <div className="w-full h-28 bg-gradient-to-b from-slate-50/80 to-white rounded-xl p-3 border border-slate-100 group-hover:border-rose-100 flex items-center justify-center overflow-hidden transition-all shadow-2xs relative">
                    <img 
                      src={lab.logoImage} 
                      alt={`Logo Resmi ${lab.name}`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-1 right-2 px-1.5 py-0.5 rounded text-[8px] font-bold bg-white/90 backdrop-blur-xs text-slate-400 border border-slate-200/50 uppercase tracking-wider">
                      Logo Lab
                    </span>
                  </div>

                  {/* Icon & Lab Name */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        {getLabIcon(lab.shortCode)}
                      </div>
                      <span className="font-mono text-xs font-black text-[#800000] tracking-wider">
                        {lab.shortCode}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#800000] transition-colors leading-snug min-h-[44px]">
                      {lab.name}
                    </h3>
                  </div>

                  {/* Deskripsi Fokus Riset */}
                  <p className="text-xs text-slate-600 leading-relaxed text-justify line-clamp-4 min-h-[72px]">
                    {lab.desc}
                  </p>

                  {/* Peralatan & Fasilitas Lab Utama (Disesuaikan) */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Wrench className="w-3 h-3 text-emerald-600" />
                      <span>Alat & Fasilitas Utama:</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {lab.equipment.slice(0, 3).map((eq, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200/80"
                        >
                          {eq}
                        </span>
                      ))}
                      {lab.equipment.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-100">
                          +{lab.equipment.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Action */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-2">
                  {lab.shortCode === 'WSDA' && onOpenFacilityShowcase && (
                    <button
                      type="button"
                      onClick={() => onOpenFacilityShowcase('fasilitas-prodi')}
                      className="w-full py-1.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-200/60"
                    >
                      <span>Lihat Foto Fasilitas & Praktikum WSDA</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {lab.hasSimulation ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenSimulation && lab.simulationType) {
                          onOpenSimulation(lab.simulationType);
                        } else if (onOpenLabDetail) {
                          onOpenLabDetail(labNum);
                        }
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Coba Simulator Interaktif</span>
                    </button>
                  ) : lab.id === 'pd' ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenFacilityShowcase) {
                          onOpenFacilityShowcase('pdev');
                        } else if (onOpenLabDetail) {
                          onOpenLabDetail(labNum);
                        }
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-[#800000] border border-rose-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#800000]" />
                      <span>Lihat 2 Foto Fasilitas PDEV</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenLabDetail) {
                          onOpenLabDetail(labNum);
                        }
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-rose-50 text-slate-800 hover:text-[#800000] border border-slate-200 hover:border-rose-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>Lihat Spesifikasi Lab</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Dots Indicators & Jump Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
            {TELKOM_LABORATORIES.map((lab, i) => (
              <button
                key={lab.id}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`transition-all rounded-full cursor-pointer ${
                  activeSlideIndex === i 
                    ? 'w-7 h-2.5 bg-[#800000]' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Lompat ke Lab ${lab.shortCode}`}
                aria-label={`Slide ${i + 1}: ${lab.shortCode}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
            <span>
              Menampilkan <strong className="text-slate-900 font-bold">{activeSlideIndex + 1}</strong> dari <strong className="text-slate-900 font-bold">{TELKOM_LABORATORIES.length}</strong> Laboratorium
            </span>
            <span className="hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => {
                if (onOpenLabDetail) onOpenLabDetail(1);
              }}
              className="hidden sm:inline-flex items-center gap-1 text-[#800000] font-bold hover:underline cursor-pointer"
            >
              <span>Lihat Semua Detail Fasilitas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
