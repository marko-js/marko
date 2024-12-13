export const steps = [
  {},
  (c: Element) => click(c, 2),
  (c: Element) => click(c, 3),
  (c: Element) => click(c, 5),
];

function click(container: Element, number: number) {
  const buttons: HTMLButtonElement[] = Array.from(
    container.querySelectorAll("button"),
  );
  const button = buttons.find((b) => b.textContent === "" + number)!;
  button.click();
}
