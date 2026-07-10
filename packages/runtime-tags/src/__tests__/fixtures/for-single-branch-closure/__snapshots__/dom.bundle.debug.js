// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $for_content__count = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = $for_content__count;
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $count = /*@__PURE__*/ _let("count/5", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/1", "<span><!>: <!></span>", "D%c%l", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
