```svelte
<script lang="ts">
  import { login, fetchMe } from './api.js';

  let nim: string = $state('');
  let password: string = $state('');
  let msg: string = $state('');
  let meStatus: string = $state('');

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

<div class="rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
  <h2 class="text-xl font-bold text-slate-900">
    Utility Card
  </h2>

  <p class="mb-5 mt-1 text-sm text-slate-500">
    CSS menggunakan Tailwind utility-first
  </p>

  <form
    class="flex flex-col gap-3"
    onsubmit={(event) => {
      event.preventDefault();
      masuk();
    }}
  >
    <label for="nim-utility" class="text-sm font-semibold text-slate-700">
      NIM
    </label>

    <input
      id="nim-utility"
      class="w-full box-border rounded-md border border-slate-300 p-2"
      bind:value={nim}
      placeholder="Masukkan NIM"
      required
    />

    <label
      for="password-utility"
      class="text-sm font-semibold text-slate-700"
    >
      Password
    </label>

    <input
      id="password-utility"
      type="password"
      class="w-full box-border rounded-md border border-slate-300 p-2"
      bind:value={password}
      placeholder="Masukkan password"
      required
    />

    <button
      class="mt-2 rounded-md bg-emerald-600 p-2.5 text-white hover:bg-emerald-700"
      type="submit"
    >
      Login
    </button>
  </form>

  {#if msg}
    <p class="mt-4 break-words text-sm text-green-700">{msg}</p>
  {/if}

  {#if meStatus}
    <p class="mt-2 break-words text-sm text-slate-600">{meStatus}</p>
  {/if}
</div>
```