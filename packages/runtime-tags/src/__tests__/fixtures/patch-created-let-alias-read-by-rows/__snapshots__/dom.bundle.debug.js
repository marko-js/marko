// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__picked__OR__item = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_picked#1:5_item#4/setup", 5, ($scope) => _text($scope["#text/1"], $scope.item === $scope._.sel ? "*" : ""));
const $for_content__sel = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_2_sel#1:1/setup", "#text/0", $for_content__picked__OR__item, 2);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__sel($scope._, $scope.item);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel._($scope);
	$for_content__setup__script($scope);
};
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__picked__OR__item($scope);
	_text($scope["#text/2"], $scope.item);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__sel = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_sel#1/fill", "sel/1", $for_content__sel);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button><!><!></button>", " D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__sel($scope, 1);
	$if_content__for($scope, [[1, 2]]);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
