module.exports = function migrate(el, context) {
  const builder = context.builder;
  const attr = el.getAttribute("include");

  if (!attr) {
    return;
  }

  el.removeAttribute("include");
  el.appendChild(
    builder.htmlElement("include", undefined, undefined, attr.argument)
  );
};
