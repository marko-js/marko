// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 4);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// a.marko
const $template$2 = "<button>a <!>:<!></button><!><!>";
const $walks$2 = " Db%c%l%c";
const B = /*@__PURE__*/ _load_template("__tests__/b.marko", ($_) => Promise.resolve().then(() => b_exports).then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_depth$2 = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $if_content__dynamicTag($scope, B, ($_) => ({ depth: $scope._.input_depth - 1 })));
const $if_content__setup$2 = $if_content__input_depth$2;
const $n$2 = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script$2 = _script("__tests__/a.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n$2($scope, +$scope.n + 1);
}));
function $setup$2($scope) {
	$n$2($scope, 0);
	$setup__script$2($scope);
}
const $if$2 = /*@__PURE__*/ _if("#text/3", "<!><!><!>", "b%", $if_content__setup$2);
const $input_depth$2 = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if$2($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth$2($scope);
});
const $input$2 = ($scope, input) => $input_depth$2($scope, input.depth);
var a_default = /*@__PURE__*/ _template("__tests__/a.marko", $template$2, $walks$2, $setup$2, $input$2);

// c.marko
const $template$1 = "<button>c <!>:<!></button><!><!>";
const $walks$1 = " Db%c%l%c";
const $if_content__input_depth$1 = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_depth$2($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_depth$1._($scope);
	$setup$2($scope["#childScope/0"]);
};
const $n$1 = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script$1 = _script("__tests__/c.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n$1($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n$1($scope, 0);
	$setup__script$1($scope);
}
const $if$1 = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $if_content__setup$1);
const $input_depth$1 = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if$1($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth$1($scope);
});
const $input$1 = ($scope, input) => $input_depth$1($scope, input.depth);
var c_default = /*@__PURE__*/ _template("__tests__/c.marko", $template$1, $walks$1, $setup$1, $input$1);

// b.marko
var b_exports = /* @__PURE__ */ __exportAll({
	$input: () => $input,
	$input_depth: () => $input_depth,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks,
	default: () => b_default
});
const $template = "<button>b <!>:<!></button><!><!>";
const $walks = " Db%c%l%c";
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_depth$1($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $n = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if($scope, $scope.input_depth > 0 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var b_default = /*@__PURE__*/ _template("__tests__/b.marko", $template, $walks, $setup, $input);
