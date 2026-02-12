export function mountNavbar(selector = "#navbar", opts = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const { active = "home" } = opts;

  el.innerHTML = `
    <header class="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" class="flex items-center gap-2 font-semibold text-xl tracking-tight">
          <span>Portfolio.dev</span>
        </a>

        <nav class="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a class="${active === "home" ? "text-white" : "hover:text-white"}" href="/#about">About</a>
          <a class="${active === "projects" ? "text-white" : "hover:text-white"}" href="/#projects">Projects</a>
          <a class="${active === "skills" ? "text-white" : "hover:text-white"}" href="/#skills">Skills</a>
          <a class="${active === "contact" ? "text-white" : "hover:text-white"}" href="/#contact">Contact</a>
        </nav>

        <div class="flex items-center gap-2">
          <button id="themeToggle"
            class="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5">
            Theme
          </button>

          <a href="/dashboard.html"
            class="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200">
            Dashboard
          </a>
        </div>
      </div>
    </header>
  `;
}
