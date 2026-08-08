// tags/note/index.marko
const $template = "<p> </p>";
const $input_text = ($scope, input_text) => _text($scope.a, "n:" + input_text);

// template.marko
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, "d:" + $scope._._.e), ($scope) => $scope._._), 0);
const $if_content2__setup = $if_content2__input_title;
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_text($scope.b, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__show._($scope);
};
const $if_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content2__setup);
const $if_content__show = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$if_content__show($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
