// tags/row.marko
const $Item_content__walks = "D l";
const $Item_content__template = "<li> </li>";
const $template = $Item_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Item_content__walks);
const $Item_content__label = ($scope, label) => _text($scope.a, label);
const $input_label = ($scope, input_label) => $Item_content__label($scope.a, input_label);

// template.marko
const $for_content__$params = ($scope, $params2) => $input_label($scope.a, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), 0, $for_content__$params);
const $labels = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$labels($scope, [...$scope.d, "c"]);
	});
	_on($scope.c, "click", function() {
		$labels($scope, $scope.d.slice(1));
	});
});
