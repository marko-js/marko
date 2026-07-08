// Distinct value per provider instance while classifying immutable (no
// `let`/`input` reference).
let n = 0;
export default function next() {
  return "p" + ++n;
}
