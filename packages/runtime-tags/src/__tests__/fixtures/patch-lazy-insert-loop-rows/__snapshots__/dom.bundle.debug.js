// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/lazy.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/lazy.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var lazy_default = /*@__PURE__*/ _template("__tests__/lazy.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=open>open</button><!><!><!>";
const $walks = " b%b%c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:lazy.marko.input_label.mjs"), "ready:__tests__/lazy.marko");
const $for_content__setup = ($scope) => $load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $for_content__item = ($scope, item) => $load_Lazy_tag_input_label($scope["#childScope/1"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__setup = ($scope) => {
	$load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Lazy_tag_input_label($scope["#childScope/1"], "s");
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%/&", $for_content__setup, $for_content__$params);
const $items = _let("items/6", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, "c" + $scope.items.length]);
}));
function $setup($scope) {
	$items($scope, []);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
