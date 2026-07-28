// tags/chain-b.marko
const $template$2 = "<div>b</div>";
const $walks$2 = "b";
const $setup$2 = () => {};
function bFn(message) {
	return message + "-b";
}
var chain_b_default = /*@__PURE__*/ _template("__tests__/tags/chain-b.marko", $template$2, "b", $setup$2);

// tags/chain-a.marko
const $template$1 = "<div>a</div>";
const $walks$1 = "b";
const $setup$1 = () => {};
function aFn(message) {
	return message + "-a";
}
var chain_a_default = /*@__PURE__*/ _template("__tests__/tags/chain-a.marko", $template$1, "b", $setup$1);

// tags/v:chain-b.marko.register-bFn.js
_resume("__tests__/tags/chain-b.marko_0/export/bFn", bFn);

// tags/v:chain-a.marko.register-aFn.js
_resume("__tests__/tags/chain-a.marko_0/export/aFn", aFn);

// template.marko
const $template = "<button>go</button><div> </div>";
const $walks = " bD l";
const $first = /*@__PURE__*/ _let("first/2");
const $second = /*@__PURE__*/ _let("second/3");
const $message = /*@__PURE__*/ _let("message/4", ($scope) => _text($scope["#text/1"], $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.second($scope.first($scope.message)));
}));
function $setup($scope) {
	$first($scope, aFn);
	$second($scope, bFn);
	$message($scope, "start");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
