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

// template.marko
const $Row_content__walks = "b%/&c";
const $Row_content__template = "<!><!><!>";
const $template = "<button class=open>open</button><!><!><!>";
const $walks = " b%b%c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $if_content2__setup = ($scope) => {
	$Row_content__setup($scope["#childScope/0"]);
	$Row_content__label($scope["#childScope/0"], "c");
};
const $if_content__setup = ($scope) => {
	$Row_content__setup($scope["#childScope/0"]);
	$Row_content__label($scope["#childScope/0"], "s");
};
const $Row_content__setup = ($scope) => $load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $Row_content__label = ($scope, label) => $load_Lazy_tag_input_label($scope["#childScope/1"], label);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__label($scope, $temp.label);
const $if2 = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks), $if_content2__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if2($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, true);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
