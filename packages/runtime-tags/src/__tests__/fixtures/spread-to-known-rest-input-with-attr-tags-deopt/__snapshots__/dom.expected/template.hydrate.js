// size: 470 (min) 277 (brotli)
const $for_content__item__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $for_content__item = _._const(5, ($scope) => {
    (_._attrs($scope, "a", $scope.f), $for_content__item__script($scope));
  }),
  $for_content__dynamicTag = _._dynamic_tag(1),
  $for_content__$params = ($scope, $params2) =>
    $for_content__$temp($scope, $params2?.[0]),
  $for_content__$temp = ($scope, $temp) => {
    ((({ desc: desc, ...item }) => {
      $for_content__item($scope, item);
    })($temp),
      (($scope, desc) => {
        $for_content__dynamicTag($scope, desc);
      })($scope, $temp.desc));
  },
  $for = _._for_of(0, "<span><!></span>", " D%l", 0, $for_content__$params);
_._resume_dynamic_tag();
const $_classspandiv_content__input_foo = _._closure_get(3, ($scope) =>
  (($scope, foo) => $for($scope, [foo]))($scope.a, $scope._.d),
);
(_._content_resume("b0", "<!><!><!><!><!>", "b/b%c&b", ($scope) => {
  ($scope.a, $_classspandiv_content__input_foo($scope));
}),
  _._content_resume("c0", "Two", "b"),
  _._content_resume("c1", "One", "b"),
  init());
