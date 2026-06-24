// template.marko
const $template = "<div id=target></div>";
const $walks = " b";
const $for_content__selected = /*@__PURE__*/ _for_closure("#div/0", ($scope) => _attr($scope["#span/0"], "data-selected", $scope._.selected === $scope["#LoopKey"]));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $selected__script = _script("__tests__/template.marko_0_selected", ($scope) => _on($scope["#div/0"], "click", function() {
	$selected($scope, $scope.selected + 1);
}));
const $selected = /*@__PURE__*/ _let("selected/1", ($scope) => {
	$for_content__selected($scope);
	$selected__script($scope);
});
const $for = /*@__PURE__*/ _for_until("#div/0", "<span> </span>", " D l", $for_content__setup);
function $setup($scope) {
	$selected($scope, 0);
	$for($scope, [
		3,
		0,
		1
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
