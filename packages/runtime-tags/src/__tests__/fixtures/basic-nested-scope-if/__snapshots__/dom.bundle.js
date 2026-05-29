// total: 6189 (min) 2823 (brotli)
// template.marko: 295 (min) 197 (brotli)
const $else_content__clickCount = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.a, $scope._.b));
const $else_content__setup = $else_content__clickCount;
const $if_content__clickCount__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope._, $scope._.b + 1);
}));
const $if_content__clickCount = /* @__PURE__ */ _if_closure(0, 0, ($scope) => {
	_text($scope.b, $scope._.b);
	$if_content__clickCount__script($scope);
});
const $if = /* @__PURE__ */ _if(0, "<button> </button>", " D l", $if_content__clickCount, "<span>The button was clicked <!> times.</span>", "Db%l", $else_content__setup);
const $clickCount = /* @__PURE__ */ _let(1, ($scope) => {
	$if($scope, $scope.b < 3 ? 0 : 1);
	$if_content__clickCount($scope);
	$else_content__clickCount($scope);
});
