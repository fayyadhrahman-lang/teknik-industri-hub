import React, { useState, useEffect } from 'react';
import { User, GraduationCap } from 'lucide-react';
import { LecturerItem } from '../data/lecturerData';

// Map uploaded raw images by lecturer code for bulletproof fallback
export const AISTUDIO_LECTURER_PHOTO_MAP: Record<string, string> = {
  "AAS": "/assets/lecturers/AAS.png",
  "AJI": "/assets/lecturers/AJI.png",
  "AKY": "/assets/lecturers/AKY.png",
  "RNO": "/assets/lecturers/RNO.png",
  "ALK": "/assets/aistudio/ALK_89413faf.png",
  "ATN": "/assets/aistudio/ATN_6385264e.png",
  "ATU": "/assets/aistudio/ATU_4c52692e.png",
  "BAR": "/assets/aistudio/BAR_227cbd4a.png",
  "BDB": "/assets/aistudio/BDB_1de3b648.png",
  "BDO": "/assets/aistudio/BDO_3c5d7f0a.png",
  "BDS": "/assets/aistudio/BDB_1de3b648.png",
  "BPH": "/assets/aistudio/BPH_b7cc5651.png",
  "BPT": "/assets/aistudio/BPT_dbfa9e0c.png",
  "CTW": "/assets/aistudio/CTW_c6442550.png",
  "DCO": "/assets/aistudio/DCO_25f7581c.png",
  "EBS": "/assets/aistudio/EBS_63a42cbb.png",
  "ECH": "/assets/aistudio/ECH_a706d19b.png",
  "FDC": "/assets/aistudio/FDC_43dc7427.png",
  "FHB": "/assets/aistudio/FHB_8cc756f7.png",
  "FID": "/assets/aistudio/FID_ba3a8f61.png",
  "FRD": "/assets/aistudio/FRD_0c582bbe.png",
  "FRI": "/assets/aistudio/FRI_4d198973.png",
  "HAO": "/assets/aistudio/HAO_4034d7d0.png",
  "HDG": "/assets/aistudio/HDG_4cbc1195.png",
  "HLL": "/assets/aistudio/HLL_7e443d2d.png",
  "HRS": "/assets/aistudio/HRS_21771dc6.png",
  "IKP": "/assets/aistudio/IKP_343a2c2e.png",
  "INK": "/assets/aistudio/INK_3250ae85.png",
  "IPV": "/assets/aistudio/IPV_1263d48e.png",
  "ITP": "/assets/aistudio/ITP_95219f83.png",
  "LCN": "/assets/aistudio/LCN_4e621dad.png",
  "MDE": "/assets/aistudio/MDE_ba0bcd1a.png",
  "MDR": "/assets/aistudio/MDR_b1a1a779.png",
  "MFT": "/assets/aistudio/MFT_6ef5729e.png",
  "MLR": "/assets/aistudio/MLR_88db97f4.png",
  "MMO": "/assets/aistudio/MMO_d5b88cf0.png",
  "MNS": "/assets/aistudio/MNS_c386e18e.png",
  "MQB": "/assets/aistudio/MQB_bc0d3d2d.png",
  "MRN": "/assets/aistudio/MRN_5ba9faeb.png",
  "MRW": "/assets/aistudio/MRW_4b49cc7f.png",
  "MRY": "/assets/aistudio/MRY_44656493.png",
  "NAG": "/assets/aistudio/NAG_b6c9afc7.png",
  "NDG": "/assets/aistudio/NDG_33fb9be2.png",
  "NDT": "/assets/aistudio/NDT_0b2b28e7.png",
  "NPA": "/assets/aistudio/NPA_44268a19.png",
  "NPD": "/assets/aistudio/NPD_8fbf31bf.png",
  "OKF": "/assets/aistudio/OKF_5f18d737.png",
  "PLU": "/assets/aistudio/PLU_ebc4f669.png",
  "PPS": "/assets/aistudio/PPS_53bb1294.png",
  "RMN": "/assets/aistudio/RMN_3dd968cf.png",
  "RSR": "/assets/aistudio/RSR_630bfbc6.png",
  "RYP": "/assets/aistudio/RYP_0ac618c8.png",
  "SCN": "/assets/aistudio/SCN_34bfcacd.png",
  "SIN": "/assets/aistudio/SIN_58723a47.png",
  "SMM": "/assets/aistudio/SMM_1d63c1aa.png",
  "SRI": "/assets/aistudio/SRI_28ed875d.png",
  "SWU": "/assets/aistudio/SWU_e2ba096a.png",
  "TDS": "/assets/aistudio/TDS_c80a50a1.png",
  "TTG": "/assets/aistudio/TTG_6e1d6731.png",
  "TVY": "/assets/aistudio/TVY_8fc383b6.png",
  "WIY": "/assets/aistudio/WIY_0822b531.png",
  "WNT": "/assets/aistudio/WNT_ec3dd769.png",
  "WRT": "/assets/aistudio/WRT_177094b6.png",
  "YFN": "/assets/aistudio/YFN_2578c930.png",
  "YGN": "/assets/aistudio/YGN_ef1fbd93.png",
  "YIA": "/assets/aistudio/YIA_0885c80f.png",
  "YLA": "/assets/aistudio/YLA_8113d283.png",
  "YRW": "/assets/aistudio/YRW_82bfb086.png",
  "YTR": "/assets/aistudio/YTR_5843ba19.png",
  "ZMS": "/assets/aistudio/ZMS_82aa2e1d.png"
};

interface LecturerPortraitProps {
  lecturer: LecturerItem;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  customPhoto?: string | null;
}

export const LecturerPortrait: React.FC<LecturerPortraitProps> = ({ 
  lecturer, 
  className = '',
  customPhoto
}) => {
  const { photoUrl, isPlaceholderLogo, code, name, isDoctorOrProf } = lecturer;
  
  // Resolve primary target image path
  const primarySrc = customPhoto || photoUrl || AISTUDIO_LECTURER_PHOTO_MAP[code] || `/assets/lecturers/${code}.png`;
  
  const [currentSrc, setCurrentSrc] = useState<string | null>(primarySrc || null);
  const [imgError, setImgError] = useState(false);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  // Sync state if lecturer changes
  useEffect(() => {
    const nextSrc = customPhoto || photoUrl || AISTUDIO_LECTURER_PHOTO_MAP[code] || `/assets/lecturers/${code}.png`;
    setCurrentSrc(nextSrc);
    setImgError(false);
    setHasTriedFallback(false);
  }, [customPhoto, photoUrl, code]);

  const handleImageError = () => {
    // If primary /assets/lecturers/... fails, try /assets/aistudio/... mapping
    if (!hasTriedFallback && AISTUDIO_LECTURER_PHOTO_MAP[code] && currentSrc !== AISTUDIO_LECTURER_PHOTO_MAP[code]) {
      setHasTriedFallback(true);
      setCurrentSrc(AISTUDIO_LECTURER_PHOTO_MAP[code]);
      return;
    }

    // If that also fails, fall back to academic silhouette
    setImgError(true);
  };

  // 1. Real Photograph Available and Working
  if (currentSrc && !imgError) {
    return (
      <div className={`relative overflow-hidden bg-slate-100 flex items-center justify-center select-none ${className}`}>
        <img 
          src={currentSrc} 
          alt={name} 
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
        
        {/* Official photo indicator pill */}
        <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-full bg-slate-900/80 text-[8px] font-bold text-white tracking-wider uppercase shadow-xs backdrop-blur-xs flex items-center gap-1 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Foto Resmi</span>
        </div>
      </div>
    );
  }

  // 2. Official Website Placeholder Logo (Geometric Cube / Isometric Tiles)
  if (isPlaceholderLogo) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center select-none ${className}`}>
        {/* Isometric Tel-U Blue Motif */}
        <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] drop-shadow-xs">
          <polygon points="120,25 135,18 142,28 127,35" fill="#1e293b" />
          <polygon points="75,35 110,22 118,52 83,65" fill="#335372" />
          <polygon points="35,70 70,55 78,85 43,100" fill="#2d4964" />
          <polygon points="40,110 75,95 83,125 48,140" fill="#3b5e82" />
          <polygon points="75,135 110,120 118,150 83,165" fill="#2b4764" />
          <polygon points="115,40 145,30 152,58 122,68" fill="#5885a7" />
          <polygon points="85,68 125,52 133,85 93,101" fill="#4d779b" />
          <polygon points="90,115 130,98 138,131 98,148" fill="#5c87ab" />
          <polygon points="125,128 155,118 162,145 132,155" fill="#719dbd" />
          <polygon points="148,45 172,38 178,58 154,65" fill="#9bbccf" />
          <polygon points="135,72 165,60 172,88 142,100" fill="#8aaec4" />
          <polygon points="140,105 170,95 176,120 146,130" fill="#a4c6d8" />
          <polygon points="160,110 182,102 186,122 164,130" fill="#bed8e5" />
          <polygon points="128,160 152,152 156,170 132,178" fill="#b0cedd" />
          <polygon points="90,170 115,162 119,180 94,188" fill="#9bbdce" />
        </svg>

        {/* Micro-badge */}
        <div className="absolute bottom-2 inset-x-0 mx-auto w-fit px-2 py-0.5 rounded-full bg-slate-800/80 text-[9px] font-mono font-bold text-white tracking-widest shadow-xs pointer-events-none">
          {code}
        </div>
      </div>
    );
  }

  // 3. Clean, Fast, High-Fidelity Executive Academic Badge & Silhouette
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-200/80 flex flex-col items-center justify-center p-4 select-none ${className}`}>
      {/* Background Academic Seal Accent */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <GraduationCap className="w-36 h-36 text-[#800000]" />
      </div>

      {/* Center Silhouette with Tel-U Formal Colors */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar Ring */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-rose-100 via-white to-slate-100 border-2 border-rose-200/80 shadow-inner flex items-center justify-center relative">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-[#800000]/70" />
          
          {/* Degree Badge */}
          {isDoctorOrProf && (
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs text-[10px]" title="Doktor / Guru Besar">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        {/* 3-Letter Code Monogram */}
        <div className="mt-2.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-white font-mono font-bold text-[10px] tracking-widest shadow-2xs">
          {code}
        </div>
      </div>
    </div>
  );
};
