import { useState, useEffect, useCallback, useRef } from 'react';
import { ServerStatus, ServerStatusState } from '../types/server';
import { fetchServerStatus } from '../services/api';

export function useServerStatus(autoRefreshInterval: number = 30000) {
  const [status, setStatus] = useState<ServerStatusState>({
    data: null,
    loading: true,
    error: null,
    lastUpdated: null,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const refresh = useCallback(async () => {
    setStatus(prev => ({ ...prev, loading: true, error: null }));

    try {
      const data = await fetchServerStatus();
      setStatus({
        data,
        loading: false,
        error: null,
        lastUpdated: new Date(),
      });
    } catch (error) {
      setStatus(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : '获取状态失败',
      }));
    }
  }, []);

  const startAutoRefresh = useCallback((interval: number = autoRefreshInterval) => {
    refresh();
    intervalRef.current = setInterval(refresh, interval);
  }, [refresh, autoRefreshInterval]);

  const stopAutoRefresh = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoRefresh();
    return () => stopAutoRefresh();
  }, [startAutoRefresh, stopAutoRefresh]);

  return {
    status,
    refresh,
    startAutoRefresh,
    stopAutoRefresh,
  };
}
