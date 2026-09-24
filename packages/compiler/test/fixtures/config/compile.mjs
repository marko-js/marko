import { compileSync } from "@marko/compiler";

let error;
try {
  compileSync("<div/>", "template.marko");
} catch (err) {
  error = err.message;
}
process.stdout.write(JSON.stringify({ error }));
