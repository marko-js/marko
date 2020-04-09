module.exports = function render(elNode, context) {
  context.deprecate(
    "The <component-globals> tag is deprecated. This functionality has been added to the '<init-components>' tag (which is automatically inserted at the end of the <body> tag), you can safely remove the '<component-globals>' tag."
  );

  elNode.detach();
};
