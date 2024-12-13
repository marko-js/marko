export const steps = [{}, clickB, clickC, clickA];

function clickA(container: Element) {
  container.querySelectorAll(`input`)[0]!.click();
}
function clickB(container: Element) {
  container.querySelectorAll(`input`)[1]!.click();
}
function clickC(container: Element) {
  container.querySelectorAll(`input`)[2]!.click();
}
