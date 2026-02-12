export function mountNavbar(selector = "#navbar", opts = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const { active = "home" } = opts;

  const base = import.meta.env.BASE_URL;

  el.innerHTML = `
    <header class="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="${base}" class="flex items-center gap-2 font-semibold text-xl tracking-tight">
          <img src="${base}images/logo.svg" alt="Portfolio" class="h-8 w-8 rounded-lg" />
          <span>Portfolio.dev</span>
        </a>

        <nav class="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a class="${active === "home" ? "text-white" : "hover:text-white"}" href="${base}#about">About</a>
          <a class="${active === "projects" ? "text-white" : "hover:text-white"}" href="${base}#projects">Projects</a>
          <a class="${active === "skills" ? "text-white" : "hover:text-white"}" href="${base}#skills">Skills</a>
          <a class="${active === "contact" ? "text-white" : "hover:text-white"}" href="${base}#contact">Contact</a>
        </nav>

        <div class="flex items-center gap-2">
          <button id="themeToggle"
            class="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5">
            Theme
          </button>

          <a href="${base}dashboard.html"
            class="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition">
            Dashboard
          </a>
        </div>
      </div>
    </header>
  `;
}
