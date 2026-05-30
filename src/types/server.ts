export interface ServerStatus {
  status: string;
  host: string;
  motd: string;
  agreement: number;
  version: string;
  online: number;
  max: number;
  sample: Array<{
    id: string;
    name: string;
  }>;
  favicon: string;
  delay: number;
  error?: string;
}

export interface ServerStatusState {
  data: ServerStatus | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}
