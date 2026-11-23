// child.marko
const $template = "<button class=counter> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<button class=toggle>toggle</button><span id=go>go</span><!><!>";
const $walks = " c%c";
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/child.marko", /*@__PURE__*/ _load_event_trigger("click", "#go"));
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", /*@__PURE__*/ $load_Child_trigger(($_) => import("./child.mjs").then((mod) => mod.default)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $dynamicTag($scope, $scope.show ? Child : null));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
