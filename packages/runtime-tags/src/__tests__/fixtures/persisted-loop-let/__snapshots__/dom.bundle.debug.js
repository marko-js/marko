// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__votes = /*@__PURE__*/ _fill_let("__tests__/template.marko0", "votes/7", ($scope) => _text($scope["#text/1"], $scope.votes));
const $for_content__item_start = $for_content__votes;
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$for_content__votes($scope, +$scope.votes + 1);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_label($scope, $params2[0]?.label);
	$for_content__item_start($scope, $params2[0]?.start);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> <span> </span><button>+</button></li>", "D bD l ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
