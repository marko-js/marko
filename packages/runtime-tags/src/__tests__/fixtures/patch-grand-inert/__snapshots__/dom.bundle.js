// helper.ts
function stamp() {
	return "stamp";
}

// tags/stamp/index.marko
const $template = "<p> </p>";
function $setup($scope) {
	_text($scope.a, stamp());
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
