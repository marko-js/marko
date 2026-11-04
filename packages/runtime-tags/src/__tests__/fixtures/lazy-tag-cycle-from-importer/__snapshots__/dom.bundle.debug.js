// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 3);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// a.marko
const $template = "<button>a <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
let $load_B_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:b.marko.setup.mjs"));
let $load_B_tag_input_depth = /*@__PURE__*/ _load_signal(($_) => import("./v:b.marko.input_depth.mjs"));
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $load_B_tag_input_depth($scope["#childScope/1"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$load_B_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $n = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/a.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/3", "<!><!><!>", "b%/&", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template, $walks, $setup, $input);

// b.marko
const $template = "<button>b <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $if_content__dynamicTag($scope, a_default, ($_) => ({ depth: $scope._.input_depth - 1 })));
const $if_content__setup = $if_content__input_depth;
const $n = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/3", "<!><!><!>", "b%", $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template, $walks, $setup, $input);

// v:b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
