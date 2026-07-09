// Distinct value per provider instance while classifying immutable.
let n = 0;
export default function next() {
  return "value-" + ++n;
}
