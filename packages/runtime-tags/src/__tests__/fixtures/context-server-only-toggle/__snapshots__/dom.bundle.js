// tags/info-display.marko
const $template = "<!><span> </span>";
const $walks = "bD l";
const $theme = ($scope, theme) => _text($scope.a, theme);
function $setup($scope) {
	$theme($scope, _context_read($scope, 1, "c"));
}

// template.marko
const $for_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $infoprovider_content__if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $if_content__setup);
const $infoprovider_content__show = /*@__PURE__*/ _let(4, ($scope) => $infoprovider_content__if($scope, $scope.e ? 0 : 1));
const $infoprovider_content__for = /*@__PURE__*/ _for_of(3, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $for_content__setup);
const $infoprovider_content__items = /*@__PURE__*/ _let(5, ($scope) => $infoprovider_content__for($scope, [$scope.f, (x) => x]));
const $infoprovider_content__setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$infoprovider_content__show($scope, !$scope.e);
	});
	_on($scope.b, "click", function() {
		$infoprovider_content__items($scope, [...$scope.f, $scope.f?.length]);
	});
});
