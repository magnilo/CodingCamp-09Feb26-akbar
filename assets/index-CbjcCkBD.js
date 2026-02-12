(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function d(e="#navbar",r={}){const a=document.querySelector(e);if(!a)return;const{active:o="home"}=r,t="/CodingCamp-09Feb26-akbar/";a.innerHTML=`
    <header class="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="${t}" class="flex items-center gap-2 font-semibold text-xl tracking-tight">
          <img src="${t}images/logo.svg" alt="Portfolio" class="h-8 w-8 rounded-lg" />
          <span>Portfolio.dev</span>
        </a>

        <nav class="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a class="${o==="home"?"text-white":"hover:text-white"}" href="${t}#about">About</a>
          <a class="${o==="projects"?"text-white":"hover:text-white"}" href="${t}#projects">Projects</a>
          <a class="${o==="skills"?"text-white":"hover:text-white"}" href="${t}#skills">Skills</a>
          <a class="${o==="contact"?"text-white":"hover:text-white"}" href="${t}#contact">Contact</a>
        </nav>

        <div class="flex items-center gap-2">
          <button id="themeToggle"
            class="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5">
            Theme
          </button>

          <a href="${t}dashboard.html"
            class="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition">
            Dashboard
          </a>
        </div>
      </div>
    </header>
  `}console.log("Main JS loaded, styles imported");d();document.getElementById("year").textContent=new Date().getFullYear();let n=[];function m(e){return`
  <article class="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 hover:border-white/10 transition-colors">
    <div class="aspect-[16/10] overflow-hidden">
      <img src="${e.image.startsWith("http")?e.image:`/CodingCamp-09Feb26-akbar/${e.image.replace(/^\//,"")}`}" alt="${e.title}"
        class="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <h3 class="font-semibold">${e.title}</h3>
      <p class="mt-2 text-sm text-zinc-300">${e.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${(e.tags||[]).slice(0,4).map(a=>`<span class="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">${a}</span>`).join("")}
      </div>
      <div class="mt-5 flex gap-3 text-sm">
        <a class="rounded-xl bg-white px-3 py-2 font-semibold text-zinc-950 hover:bg-white"
           href="${e.demo}" target="_blank" rel="noreferrer">Demo</a>
        <a class="rounded-xl border border-white/10 px-3 py-2 text-zinc-100 hover:bg-white/5"
           href="${e.repo}" target="_blank" rel="noreferrer">Repo</a>
      </div>
    </div>
  </article>`}function l(e){const r=document.getElementById("projectsGrid");r.innerHTML=e.map(m).join("")}async function h(){const e="/CodingCamp-09Feb26-akbar/data/projects.json";console.log("Fetching projects from:",e);const r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch projects.json: ${r.status} ${r.statusText}`);n=await r.json(),l(n)}h().catch(e=>console.error(e));document.getElementById("projectSearch").addEventListener("input",e=>{const r=e.target.value.trim().toLowerCase(),a=r?n.filter(o=>`${o.title} ${o.desc} ${(o.tags||[]).join(" ")}`.toLowerCase().includes(r)):n;l(a)});const c=document.getElementById("contactForm"),u=document.getElementById("contactStatus");c.addEventListener("submit",e=>{e.preventDefault();const r=Object.fromEntries(new FormData(c).entries());u.textContent=` Sent (demo). Thanks, ${r.name}!`,c.reset()});
