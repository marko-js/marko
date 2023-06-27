import color from "kleur";

export default function throwAggregateError(errors) {
  switch (errors.length) {
    case 0:
      return;
    case 1:
      throw errors[0];
  }

  let err;
  const message = `${color.red("AggregationError:")}\n${errors
    .map(err => err.message)
    .join("\n\n")
    .replace(/^(?!\s*$)/gm, "\t")}\n`;

  if (typeof AggregateError === "function") {
    err = new AggregateError(errors, message);
  } else {
    err = new Error(message);
    err.name = "AggregateError";
    err.errors = errors;
  }

  // Remove the stack trace from the error since it is not useful.
  err.stack = "";
  throw err;
}
