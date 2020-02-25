"use strict";

function addPreserve(transformHelper, bodyOnly, condition) {
  let el = transformHelper.el;
  let context = transformHelper.context;
  let builder = transformHelper.builder;

  let preserveAttrs = {};

  if (bodyOnly) {
    preserveAttrs["body-only"] = builder.literal(bodyOnly);
    el.forEachChild(child => {
      child._canBePreserved = true;
    });
  } else {
    el._canBePreserved = true;
  }

  if (condition) {
    preserveAttrs["if"] = condition;
  }

  preserveAttrs.key = builder.concat(
    builder.literal("p_"),
    transformHelper.assignComponentId().nestedIdExpression
  );
  let preserveNode = context.createNodeForEl("_preserve", preserveAttrs);

  if (bodyOnly) {
    el.moveChildrenTo(preserveNode);
    el.appendChild(preserveNode);
  } else {
    el.wrapWith(preserveNode);
  }

  return preserveNode;
}

function preserveHandler(transformHelper, preserveType, el) {
  el.removeAttribute(preserveType.attribute);
  addPreserve(transformHelper, false);
}

function preserveIfHandler(transformHelper, preserveType, el) {
  let attribute = preserveType.attribute;
  let preserveIfAttr = el.getAttribute(attribute);
  let preserveIfCondition = preserveIfAttr.argument;

  if (!preserveIfCondition) {
    transformHelper.addError(
      `The '${attribute}' attribute should have an argument. For example: <div ${attribute}(someCondition)>`
    );
    return;
  }

  addPreserve(
    transformHelper,
    false,
    transformHelper.builder.expression(preserveIfCondition)
  );
  el.removeAttribute(attribute);
}

function preserveBodyHandler(transformHelper, preserveType, el) {
  el.removeAttribute(preserveType.attribute);
  addPreserve(transformHelper, true);
}

function preserveBodyIfHandler(transformHelper, preserveType, el) {
  let attribute = preserveType.attribute;
  let preserveBodyIfAttr = el.getAttribute(attribute);
  let preserveBodyIfCondition = preserveBodyIfAttr.argument;

  if (!preserveBodyIfCondition) {
    transformHelper.addError(
      `The '${attribute}' attribute should have an argument. For example: <div ${attribute}(someCondition)>`
    );
    return;
  }

  addPreserve(
    transformHelper,
    true,
    transformHelper.builder.expression(preserveBodyIfCondition)
  );
}

const preserveTypes = [
  // The new preserve types
  {
    attribute: "no-update",
    handler: preserveHandler
  },
  {
    attribute: "no-update-if",
    handler: preserveIfHandler
  },
  {
    attribute: "no-update-body",
    handler: preserveBodyHandler
  },
  {
    attribute: "no-update-body-if",
    handler: preserveBodyIfHandler
  }
];

module.exports = function handleComponentPreserve() {
  let el = this.el;

  for (let i = 0; i < preserveTypes.length; i++) {
    let preserveType = preserveTypes[i];

    if (el.hasAttribute(preserveType.attribute)) {
      preserveType.handler(this, preserveType, el);
      el.removeAttribute(preserveType.attribute);
      return;
    }
  }
};
