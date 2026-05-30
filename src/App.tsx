import Header from './components/Header';
import Hero from './components/Hero';
import ServerStatusCard from './components/ServerStatus';
import ServerInfo from './components/ServerInfo';
import Footer from './components/Footer';
import { useServerStatus } from './hooks/useServerStatus';

function App() {
  const { status, refresh } = useServerStatus(30000);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <ServerStatusCard
          status={status.data}
          loading={status.loading}
          error={status.error}
          lastUpdated={status.lastUpdated}
          onRefresh={refresh}
        />
        <ServerInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
