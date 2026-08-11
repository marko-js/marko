// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n__OR__day = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope.day.format(new Date($scope.n))));
const $n = /*@__PURE__*/ _let("n/2", $n__OR__day);
const $day = /*@__PURE__*/ _const("day", $n__OR__day);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 864e5);
}));
function $setup($scope) {
	$n($scope, 0);
	$day($scope, new Intl.DateTimeFormat("ja", {
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
		timeZone: "UTC"
	}));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
