// declare variables
const shareBtn = document.querySelector("[data-js-button]"),
  tooltip = document.querySelector("[data-js-tooltip]");
let expanded = !shareBtn.getAttribute("aria-expanded");

// Show or hide tooltip
const open = (active) => {
  tooltip.setAttribute("aria-expanded", active);
  shareBtn.setAttribute("aria-expanded", active);
};

// add event listener
shareBtn.addEventListener("click", () => {
  expanded = !expanded;
  open(expanded);
});

// when you click somewhere else tooltip will close
document.addEventListener("click", (c) => {
  if (
    !c.target.closest(".share__button") &&
    !c.target.closest(".article__tooltip")
  ) {
    expanded = false;
    open(expanded);
  }
});

// tooltip is open and 'ESC' is pressed tooltip is pressed
document.addEventListener("keydown", (c) => {
  if (c.key === "Escape") {
    expanded = false;
    open(expanded);
  }
});
