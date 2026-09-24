// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "Resolved without reading the let");
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1");
const $pending = /*@__PURE__*/ _let("pending/5", ($scope) => $await_promise2($scope, $scope.pending));
const $await_content = /*@__PURE__*/ _await_content("#text/0", "Resolved without reading the value");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $input_value = ($scope, input_value) => {
	$pending($scope, input_value);
	$await_promise($scope, input_value);
};
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
}
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
