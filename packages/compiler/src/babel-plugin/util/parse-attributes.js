import * as t from "../../babel-types";
import { withLoc, parseExpression } from "@marko/babel-utils";
import parseArguments from "./parse-arguments";

export default (file, attributes) => {
  return attributes.map(attr => {
    if (attr.spread) {
      // TODO: Inline merge object literals.
      return withLoc(
        file,
        t.markoSpreadAttribute(
          parseExpression(
            file,
            attr.value,
            0 // TODO
          )
        ),
        0, // TODO
        0 // TODO
      );
    }

    let name, modifier, value;

    if (attr.name) {
      [, name, modifier] = /^([^:]*)(?::(.*))?/.exec(attr.name);
    }

    if (attr.value) {
      if (attr.method) {
        const prefix = "function";
        value = parseExpression(
          file,
          prefix + `(${attr.argument.value}){${attr.value}}`,
          0 - prefix.length // TODO
        );
      } else {
        value = parseExpression(
          file,
          attr.value,
          0 // TODO
        );
      }
    } else {
      value = t.booleanLiteral(true);
    }

    return withLoc(
      file,
      t.markoAttribute(
        name,
        value,
        modifier,
        !attr.method && attr.argument
          ? parseArguments(file, attr.argument)
          : undefined,
        Boolean(attr.default),
        Boolean(attr.bound)
      ),
      0, // TODO
      0 // TODO
    );
  });
};
