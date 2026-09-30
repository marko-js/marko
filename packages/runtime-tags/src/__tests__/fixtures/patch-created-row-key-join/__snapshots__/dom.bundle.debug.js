// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $if_content__n__OR__m = _fill_join_if("__tests__/template.marko_fill1", "m", /*@__PURE__*/ _init_join("__tests__/template.marko_2_m#1:3/init", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "n", /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/1"], $scope._["#LoopKey"] + $scope._.n + $scope._.m)), 0, "#text/0", 0)), 0, "#text/0", 0);
const $if_content__n = _init_if_closure("__tests__/template.marko_2_n#1:2/init", "#text/0", 0, $if_content__n__OR__m);
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__n($scope._, +$scope._.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$if_content__m._($scope);
	$if_content__setup__script($scope);
};
const $if_content__m = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__n__OR__m);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
const $for_content__input_show = /*@__PURE__*/ _for_closure("#ul/0", ($scope) => $for_content__if($scope, $scope._.input_show ? 0 : 1));
const $for_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/2", $if_content__n);
const $for_content__m = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "m/3");
const $for_content__setup = ($scope) => {
	$for_content__input_show._($scope);
	$for_content__n($scope, 0);
	$for_content__m($scope, 1);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!></li>", "D%", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
const $input_show = /*@__PURE__*/ _const("input_show", $for_content__input_show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
