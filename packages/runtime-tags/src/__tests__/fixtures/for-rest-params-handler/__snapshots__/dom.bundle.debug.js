// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicked($scope._, $scope.args.join(","));
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__args_ = ($scope, args_0) => _text($scope["#text/1"], args_0);
const $for_content__args = /*@__PURE__*/ _const("args", ($scope) => $for_content__args_($scope, $scope.args?.[0]));
const $clicked = /*@__PURE__*/ _let("clicked/2", ($scope) => _text($scope["#text/1"], $scope.clicked));
const $for = /*@__PURE__*/ _for_of("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__args);
function $setup($scope) {
	$clicked($scope, "");
	$for($scope, [["a", "b"]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
