// template.marko
const $template = "<h1>Rows reading a request value</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $for_content__input_label = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _for_closure("#text/1", ($scope) => _attr($scope["#div/0"], "title", $scope._.input_label)));
const $for_content__setup = $for_content__input_label;
const $for_content__r = ($scope, r) => _text($scope["#text/1"], r);
const $for_content__$params = ($scope, $params2) => $for_content__r($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<div> </div>", " D ", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "rows/5", ($scope) => $for($scope, [$scope.rows]));
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, []);
}));
function $setup($scope) {
	$rows($scope, [1]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_label", $for_content__input_label);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
