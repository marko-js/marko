// template.marko
const $template = "<main><input><p> </p></main>";
const $walks = "D bD m";
function read(reads, value) {
	reads.count++;
	return value;
}
const $input_value__OR__reads = /*@__PURE__*/ _or(6, ($scope) => _attr_input_value_default($scope, "#input/0", read($scope.reads, $scope.input_value)));
const $reads = /*@__PURE__*/ _const("reads", ($scope) => {
	$reads_count($scope, $scope.reads.count);
	$input_value__OR__reads($scope);
});
const $reads_count = ($scope, reads_count) => _text($scope["#text/1"], reads_count);
function $setup($scope) {
	$reads($scope, { count: 0 });
}
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__reads);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
