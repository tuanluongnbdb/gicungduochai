/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  Sprout, 
  Droplets, 
  ShieldCheck, 
  Recycle, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Users,
  Microscope,
  Wind,
  Zap,
  HelpCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const GlassCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      "backdrop-blur-xl bg-white/40 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-8",
      "hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] transition-shadow duration-500",
      className
    )}
  >
    {children}
  </motion.div>
);

const SkeuoButton = ({ onClick, children, className, disabled }: { onClick: () => void, children: React.ReactNode, className?: string, disabled?: boolean }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
      "bg-gradient-to-b from-white to-gray-50 border border-gray-200/50",
      "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)]",
      "hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
      className
    )}
  >
    {children}
  </button>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-6">
    {Icon && <div className="p-2 rounded-xl bg-green-100/50 text-green-600"><Icon size={24} /></div>}
    <h2 className="text-3xl font-bold tracking-tight text-gray-800">{children}</h2>
  </div>
);

// --- Slides ---

const Slide1 = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-6">
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      className="mb-8 relative"
    >
      <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 animate-pulse" />
      <img 
        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400&h=400" 
        alt="Sprout" 
        referrerPolicy="no-referrer"
        className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-2xl relative z-10"
      />
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-800 mb-6 tracking-tighter"
    >
      CÔNG NGHỆ VI SINH<br/>TRONG NÔNG NGHIỆP 🌿
    </motion.h1>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap justify-center gap-4 text-gray-500 font-medium"
    >
      <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-white shadow-sm">
        <Users size={18} className="text-green-600" />
        <span>Nhóm thực hiện: Châu Gia Hân / Thạch Thị Bảo Hân / Vương Mộng Tuyền / Nguyễn Thị Thảo Nhi</span>
      </div>
      <div className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg shadow-green-200">
        Lớp 10T2
      </div>
    </motion.div>
  </div>
);

const Slide2 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center px-6">
    <div className="space-y-8">
      <SectionTitle icon={AlertTriangle}>Tại sao phải dùng vi sinh?</SectionTitle>
      
      <GlassCard className="bg-red-50/40 border-red-100/50">
        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} /> Thực trạng hiện nay
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Việc lạm dụng hóa chất trong thời gian dài đã khiến đất đai bị <span className="font-bold text-red-600 underline">bạc màu</span>, mất đi độ phì nhiêu tự nhiên và gây <span className="font-bold text-red-600 underline">ô nhiễm</span> nguồn nước nghiêm trọng.
        </p>
      </GlassCard>

      <GlassCard className="bg-green-50/40 border-green-100/50" delay={0.2}>
        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <CheckCircle2 size={20} /> Giải pháp bền vững
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Sử dụng <span className="font-bold text-green-600">Công nghệ vi sinh</span> - khai thác sức mạnh từ các vi sinh vật có lợi để phục hồi hệ sinh thái nông nghiệp.
        </p>
      </GlassCard>
    </div>

    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" 
            alt="Dry Land" 
            referrerPolicy="no-referrer"
            className="h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-red-900/20" />
          <div className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-md">Đất bạc màu</div>
        </div>
        <div className="relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" 
            alt="Green Field" 
            referrerPolicy="no-referrer"
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/10" />
          <div className="absolute bottom-6 right-6 text-white font-bold text-xl drop-shadow-md">Cánh đồng xanh</div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-white/50 backdrop-blur-sm z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl z-30 flex items-center justify-center text-green-600 font-bold">VS</div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="h-full flex flex-col justify-center px-6">
    <SectionTitle icon={Droplets}>Phân bón vi sinh (Dinh dưỡng từ đất)</SectionTitle>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <GlassCard className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Thành phần chính</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500" /> Vi khuẩn cố định đạm (Rhizobium)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500" /> Vi khuẩn phân giải lân
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Lợi ích vượt trội</h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Cung cấp đạm tự nhiên cho cây",
                  "Cải tạo đất, làm đất tơi xốp",
                  "Giảm 20 - 30% phân bón hóa học"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-green-50/50 rounded-xl border border-green-100/50">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Microscope size={20} className="text-blue-500" /> Ví dụ thực tế
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "Khi nhổ cây đậu lên, các nốt sần ở rễ chính là 'nhà' của vi khuẩn Rhizobium. Chúng lấy đạm từ không khí tặng cho cây, giúp cây xanh tốt mà không cần nhiều phân đạm hóa học."
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="space-y-6">
        <GlassCard className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-none">
          <div className="text-4xl font-black mb-1">-30%</div>
          <div className="text-sm opacity-90 font-medium">Lượng phân bón hóa học cần dùng</div>
        </GlassCard>
        <GlassCard className="bg-white/80">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-gray-700">Độ tơi xốp của đất</span>
            <span className="text-green-600 font-bold">+45%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-full bg-green-500" 
            />
          </div>
        </GlassCard>
      </div>
    </div>
  </div>
);

const Slide4 = () => (
  <div className="h-full flex flex-col justify-center px-6">
    <SectionTitle icon={ShieldCheck}>Thuốc bảo vệ thực vật sinh học (Lá chắn xanh)</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Đại diện tiêu biểu: Bacillus thuringiensis</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { title: "Chính xác", desc: "Chỉ tiêu diệt sâu hại mục tiêu, không hại côn trùng có lợi.", icon: Zap },
            { title: "An toàn", desc: "Tuyệt đối an toàn cho người, vật nuôi và môi trường.", icon: ShieldCheck },
            { title: "Sạch", desc: "Không để lại dư lượng độc hại trên nông sản sau thu hoạch.", icon: Droplets },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * i }}
              className="flex gap-4 p-4 hover:bg-white/60 rounded-2xl transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <GlassCard className="relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 z-10">
          <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">VÍ DỤ THỰC TẾ</div>
        </div>
        <div className="space-y-6">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600" 
              alt="Cabbage Pest" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="bg-white/50 p-6 rounded-2xl border border-white/50">
            <h4 className="font-bold text-gray-800 mb-2">Diệt sâu tơ hại rau cải</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              "Sâu ăn phải lá có dính vi khuẩn Bacillus thuringiensis sẽ bị 'đau bụng' rồi chết sau 2-3 ngày. Con người nếu lỡ dính vào tay hay hít phải cũng không bị ngộ độc như thuốc trừ sâu hóa học."
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
);

const Slide5 = () => (
  <div className="h-full flex flex-col justify-center px-6">
    <SectionTitle icon={Recycle}>Xử lý phế phẩm (Ủ phân Compost)</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-8">
        <GlassCard className="bg-orange-50/40 border-orange-100/50">
          <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-3">
            <Recycle size={24} /> Biến rác thành "Vàng đen"
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sử dụng các chế phẩm vi sinh (như nấm <span className="font-bold text-green-700">Trichoderma</span>) để biến rơm rạ, rác hữu cơ thành phân bón giàu dinh dưỡng thay vì đốt bỏ gây ô nhiễm.
          </p>
        </GlassCard>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Quy trình đơn giản</h4>
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">1</div>
            <p className="text-gray-600">Thu gom rơm rạ, phế phẩm nông nghiệp.</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">2</div>
            <p className="text-gray-600">Rắc chế phẩm vi sinh & duy trì độ ẩm.</p>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">3</div>
            <p className="text-gray-600">Sau 30-40 ngày thu được phân hữu cơ mùn.</p>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200 to-green-200 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
        <GlassCard className="relative p-2 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800" 
            alt="Composting" 
            referrerPolicy="no-referrer"
            className="w-full h-[450px] object-cover rounded-2xl"
          />
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white shadow-xl">
            <p className="text-sm text-gray-600 italic">"Rơm rạ được phân giải thành mùn hữu cơ sẫm màu, cung cấp nguồn dinh dưỡng dồi dào cho cây trồng."</p>
          </div>
        </GlassCard>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="h-full flex flex-col justify-center px-6">
    <SectionTitle icon={Wind}>Vi sinh trong Chăn nuôi</SectionTitle>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6">
        <GlassCard className="bg-blue-50/50 border-blue-100/50">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Dinh dưỡng & Sức khỏe</h3>
          <p className="text-gray-600 text-sm mb-4">Trộn men vi sinh trực tiếp vào thức ăn giúp:</p>
          <ul className="space-y-3">
            {[
              "Tăng cường hệ miễn dịch",
              "Hỗ trợ tiêu hóa tốt hơn",
              "Vật nuôi khỏe, ít bệnh tật",
              "Giảm chi phí thuốc kháng sinh"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                <CheckCircle2 size={16} className="text-blue-500" /> {item}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="bg-emerald-50/50 border-emerald-100/50">
          <h3 className="text-xl font-bold text-emerald-800 mb-4">Đệm lót sinh học</h3>
          <p className="text-gray-600 text-sm">Giải pháp khử mùi hôi chuồng trại tuyệt đối bằng cách trộn men vi sinh với trấu hoặc mùn cưa.</p>
        </GlassCard>
      </div>

      <div className="lg:col-span-2">
        <GlassCard className="h-full flex flex-col gap-6">
          <div className="h-[350px] relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1000" 
              alt="Chicken Bio-bedding" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h4 className="text-white text-2xl font-bold mb-2">Kiểm soát môi trường chuồng nuôi tối ưu</h4>
              <p className="text-white/80 max-w-lg">Hệ vi sinh vật thực hiện quá trình phân giải chất thải hữu cơ liên tục, duy trì độ khô ráo và vệ sinh môi trường, từ đó hạn chế các bệnh lý về chi và thị giác cho vật nuôi.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-gray-100 text-center">
              <div className="text-2xl font-black text-blue-600">0%</div>
              <div className="text-xs text-gray-400 font-bold uppercase">Mùi hôi</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 text-center">
              <div className="text-2xl font-black text-green-600">95%</div>
              <div className="text-xs text-gray-400 font-bold uppercase">Tỉ lệ sống</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-gray-100 text-center">
              <div className="text-2xl font-black text-orange-600">-40%</div>
              <div className="text-xs text-gray-400 font-bold uppercase">Công dọn dẹp</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="h-full flex flex-col items-center justify-center text-center px-6">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mb-12"
    >
      <div className="absolute inset-0 bg-green-400 blur-[100px] opacity-30" />
      <GlassCard className="max-w-3xl relative z-10 py-12 px-16 border-green-200/50">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Leaf size={40} />
        </div>
        <h2 className="text-4xl font-black text-gray-800 mb-8 tracking-tight">THÔNG ĐIỆP TỔNG KẾT</h2>
        <p className="text-2xl font-medium text-gray-600 leading-relaxed italic">
          "Đừng dùng hóa chất để ép buộc thiên nhiên,<br/>
          hãy dùng <span className="text-green-600 font-bold">vi sinh</span> để hợp tác với nó."
        </p>
      </GlassCard>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
      <GlassCard className="flex items-center gap-6 text-left py-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-xl">Lợi ích khổng lồ</h4>
          <p className="text-gray-500">Từ những sinh vật nhỏ bé nhất.</p>
        </div>
      </GlassCard>
      <GlassCard className="flex items-center gap-6 text-left py-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <Zap size={32} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-xl">Nông nghiệp xanh</h4>
          <p className="text-gray-500">Vì một tương lai bền vững.</p>
        </div>
      </GlassCard>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-12 text-gray-400 font-bold tracking-widest text-sm uppercase"
    >
      Cảm ơn thầy cô và các bạn đã lắng nghe!
    </motion.div>
  </div>
);

const QuestionSlide = ({ 
  question, 
  options, 
  correctIndex, 
  explanation, 
  questionNumber, 
  totalQuestions 
}: { 
  question: string, 
  options: string[], 
  correctIndex: number, 
  explanation?: string,
  questionNumber: number,
  totalQuestions: number
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="h-full flex flex-col justify-center px-6">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-sm">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Câu hỏi ôn tập</h2>
        </div>
        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          Câu {questionNumber} / {totalQuestions}
        </div>
      </div>

      <GlassCard className="max-w-4xl mx-auto w-full">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
          {question}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                if (selected === null) {
                  setSelected(i);
                  setShowFeedback(true);
                }
              }}
              className={cn(
                "p-5 rounded-2xl text-left transition-all duration-300 border-2 flex items-center gap-4 group",
                selected === null 
                  ? "bg-white border-gray-100 hover:border-purple-200 hover:bg-purple-50/30" 
                  : i === correctIndex 
                    ? "bg-green-50 border-green-500 text-green-800" 
                    : i === selected 
                      ? "bg-red-50 border-red-500 text-red-800" 
                      : "bg-gray-50 border-gray-100 opacity-50"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors",
                selected === null 
                  ? "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600" 
                  : i === correctIndex 
                    ? "bg-green-500 text-white" 
                    : i === selected 
                      ? "bg-red-500 text-white" 
                      : "bg-gray-200 text-gray-400"
              )}>
                {String.fromCharCode(65 + i)}
              </div>
              <span className="font-medium">{option}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-8 p-6 rounded-2xl bg-purple-50/50 border border-purple-100 overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-2 rounded-xl text-white shrink-0",
                  selected === correctIndex ? "bg-green-500" : "bg-red-500"
                )}>
                  {selected === correctIndex ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    {selected === correctIndex ? "Chính xác!" : "Chưa đúng rồi!"}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Đáp án đúng là <span className="font-bold text-green-600">{String.fromCharCode(65 + correctIndex)}</span>. {explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(0.85);
  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <QuestionSlide 
      questionNumber={1}
      totalQuestions={4}
      question="Loại vi khuẩn nào 'thân thiết' với rễ cây họ Đậu, giúp cây tự tạo ra đạm mà không cần bón phân hóa học?"
      options={["Bacillus thuringiensis", "Rhizobium", "Saccharomyces (Nấm men)", "E. coli"]}
      correctIndex={1}
      explanation="Rhizobium cộng sinh trong nốt sần rễ cây họ Đậu, giúp cố định nitơ từ không khí thành đạm cho cây."
    />,
    <QuestionSlide 
      questionNumber={2}
      totalQuestions={4}
      question="Tại sao chế phẩm vi khuẩn Bacillus thuringiensis lại tiêu diệt được sâu hại mà không gây hại cho con người?"
      options={["Vì cơ thể người có hệ miễn dịch mạnh hơn sâu bọ.", "Vì vi khuẩn này chỉ nhận diện và tấn công tế bào của côn trùng.", "Vì độc tố của nó chỉ hoạt động trong môi trường kiềm của ruột sâu.", "Vì con người không ăn lá cây trực tiếp như các loại sâu."]}
      correctIndex={2}
      explanation="Độc tố Bacillus thuringiensis chỉ được kích hoạt trong môi trường kiềm (pH cao) của ruột sâu, trong khi dạ dày người có môi trường axit."
    />,
    <QuestionSlide 
      questionNumber={3}
      totalQuestions={4}
      question="Thay vì đốt rơm rạ gây khói bụi mù mịt, việc dùng vi sinh để ủ phân Compost giúp ích gì?"
      options={["Giảm ô nhiễm không khí và tạo ra phân bón hữu cơ rẻ tiền.", "Làm cho rơm rạ cứng như kim loại.", "Giúp ruộng lúa có nhiều oxy hơn để... thở.", "Chẳng có ích gì cả, chỉ tốn thời gian"]}
      correctIndex={0}
      explanation="Ủ phân Compost giúp tận dụng phế phẩm nông nghiệp, bảo vệ môi trường và cải tạo đất bền vững."
    />,
    <QuestionSlide 
      questionNumber={4}
      totalQuestions={4}
      question="Trong đệm lót sinh học, các vi sinh vật thực hiện quá trình nào để khử mùi hôi?"
      options={["Hấp thụ khí độc và giữ chặt chúng trong lớp mùn cưa.", "Ức chế sự phát triển của các loại vi khuẩn gây bệnh cho vật nuôi.", "Phân hủy các chất hữu cơ và chuyển hóa khí gây mùi thành chất không mùi.", "Tạo ra mùi thơm đặc trưng để lấn át mùi hôi của chuồng trại."]}
      correctIndex={2}
      explanation="Vi sinh vật phân giải các hợp chất hữu cơ trong chất thải, ngăn chặn sự hình thành các khí gây mùi như NH3 hay H2S."
    />,
    <Slide7 />
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans selection:bg-green-100 selection:text-green-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-emerald-200/10 blur-[100px] rounded-full" />
      </div>

      {/* Header / Progress */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-200">
            <Sprout size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-gray-800">AGRIBIOTECH</span>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Zoom Control */}
          <div className="hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-200 shadow-sm">
            <Zap size={14} className="text-orange-500" />
            <input 
              type="range" 
              min="0.5" 
              max="1" 
              step="0.05" 
              value={zoomLevel} 
              onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
              className="w-24 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-green-600"
            />
            <span className="text-[10px] font-bold text-gray-500 w-8">{Math.round(zoomLevel * 100)}%</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-1">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    currentSlide === i ? "w-8 bg-green-600" : "w-2 bg-gray-200"
                  )} 
                />
              ))}
            </div>
            <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-500 shadow-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-screen pt-24 pb-32 relative z-10 overflow-hidden">
        <motion.div 
          animate={{ scale: zoomLevel }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ transformOrigin: "center center" }}
          className="max-w-7xl mx-auto h-full px-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Navigation Controls */}
      <footer className="fixed bottom-0 left-0 w-full z-50 p-8 flex justify-center pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <SkeuoButton 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className="group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </SkeuoButton>
          
          <SkeuoButton 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className="bg-green-600 text-white from-green-500 to-green-700 border-green-600 shadow-green-200 group"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">Tiếp theo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </SkeuoButton>
        </div>
      </footer>

      {/* Decorative Floating Icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] text-green-200 opacity-50"
        >
          <Leaf size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[5%] text-blue-200 opacity-50"
        >
          <Droplets size={48} />
        </motion.div>
      </div>
    </div>
  );
}
