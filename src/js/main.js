import "../styles/main.css";
console.log("Main JS loaded, styles imported");
import { mountNavbar } from "./components/navbar.js";

mountNavbar();

document.getElementById("year").textContent = new Date().getFullYear();

let projectsCache = [];

function projectCard(p) {
  // If p.image is an absolute URL (http/https), use it directly.
  // Otherwise, treat it as relative to the base URL.
  const imgSrc = p.image.startsWith("http")
    ? p.image
    : `${import.meta.env.BASE_URL}${p.image.replace(/^\//, "")}`; // Ensure no double slash if p.image starts with /

  return `
  <article class="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 hover:border-white/10 transition-colors">
    <div class="aspect-[16/10] overflow-hidden">
      <img src="${imgSrc}" alt="${p.title}"
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
  // Fix: import.meta.env.BASE_URL is a path (e.g. "/repo/"), not a full URL,
  // so new URL() constructor fails if used as base without origin.
  // We can just concatenate since BASE_URL includes trailing slash.
  const url = `${import.meta.env.BASE_URL}data/projects.json`;
  console.log("Fetching projects from:", url);

  const res = await fetch(url);
  if (!res.ok)
    throw new Error(
      `Failed to fetch projects.json: ${res.status} ${res.statusText}`,
    );

  projectsCache = await res.json();
  renderProjects(projectsCache);
}

loadProjects().catch((err) => console.error(err));

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

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("contactStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  statusEl.textContent = ` Sent (demo). Thanks, ${data.name}!`;
  form.reset();
});
