// template.marko
let contentRenders = 0;
function rendering() {
	contentRenders++;
	return "";
}
const $two_content__input_b = /*@__PURE__*/ _fill_closure("a7", 6, /*@__PURE__*/ _closure_get(13, ($scope) => _text($scope.a, $scope._.g), 0, "a3"), 1);
const $two_content__setup = ($scope) => {
	$two_content__input_b($scope);
	_text($scope.b, rendering());
};
const $two_content = _content("a2", "<strong>two <!><!></strong>", "Db%b%", $two_content__setup);
const $one_content__input_b = /*@__PURE__*/ _fill_closure("a7", 6, /*@__PURE__*/ _closure_get(13, ($scope) => _text($scope.a, $scope._.g), 0, "a1"), 0);
const $one_content__setup = ($scope) => {
	$one_content__input_b($scope);
	_text($scope.b, rendering());
};
const $one_content = _content("a0", "<em>one <!><!></em>", "Db%b%", $one_content__setup);
const $mode__OR__one__OR__two = /*@__PURE__*/ _or(10, ($scope) => _attr_content($scope, "b", $scope.h ? $scope.i : $scope.j), 2);
const $input_b__OR__mode__OR__one__OR__two__script = _script("a5", ($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $input_b__OR__mode__OR__one__OR__two = /*@__PURE__*/ _fill("a7", 6, /*@__PURE__*/ _or(11, ($scope) => {
	_attrs_content($scope, "c", {
		class: $scope.g,
		content: $scope.h ? $scope.i : $scope.j
	});
	_attrs_partial_content($scope, "d", {
		class: $scope.g,
		content: $scope.h ? $scope.i : $scope.j
	}, { id: 1 });
	$input_b__OR__mode__OR__one__OR__two__script($scope);
}, 3));
const $mode = _let(7, ($scope) => {
	$mode__OR__one__OR__two($scope);
	$input_b__OR__mode__OR__one__OR__two($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.h);
}));
const $status__script = _script("a4", ($scope) => console.log($scope.m));
