// tags/press.marko
const $input_onPress__script = _script_patch("c0 d", ($scope) => _on($scope.a, "click", $scope.d));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $inputtag_content2 = _content$1("a7", "t");
const $inputtag_content = _content$1("a6", "s");
const $Note_content__input_label = /*@__PURE__*/ _closure_get_patch("a5", 8, ($scope) => _text($scope.a, $scope._._._.d), ($scope) => $scope._._._, "a17", 1);
const $Note_content = _content$1("a4", "<i> </i>", "D ", $Note_content__input_label);
const $card_content__setup__script = _script("a8", ($scope) => _on($scope.b, "click", function() {
	console.log("own", $scope._._.d);
}));
const $h = ($scope) => function() {
	console.log("h", $scope._._.d);
};
const $onPress = ($scope) => function() {
	console.log("press", $scope._._.d);
};
function $onClick() {
	console.log("static");
}
const $top = ($scope) => function() {
	console.log("top", $scope.d);
};
_bind_resume("a1 >>d", $h);
_bind_resume("a3 >>d", $onPress);
_resumed.a2 = $onClick;
_bind_resume("a0 d", $top);
