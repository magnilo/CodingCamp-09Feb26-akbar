(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function d(e="#navbar",t={}){const n=document.querySelector(e);if(!n)return;const{active:o="home"}=t;n.innerHTML=`
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
  `}console.log("Main JS loaded, styles imported");d();document.getElementById("year").textContent=new Date().getFullYear();let a=[];function m(e){return`
  <article class="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 hover:border-white/10 transition-colors">
    <div class="aspect-[16/10] overflow-hidden">
      <img src="${e.image.startsWith("http")?e.image:new URL(e.image,"/CodingCamp-09Feb26-akbar/").toString()}" alt="${e.title}"
        class="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <h3 class="font-semibold">${e.title}</h3>
      <p class="mt-2 text-sm text-zinc-300">${e.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${(e.tags||[]).slice(0,4).map(n=>`<span class="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">${n}</span>`).join("")}
      </div>
      <div class="mt-5 flex gap-3 text-sm">
        <a class="rounded-xl bg-white px-3 py-2 font-semibold text-zinc-950 hover:bg-white"
           href="${e.demo}" target="_blank" rel="noreferrer">Demo</a>
        <a class="rounded-xl border border-white/10 px-3 py-2 text-zinc-100 hover:bg-white/5"
           href="${e.repo}" target="_blank" rel="noreferrer">Repo</a>
      </div>
    </div>
  </article>`}function l(e){const t=document.getElementById("projectsGrid");t.innerHTML=e.map(m).join("")}async function h(){const e=new URL("data/projects.json","/CodingCamp-09Feb26-akbar/").toString();console.log("Fetching projects from:",e);const t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch projects.json: ${t.status} ${t.statusText}`);a=await t.json(),l(a)}h().catch(e=>console.error(e));document.getElementById("projectSearch").addEventListener("input",e=>{const t=e.target.value.trim().toLowerCase(),n=t?a.filter(o=>`${o.title} ${o.desc} ${(o.tags||[]).join(" ")}`.toLowerCase().includes(t)):a;l(n)});const c=document.getElementById("contactForm"),u=document.getElementById("contactStatus");c.addEventListener("submit",e=>{e.preventDefault();const t=Object.fromEntries(new FormData(c).entries());u.textContent=` Sent (demo). Thanks, ${t.name}!`,c.reset()});
