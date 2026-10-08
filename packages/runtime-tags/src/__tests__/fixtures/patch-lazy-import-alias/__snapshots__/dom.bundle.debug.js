// child.marko
const $template = "<span class=child>child <!></span>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, 0, $input);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
let $load_X_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_X_tag_input_label = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_label.mjs"), "ready:__tests__/child.marko");
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/4", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$load_X_tag_input_label($scope["#childScope/3"], $scope.n);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, +$scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	$load_X_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$if_content__setup__script($scope);
	$if_content__n($scope, 0);
	Child;
};
const $if = /*@__PURE__*/ _if("#main/0", "<button> </button><!><!>", " D l%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
