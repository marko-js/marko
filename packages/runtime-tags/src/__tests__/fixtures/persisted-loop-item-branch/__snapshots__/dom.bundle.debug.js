// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content2__child = ($scope, child) => _text($scope["#text/0"], child);
const $for_content2__$params = ($scope, $params3) => $for_content2__child($scope, $params3[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content2__$params);
const $if_content__item_children = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.item_children]));
const $if_content__setup = $if_content__item_children;
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<ul></ul>", " ", $if_content__setup);
const $for_content__item_children_length = ($scope, item_children_length) => $for_content__if($scope, item_children_length ? 0 : 1);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_children($scope, $params2[0]?.children);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for_content__item_children = /*@__PURE__*/ _const("item_children", ($scope) => {
	$if_content__item_children($scope);
	$for_content__item_children_length($scope, $scope.item_children?.length);
});
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
