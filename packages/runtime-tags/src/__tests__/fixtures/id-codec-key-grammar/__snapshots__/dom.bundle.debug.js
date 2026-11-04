// template.marko
const $template = "<h1>Keys</h1><!><!>";
const $walks = " b%c";
const $for_content__heading = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _attr($scope["#input/1"], "aria-labelledby", $scope._.heading));
const $for_content__uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/1"], "id", uid);
};
const $for_content__setup = ($scope) => {
	$for_content__heading._($scope);
	$for_content__uid($scope, _id($scope));
};
const $heading = /*@__PURE__*/ _const("heading", ($scope) => _attr($scope["#h1/0"], "id", $scope.heading));
function $setup($scope) {
	$heading($scope, _id($scope));
}
const $for = /*@__PURE__*/ _for_of("#text/1", "<label>Key</label><input>", " b ", $for_content__setup);
const $input_keys = ($scope, input_keys) => $for($scope, [input_keys, (key) => key]);
const $input = ($scope, input) => $input_keys($scope, input.keys);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
