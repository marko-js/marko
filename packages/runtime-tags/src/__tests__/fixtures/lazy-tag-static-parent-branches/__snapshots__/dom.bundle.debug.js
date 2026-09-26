// template.marko
const $template = "<div>before</div><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._, "__tests__/child.marko_2_count#1/subscribe");
const $await_content__setup__script = _script("__tests__/child.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, +$scope._._.count + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__count($scope);
	$await_content__setup__script($scope);
};
const $await_content__value = ($scope, value) => _text($scope["#text/2"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button><!>:<!></button>", " D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(10, 1));
};
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/1", $count__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$count($scope, 0);
	$try($scope, {});
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
