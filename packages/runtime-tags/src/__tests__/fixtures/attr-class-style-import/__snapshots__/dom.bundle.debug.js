// styles.css.ts
const box = "box";
const item = "item";
const on = "on";
const tone = { warn: "warn" };

// tags/input-toggle.marko
const $template$1 = /*@__PURE__*/ (() => `<div class="${item}"></div>`)();
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_on = ($scope, input_on) => {
	_assert_class_toggles(item, ["on"]);
	_attr_class_names($scope["#div/0"], "on", input_on);
};
const $input = ($scope, input) => $input_on($scope, input.on);
var input_toggle_default = /*@__PURE__*/ _template("__tests__/tags/input-toggle.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>toggle</button><div class="${"box"}"></div><div class="${_w0}"></div><div class="${item} lit ${tone.warn}"></div><div class="${item}"></div><div class="${item}"></div><div></div><div></div>${_w1}<!><!>`)("box", $template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` e b b b b/${_w0}&%c`)(" b");
const $if = /*@__PURE__*/ _if("#text/6", /*@__PURE__*/ (() => `<span class="${item}"></span>`)());
const $on = /*@__PURE__*/ _let("on/7", ($scope) => {
	_assert_class_toggles(item, ["on"]);
	_attr_class_names($scope["#div/1"], "on", $scope.on);
	_assert_class_toggles(item, ["on", "lit"]);
	_attr_class_names($scope["#div/2"], "on", $scope.on);
	_attr_class_item($scope["#div/2"], "lit", !$scope.on);
	_assert_class_toggles("", ["on"]);
	_attr_class_names($scope["#div/3"], "on", $scope.on);
	_assert_class_toggles("", [`${"on"} ${"box"}`]);
	_attr_class($scope["#div/4"], $scope.on ? "on" : "box");
	$input_on($scope["#childScope/5"], $scope.on);
	$if($scope, $scope.on ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
