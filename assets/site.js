(function () {
  // Footer year
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Donation pop-up (dismissible)
  const KEY = "blueDispatchDonateDismissed";
  if (localStorage.getItem(KEY) === "1") return;

  const popup = document.createElement("div");
  popup.className = "donate-pop";

  popup.innerHTML = `
    <div class="donate-pop-inner">
      <div class="donate-pop-top">
        <div class="donate-pop-title">Support The Blue Dispatch</div>
        <button class="donate-pop-close" aria-label="Close">×</button>
      </div>
      <div class="donate-pop-text">Small tip, big impact.</div>
      <a class="donate-pop-btn" href="https://revolut.me/ethanhuil" target="_blank" rel="noopener">Donate →</a>
    </div>
  `;

  document.body.appendChild(popup);

  const closeBtn = popup.querySelector(".donate-pop-close");
  closeBtn.addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    popup.remove();
  });
})();
