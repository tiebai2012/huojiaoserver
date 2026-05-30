import { Heart, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">火教集团附属服务器</h3>
            <p className="text-slate-400 leading-relaxed">
              为Minecraft玩家提供优质的MTR火车模组游戏体验
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">快速链接</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-slate-400 hover:text-orange-500 transition-colors">
                首页
              </a>
              <a href="#status" className="block text-slate-400 hover:text-orange-500 transition-colors">
                服务器状态
              </a>
              <a href="#info" className="block text-slate-400 hover:text-orange-500 transition-colors">
                服务器信息
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">联系我们</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                QQ群: 123456789
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2024 火教集团附属服务器. 所有权利保留.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              用
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              和
              <span className="text-orange-500 font-bold">Minecraft</span>
              制作
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
