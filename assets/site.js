// Blue Dispatch site JS (menu, donate popup, footer year)

(function () {
  // Footer year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu toggle (supports multiple pages)
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Close menu when a link is clicked
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => menu.classList.add("hidden"));
    });
  }

  // Donate popup (dismissible)
  const KEY = "blueDispatchDonateDismissedV2";
  if (localStorage.getItem(KEY) === "1") return;

  const popup = document.createElement("div");
  popup.className =
    "fixed bottom-4 right-4 z-50";

  popup.innerHTML = `
    <div class="w-64 rounded-xl border border-slate-200 bg-white shadow-lg p-3">
      <div class="flex items-start justify-between gap-3">
        <div class="text-sm font-semibold text-[#06142b]">Support The Blue Dispatch</div>
        <button id="donate-close" class="text-slate-400 hover:text-slate-700 text-lg leading-none" aria-label="Close">×</button>
      </div>
      <div class="mt-1 text-xs text-slate-600">Optional tip to support hosting & research.</div>
      <a href="https://revolut.me/ethanhuil" target="_blank" rel="noopener"
         class="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#06142b] px-3 py-2 text-sm font-semibold text-white hover:opacity-90">
        Donate on Revolut →
      </a>
    </div>
  `;

  document.body.appendChild(popup);

  const close = popup.querySelector("#donate-close");
  close.addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    popup.remove();
  });
})();