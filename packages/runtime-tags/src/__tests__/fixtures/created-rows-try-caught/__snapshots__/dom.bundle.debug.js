// template.marko
const $template = "<h1>Rows whose try catches</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/thrower.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
function $setup$1($scope) {
	$dynamicTag($scope, (() => {
		throw new Error("probe");
	})());
}
var thrower_default = /*@__PURE__*/ _template("__tests__/tags/thrower.marko", $template$1, "b%c", $setup$1);

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $catch_content = _content("__tests__/tags/outer.marko_3*content", "error");
const $try_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $for_content__try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup);
const $rows = /*@__PURE__*/ _let("rows/2", ($scope) => $for($scope, [$scope.rows]));
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, []);
}));
function $setup($scope) {
	$rows($scope, [1]);
	$setup__script($scope);
}
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup);
