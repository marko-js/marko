// size: 222 (min) 149 (brotli)
_._resume("a0", function ($scope) {
  return () => (html) => ($scope.b.innerHTML = html);
});
const $Child_content__setHtml__script = _._script("b0", ($scope) =>
    $scope._.c("Hello World"),
  ),
  $Child_content__setHtml = _._closure_get(2, $Child_content__setHtml__script),
  $Child_content__setup = $Child_content__setHtml;
_._content_resume("b1", 0, 0, $Child_content__setup);
const $setHtml__closure = _._closure($Child_content__setHtml);
(_._var_resume("b2", _._const(2, $setHtml__closure)), init());
