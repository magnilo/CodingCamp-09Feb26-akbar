import "../styles/main.css";
console.log("Main JS loaded, styles imported");
import { mountNavbar } from "./components/navbar.js";

mountNavbar();

document.getElementById("year").textContent = new Date().getFullYear();

let projectsCache = [];

function projectCard(p) {
  return `
  <article class="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 hover:border-white/10 transition-colors">
    <div class="aspect-[16/10] overflow-hidden">
      <img src="${p.image}" alt="${p.title}"
        class="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]" />
    </div>
    <div class="p-5">
      <h3 class="font-semibold">${p.title}</h3>
      <p class="mt-2 text-sm text-zinc-300">${p.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${(p.tags || [])
          .slice(0, 4)
          .map(
            (t) =>
              `<span class="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">${t}</span>`,
          )
          .join("")}
      </div>
      <div class="mt-5 flex gap-3 text-sm">
        <a class="rounded-xl bg-white px-3 py-2 font-semibold text-zinc-950 hover:bg-white"
           href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>
        <a class="rounded-xl border border-white/10 px-3 py-2 text-zinc-100 hover:bg-white/5"
           href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>
      </div>
    </div>
  </article>`;
}

function renderProjects(list) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = list.map(projectCard).join("");
}

async function loadProjects() {
  const res = await fetch("/src/data/projects.json");
  projectsCache = await res.json();
  renderProjects(projectsCache);
}

loadProjects();

document.getElementById("projectSearch").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = !q
    ? projectsCache
    : projectsCache.filter((p) =>
        `${p.title} ${p.desc} ${(p.tags || []).join(" ")}`
          .toLowerCase()
          .includes(q),
      );
  renderProjects(filtered);
});

// Demo contact
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("contactStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  statusEl.textContent = ` Sent (demo). Thanks, ${data.name}!`;
  form.reset();
});
