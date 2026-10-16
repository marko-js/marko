// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Show_content__walks);
const $if_content__value = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "value", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.value)));
const $if_content__setup = $if_content__value;
const $Show_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Show_content__count__OR__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "value", /*@__PURE__*/ _or(4, ($scope) => $Show_content__if($scope, $scope._.count > 0 && $scope.value ? 0 : 1)));
const $Show_content__count = _resumed["__tests__/template.marko_1_count#0:5/init"] = /*@__PURE__*/ _closure_get("count/6", $Show_content__count__OR__label, 0, "__tests__/template.marko_1_count#0:5/subscribe");
const $Show_content__setup = /*@__PURE__*/ _child_setup($Show_content__count);
const $Show_content__value = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "value", ($scope) => {
	$Show_content__count__OR__label($scope);
	$if_content__value($scope);
});
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => $Show_content__value($scope, $temp.value);
const $count__closure = /*@__PURE__*/ _closure($Show_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$Show_content__setup._($scope["#childScope/0"], $scope);
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => $Show_content__value($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
