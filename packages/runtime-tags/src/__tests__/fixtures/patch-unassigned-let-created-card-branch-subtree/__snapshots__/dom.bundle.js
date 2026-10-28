// tags/wrap.marko
const $template$1 = "<div><header><h2>Section title</h2><p>Some static introduction text for this wrapper.</p></header><!><footer><a href=/more>Read more</a></footer><aside><h3>Related</h3><ul><li>First related item</li><li>Second related item</li><li>Third related item</li></ul></aside></div>";
const $walks = "Db%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// tags/show-value.marko
const $template = "<em> </em>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/card.marko
const $wrap_content__input_w = /*@__PURE__*/ _fill_join_closure("b2", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "b0"), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_w($scope);
	$wrap_content__n($scope);
};
const $wrap_content__n = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._);
const $wrap_content = /*@__PURE__*/ _content$1("b1", "<b> </b> <i> </i>", "D lbD ", $wrap_content__setup);
const $if_content__input_w = /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_value($scope.b, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$input_content_direct($scope.a, $wrap_content($scope));
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>${_w0}${_w1}`)($template$1, $template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($walks, "D l"), $if_content__setup);
const $n__closure = /*@__PURE__*/ _closure($wrap_content__n);
const $n = fill("b3", /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$n__closure($scope);
}));
