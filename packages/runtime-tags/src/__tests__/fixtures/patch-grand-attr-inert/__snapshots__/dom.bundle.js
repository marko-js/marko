// helper.ts
function stamp() {
	return "stamp";
}

// tags/mid/tags/leaf/index.marko
const $template$1 = "<pre> </pre>";
const $input_stamp = ($scope, input_stamp) => _text($scope.a, input_stamp);

// tags/mid/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup($scope) {
	$input_stamp($scope.a, stamp());
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
