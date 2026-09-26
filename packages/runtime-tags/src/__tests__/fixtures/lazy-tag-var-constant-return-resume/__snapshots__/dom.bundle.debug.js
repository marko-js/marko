// child.marko
const $template = "<p>child</p>";
const $walks = "b";
function $setup($scope) {
	_return($scope, $_return);
}
function $_return() {
	return console.log("called");
}
_resumed["__tests__/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// template.marko
const $template = "<button class=load>load</button><!><button class=call>call</button>";
const $walks = "b%0&b b";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", ".load");
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $actions = /*@__PURE__*/ _const("actions");
const $api = /*@__PURE__*/ _const("api", ($scope) => $actions($scope, { api: $scope.api }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.api();
	$scope.actions.api();
}));
function $setup($scope) {
	_var($scope, "#childScope/1", $api);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
