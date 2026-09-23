// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope._, []);
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]?.id);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items, (item) => item]));
const $input_items = $items;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
