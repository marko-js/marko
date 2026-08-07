// template.marko
const $template = "<main><!><button class=toggle>t</button><button class=add>+</button></main>";
const $walks = "D%b b l";
const $for_content__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/1"], $scope._._.input_note), ($scope) => $scope._._), _closure);
const $for_content__setup = $for_content__input_note;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>: <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.items]));
const $if_content__setup = $if_content__items;
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $items = /*@__PURE__*/ _let("items/7", $if_content__items);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, [...$scope.items, "b"]);
	});
});
function $setup($scope) {
	$show($scope, false);
	$items($scope, ["a"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note__closure = /*@__PURE__*/ _closure($for_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
