import {
  getTagDef,
  importDefault,
  isNativeTag,
} from "@marko/compiler/babel-utils";

import directives from "./directives";
import modifiers from "./modifiers";

const EMPTY_ARRAY = [];
const EVENT_REG = /^(on(?:ce)?)(-)?(.*)$/;
const attachedDetachedLoaded = new WeakSet();

export default {
  enter(attr) {
    const {
      hub: { file },
    } = attr;
    const tag = attr.parentPath;
    const value = attr.get("value");
    const { name, arguments: args } = attr.node;
    const isVDOM = file.markoOpts.output !== "html";

    if (execModifiersAndDirectives("enter", tag, attr, value)) {
      return;
    }

    // Event handlers.
    let [, eventType, isDash, eventName] = EVENT_REG.exec(name) || EMPTY_ARRAY;

    if (eventType && args) {
      if (!args.length) {
        throw attr.buildCodeFrameError("Event handler is missing arguments.");
      }

      if (!value.isBooleanLiteral(true)) {
        throw value.buildCodeFrameError(
          `"${name}(handler, ...args)" does not accept a value.`,
        );
      }

      if (!isDash) {
        // When the event is not in dash case we normalized differently for html tags and custom tags.

        if (isNativeTag(tag)) {
          // Lowercase the string
          // Example: onMouseOver → mouseover
          eventName = eventName.toLowerCase();
        } else {
          // Convert first character to lower case:
          // Example: onBeforeShow → beforeShow
          eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
        }
      }

      const handlers = (tag.node.handlers = tag.node.handlers || {});
      if (handlers[eventName]) {
        throw attr.buildCodeFrameError(
          "Duplicate event handlers are not supported.",
        );
      }

      handlers[eventName] = {
        arguments: args,
        once: eventType === "once",
      };

      if (isVDOM) {
        if (eventName === "attach" || eventName === "detach") {
          if (!attachedDetachedLoaded.has(file)) {
            // Pull in helper for element attach/detach;
            attachedDetachedLoaded.add(file);
            importDefault(
              file,
              "marko/src/runtime/components/attach-detach.js",
            );
          }
        }
      }

      attr.remove();
      return;
    }
  },
  exit(attr) {
    const tag = attr.parentPath;
    const { name, arguments: args } = attr.node;
    const value = attr.get("value");

    if (execModifiersAndDirectives("exit", tag, attr, value)) {
      return;
    }

    const tagDef = getTagDef(tag);

    if (tagDef) {
      if (!tagDef.html && !tagDef.getAttribute(name)) {
        throw attr.buildCodeFrameError(
          `<${
            tag.get("name.value").node
          }> does not support the "${name}" attribute.`,
        );
      }
    }

    if (args && args.length) {
      throw attr.buildCodeFrameError(
        `Unsupported arguments on the "${name}" attribute.`,
      );
    }

    if (attr.node.bound) {
      throw attr.buildCodeFrameError(
        `The binding syntax (:=) is only supported when using the "Tags API".`,
      );
    }
  },
};

function execModifiersAndDirectives(type, tag, attr, value) {
  const { node } = attr;
  const { name, modifier } = node;

  if (modifier) {
    const modifierTranslate = modifiers[modifier];
    if (modifierTranslate) {
      if (modifierTranslate[type]) {
        const tagNode = tag.node;
        const attrNode = attr.node;
        modifierTranslate[type](tag, attr, value);
        if (tag.node !== tagNode || attr.node !== attrNode) return true;
      }
    } else if (name === "xlink" && modifier === "href" && isNativeTag(tag)) {
      node.name += `:${modifier}`;
      node.modifier = undefined;
    } else {
      throw attr.buildCodeFrameError(`Unsupported modifier "${modifier}".`);
    }
  }

  const directiveTranslate = directives[name];
  if (directiveTranslate) {
    if (directiveTranslate[type]) {
      const tagNode = tag.node;
      const attrNode = attr.node;
      directiveTranslate[type](tag, attr, value);
      if (tag.node !== tagNode || attr.node !== attrNode) return true;
    }
  }
}
