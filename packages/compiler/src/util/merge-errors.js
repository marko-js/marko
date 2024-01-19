import { stripAnsi } from "./strip-ansi";

const indent = "    ";
const compileErrorPrefix = `CompileError: \n`;
const compileErrorStackTracePrefix = `${compileErrorPrefix + indent}at `;
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
    const message = `\n${errors
      .map(({ stack }) => {
        if (stack.startsWith(compileErrorStackTracePrefix)) {
          return stack.slice(compileErrorPrefix.length);
        }
        return stack.replace(/^(?!\s*$)/gm, "    ");
      })
      .join("\n\n")}`;
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = 0;
    super(message);
    this.name = "CompileErrors";
    this.errors = errors;
    Error.stackTraceLimit = stackTraceLimit;
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return `${this.name}: ${stripAnsi(this.message)}`;
  }
}
