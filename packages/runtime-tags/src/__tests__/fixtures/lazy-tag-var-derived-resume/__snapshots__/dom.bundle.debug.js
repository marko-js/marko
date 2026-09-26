// child.marko
const $template = "<p>n <!></p>";
const $walks = "Db%l";
const $n = /*@__PURE__*/ _let("n/1", ($scope) => {
	_text($scope["#text/0"], $scope.n);
	_return($scope, $_return($scope));
});
function $setup($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => () => $n($scope, +$scope.n + 1) - 1;
_resumed["__tests__/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><button class=actions>inc</button><button class=inc>inc</button>";
const $walks = "b%0&b b b";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $actions = /*@__PURE__*/ _const("actions");
const $inc2__script = _script("__tests__/template.marko_0_inc#7", ($scope) => _on($scope["#button/4"], "click", $scope.inc));
const $inc2 = /*@__PURE__*/ _const("inc", $inc2__script);
const $api = _var_resume("__tests__/template.marko_0_api#5/var", /*@__PURE__*/ _const("api", ($scope) => {
	$actions($scope, { api: $scope.api });
	$inc2($scope, $inc($scope));
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.actions.api();
}));
function $setup($scope) {
	_var($scope, "#childScope/1", $api);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$setup__script($scope);
}
const $inc = ($scope) => function() {
	$scope.api();
};
_resumed["__tests__/template.marko_0/inc"] = $inc;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
