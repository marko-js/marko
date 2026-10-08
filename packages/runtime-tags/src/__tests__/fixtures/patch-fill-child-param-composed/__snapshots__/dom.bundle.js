// tags/card.marko
const $template$1 = "<a> </a>";
const $walks = " D l";
const $input_href = ($scope, input_href) => _attr($scope.a, "href", input_href);
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// tags/feed-list.marko
const $template = "<ul></ul>";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $for_content__input_data__OR__item_id = /*@__PURE__*/ _fill_join("c2", 4, /*@__PURE__*/ _fill_join_for("c3", 4, /*@__PURE__*/ _or(5, ($scope) => $input_href($scope.b, link($scope._.e, $scope.e))), 0, 0));
const $for_content__input_data = /*@__PURE__*/ _for_closure(0, $for_content__input_data__OR__item_id);
const $for_content__setup__script = _script("c1", ($scope) => _on($scope.a, "mouseenter", function() {
	$hovered($scope._, $scope.e);
}));
const $for_content__setup = ($scope) => {
	$for_content__input_data._($scope);
	$for_content__hovered._($scope);
	$for_content__setup__script($scope);
};
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _fill_join("c2", 4, /*@__PURE__*/ _or(6, ($scope) => _attr_class_item($scope.a, "hovered", $scope._.f === $scope.e)));
const $for_content__hovered = _shell_for_closure("c6", 0, $for_content__hovered__OR__item_id);
const $for_content__item_id = /*@__PURE__*/ _fill_const("c2", 4, ($scope) => {
	$input_label($scope.b, $scope.e);
	$for_content__hovered__OR__item_id($scope);
	$for_content__input_data__OR__item_id($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $hovered = /*@__PURE__*/ _fill_let("c4", 5, $for_content__hovered);
function $setup($scope) {
	$hovered($scope, void 0);
}
const $for = /*@__PURE__*/ _for_of_unkeyed(0, /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1), /*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input_data = /*@__PURE__*/ _fill_const("c3", 4, $for_content__input_data);

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
	$input_items($scope.a, [{ id: "c" }]);
	$input_data($scope.a, { q: "client" });
};
const $if = /*@__PURE__*/ _if(2, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("a2", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.h);
}));
