// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btemplate-1amarko_0); }\n  ";

// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
function $setup$2($scope) {
	_return($scope, "blue");
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$2));

// tags/v:swatch.marko.css
var v_swatch_marko_default = "\n  .swatch { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btags-1bswatch-1amarko_0); }\n";

// tags/swatch.marko
const $template$1 = "<style></style><div class=swatch></div>";
const $walks$1 = " c";
function $setup$1($scope) {
	_style_shell($scope, "#style/0");
}
const $input_color = /*@__PURE__*/ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btags-1bswatch-1amarko_0", $scope.input_color));
const $input = ($scope, input) => $input_color($scope, input.color);
var swatch_default = /*@__PURE__*/ _template("__tests__/tags/swatch.marko", $template$1, " c", $setup$1, $input);

// template.marko
const $Box_content__walks = " c";
const $Box_content__template = "<style></style><div class=box></div>";
const $Later_content__walks = "b%c";
const $Later_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button>Toggle</button><!><!>`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}& b%c`)("", " c");
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params4) => $await_content__v($scope, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $Later_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Later_content__setup = $await_content;
const $Later_content__value = $Later_content__await_promise;
const $Later_content__$params = ($scope, $params3) => $Later_content__$temp($scope, $params3[0]);
const $Later_content__$temp = ($scope, $temp2) => $Later_content__value($scope, $temp2.value);
const $if_content__color = ($scope, color) => {
	$Box_content__color($scope["#childScope/2"], color);
	$input_color($scope["#childScope/3"], color);
	$Later_content__value($scope["#childScope/4"], color);
};
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$Box_content__setup($scope["#childScope/2"]);
	$setup$1($scope["#childScope/3"]);
	$Later_content__setup($scope["#childScope/4"]);
	_var($scope, "#childScope/0", $if_content__color);
};
const $Box_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $Box_content__color = /*@__PURE__*/ _const("color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btemplate-1amarko_0", $scope.color));
const $Box_content__$params = ($scope, $params2) => $Box_content__$temp($scope, $params2[0]);
const $Box_content__$temp = ($scope, $temp) => $Box_content__color($scope, $temp.color);
const $top = ($scope, top) => $input_color($scope["#childScope/2"], top);
const $if = /*@__PURE__*/ _if("#text/4", /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<!>${_w0}${_w1}${_w2}${_w3}<!>`)("", $Box_content__template, $template$1, $Later_content__template), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `0${_w0}&b/${_w1}&/${_w2}&/${_w3}&b`)("", $Box_content__walks, " c", $Later_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	_var($scope, "#childScope/0", $top);
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
