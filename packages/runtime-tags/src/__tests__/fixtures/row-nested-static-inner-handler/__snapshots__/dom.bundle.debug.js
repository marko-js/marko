// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $for_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + ($scope.c * 10 + $scope._.row));
}));
const $for_content2__setup = $for_content2__setup__script;
const $for_content2__$params = ($scope, $params3) => $for_content2__c($scope, $params3[0]);
const $for_content2__c = /*@__PURE__*/ _const("c");
const $for_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button class=r>x</button>", " ", $for_content2__setup, $for_content2__$params);
const $for_content__setup = ($scope) => $for_content__for($scope, [[1, 2]]);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for_content__row = /*@__PURE__*/ _const("row");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
