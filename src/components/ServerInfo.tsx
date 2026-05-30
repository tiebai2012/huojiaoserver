import { Monitor, Puzzle, BookOpen, Lightbulb } from 'lucide-react';

export default function ServerInfo() {
  return (
    <section id="info" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            服务器信息
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            了解服务器详细配置和游戏指南
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Monitor className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">游戏版本</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-slate-300">
                <span>Minecraft版本</span>
                <span className="font-bold text-orange-500">1.20.1</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>游戏模式</span>
                <span className="font-bold text-orange-500">生存模式</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>服务器类型</span>
                <span className="font-bold text-orange-500">Forge模组服</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>最大玩家数</span>
                <span className="font-bold text-orange-500">100人</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Puzzle className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">核心模组</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-300">MTR - Minecraft Transit Railway</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-300">JEI - 物品管理器</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-300">OptiFine - 性能优化</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-300">以及其他辅助模组</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">加入教程</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <p className="text-slate-300 pt-1">安装Minecraft 1.20.1版本</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <p className="text-slate-300 pt-1">安装Forge 1.20.1版本</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <p className="text-slate-300 pt-1">安装服务器提供的模组包</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <p className="text-slate-300 pt-1">在多人游戏中添加服务器并开始冒险</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">服务器特色</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500 text-lg">🚂</span>
                </div>
                <p className="text-slate-300 pt-1">专业的MTR火车模组体验</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500 text-lg">🏗️</span>
                </div>
                <p className="text-slate-300 pt-1">自由建造和设计铁路系统</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500 text-lg">👥</span>
                </div>
                <p className="text-slate-300 pt-1">活跃的玩家社区</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-amber-500 text-lg">🕐</span>
                </div>
                <p className="text-slate-300 pt-1">24小时稳定运行</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
