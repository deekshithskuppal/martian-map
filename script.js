const toast = document.querySelector("#zoneToast");
const pins = document.querySelectorAll(".map-pin");
const statusButton = document.querySelector("#statusButton");

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    toast.textContent = `${pin.dataset.zone} · survey data loaded`;
    toast.classList.add("show");
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  });
});

statusButton.addEventListener("click", () => {
  toast.textContent = "Mission status · all systems nominal";
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
});

document.querySelectorAll(".map-control").forEach((control) => {
  control.addEventListener("click", () => {
    document.querySelector(".map-control.active").classList.remove("active");
    control.classList.add("active");
    toast.textContent = `${control.textContent} layer · visualized`;
    toast.classList.add("show");
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2000);
  });
});
