// template.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
const $n__OR__money = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/1"], $scope.money.format($scope.n)));
const $n__OR__day = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/2"], $scope.day.format(new Date($scope.n))));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	$n__OR__money($scope);
	$n__OR__day($scope);
});
const $money = /*@__PURE__*/ _const("money", $n__OR__money);
const $day = /*@__PURE__*/ _const("day", $n__OR__day);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1e3);
}));
function $setup($scope) {
	$n($scope, 1234.5);
	$money($scope, new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR"
	}));
	$day($scope, new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeZone: "UTC"
	}));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
