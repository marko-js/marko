// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const base = {
	key: $key,
	label: $label
};
const $obj = /*@__PURE__*/ _const("obj");
const $keyed = /*@__PURE__*/ _const("keyed");
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	$obj($scope, {
		__proto__: base,
		label() {
			return super.label() + $scope.n;
		}
	});
	$keyed($scope, {
		__proto__: base,
		label() {
			return { [super.key()]() {
				return $scope.n;
			} };
		}
	});
});
const $text = /*@__PURE__*/ _let("text/5", ($scope) => _text($scope["#text/1"], $scope.text));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$text($scope, $scope.obj.label() + " " + $scope.keyed.label().key());
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
function $key() {
	return "key";
}
_resumed["__tests__/template.marko_0/label"] = $label;
_resumed["__tests__/template.marko_0/key"] = $key;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
