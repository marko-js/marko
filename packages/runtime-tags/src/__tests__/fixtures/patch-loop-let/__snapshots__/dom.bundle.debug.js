// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = ($_) => {};
const $for_content__votes = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_votes#7/fill", "votes/7", ($scope) => _text($scope["#text/1"], $scope.votes));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$for_content__votes($scope, +$scope.votes + 1);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => {
	$for_content__votes($scope, $params2[0]?.start);
	_text($scope["#text/0"], $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> <span> </span><button>+</button></li>", "D bD l ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
