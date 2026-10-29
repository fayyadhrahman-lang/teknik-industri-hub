import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Sparkles, 
  Search, 
  MapPin, 
  Maximize2, 
  X, 
  Play, 
  ArrowRight, 
  Layers, 
  Cpu, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Compass,
  Clock,
  Info,
  Calendar,
  Eye,
  Sliders,
  Activity,
  Wrench
} from 'lucide-react';
import { PRODI_FACILITIES_DATA, FacilityItem, FacilityPhoto } from '../data/facilityData';

interface FasilitasProdiPageProps {
  onNavigateToSimulator?: (simType: 'ergonomics' | 'manufacturing') => void;
  onNavigateToTab?: (tab: string) => void;
}

export const FasilitasProdiPage: React.FC<FasilitasProdiPageProps> = ({
  onNavigateToSimulator,
  onNavigateToTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxPhoto, setLightboxPhoto] = useState<FacilityPhoto | null>(null);
  const [activeSpotlightLab, setActiveSpotlightLab] = useState<'pdev' | 'wsda' | 'semua'>('pdev');

  // Filter facilities based on category and search query
  const filteredFacilities = useMemo(() => {
    return PRODI_FACILITIES_DATA.filter((facility) => {
      const matchCategory = selectedCategory === 'semua' || facility.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const matchName = facility.name.toLowerCase().includes(query);
      const matchCode = facility.code.toLowerCase().includes(query);
      const matchTagline = facility.tagline.toLowerCase().includes(query);
      const matchOverview = facility.overview.toLowerCase().includes(query);
      const matchBuilding = facility.building.toLowerCase().includes(query);
      const matchCourse = facility.supportedCourses.some(c => c.toLowerCase().includes(query));
      const matchInstrument = facility.photos.some(p => 
        p.keyInstruments.some(inst => inst.name.toLowerCase().includes(query) || inst.description.toLowerCase().includes(query))
      );

      return matchCategory && (matchName || matchCode || matchTagline || matchOverview || matchBuilding || matchCourse || matchInstrument);
    });
  }, [selectedCategory, searchQuery]);

  const wsdaFacility = useMemo(() => {
    return PRODI_FACILITIES_DATA.find(f => f.id === 'wsda');
  }, []);

  const pdevFacility = useMemo(() => {
    return PRODI_FACILITIES_DATA.find(f => f.id === 'pdev');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24 animate-fadeIn">
      
      {/* ============================================================== */}
      {/* 1. HERO BANNER: FASILITAS PROGRAM STUDI                       */}
      {/* ============================================================== */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#400000] to-emerald-950 text-white pt-14 pb-20 px-6 overflow-hidden border-b border-emerald-900/40">
        
        {/* Subtle Decorative Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-emerald-200/80 font-medium">
            <button 
              type="button"
              onClick={() => onNavigateToTab && onNavigateToTab('beranda')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <span>/</span>
            <span className="text-emerald-300 font-bold">Campus Life</span>
            <span>/</span>
            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded-md">Fasilitas Program Studi</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Standar Mutu IABEE Criteria 6 & BAN-PT Unggul</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
                Fasilitas Program Studi <br />
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                  S1 Teknik Industri Telkom University
                </span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Ekosistem laboratorium rekayasa sistem kerja terpadu, studio komputasi industri, dan sarana riset modern yang dirancang untuk membekali calon insinyur dengan kompetensi empiris kelas dunia.
              </p>

              {/* Notice Regarding Continuous Photo Additions */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md max-w-2xl">
                <Info className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200 space-y-0.5">
                  <span className="font-bold text-amber-200 block">Dokumentasi Laboratorium Terverifikasi:</span>
                  <span>
                    Galeri ini telah dilengkapi dengan dokumentasi resmi stasiun kerja <strong>Work System Design & Analysis (WSDA) Laboratory</strong> dan <strong>Product Development (PDEV) Laboratory</strong> (Studio Cetak 3D & Praktikum Komputasi). Dokumentasi laboratorium lainnya akan terus ditambahkan bertahap.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Metric Highlights */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">10</span>
                <span className="text-xs font-bold text-white block">Laboratorium Riset</span>
                <p className="text-[11px] text-slate-300 leading-tight">Mencakup ergonomi, otomasi, logistik, hingga enterprise SAP.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">144</span>
                <span className="text-xs font-bold text-white block">SKS Praktikum Terpadu</span>
                <p className="text-[11px] text-slate-300 leading-tight">Pengalaman hands-on langsung sejak semester awal perkuliahan.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-display">100%</span>
                <span className="text-xs font-bold text-white block">Standar Washington Accord</span>
                <p className="text-[11px] text-slate-300 leading-tight">Fasilitas memenuhi kriteria akreditasi teknik global.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-rose-300 font-display">24/7</span>
                <span className="text-xs font-bold text-white block">Simulator Virtual</span>
                <p className="text-[11px] text-slate-300 leading-tight">Akses praktikum digital ergonomi & manufaktur cerdas.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SPOTLIGHT UTAMA: LABORATORIUM DENGAN FOTO DOKUMENTASI RESMI */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20 space-y-6">
        
        {/* Lab Showcase Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white/95 p-2 rounded-2xl border border-emerald-100 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveSpotlightLab('pdev')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpotlightLab === 'pdev'
                  ? 'bg-[#800000] text-white shadow-md'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
              }`}
            >
              <Layers className="w-4 h-4 text-rose-300" />
              <span>Product Development (PDEV Lab)</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                activeSpotlightLab === 'pdev' ? 'bg-white/20 text-white' : 'bg-rose-100 text-[#800000] font-bold'
              }`}>
                2 Foto Baru
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSpotlightLab('wsda')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpotlightLab === 'wsda'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>WSDA Lab (Ergonomi & Sistem Kerja)</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                activeSpotlightLab === 'wsda' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800 font-bold'
              }`}>
                2 Foto
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSpotlightLab('semua')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer hidden md:flex items-center gap-1.5 ${
                activeSpotlightLab === 'semua'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Tampilkan Kedua Lab</span>
            </button>
          </div>

          <span className="text-[11px] font-bold text-slate-500 px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60 hidden lg:inline-block">
            Dokumentasi Fasilitas Real Telkom University
          </span>
        </div>

        {/* 2A. PDEV LAB SHOWCASE */}
        {pdevFacility && (activeSpotlightLab === 'pdev' || activeSpotlightLab === 'semua') && (
          <div className="bg-white rounded-3xl border border-rose-100 shadow-xl overflow-hidden animate-fadeIn">
            
            {/* PDEV Header Strip */}
            <div className="bg-gradient-to-r from-[#800000] via-[#5c0a0a] to-slate-950 p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-rose-400 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-xs">
                      Fasilitas Unggulan Aktif • 2 Foto Dokumentasi Baru
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-rose-200 text-xs font-mono">
                      Kode Lab: {pdevFacility.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-rose-200 text-xs">
                      {pdevFacility.building}, {pdevFacility.floor} ({pdevFacility.roomCode})
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <div className="w-24 h-11 bg-white rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                      <img src="/assets/aistudio/PDEV-1024x320_42269fb3.png" alt="Logo PDEV Lab" className="max-h-full max-w-full object-contain" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {pdevFacility.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-rose-100/90 max-w-3xl leading-relaxed">
                    {pdevFacility.overview}
                  </p>
                </div>

                {/* Quick Consultation Link */}
                <div className="shrink-0 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => onNavigateToTab && onNavigateToTab('ai-advisor')}
                    className="px-5 py-3 rounded-2xl bg-white hover:bg-rose-50 text-slate-900 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 text-[#800000]" />
                    <span>Konsultasi Riset PDEV</span>
                  </button>
                </div>
              </div>
            </div>

            {/* PDEV 2 REAL DOCUMENTED PHOTOS */}
            <div className="p-6 sm:p-8 space-y-8">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#800000] uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-[#800000]" />
                  <span>Dokumentasi Stasiun Riset & Praktikum Nyata PDEV Lab</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Eksplorasi Fasilitas & Pembelajaran di Product Development Laboratory
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                  Berikut merupakan dua fasilitas kerja utama PDEV Lab yang telah terdokumentasi: Workshop Rapid Prototyping Cetak 3D dan Ruang Praktikum Komputasi Desain Produk Terintegrasi.
                </p>
              </div>

              {/* Grid of the 2 PDEV Photos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {pdevFacility.photos.map((photo, pIdx) => (
                  <div 
                    key={photo.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Image Frame with interactive Lightbox Trigger */}
                      <div 
                        className="relative aspect-16/10 bg-slate-900 overflow-hidden cursor-pointer"
                        onClick={() => setLightboxPhoto(photo)}
                        title="Klik untuk memperbesar foto dalam resolusi tinggi"
                      >
                        <img 
                          src={photo.url} 
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/20">
                            Foto {pIdx + 1}: {photo.badge}
                          </span>
                        </div>

                        {/* Expand Icon Button */}
                        <button
                          type="button"
                          className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-white hover:bg-[#800000] transition-colors border border-white/20 shadow-md flex items-center gap-1.5 text-xs font-medium"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Perbesar</span>
                        </button>
                      </div>

                      {/* Photo Content: Concise Title & Keterangan Tempat Fasilitas Saja */}
                      <div className="p-5 space-y-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#800000] bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                            {photo.badge}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#800000] transition-colors">
                            {photo.title}
                          </h4>
                        </div>

                        {/* Keterangan Tempat Fasilitas Saja (seperti permintaan user) */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <MapPin className="w-4 h-4 text-[#800000] shrink-0" />
                            <span>Keterangan Tempat Fasilitas:</span>
                          </div>
                          <p className="text-xs text-slate-600 pl-5.5 leading-relaxed font-medium">
                            {photo.locationInfo}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer with Quick Lightbox Trigger */}
                    <div className="p-3.5 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                        Dokumentasi Resmi PDEV Lab
                      </span>
                      <button
                        type="button"
                        onClick={() => setLightboxPhoto(photo)}
                        className="text-[#800000] hover:text-[#500000] font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Lihat Resolusi Penuh</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* PDEV Callout Banner */}
              <div className="bg-gradient-to-r from-rose-50 via-amber-50 to-rose-100/60 border border-rose-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-[#800000] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-rose-700" />
                    <span>Inovasi Produk & Fabrikasi Prototipe 3D</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    Tertarik Menciptakan Desain Produk Inovatif & Purwarupa Cepat di PDEV Lab?
                  </h4>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                    PDEV Lab siap mendukung proyek Capstone Design, penelitian Tugas Akhir, serta inkubasi produk mahasiswa dari tahap Voice of Customer (QFD) hingga pencetakan fisik 3D.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigateToTab && onNavigateToTab('ai-advisor')}
                  className="px-6 py-3 bg-[#800000] hover:bg-[#600000] text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2 hover:gap-3"
                >
                  <Layers className="w-4 h-4" />
                  <span>Konsultasikan Riset PDEV</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* 2B. WSDA LAB SHOWCASE */}
        {wsdaFacility && (activeSpotlightLab === 'wsda' || activeSpotlightLab === 'semua') && (
          <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden animate-fadeIn">
            
            {/* WSDA Section Header Strip */}
            <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-[#700000] p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-xs">
                      Fasilitas Unggulan Aktif • 2 Foto Dokumentasi
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-emerald-200 text-xs font-mono">
                      Kode Lab: {wsdaFacility.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-emerald-200 text-xs">
                      {wsdaFacility.building}, {wsdaFacility.floor} ({wsdaFacility.roomCode})
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <div className="w-24 h-11 bg-white rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                      <img src="/assets/aistudio/LOGO-APK-768x256_41689650.png" alt="Logo APK & E WSDA" className="max-h-full max-w-full object-contain" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {wsdaFacility.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-100 max-w-3xl leading-relaxed">
                    {wsdaFacility.overview}
                  </p>
                </div>

                {/* Quick Simulation Link */}
                <div className="shrink-0 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => onNavigateToSimulator && onNavigateToSimulator('ergonomics')}
                    className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Buka Simulator WSDA</span>
                  </button>
                </div>
              </div>
            </div>

            {/* WSDA 2 REAL DOCUMENTED PHOTOS */}
            <div className="p-6 sm:p-8 space-y-8">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <span>Dokumentasi Stasiun Riset & Praktikum Nyata WSDA Lab</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Eksplorasi Fasilitas & Pembelajaran di Laboratorium WSDA
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                  Berikut merupakan dua stasiun kerja utama yang telah terdokumentasi, dirancang khusus untuk memfasilitasi riset faktor manusia, pengukuran fisiologis kerja, serta simulasi perakitan lini manufaktur terpadu.
                </p>
              </div>

              {/* Grid of the 2 WSDA Photos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {wsdaFacility.photos.map((photo, pIdx) => (
                  <div 
                    key={photo.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Image Frame with interactive Lightbox Trigger */}
                      <div 
                        className="relative aspect-16/10 bg-slate-900 overflow-hidden cursor-pointer"
                        onClick={() => setLightboxPhoto(photo)}
                        title="Klik untuk memperbesar foto dalam resolusi tinggi"
                      >
                        <img 
                          src={photo.url} 
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/20">
                            Foto {pIdx + 1}: {photo.badge}
                          </span>
                        </div>

                        {/* Expand Icon Button */}
                        <button
                          type="button"
                          className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-white hover:bg-emerald-600 transition-colors border border-white/20 shadow-md flex items-center gap-1.5 text-xs font-medium"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Perbesar</span>
                        </button>
                      </div>

                      {/* Photo Content: Concise Title & Keterangan Tempat Fasilitas Saja */}
                      <div className="p-5 space-y-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                            {photo.badge}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                            {photo.title}
                          </h4>
                        </div>

                        {/* Keterangan Tempat Fasilitas */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <MapPin className="w-4 h-4 text-[#800000] shrink-0" />
                            <span>Keterangan Tempat Fasilitas:</span>
                          </div>
                          <p className="text-xs text-slate-600 pl-5.5 leading-relaxed font-medium">
                            {photo.locationInfo}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer with Quick Lightbox Trigger */}
                    <div className="p-3.5 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Dokumentasi Resmi WSDA
                      </span>
                      <button
                        type="button"
                        onClick={() => setLightboxPhoto(photo)}
                        className="text-emerald-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Lihat Resolusi Penuh</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* WSDA Simulator Interactive Box */}
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100/60 border border-emerald-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>Simulasi Interaktif 3D Workstation Ergonomis</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    Ingin Mempraktikkan Pengaturan Meja, Kursi, & Postur Tubuh Sesuai Kaidah WSDA?
                  </h4>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                    Aplikasi ini telah dilengkapi simulator digital interaktif untuk menguji postur duduk operator, ketinggian siku, sudut leher, dan jarak pandang monitor secara realtime dengan umpan balik ergonomis langsung.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigateToSimulator && onNavigateToSimulator('ergonomics')}
                  className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2 hover:gap-3"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Jalankan Simulator Ergonomi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

      </section>

      {/* ============================================================== */}
      {/* 3. DIREKTORI SELURUH FASILITAS & LABORATORIUM PRODI            */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-16 space-y-8">
        
        {/* Section Heading & Category Tabs */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Arsitektur Fasilitas Akademik & Riset
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Direktori Fasilitas Program Studi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Telusuri seluruh laboratorium, studio perancangan, dan ruang kelas cerdas. Dokumentasi visual akan terus diperbarui secara berkala seiring berjalannya semester.
              </p>
            </div>

            {/* Search Input Filter */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Cari fasilitas, instrumen, mata kuliah..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'semua', label: 'Semua Fasilitas' },
              { id: 'produk', label: 'Inovasi Produk (PDEV Lab)' },
              { id: 'ergonomi', label: 'Ergonomi & K3 (WSDA)' },
              { id: 'manufaktur', label: 'Manufaktur & Otomasi Cerdas' },
              { id: 'komputasi', label: 'Enterprise Systems & Komputasi' },
              { id: 'classroom', label: 'Smart Classroom & Studio' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (cat.id === 'produk') {
                    setActiveSpotlightLab('pdev');
                  } else if (cat.id === 'ergonomi') {
                    setActiveSpotlightLab('wsda');
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => {
            const hasPhotos = facility.photos && facility.photos.length > 0;

            return (
              <div 
                key={facility.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                      {facility.code}
                    </span>

                    {hasPhotos ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{facility.photos.length} Foto Tersedia</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>Dokumentasi Segera Hadir</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-700 line-clamp-1">
                      {facility.tagline}
                    </p>
                  </div>

                  {/* Overview Text */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {facility.overview}
                  </p>

                  {/* Location & Specs */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                      <span className="font-medium">{facility.building}, {facility.floor}</span>
                    </div>

                    {facility.specs.slice(0, 2).map((sp, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>{sp.label}:</span>
                        <span className="font-semibold text-slate-700 text-right line-clamp-1">{sp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Supported Courses Tags */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {facility.supportedCourses.slice(0, 2).map((crs, cIdx) => (
                      <span key={cIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                        {crs}
                      </span>
                    ))}
                    {facility.supportedCourses.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px]">
                        +{facility.supportedCourses.length - 2} MK
                      </span>
                    )}
                  </div>

                </div>

                {/* Bottom Action Area */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  {facility.hasSimulation ? (
                    <button
                      type="button"
                      onClick={() => onNavigateToSimulator && facility.simulationType && onNavigateToSimulator(facility.simulationType)}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Coba Simulator</span>
                    </button>
                  ) : hasPhotos ? (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSpotlightLab(facility.id === 'pdev' ? 'pdev' : 'wsda');
                        window.scrollTo({ top: 350, behavior: 'smooth' });
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Lihat Galeri Foto ({facility.photos.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="w-full text-center py-2 text-[11px] text-slate-400 font-mono">
                      Galeri Foto Bertahap Diperbarui
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Extensibility Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Pengembangan Fasilitas Berkelanjutan
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Fasilitas Program Studi Akan Terus Ditambahkan
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Program Studi S1 Teknik Industri Telkom University terus melakukan pemutakhiran sarana laboratorium secara berkala. Dokumentasi fotografi resolusi tinggi untuk laboratorium Sistem Produksi Otomasi, Enterprise Systems ERP SAP, Pemodelan Stokastik, serta Smart Collaborative Studios akan diunggah ke laman ini secara bertahap.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-300 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Dukungan Penuh Riset Tugas Akhir & Capstone
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Terhubung dengan Industri Melalui MBKM
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 4. LIGHTBOX MODAL: FULL RESOLUTION PHOTO VIEWER                */}
      {/* ============================================================== */}
      {lightboxPhoto && (
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn overflow-y-auto"
          onClick={() => setLightboxPhoto(null)}
        >
          {/* Close Button Top Right */}
          <button
            type="button"
            onClick={() => setLightboxPhoto(null)}
            className="fixed top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 transition-all cursor-pointer shadow-lg border border-white/20"
            title="Tutup (ESC)"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Area */}
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black overflow-hidden flex items-center justify-center">
              <img 
                src={lightboxPhoto.url} 
                alt={lightboxPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                {lightboxPhoto.badge}
              </div>
            </div>

            {/* Modal Image Details & Location Info */}
            <div className="p-6 bg-slate-900 text-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30 inline-block mb-1">
                    {lightboxPhoto.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {lightboxPhoto.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxPhoto(null)}
                  className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Tutup Tampilan Penuh
                </button>
              </div>

              {/* Keterangan Tempat Fasilitas Prominent Box */}
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
                    Keterangan Tempat Fasilitas:
                  </span>
                  <p className="text-slate-100 font-medium">
                    {lightboxPhoto.locationInfo}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1 border-t border-slate-800/80">
                <span>{lightboxPhoto.standardCompliance}</span>
                <span>{lightboxPhoto.id.startsWith('pdev') ? 'Product Development Laboratory (PDEV Lab)' : 'Work System Design & Analysis (WSDA Lab)'} Telkom University</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
