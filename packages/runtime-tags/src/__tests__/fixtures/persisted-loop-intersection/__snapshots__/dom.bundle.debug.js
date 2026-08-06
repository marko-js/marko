// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input_title__OR__count__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._.input_title + " " + $scope.item + " #" + $scope._.count), 2), "#text/0");
const $for_content__input_title = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_title__OR__count__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_title._($scope);
	$for_content__count._($scope);
};
const $for_content__count = /*@__PURE__*/ _resume_init("__tests__/template.marko_1_count/init", /*@__PURE__*/ _for_closure("#text/0", $for_content__input_title__OR__count__OR__item));
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_title__OR__count__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/6", $for_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (item) => item]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $for_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
