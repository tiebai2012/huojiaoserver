import { ServerStatus } from '../types/server';

const API_URL = 'https://motdbe.blackbe.work/api/java';
const SERVER_HOST = 'play.simpfun.cn:31313';

export async function fetchServerStatus(): Promise<ServerStatus> {
  try {
    const response = await fetch(`${API_URL}?host=${SERVER_HOST}`);
    if (!response.ok) {
      throw new Error('获取服务器状态失败');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
