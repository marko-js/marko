// child.marko
const $template = "<p>n <!></p>";
const $walks = "Db%l";
const $n = /*@__PURE__*/ _let("n/1", ($scope) => {
	_text($scope["#text/0"], $scope.n);
	_return($scope, {
		count: $scope.n,
		inc: $_return($scope)
	});
});
function $setup($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => () => $n($scope, +$scope.n + 1) - 1;
_resumed["__tests__/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><!><button class=inc>inc</button><div class=count><!> <!></div>";
const $walks = "b%0&b1b bD%c%l";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $pattern3 = _var_resume("__tests__/template.marko_0_$pattern#11/var", ($scope, $pattern) => {
	$count($scope, $pattern.count);
	$inc($scope, $pattern.inc);
});
const $count = ($scope, count) => _text($scope["#text/6"], count);
const $inc__OR__dynamicInc__script = _script("__tests__/template.marko_0_inc#13_dynamicInc#16", ($scope) => _on($scope["#button/5"], "click", function() {
	$scope.inc();
	$scope.dynamicInc();
}));
const $inc__OR__dynamicInc = /*@__PURE__*/ _or(17, $inc__OR__dynamicInc__script, 1, "#scopeOffset/4");
const $inc = /*@__PURE__*/ _const("inc", $inc__OR__dynamicInc);
function $setup($scope) {
	_var($scope, "#childScope/1", $pattern3);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", 0, () => $pattern4);
const $pattern4 = _var_resume("__tests__/template.marko_0_$pattern2#14/var", ($scope, $pattern2) => {
	$dynamicCount($scope, $pattern2.count);
	$dynamicInc($scope, $pattern2.inc);
});
const $dynamicCount = ($scope, dynamicCount) => _text($scope["#text/7"], dynamicCount);
const $dynamicInc = /*@__PURE__*/ _const("dynamicInc", $inc__OR__dynamicInc);
const $input_show = ($scope, input_show) => $dynamicTag($scope, input_show && Child);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
