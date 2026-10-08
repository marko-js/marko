// template.marko
const $template = "<main><button>t</button><!></main>";
const $walks = "D b%l";
const $if_content__input_name__OR__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_1_input_name#0:4_$global_brand#3/global", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_name", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope._.input_name + ":" + _global_read($scope.$global, "brand"))), 0, "#text/1", 0));
const $if_content__input_name = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_name__OR__$global_brand);
const $if_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_1_$global_brand#3/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
	$if_content__input_name__OR__$global_brand($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p><b> </b>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input = ($scope, input) => $input_name($scope, input.name);
const $input_name = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_name", $if_content__input_name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
