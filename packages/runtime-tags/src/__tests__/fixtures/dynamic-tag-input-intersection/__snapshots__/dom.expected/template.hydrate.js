// size: 241 (min) 182 (brotli)
const $dynamicTag = _._dynamic_tag(0),
  $inputAs__OR__inputClass__OR__htmlInput__OR__content = _._or(
    9,
    ($scope) => {
      let { 3: inputAs, 4: inputClass, 6: htmlInput, 8: content } = $scope;
      $dynamicTag($scope, inputAs || "div", () => ({
        ...htmlInput,
        class: ["foo", inputClass],
        content: content,
      }));
    },
    3,
  ),
  $content = _._let(8, $inputAs__OR__inputClass__OR__htmlInput__OR__content);
(_._script("a1", ($scope, { 5: inputContent }) =>
  $content($scope, inputContent),
),
  _._content_resume("b0", "Span", "b"),
  _._content_resume("b1", "Div", "b"),
  init());
