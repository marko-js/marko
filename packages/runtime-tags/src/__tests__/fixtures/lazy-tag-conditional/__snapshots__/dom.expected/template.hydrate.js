// size: 36 (min) 40 (brotli)
import "./child-DLBFQMu-.js";
ready(`_a`);

// size: 512 (min) 272 (brotli)
let $lazy_Child_tag_input_label = _._lazy_signal(() =>
    import(`./child-DLBFQMu-.js`)
      .then((n) => n.t)
      .then((mod) => mod.$input_label),
  ),
  $lazy_Child_tag_input_value = _._lazy_signal(() =>
    import(`./child-DLBFQMu-.js`)
      .then((n) => n.t)
      .then((mod) => mod.$input_value),
  ),
  $lazy_Child_setup = _._lazy_setup(`a`, `b`, () =>
    import(`./child-DLBFQMu-.js`)
      .then((n) => n.t)
      .then((mod) => [mod.$template, mod.$walks, mod.$setup]),
  );
const $if_content__count = _._if_closure(1, 0, ($scope) =>
    $lazy_Child_tag_input_value($scope.b, $scope._.c),
  ),
  $if = _._if(1, `<!><!><!><!>`, `b%/&b`, ($scope) => {
    ($if_content__count._($scope),
      $lazy_Child_setup($scope),
      $lazy_Child_tag_input_label($scope.b, `x`));
  }),
  $count__script = _._script(`b0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ($if($scope, $scope.c % 2 == 0 ? 0 : 1),
      $if_content__count($scope),
      $count__script($scope));
  });
init();

// size: 330 (min) 206 (brotli)
// chunk: child
var __defProp = Object.defineProperty,
  child_exports = ((all, no_symbols) => {
    let target = {};
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
    return (
      no_symbols || __defProp(target, Symbol.toStringTag, { value: `Module` }),
      target
    );
  })({
    $input_label: () => $input_label,
    $input_value: () => $input_value,
    $setup: () => $setup,
    $template: () => $template,
    $walks: () => $walks,
  });
const $template = `<div><!>: <!></div>`,
  $walks = `D%c%l`,
  $setup = () => {},
  $input_label = ($scope, input_label) => _._text($scope.a, input_label),
  $input_value = ($scope, input_value) => _._text($scope.b, input_value);
