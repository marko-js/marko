// size: 247 (min) 163 (brotli)
_._resume_dynamic_tag();
const $dynamicTag = _._dynamic_tag(0),
  $inputAs__OR__inputClass__OR__htmlInput__OR__content = _._or(
    9,
    ($scope) =>
      $dynamicTag($scope, $scope[3] || "div", () => ({
        ...$scope[6],
        class: ["foo", $scope[4]],
        content: $scope[8],
      })),
    3,
  ),
  $content = _._let(8, $inputAs__OR__inputClass__OR__htmlInput__OR__content);
(_._script("a1", ($scope) => $content($scope, $scope[5])),
  _._content_resume("b0", "Span", "b"),
  _._content_resume("b1", "Div", "b"),
  init());
