// template.marko
const $template = "<main><ul></ul><!><p> </p><button>Count <!></button></main>";
const $walks = "D b%bD l Db%m";
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $if_content__input_promo = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_promo));
const $if_content__setup = $if_content__input_promo;
const $count = /*@__PURE__*/ _let("count/10", ($scope) => _text($scope["#text/4"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $if = /*@__PURE__*/ _if("#text/1", "<aside> </aside>", "D ", $if_content__setup);
const $input_promo = /*@__PURE__*/ _const("input_promo", ($scope) => {
	$if($scope, $scope.input_promo ? 0 : 1);
	$if_content__input_promo($scope);
});
const $input_note = ($scope, input_note) => _text($scope["#text/2"], input_note);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_promo($scope, input.promo);
	$input_note($scope, input.note);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
