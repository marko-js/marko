// template.marko
const $template = "<h2>Fields</h2><!><!>";
const $walks = " b%c";
const $for_content__headingId = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _attr($scope["#input/2"], "aria-describedby", $scope._.headingId));
const $for_content__uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $for_content__setup = ($scope) => {
	$for_content__headingId._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__uid($scope, _id($scope));
};
const $headingId = /*@__PURE__*/ _const("headingId", ($scope) => _attr($scope["#h2/0"], "id", $scope.headingId));
function $setup($scope) {
	$headingId($scope, _id($scope));
}
const $for = /*@__PURE__*/ _for_of("#text/1", "<label> </label><input>", " D l ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "key"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
