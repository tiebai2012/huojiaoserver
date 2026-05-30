# 🚂 火教集团附属服务器

> Minecraft 1.20.1 Forge MTR火车模组服务器官方网站

[![Minecraft Version](https://img.shields.io/badge/Minecraft-1.20.1-orange.svg)](https://www.minecraft.net/)
[![Forge Version](https://img.shields.io/badge/Forge-1.20.1-blue.svg)](https://files.minecraftforge.net/)
[![Mod](https://img.shields.io/badge/Mod-MTR火车模组-red.svg)](https://www.curseforge.com/minecraft/mc-mods/minecraft-transit-railway)

## 🎯 项目简介

火教集团附属服务器是一个基于Minecraft 1.20.1版本的Forge服务器，集成了MTR（Minecraft Transit Railway）火车模组。本网站提供服务器实时状态监控，让玩家随时了解服务器运行情况。

## ✨ 功能特点

### 📊 实时状态监控
- **在线状态显示** - 实时显示服务器在线/离线状态
- **玩家数量统计** - 展示当前在线玩家数和最大容量
- **延迟监测** - 显示服务器响应延迟
- **在线玩家列表** - 查看当前在线的玩家名称

### 🎨 界面设计
- **MTR主题风格** - 采用火车/铁路工业美学设计
- **深色主题** - 护眼的深色配色方案
- **响应式布局** - 完美适配桌面端、平板和移动端
- **流畅动画** - 精心设计的过渡动画效果

### 🔧 技术特性
- **30秒自动刷新** - 服务器状态每30秒自动更新
- **一键复制** - 服务器地址一键复制功能
- **错误处理** - 优雅的错误状态展示
- **API集成** - 实时对接服务器状态API

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

```bash
# 克隆项目
git clone https://github.com/tiebai2012/huojiaoserver.git

# 进入项目目录
cd huojiaoserver

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📁 项目结构

```
huojiaoserver/
├── src/
│   ├── components/           # React组件
│   │   ├── Header.tsx       # 顶部导航栏
│   │   ├── Hero.tsx         # 主横幅区域
│   │   ├── ServerStatus.tsx # 服务器状态卡片（核心）
│   │   ├── ServerInfo.tsx   # 服务器信息模块
│   │   └── Footer.tsx       # 页脚组件
│   ├── hooks/               # 自定义Hooks
│   │   └── useServerStatus.ts # 服务器状态管理
│   ├── services/            # API服务
│   │   └── api.ts           # API调用封装
│   ├── types/               # TypeScript类型定义
│   │   └── server.ts        # 服务器数据类型
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── public/                  # 静态资源
├── .trae/                   # 文档目录
│   └── documents/           # PRD和技术文档
├── package.json             # 项目配置
├── vite.config.ts           # Vite配置
├── tailwind.config.js       # Tailwind CSS配置
└── tsconfig.json            # TypeScript配置
```

## 🔌 API集成

本项目使用以下API获取服务器状态：

```
https://motdbe.blackbe.work/api/java?host=play.simpfun.cn:31313
```

### 服务器信息
- **服务器地址**: `play.simpfun.cn:31313`
- **游戏版本**: 1.20.1
- **服务器类型**: Forge模组服务器
- **核心模组**: MTR (Minecraft Transit Railway)

## 🎮 加入服务器

1. 启动Minecraft 1.20.1
2. 安装Forge 1.20.1
3. 安装服务器模组包
4. 添加服务器地址: `play.simpfun.cn:31313`
5. 开始你的火车之旅！

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **图标库**: Lucide React
- **HTTP客户端**: Fetch API
- **编程语言**: TypeScript

## 📝 文档

- [产品需求文档(PRD)](.trae/documents/PRD-火教集团服务器网站.md)
- [技术架构文档](.trae/documents/技术架构文档-火教集团服务器网站.md)

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

本项目采用MIT许可证。

---

> 🚂 *探索MTR的精彩世界，与玩家社区一起踏上铁路之旅！*
