// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $if_content__setup = ($scope) => {
	$load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Lazy_tag_input_label($scope["#childScope/1"], "s");
};
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/lazy.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var lazy_default = /*@__PURE__*/ _template("__tests__/lazy.marko", $template, $walks, $setup, $input);

// tags/opener.marko
const $template = "<button class=open>open</button><!><!>";
const $walks = " b%c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $if_content__setup = ($scope) => {
	$load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Lazy_tag_input_label($scope["#childScope/1"], "c");
};
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/opener.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var opener_default = /*@__PURE__*/ _template("__tests__/tags/opener.marko", $template, $walks, $setup);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
