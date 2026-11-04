// styles.css.ts
const box = "box";
const item = "item";
const on = "on";
const tone = { warn: "warn" };

// template.marko
const $template = /*@__PURE__*/ (() => `<button>toggle</button><div class="${"box"}"></div><div class="${item}"></div><div class="${item}"></div><div></div><div></div><!><!>`)();
const $walks = " c b b b b%c";
const $on = _let("on/10", ($scope) => {
	_assert_class_toggles(item, ["on"]);
	_attr_class_names($scope["#div/1"], "on", $scope.on);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
const $input_lit = ($scope, input_lit) => {
	_assert_class_toggles(item, ["on"]);
	_attr_class_names($scope["#div/2"], "on", input_lit);
	_assert_class_toggles("", ["on"]);
	_attr_class_names($scope["#div/3"], "on", input_lit);
	_assert_class_toggles("", [`${"on"} ${"box"}`]);
	_attr_class($scope["#div/4"], input_lit ? "on" : "box");
};
const $if = /*@__PURE__*/ _if("#text/5", /*@__PURE__*/ (() => `<span class="${item}"></span>`)());
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_lit($scope, input.lit);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
