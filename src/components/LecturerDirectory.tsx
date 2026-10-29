import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Search, 
  Filter, 
  GraduationCap, 
  Users, 
  Award, 
  Mail, 
  Check, 
  X, 
  ChevronRight, 
  Sparkles, 
  BookOpen, 
  Building2, 
  LayoutGrid,
  Table as TableIcon,
  CheckCircle2
} from 'lucide-react';
import { LECTURERS_DATA, LecturerItem } from '../data/lecturerData';
import { LecturerPortrait } from './LecturerPortrait';

interface LecturerDirectoryProps {
  onSelectForThesisAdvisor?: (lecturer: LecturerItem) => void;
}

export const LecturerDirectory: React.FC<LecturerDirectoryProps> = ({ 
  onSelectForThesisAdvisor 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCluster, setSelectedCluster] = useState<string>('all');
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [leadershipOnly, setLeadershipOnly] = useState(false);
  const [doctorOnly, setDoctorOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'code' | 'nip'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  // Custom uploaded photos state persisted in localStorage
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  
  // Modal state
  const [selectedLecturer, setSelectedLecturer] = useState<LecturerItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load custom photos from localStorage on mount (read-only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('telu_lecturer_photos');
      if (stored) {
        setCustomPhotos(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Failed to parse stored lecturer photos:', e);
    }
  }, []);

  // Keep scroll safe and prevent freezing in iframe environment
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedLecturer]);

  // Global Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLecturer(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Copy email handler
  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    showToast('Alamat email berhasil disalin!');
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  // Filtered & Sorted Lecturers
  const filteredLecturers = useMemo(() => {
    return LECTURERS_DATA.filter((lec) => {
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const matchesName = lec.name.toLowerCase().includes(query);
        const matchesCode = lec.code.toLowerCase().includes(query);
        const matchesNip = lec.nip.includes(query);
        const matchesCluster = lec.cluster.toLowerCase().includes(query);
        const matchesLab = lec.associatedLab?.toLowerCase().includes(query) ?? false;
        const matchesResearch = lec.researchInterests.some(r => r.toLowerCase().includes(query));
        
        if (!matchesName && !matchesCode && !matchesNip && !matchesCluster && !matchesLab && !matchesResearch) {
          return false;
        }
      }

      if (selectedCluster !== 'all' && lec.cluster !== selectedCluster) {
        return false;
      }

      if (genderFilter !== 'all' && lec.gender !== genderFilter) {
        return false;
      }

      if (leadershipOnly && !lec.isLeadership) {
        return false;
      }

      if (doctorOnly && !lec.isDoctorOrProf) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'code') {
        return a.code.localeCompare(b.code);
      } else {
        return a.nip.localeCompare(b.nip);
      }
    });
  }, [searchQuery, selectedCluster, genderFilter, leadershipOnly, doctorOnly, sortBy]);

  const clusters = [
    { id: 'all', label: 'Semua Bidang (86)' },
    { id: 'ERP & Sistem Perusahaan', label: 'ERP & Sistem Perusahaan' },
    { id: 'Rantai Pasok & Logistik', label: 'Rantai Pasok & Logistik' },
    { id: 'Ergonomi & K3', label: 'Ergonomi & K3' },
    { id: 'Sistem Manufaktur & Otomasi', label: 'Sistem Manufaktur & Otomasi' },
    { id: 'Sains Data & Optimasi', label: 'Sains Data & Optimasi' },
    { id: 'Manajemen Teknologi & Mutu', label: 'Manajemen Teknologi & Mutu' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[110] bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs font-bold animate-slideDown">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header & Statistical Overview */}
      <div className="bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 border border-emerald-100 rounded-3xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direktori Resmi Fakultas Rekayasa Industri • Telkom University</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Civitas Dosen & Peneliti <span className="text-[#800000]">S1 Teknik Industri</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Direktori lengkap seluruh 86 tenaga pengajar, peneliti, dan pakar rekayasa industri bersertifikasi internasional IABEE (Washington Accord). Klik kartu dosen mana pun untuk melihat profil lengkap, kontak, atau memperbarui foto resmi.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            <div className="p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs text-center">
              <div className="text-2xl font-black text-[#800000] font-mono-tabular">86</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Total Dosen</div>
            </div>
            <div className="p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs text-center">
              <div className="text-2xl font-black text-emerald-700 font-mono-tabular">70</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Foto Resmi Kode</div>
            </div>
            <div className="p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs text-center">
              <div className="text-2xl font-black text-amber-600 font-mono-tabular">27</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Doktor & Prof</div>
            </div>
            <div className="p-3.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xs text-center">
              <div className="text-2xl font-black text-blue-700 font-mono-tabular">100%</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">IABEE Accredited</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Search & Filtering Controls */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        
        {/* Row 1: Search Bar & View Mode Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dosen berdasarkan nama, kode 3 huruf (e.g. RNO, AAS, TVY), NIP, atau keahlian..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-medium text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Shortcuts & View Mode Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#800000] cursor-pointer"
            >
              <option value="name">Urut: Nama (A - Z)</option>
              <option value="code">Urut: Kode Dosen (A - Z)</option>
              <option value="nip">Urut: NIP</option>
            </select>

            {/* View Mode Toggle (Grid vs Table) */}
            <div className="flex items-center border border-slate-200 bg-slate-50 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white text-[#800000] shadow-2xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Tampilan Kartu Foto"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'table' 
                    ? 'bg-white text-[#800000] shadow-2xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Tampilan Tabel Ringkas"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Cluster / Bidang Keahlian Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Kluster:
          </span>
          {clusters.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCluster(c.id)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCluster === c.id
                  ? 'bg-[#800000] text-white shadow-2xs'
                  : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Row 3: Secondary Filter Badges (Pimpinan, Doktor/Prof, Gender) */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Leadership Toggle */}
            <button
              onClick={() => setLeadershipOnly(!leadershipOnly)}
              className={`px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                leadershipOnly
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Pimpinan Prodi Saja</span>
            </button>

            {/* Doctor / Prof Toggle */}
            <button
              onClick={() => setDoctorOnly(!doctorOnly)}
              className={`px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                doctorOnly
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Doktor / Guru Besar Saja</span>
            </button>

            {/* Gender Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setGenderFilter('all')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                  genderFilter === 'all' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setGenderFilter('male')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                  genderFilter === 'male' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500'
                }`}
              >
                Dosen Pria
              </button>
              <button
                onClick={() => setGenderFilter('female')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                  genderFilter === 'female' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500'
                }`}
              >
                Dosen Wanita
              </button>
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-[11px] text-slate-500 font-medium">
            Menampilkan <strong className="text-slate-900 font-bold">{filteredLecturers.length}</strong> dari 86 dosen
          </div>
        </div>

      </div>

      {/* 3. Main Directory Display (GRID VIEW or TABLE VIEW) */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLecturers.map((lecturer) => {
            return (
              <div 
                key={lecturer.code}
                onClick={() => setSelectedLecturer(lecturer)}
                className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-rose-200 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Area (Portrait / Official Photo) */}
                <div className="relative aspect-3/4 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <LecturerPortrait 
                    lecturer={lecturer}
                    customPhoto={customPhotos[lecturer.code]}
                    className="w-full h-full"
                  />

                  {/* Top Status Badges */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between gap-1 pointer-events-none z-10">
                    {lecturer.role ? (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-400 text-slate-950 shadow-xs uppercase tracking-wider line-clamp-1 max-w-[130px]">
                        {lecturer.role.split(' ')[0]}
                      </span>
                    ) : lecturer.isDoctorOrProf ? (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-600 text-white shadow-xs uppercase tracking-wider">
                        Doktor
                      </span>
                    ) : <span />}

                    <span className="px-1.5 py-0.5 rounded bg-white/95 backdrop-blur-xs text-[9px] font-mono font-bold text-slate-800 shadow-2xs border border-slate-200">
                      {lecturer.code}
                    </span>
                  </div>
                </div>

                {/* Identity & Content Area */}
                <div className="p-4 flex flex-col justify-between flex-1 text-center space-y-2.5">
                  <div className="space-y-1">
                    {/* Full Name in Crimson Red #800000 */}
                    <h3 className="text-xs font-bold text-[#800000] group-hover:text-red-700 transition-colors leading-snug line-clamp-2 min-h-[32px]">
                      {lecturer.name}
                    </h3>

                    {/* Official NIP */}
                    <div className="text-[11px] text-slate-500 font-mono">
                      NIP: <span className="text-slate-700 font-semibold">{lecturer.nip}</span>
                    </div>

                    {/* Kode Dosen */}
                    <div className="text-[11px] text-slate-600 font-medium">
                      Kode Dosen : <span className="font-bold text-slate-900 font-mono">{lecturer.code}</span>
                    </div>
                  </div>

                  {/* Cluster Badge */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100/80 line-clamp-1">
                      {lecturer.cluster}
                    </span>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedLecturer(lecturer);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-rose-50 hover:bg-[#800000] text-[#800000] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group-hover:bg-[#800000] group-hover:text-white cursor-pointer"
                    >
                      <span>Lihat Informasi & Riset</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        /* TABLE VIEW (Compact & Comprehensive) */
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-4 w-16 text-center">Foto</th>
                  <th className="py-3.5 px-4">Nama Lengkap & Gelar</th>
                  <th className="py-3.5 px-4 font-mono">Kode</th>
                  <th className="py-3.5 px-4 font-mono">NIP</th>
                  <th className="py-3.5 px-4">Bidang Keahlian</th>
                  <th className="py-3.5 px-4">Laboratorium</th>
                  <th className="py-3.5 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredLecturers.map((lec) => (
                  <tr 
                    key={lec.code}
                    onClick={() => setSelectedLecturer(lec)}
                    className="hover:bg-rose-50/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-2.5 px-4 text-center">
                      <div className="w-10 h-12 rounded-lg overflow-hidden border border-slate-200 shadow-2xs mx-auto">
                        <LecturerPortrait 
                          lecturer={lec} 
                          customPhoto={customPhotos[lec.code]}
                          className="w-full h-full" 
                          size="sm" 
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#800000] group-hover:text-red-700 transition-colors leading-snug">
                        {lec.name}
                      </div>
                      {lec.role && (
                        <span className="inline-block px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-900 border border-amber-200 mt-0.5">
                          {lec.role}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800">
                        {lec.code}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-600">
                      {lec.nip}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {lec.cluster}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px]">
                      {lec.associatedLab || '-'}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLecturer(lec);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-rose-50 text-[#800000] hover:bg-[#800000] hover:text-white transition-colors text-[11px] font-bold cursor-pointer"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredLecturers.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-slate-800">Tidak ada data dosen yang sesuai</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Coba sesuaikan kata kunci pencarian atau ubah filter kluster keahlian Anda.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCluster('all');
              setGenderFilter('all');
              setLeadershipOnly(false);
              setDoctorOnly(false);
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Reset Semua Filter
          </button>
        </div>
      )}

      {/* =========================================================================
          4. INTERACTIVE LECTURER DETAIL MODAL (MOUNTED TO BODY VIA PORTAL)
         ========================================================================= */}
      {selectedLecturer && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 overflow-y-auto"
          onClick={() => setSelectedLecturer(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Always visible Floating Close Button on screen */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedLecturer(null);
            }}
            className="fixed top-4 right-4 z-[100000] px-3.5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xl flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all"
            aria-label="Tutup Dialog [ESC]"
          >
            <X className="w-4 h-4" />
            <span>Tutup [ESC]</span>
          </button>

          {/* Modal Container */}
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[88vh] my-auto relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header Banner */}
            <div className="bg-gradient-to-r from-[#800000] via-[#991b1b] to-emerald-800 text-white p-6 relative shrink-0">
              {/* Close Button Inside Header */}
              <button 
                type="button"
                onClick={() => setSelectedLecturer(null)}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center gap-1.5 transition-all cursor-pointer font-bold text-xs shadow-xs"
                aria-label="Tutup Dialog"
              >
                <span>Tutup</span>
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-amber-200 font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Profil Resmi Civitas Akademika S1 Teknik Industri</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-white mt-1 pr-20 leading-snug">
                {selectedLecturer.name}
              </h3>
              {selectedLecturer.role && (
                <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold shadow-xs">
                  {selectedLecturer.role}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Photo & Quick Meta Grid */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Photo Container */}
                <div className="flex flex-col items-center gap-2 mx-auto sm:mx-0 shrink-0">
                  <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative group">
                    <LecturerPortrait 
                      lecturer={selectedLecturer} 
                      customPhoto={customPhotos[selectedLecturer.code]}
                      className="w-full h-full" 
                      size="lg" 
                    />
                  </div>
                </div>

                {/* Metadata Cards */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Kode Dosen</div>
                      <div className="font-mono text-base font-black text-[#800000]">{selectedLecturer.code}</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">NIP Resmi</div>
                      <div className="font-mono text-xs font-bold text-slate-800">{selectedLecturer.nip}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl space-y-1">
                    <div className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Kluster Keahlian</div>
                    <div className="text-xs font-bold text-slate-900">{selectedLecturer.cluster}</div>
                  </div>

                  {selectedLecturer.associatedLab && (
                    <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-slate-500" /> Afiliasi Laboratorium
                      </div>
                      <div className="text-xs font-bold text-slate-800">{selectedLecturer.associatedLab}</div>
                    </div>
                  )}

                  {/* Official Email Copy Button */}
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${selectedLecturer.email}`}
                      className="flex-1 p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-xl transition-colors flex items-center gap-2 truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#800000] shrink-0" />
                      <span className="truncate">{selectedLecturer.email}</span>
                    </a>
                    <button
                      onClick={() => handleCopyEmail(selectedLecturer.email)}
                      className="px-3 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                      title="Salin Alamat Email"
                    >
                      {copiedEmail === selectedLecturer.email ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-emerald-700">Tersalin!</span>
                        </>
                      ) : (
                        <span>Salin</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio & Research Interests */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Profil Akademik & Pengajaran</h4>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {selectedLecturer.bio}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Topik Riset & Keahlian Utama</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedLecturer.researchInterests.map((interest, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-rose-50 text-[#800000] border border-rose-200 rounded-lg text-xs font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-slate-500">
                Tekan tombol <kbd className="font-mono bg-white border border-slate-300 px-1.5 py-0.5 rounded text-[10px] text-slate-700">ESC</kbd> atau klik di luar untuk menutup.
              </span>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {onSelectForThesisAdvisor && (
                  <button
                    onClick={() => {
                      onSelectForThesisAdvisor(selectedLecturer);
                      setSelectedLecturer(null);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 bg-[#800000] hover:bg-red-900 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Pilih Sebagai Pembimbing TA</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedLecturer(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
};

