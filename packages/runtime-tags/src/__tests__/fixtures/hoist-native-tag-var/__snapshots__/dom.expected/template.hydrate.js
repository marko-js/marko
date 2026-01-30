// size: 262 (min) 159 (brotli)
let id = 0;
_._script("a0", ($scope) => $scope.b.value()?.classList.add("child" + id++));
const $el2_getter = _._hoist(0, "Ac"),
  $el_getter = _._hoist_resume("b0", 0, "Aa", "Aa");
(_._el("b1", 0),
  _._script("b2", ($scope) => {
    {
      const el = $el_getter($scope)();
      el && (el.innerHTML = "Hello World");
    }
    {
      const el = $el2_getter($scope)();
      el && (el.innerHTML = "Hello World");
    }
  }),
  init());
