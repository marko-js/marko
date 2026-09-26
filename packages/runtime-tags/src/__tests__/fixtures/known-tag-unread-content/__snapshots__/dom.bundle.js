// tags/label-child.marko
const $input_item_label = ($scope, input_item_label) => _text($scope.a, input_item_label);
const $input_item = ($scope, input_item) => $input_item_label($scope, input_item?.label);

// template.marko
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	let $item;
	if ($scope.g) $item = attrTag({ label: "if" });
	$input_item($scope.c, $item);
});
const $setup__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$n($scope, +$scope.g + 1);
}));
