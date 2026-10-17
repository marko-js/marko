// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
var collect;
var collected;
const $if_content__summary = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text_content($scope["#style/0"], $scope._.summary));
const $if_content__setup = ($scope) => {
	$if_content__summary._($scope);
	_attr_nonce($scope, "#style/0");
};
const $for_content__item__$global = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_1_$global#0:7_item#2", ($scope) => _text($scope["#text/0"], collect($scope.$global, $scope.item)));
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__item__$global);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $if = /*@__PURE__*/ _if("#text/1", "<style></style>", " ", $if_content__setup);
const $summary = /*@__PURE__*/ _const("summary", ($scope) => {
	$if($scope, $scope.summary ? 0 : 1);
	$if_content__summary($scope);
});
const $setup__$global = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_0_$global#7", ($scope) => $summary($scope, collected($scope.$global)));
const $setup = $setup__$global;
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
