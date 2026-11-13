// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/picker.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__sel__OR__item = /*@__PURE__*/ _or_patch("__tests__/tags/picker.marko_1_sel#0:1_item#4/setup", 5, ($scope) => _text($scope["#text/1"], $scope.item === $scope._.sel ? "*" : ""));
const $for_content__sel = /*@__PURE__*/ _for_closure("#text/0", $for_content__sel__OR__item, 2);
const $for_content__setup__script = _script("__tests__/tags/picker.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$sel($scope._, $scope.item);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel._($scope);
	$for_content__setup__script($scope);
};
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__sel__OR__item($scope);
	_text($scope["#text/2"], $scope.item);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $sel = /*@__PURE__*/ _fill_let("__tests__/tags/picker.marko_0_sel#1/fill", "sel/1", $for_content__sel);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button><!><!></button>", " D%b%", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$sel($scope, 1);
	$for($scope, [[1, 2]]);
}
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker.marko", $template, "b%c", $setup);
