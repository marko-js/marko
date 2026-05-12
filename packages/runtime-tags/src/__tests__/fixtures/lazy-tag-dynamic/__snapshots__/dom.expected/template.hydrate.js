// size: 36 (min) 40 (brotli)
import "./child-CRYEOk5k.js";
ready(`_a`);

// size: 338 (min) 214 (brotli)
const Child = _._lazy_renderer(`a`, () =>
    import(`./child-CRYEOk5k.js`).then((n) => n.t),
  ),
  $dynamicTag = _._dynamic_tag(2),
  $show__OR__value = _._or(5, ($scope) =>
    $dynamicTag($scope, $scope.d ? Child : null, () => ({
      label: `x`,
      value: $scope.e,
    })),
  ),
  $show__script = _._script(`b0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($show__OR__value($scope), $show__script($scope));
  }),
  $value__script = _._script(`b1`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $value($scope, $scope.e + 1);
    }),
  ),
  $value = _._let(4, ($scope) => {
    ($show__OR__value($scope), $value__script($scope));
  });
init();

// size: 425 (min) 248 (brotli)
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
    $input: () => $input,
    $input_label: () => $input_label,
    $input_value: () => $input_value,
    $setup: () => $setup,
    $template: () => $template,
    $walks: () => $walks,
    default: () => child_default,
  });
const $template = `<div><!>: <!></div>`,
  $walks = `D%c%l`,
  $setup = () => {},
  $input_label = ($scope, input_label) => _._text($scope.a, input_label),
  $input_value = ($scope, input_value) => _._text($scope.b, input_value),
  $input = ($scope, input) => {
    ($input_label($scope, input.label), $input_value($scope, input.value));
  };
var child_default = _._template(`a`, $template, $walks, $setup, $input);
