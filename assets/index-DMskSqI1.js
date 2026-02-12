(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function d(e="#navbar",r={}){const n=document.querySelector(e);if(!n)return;const{active:o="home"}=r;n.innerHTML=`
    <header class="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" class="flex items-center gap-2 font-semibold text-xl tracking-tight">
          <img src="/images/logo.svg" alt="Portfolio" class="h-8 w-8 rounded-lg" />
          <span>Portfolio.dev</span>
        </a>

        <nav class="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a class="${o==="home"?"text-white":"hover:text-white"}" href="/#about">About</a>
          <a class="${o==="projects"?"text-white":"hover:text-white"}" href="/#projects">Projects</a>
          <a class="${o==="skills"?"text-white":"hover:text-white"}" href="/#skills">Skills</a>
          <a class="${o==="contact"?"text-white":"hover:text-white"}" href="/#contact">Contact</a>
        </nav>

        <div class="flex items-center gap-2">
          <button id="themeToggle"
            class="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5">
            Theme
          </button>

          <a href="/dashboard.html"
            class="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition">
            Dashboard
          </a>
        </div>
      </div>
    </header>
  `}console.log("Main JS loaded, styles imported");d();document.getElementById("year").textContent=new Date().getFullYear();let i=[];function u(e){return`
  <article class="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 hover:border-white/10 transition-colors">
    <div class="aspect-[16/10] overflow-hidden">
      <img src="${e.image}" alt="${e.title}"
        class="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <h3 class="font-semibold">${e.title}</h3>
      <p class="mt-2 text-sm text-zinc-300">${e.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${(e.tags||[]).slice(0,4).map(r=>`<span class="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">${r}</span>`).join("")}
      </div>
      <div class="mt-5 flex gap-3 text-sm">
        <a class="rounded-xl bg-white px-3 py-2 font-semibold text-zinc-950 hover:bg-white"
           href="${e.demo}" target="_blank" rel="noreferrer">Demo</a>
        <a class="rounded-xl border border-white/10 px-3 py-2 text-zinc-100 hover:bg-white/5"
           href="${e.repo}" target="_blank" rel="noreferrer">Repo</a>
      </div>
    </div>
  </article>`}function l(e){const r=document.getElementById("projectsGrid");r.innerHTML=e.map(u).join("")}async function f(){i=await(await fetch("/src/data/projects.json")).json(),l(i)}f();document.getElementById("projectSearch").addEventListener("input",e=>{const r=e.target.value.trim().toLowerCase(),n=r?i.filter(o=>`${o.title} ${o.desc} ${(o.tags||[]).join(" ")}`.toLowerCase().includes(r)):i;l(n)});const c=document.getElementById("contactForm"),h=document.getElementById("contactStatus");c.addEventListener("submit",e=>{e.preventDefault();const r=Object.fromEntries(new FormData(c).entries());h.textContent=` Sent (demo). Thanks, ${r.name}!`,c.reset()});
