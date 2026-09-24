// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content = /*@__PURE__*/ _await_content("#text/0", "Resolved without reading the value");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, $scope.$global.value);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
