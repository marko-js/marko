// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_note", /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._), 0);
const $if_content__setup = $if_content__input_note;
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $for_content__expand = /*@__PURE__*/ _init_for_closure("__tests__/template.marko_1_expand#6/init", "#text/0", ($scope) => $for_content__if($scope, $scope._.expand ? 0 : 1));
const $for_content__setup = $for_content__expand;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $expand = /*@__PURE__*/ _let("expand/6", $for_content__expand);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$expand($scope, !$scope.expand);
}));
function $setup($scope) {
	$expand($scope, false);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($if_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
