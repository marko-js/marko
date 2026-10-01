// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$last($scope._, $scope.fn());
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => $for_content__fn($scope, $params2[0]);
const $for_content__fn = /*@__PURE__*/ _const("fn");
const $last = /*@__PURE__*/ _let("last/2", ($scope) => _text($scope["#text/1"], $scope.last));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button>x</button>", " ", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$last($scope, "none");
	$for($scope, [[$of, $of2]]);
}
function $of2() {
	return "b";
}
function $of() {
	return "a";
}
_resumed["__tests__/template.marko_0/of2"] = $of2;
_resumed["__tests__/template.marko_0/of"] = $of;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
