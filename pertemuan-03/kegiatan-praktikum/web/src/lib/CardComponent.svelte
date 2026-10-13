```svelte
<script lang="ts">
  import { login, fetchMe } from './api.js';

  interface Props {
    title?: string;
    subtitle?: string;
  }

  let nim: string = $state('');
  let password: string = $state('');
  let msg: string = $state('');
  let meStatus: string = $state('');

  let {
    title = 'Component Card',
    subtitle = 'CSS di dalam komponen',
  }: Props = $props();

  async function masuk(): Promise<void> {
    try {
      const data = await login(nim, password);
      msg = `Halo ${data.user.nama} (${data.user.role})`;

      const me = await fetchMe();
      meStatus = `GET /auth/me → ${me.status}`;
      console.log('GET /auth/me →', me.status, me.body);
    } catch (e) {
      msg = e instanceof Error ? e.message : 'Login gagal';
    }
  }
</script>

<div class="card">
  <h2>{title}</h2>
  <p class="subtitle">{subtitle}</p>

  <form
    onsubmit={(event) => {
      event.preventDefault();
      masuk();
    }}
  >
    <label for="nim-component">NIM</label>
    <input
      id="nim-component"
      class="input"
      bind:value={nim}
      placeholder="Masukkan NIM"
      required
    />

    <label for="password-component">Password</label>
    <input
      id="password-component"
      class="input"
      type="password"
      bind:value={password}
      placeholder="Masukkan password"
      required
    />

    <button class="btn" type="submit">Login</button>
  </form>

  {#if msg}
    <p class="message">{msg}</p>
  {/if}

  {#if meStatus}
    <p class="status">{meStatus}</p>
  {/if}
</div>

<style>
  .card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #cbd5e1;
    box-shadow: 0 4px 8px rgb(0 0 0 / 5%);
  }

  h2 {
    margin: 0;
    color: #0f172a;
    font-size: 20px;
  }

  .subtitle {
    color: #64748b;
    font-size: 14px;
    margin: 6px 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    color: #334155;
    font-size: 14px;
    font-weight: 600;
  }

  .input {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font: inherit;
  }

  .btn {
    padding: 10px;
    margin-top: 6px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .message {
    margin-bottom: 0;
    color: #166534;
    overflow-wrap: anywhere;
  }

  .status {
    color: #475569;
    font-size: 13px;
    overflow-wrap: anywhere;
  }
</style>
```