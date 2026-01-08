(function () {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  const KEY = "blueDispatchDonateDismissed";
  if (localStorage.getItem(KEY) === "1") return;

  const popup = document.createElement("div");
  popup.className = "donate-pop";
  popup.innerHTML = `
    <div class="donate-pop-inner">
      <div class="donate-pop-top">
        <div class="donate-pop-title">Support The Blue Dispatch</div>
        <button class="donate-pop-close">×</button>
      </div>
      <a class="donate-pop-btn" href="https://revolut.me/ethanhuil" target="_blank">Donate →</a>
    </div>`;
  document.body.appendChild(popup);

  popup.querySelector(".donate-pop-close").onclick = () => {
    localStorage.setItem(KEY, "1");
    popup.remove();
  };
})();