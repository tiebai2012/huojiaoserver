import { useState } from 'react';
import { Wifi, WifiOff, Users, Clock, Activity, Copy, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { ServerStatus } from '../types/server';

interface ServerStatusCardProps {
  status: ServerStatus | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  onRefresh: () => void;
}

function parseMotd(motd: string): string {
  return motd.replace(/§[0-9a-fk-or]/gi, '');
}

export default function ServerStatusCard({ status, loading, error, lastUpdated, onRefresh }: ServerStatusCardProps) {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.simpfun.cn:31313';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const isOnline = status?.status === 'online';
  const playerList = status?.sample?.map(p => p.name) || [];

  return (
    <section id="status" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.1) 100px,
              rgba(255,255,255,0.1) 101px
            )
          `
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            服务器状态
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            实时监控服务器运行状态，了解在线玩家数量
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading && !status ? (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center">
              <div className="flex items-center justify-center gap-3 text-orange-500 mb-4">
                <RefreshCw className="w-8 h-8 animate-spin" />
                <span className="text-2xl font-bold">正在获取服务器状态...</span>
              </div>
              <p className="text-slate-400">请稍候</p>
            </div>
          ) : error && !status ? (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 text-center">
              <div className="flex items-center justify-center gap-3 text-red-500 mb-4">
                <AlertCircle className="w-8 h-8" />
                <span className="text-2xl font-bold">获取状态失败</span>
              </div>
              <p className="text-slate-400 mb-6">{error}</p>
              <button
                onClick={onRefresh}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                重试
              </button>
            </div>
          ) : status ? (
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-b border-slate-700/50 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {isOnline ? (
                      <>
                        <div className="relative">
                          <Wifi className="w-8 h-8 text-green-500" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">服务器在线</h3>
                          <p className="text-slate-400 text-sm">正在运行中</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <WifiOff className="w-8 h-8 text-red-500" />
                        <div>
                          <h3 className="text-2xl font-bold text-red-500">服务器离线</h3>
                          <p className="text-slate-400 text-sm">当前无法连接</p>
                        </div>
                      </>
                    )}
                  </div>
                  <button
                    onClick={onRefresh}
                    className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-all duration-300 hover:scale-110"
                    title="刷新状态"
                  >
                    <RefreshCw className={`w-5 h-5 text-slate-300 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-3xl font-black text-white mb-2 break-words">
                    {parseMotd(status.motd || '火教集团附属服务器').split('\n')[0]}
                  </h4>
                  {status.motd && parseMotd(status.motd).split('\n').length > 1 && (
                    <p className="text-amber-500 font-medium mb-2">
                      {parseMotd(status.motd).split('\n')[1]}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-slate-400">
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm font-medium">
                      {status.version || '1.20.1'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Activity className="w-4 h-4" />
                      {status.delay}ms
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-orange-500" />
                      <h5 className="text-slate-300 font-semibold">在线玩家</h5>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">
                        {status.online || 0}
                      </span>
                      <span className="text-slate-400 text-xl">
                        / {status.max || 0}
                      </span>
                    </div>
                    <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
                        style={{
                          width: `${((status.online || 0) / (status.max || 1)) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-orange-500" />
                      <h5 className="text-slate-300 font-semibold">延迟</h5>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">
                        {status.delay}
                      </span>
                      <span className="text-slate-400 text-xl">ms</span>
                    </div>
                    <p className="mt-4 text-slate-400 text-sm">
                      {status.delay < 50 ? '网络连接优秀' : status.delay < 100 ? '网络连接良好' : '网络连接一般'}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-white font-bold mb-4">服务器地址</h5>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 flex items-center justify-between">
                      <code className="text-orange-500 font-mono text-lg break-all">{serverIP}</code>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                        copied
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          已复制
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          复制地址
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {playerList && playerList.length > 0 && (
                  <div>
                    <h5 className="text-white font-bold mb-4">在线玩家列表</h5>
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                      <div className="flex flex-wrap gap-2">
                        {playerList.map((player, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-slate-700/50 rounded-lg text-slate-300 text-sm font-medium hover:bg-orange-500/20 hover:text-orange-500 transition-colors cursor-default"
                          >
                            {player}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {lastUpdated && (
                <div className="border-t border-slate-700/50 px-8 py-4 bg-slate-900/30">
                  <p className="text-slate-500 text-sm text-center">
                    最后更新: {formatTime(lastUpdated)}
                    {loading && ' (正在更新...)'}
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
