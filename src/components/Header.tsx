import { Train, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Train className="w-8 h-8 text-orange-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                火教集团附属服务器
              </h1>
              <p className="text-xs text-slate-400">MTR 火车模组服务器</p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-slate-300 hover:text-orange-500 transition-colors font-medium">
              首页
            </a>
            <a href="#status" className="text-slate-300 hover:text-orange-500 transition-colors font-medium">
              服务器状态
            </a>
            <a href="#info" className="text-slate-300 hover:text-orange-500 transition-colors font-medium">
              服务器信息
            </a>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700/50">
          <div className="px-4 py-3 space-y-2">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              首页
            </a>
            <a
              href="#status"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              服务器状态
            </a>
            <a
              href="#info"
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-300 hover:text-orange-500 transition-colors font-medium py-2"
            >
              服务器信息
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
