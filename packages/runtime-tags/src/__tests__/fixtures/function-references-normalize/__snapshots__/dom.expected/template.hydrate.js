// size: 106 (min) 99 (brotli)
(_._script("a1", ($scope, { 2: baz }) => ($scope[0].textContent = baz.bar())),
  _._resume("a0", function ({ 1: foo }) {
    return () => foo?.bar;
  }),
  init());
