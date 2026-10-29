// template.marko
const $List_content__walks = " b";
const $List_content__template = "<ul></ul>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($List_content__template, $List_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($List_content__walks, $List_content__walks);
const $for_content__input_suffix = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_suffix#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_suffix", /*@__PURE__*/ _closure_get("input_suffix/8", ($scope) => _text($scope["#text/1"], $scope._._.input_suffix), ($scope) => $scope._._, "__tests__/template.marko_2_input_suffix#0:5/subscribe"), 0));
const $for_content__setup = $for_content__input_suffix;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $List_content__for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $List_content__items = ($scope, items) => $List_content__for($scope, [items]);
const $List_content__$params = ($scope, $params2) => $List_content__$temp($scope, $params2[0]);
const $List_content__$temp = ($scope, $temp) => $List_content__items($scope, $temp.items);
const $count = _let("count/7", ($scope) => $List_content__items($scope["#childScope/0"], $scope.count % 2 ? ["a"] : ["a", "b"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$scope["#childScope/1"]._ = $scope;
	$count($scope, 1);
	$setup__script($scope);
}
const $input_items = ($scope, input_items) => $List_content__items($scope["#childScope/1"], input_items);
const $input = ($scope, input) => {
	$input_suffix($scope, input.suffix);
	$input_items($scope, input.items);
};
const $input_suffix__closure = /*@__PURE__*/ _closure($for_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
