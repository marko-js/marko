// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$seen($scope._, $scope._.x + $scope.i);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__i = /*@__PURE__*/ _const("i", ($scope) => _text($scope["#text/1"], $scope.i));
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $x = _let("x/6");
const $input_v = $x;
const $seen = /*@__PURE__*/ _let("seen/7", ($scope) => _text($scope["#text/1"], $scope.seen));
function $setup($scope) {
	$seen($scope, "");
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
