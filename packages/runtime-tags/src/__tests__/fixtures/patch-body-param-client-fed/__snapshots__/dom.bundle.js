// tags/card.marko
const $template = "<a> </a>";
const $walks = " D l";
const $input_href = ($scope, input_href) => _attr($scope.a, "href", input_href);
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// tags/list.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__input_row__OR__item_id__OR__item_label = /*@__PURE__*/ _fill_join_for("c1", 5, /*@__PURE__*/ _or(5, ($scope) => $for_content__dynamicTag($scope, $scope._.f, () => ({
	id: $scope.d,
	label: $scope.e
})), 2), 0, 2);
const $for_content__input_row = /*@__PURE__*/ _for_closure(2, $for_content__input_row__OR__item_id__OR__item_label);
const $for_content__setup = $for_content__input_row;
const $for_content__item_id = /*@__PURE__*/ _const(3, $for_content__input_row__OR__item_id__OR__item_label);
const $for_content__item_label = /*@__PURE__*/ _const(4, $for_content__input_row__OR__item_id__OR__item_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_label($scope, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed(2, "<li><!></li>", "D%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _fill_let("c2", 6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("c0", ($scope) => {
	_on($scope.a, "click", function() {
		$items($scope, [...$scope.g, {
			id: String($scope.g.length + 1),
			label: "new"
		}]);
	});
	_on($scope.b, "click", function() {
		$items($scope, $scope.g.map((item) => ({
			id: item.id + "x",
			label: item.label + "!"
		})));
	});
});

// template.marko
const $row_content__r_label = ($scope, r_label) => $input_label($scope.a, r_label);
const $row_content__r_id = ($scope, r_id) => $input_href($scope.a, `/x/${r_id}`);
const $row_content__$params = ($scope, $params2) => {
	$row_content__r_label($scope, $params2[0]?.label);
	$row_content__r_id($scope, $params2[0]?.id);
};
const $row_content = _content("a0", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), 0, $row_content__$params);
