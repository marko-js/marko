// first.marko
const $template = "<span>first loaded</span>";
const $walks = "b";
const $setup = ($_) => {};
var first_default = /*@__PURE__*/ _template("__tests__/first.marko", $template, "b");

// second.marko
const $template = "<button class=count> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/second.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var second_default = /*@__PURE__*/ _template("__tests__/second.marko", $template, $walks, $setup);

// template.marko
const $template = "<button class=toggle>toggle</button><span id=first>first</span><span id=second>second</span><!><!><!><!>";
const $walks = " d%/&b%/&b%c";
const $load_First_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/first.marko", /*@__PURE__*/ _load_event_trigger("click", "#first"));
const $load_Second_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/second.marko", /*@__PURE__*/ _load_event_trigger("click", "#second"));
let $load_First_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_First_trigger(($_) => import("./v:first.marko.setup.mjs")));
let $load_Second_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Second_trigger(($_) => import("./v:second.marko.setup.mjs")));
const $if_content__setup = ($scope) => $load_Second_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if = /*@__PURE__*/ _if("#text/5", "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$load_First_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Second_setup($scope, $scope["#childScope/4"], $scope["#text/3"]);
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:first.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];

// v:second.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
