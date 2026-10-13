
export const BASE: string = 'http://localhost:3000/api/v1';

export interface AuthUser {
  id: number;
  nim: string;
  nama: string;
  role: string;
}

export interface LoginData {
  token: string;
  user: AuthUser;
}

interface ApiEnvelope<T> {
  status: boolean;
  message: string;
  data: T;
}

export async function login(
  nim: string,
  password: string,
): Promise<LoginData> {
  let res: Response;

  try {
    res = await fetch(`${BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nim, password }),
    });
  } catch {
    throw new Error(
      'Tidak dapat terhubung ke server. Pastikan backend berjalan pada http://localhost:3000.',
    );
  }

  const body: ApiEnvelope<LoginData> = await res.json();

  if (!res.ok) {
    throw new Error(`Gagal (${res.status}): ${body.message}`);
  }

  localStorage.setItem('token', body.data.token);
  return body.data;
}

export interface MeResult {
  status: number;
  body: ApiEnvelope<AuthUser>;
}

export async function fetchMe(): Promise<MeResult> {
  const token: string | null = localStorage.getItem('token');
  let res: Response;

  try {
    res = await fetch(`${BASE}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch {
    throw new Error(
      'Tidak dapat terhubung ke server. Pastikan backend berjalan pada http://localhost:3000.',
    );
  }

  return { status: res.status, body: await res.json() };
}
