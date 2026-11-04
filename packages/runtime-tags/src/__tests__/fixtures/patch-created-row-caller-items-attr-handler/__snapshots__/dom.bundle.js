// tags/navlist.marko
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _or_patch("b1", 5, ($scope) => _attr_class_item($scope.a, "active", $scope.e === $scope._.e));
const $for_content__input_path = /*@__PURE__*/ _for_closure_patch("b3", 0, $for_content__input_path__OR__item_href, 5);
const $for_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function(e) {
	e.preventDefault();
	e.target.textContent += $scope.e;
}));
const $for_content__setup = ($scope) => {
	$for_content__input_path._($scope);
	$for_content__setup__script($scope);
};
const $for_content__item_href = /*@__PURE__*/ _const(4, ($scope) => {
	$for_content__input_path__OR__item_href($scope);
	_attr($scope.a, "href", $scope.e);
});
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_href($scope, $params2[0]?.href);
	_text($scope.b, $params2[0]?.label);
};
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<a class=link> </a>", " D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $if_content__items = /*@__PURE__*/ _if_closure_patch("a4", 0, 0, ($scope) => $input_items($scope.a, $scope._.g));
const $items = _let(6, $if_content__items);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$items($scope, $scope.g.concat({
		href: "/b",
		label: "B"
	}));
}));
