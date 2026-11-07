// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = ($_) => {};
const $if_content__n__OR__m = /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/1"], $scope._["#LoopKey"] + $scope._.n + $scope._.m));
const $if_content__n = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_n#1:2/setup", "#li/0", 0, $if_content__n__OR__m);
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__n($scope._, +$scope._.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$if_content__m._($scope);
	$if_content__setup__script($scope);
};
const $if_content__m = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_m#1:3/setup", "#li/0", 0, $if_content__n__OR__m);
const $for_content__if = /*@__PURE__*/ _if("#li/0", "<button> </button>", " D ", $if_content__setup);
const $for_content__input_show = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_show#0:4/setup", "#ul/0", ($scope) => $for_content__if($scope, $scope._.input_show ? 0 : 1), 5);
const $for_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_n#2/fill", "n/2", $if_content__n);
const $for_content__m = _fill_let_resume("__tests__/template.marko_1_m#3/fill", "m/3", $if_content__m);
const $for_content__setup = ($scope) => {
	$for_content__input_show._($scope);
	$for_content__n($scope, 0);
	$for_content__m($scope, 1);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li></li>", " ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_show($scope, input.show);
};
const $input_show = /*@__PURE__*/ _const("input_show", $for_content__input_show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
