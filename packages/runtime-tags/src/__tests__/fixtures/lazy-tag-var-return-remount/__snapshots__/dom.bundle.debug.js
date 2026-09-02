// tags/inner.marko
const $template$1 = "<p>focused <!></p>";
const $walks$1 = "Db%l";
const $focus2 = /*@__PURE__*/ _const("focus", ($scope) => _return($scope, $scope.focus));
const $focused = /*@__PURE__*/ _let("focused/1", ($scope) => {
	_text($scope["#text/0"], $scope.focused);
	$focus2($scope, $focus$1($scope));
});
function $setup$1($scope) {
	$focused($scope, 0);
}
const $focus$1 = ($scope) => () => {
	$focused($scope, +$scope.focused + 1);
};
_resume("__tests__/tags/inner.marko_0/focus", $focus$1);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$1, $walks$1, $setup$1);

// child.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $focus = _var_resume("__tests__/child.marko_0_focus#6/var", /*@__PURE__*/ _const("focus", ($scope) => _return($scope, $scope.focus)));
function $setup($scope) {
	_var($scope, "#childScope/0", $focus);
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__focusChild = _var_resume("__tests__/template.marko_1_focusChild#4/var", /*@__PURE__*/ _const("focusChild"));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.focusChild();
}));
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/1", $if_content__focusChild);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope["#childScope/1"], "x");
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><button class=focus>focus</button>", "b%0&b ", $if_content__setup);
const $mounted = /*@__PURE__*/ _let("mounted/2", ($scope) => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mounted($scope, !$scope.mounted);
}));
function $setup($scope) {
	$mounted($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
