// size: 250 (min) 178 (brotli)
const $dynamicTag = _$.dynamicTag(0),
  $expr_inputAs_inputClass_htmlInput_content = _$.intersection(
    9,
    ($scope) => {
      const { 3: inputAs, 4: inputClass, 6: htmlInput, 8: content } = $scope;
      $dynamicTag($scope, inputAs || "div", () => ({
        ...htmlInput,
        class: ["foo", inputClass],
        content: content,
      }));
    },
    3,
  ),
  $content = _$.state(8, $expr_inputAs_inputClass_htmlInput_content);
(_$.effect("a1", ($scope, { 5: inputContent }) =>
  $content($scope, inputContent),
),
  _$.registerContent("b0", "Span", "b"),
  _$.registerContent("b1", "Div", "b"),
  init());
