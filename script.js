const isMobile =
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)
  || window.innerWidth <= 640;

if (isMobile) {
  window.location.href = "mobile/index.html";
}

window.addEventListener('DOMContentLoaded', () => {
    filterArt('hollywood');
});
