// template.marko
const $template = "<button> </button>";
const $walks = " D l";
var Base = class {
	label() {
		return "Base";
	}
};
const $Derived = /*@__PURE__*/ _const("Derived");
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $Derived($scope, class extends Base {
	static offset = 10;
	static fromThis = () => this.offset + $scope.n;
	constructor(...args) {
		super();
		this.fromArguments = () => arguments.length + $scope.n;
		this.fromNewTarget = () => typeof new.target + $scope.n;
	}
	fromSuper() {
		return () => super.label() + $scope.n;
	}
}));
const $text = /*@__PURE__*/ _let("text/4", ($scope) => _text($scope["#text/1"], $scope.text));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	const derived = new $scope.Derived(1, 2);
	$text($scope, [
		$scope.Derived.fromThis(),
		derived.fromArguments(),
		derived.fromNewTarget(),
		derived.fromSuper()()
	].join(" "));
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$text($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
