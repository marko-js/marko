// size: 353 (min) 125 (brotli)
(_._script(
  "a3",
  ($scope, { 5: a }) => ($scope[0].textContent = a.bar() || "missing a"),
),
  _._script(
    "a4",
    ($scope, { 6: b }) => ($scope[1].textContent = b.baz() || "missing b"),
  ),
  _._script(
    "a5",
    ($scope, { 7: c }) => ($scope[2].textContent = c.baz() || "missing c"),
  ),
  _._resume("a0", function ({ 3: foo }) {
    return () => foo?.bar;
  }),
  _._resume("a1", function ({ 3: foo }) {
    return () => foo?.bar.baz;
  }),
  _._resume("a2", function ({ 4: foo_bar }) {
    return () => foo_bar?.baz;
  }),
  init());
