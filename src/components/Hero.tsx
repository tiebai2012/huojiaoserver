import { Zap, Users, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
          <Gamepad2 className="w-5 h-5 text-orange-500" />
          <span className="text-slate-300 font-medium">Minecraft 1.20.1 Forge 服务器</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
          火教集团
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">
            附属服务器
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          探索由MTR火车模组打造的精彩世界<br />
          与玩家社区一起踏上铁路之旅
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">实时状态</h3>
            <p className="text-slate-400 text-sm">24小时在线监控</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">活跃社区</h3>
            <p className="text-slate-400 text-sm">玩家互助交流</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Gamepad2 className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">MTR模组</h3>
            <p className="text-slate-400 text-sm">专业火车模组体验</p>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="#status"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
          >
            查看服务器状态
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
