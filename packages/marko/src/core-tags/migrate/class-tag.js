const classNamedRegexp = /^(<?\s*class\s*)(?!extends)[^\s]+(\s*{)/;
module.exports = function migrator(el, context) {
  if (!el.tagString || !classNamedRegexp.test(el.tagString)) {
    // Check for a named class
    return;
  }

  if (el.parentNode.type !== "TemplateRoot") {
    context.addError(
      "class is a static tag and can only be declared at the template root"
    );
  }

  context.deprecate(
    "Having a named class at the top level of a file is deprecated. Use `class {...}` without a name instead."
  );

  el.tagString = el.tagString.replace(classNamedRegexp, "$1$2");
};
