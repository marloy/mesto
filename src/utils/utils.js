export function renderLoading(isEnabled, button, indicator) {
  button.textContent = indicator;
  if (isEnabled) {
    button.setAttribute("disabled", true);
  } else {
    button.removeAttribute("disabled");
  }
}
