// total: 5857 (min) 2650 (brotli)
// template.marko: 268 (min) 177 (brotli)
let sideEffect = 3;
const $MyThing_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $MyThing_content__setup = ($scope) => {
	$MyThing_content__count($scope);
	_text($scope.b, sideEffect++);
};
const $MyThing_content = _content_resume("a0", "<!> <!>", "%c%b", $MyThing_content__setup);
const $count__OR__MyThing = /* @__PURE__ */ _or(3, ($scope) => _attr_content($scope, "a", ($scope.b, $scope.c)));
const $count__closure = /* @__PURE__ */ _closure($MyThing_content__count);
const $count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.b + 1);
}));
const $count = /* @__PURE__ */ _let(1, ($scope) => {
	$count__OR__MyThing($scope);
	$count__closure($scope);
	$count__script($scope);
});
