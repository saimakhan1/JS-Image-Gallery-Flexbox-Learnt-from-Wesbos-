function handlePanelClick(e) {
  document
    .querySelector(".panel-leader")
    .classList.remove("panel-leader");
  e.target.closest(".panel").classList.add("panel-leader");
}
document.addEventListener("click", handlePanelClick);
