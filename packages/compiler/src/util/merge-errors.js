import { stripAnsi } from "./strip-ansi";

const indent = "    ";
export default function throwAggregateError(errors) {
  switch (errors.length) {
    case 0:
      return;
    case 1:
      throw errors[0];
  }

  throw new CompileErrors(errors);
}

class CompileErrors extends Error {
  constructor(errors) {
    // Built from `message`, since only V8 repeats it atop `stack`. A located
    // message opens with a line break that only its own header needs.
    const message = `\n${errors
      .map((err) =>
        err.loc
          ? err.message.slice(1)
          : `${err.name}: ${err.message}`.replace(/^(?!\s*$)/gm, indent),
      )
      .join("\n\n")}`;
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = 0;
    super(message);
    this.name = "CompileErrors";
    this.errors = errors;
    // One compile reports these, so they share its file.
    Object.defineProperty(this, "filename", {
      value: errors[0].filename,
      enumerable: false,
      writable: true,
      configurable: true,
    });
    Error.stackTraceLimit = stackTraceLimit;
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return `${this.name}: ${stripAnsi(this.message)}`;
  }
}
