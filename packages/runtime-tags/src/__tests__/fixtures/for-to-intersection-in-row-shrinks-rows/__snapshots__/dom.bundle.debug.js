// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content2__l = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.l[$scope["#LoopKey"]].name), 8);
const $for_content2__setup = $for_content2__l;
const $for_content__l = /*@__PURE__*/ _let("l/4", ($scope) => {
	$for_content__l_length($scope, $scope.l?.length);
	$for_content2__l($scope);
});
const $for_content__for = /*@__PURE__*/ _for_to_unkeyed("#text/0", "<span> </span>", "D ", $for_content2__setup);
const $for_content__outer__OR__l_length__OR__short = /*@__PURE__*/ _or(7, ($scope) => $for_content__for($scope, [$scope.short ? $scope.outer : $scope.l_length - 1]), 2);
const $for_content__l_length = /*@__PURE__*/ _const("l_length", $for_content__outer__OR__l_length__OR__short);
const $for_content__short = /*@__PURE__*/ _let("short/6", $for_content__outer__OR__l_length__OR__short);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__short($scope, true);
	$for_content__l($scope, [{ name: "z" }]);
}));
const $for_content__setup = ($scope) => {
	$for_content__l($scope, [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	]);
	$for_content__short($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__outer = /*@__PURE__*/ _const("outer", $for_content__outer__OR__l_length__OR__short);
const $for_content__$params = ($scope, $params2) => $for_content__outer($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><button>go</button>", "b%b ", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [[0, 0]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
