// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const base = { label: $label };
var Base = class {
	label() {
		return "Base";
	}
};
const $make2 = /*@__PURE__*/ _const("make");
const $makeClass2 = /*@__PURE__*/ _const("makeClass");
const $makeBound2 = /*@__PURE__*/ _const("makeBound");
const $count2 = /*@__PURE__*/ _const("count");
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	$make2($scope, $make($scope));
	$makeClass2($scope, $makeClass($scope));
	$makeBound2($scope, $makeBound($scope));
	$count2($scope, $count($scope));
});
const $text = /*@__PURE__*/ _let("text/7", ($scope) => _text($scope["#text/1"], $scope.text));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$text($scope, [
		$scope.make().label(),
		new ($scope.makeClass())().label(),
		$scope.makeBound().call({ label: "bound" }),
		$scope.count({ arguments: [1, 2] })
	].join(" "));
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$text($scope, "");
	$setup__script($scope);
}
function $label() {
	return "base";
}
const $make = ($scope) => () => ({
	__proto__: base,
	label() {
		return super.label() + $scope.n;
	}
});
const $makeClass = ($scope) => () => class extends Base {
	label() {
		return super.label() + $scope.n;
	}
};
const $makeBound = ($scope) => () => function() {
	return this.label + $scope.n;
};
const $count = ($scope) => (call) => ({ arguments: call.arguments.length + $scope.n }).arguments;
_resumed["__tests__/template.marko_0/label"] = $label;
_resumed["__tests__/template.marko_0/make"] = $make;
_resumed["__tests__/template.marko_0/makeClass"] = $makeClass;
_resumed["__tests__/template.marko_0/makeBound"] = $makeBound;
_resumed["__tests__/template.marko_0/count"] = $count;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
