const indent = "    ";
const compileErrorPrefix = `SyntaxError\n`;
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
    super();
    this.errors = errors;
    this.stack = `CompileErrors\n${errors
      .map(({ stack }) => {
        if (stack.startsWith(compileErrorStackTracePrefix)) {
          return stack.slice(compileErrorPrefix.length);
        }
        return stack.replace(/^(?!\s*$)/gm, "    ");
      })
      .join("\n\n")}`;
  }
}
