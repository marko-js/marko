// tags/counter.marko
const $template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks = "E%c%l l";
const $n = /*@__PURE__*/ _fill_let("b0", 7, ($scope) => _text($scope.b, $scope.h));
const $input_start = $n;
const $setup__script$1 = _script("b0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, +$scope.h + 1);
	});
	{
		const main = document.querySelector("main");
		main.dataset.mounts = String(+(main.dataset.mounts || 0) + 1);
	}
});
const $setup = $setup__script$1;

// template.marko
const $await_content__setup = ($scope) => {
	$setup($scope.a);
	$input_start($scope.a, 1);
};
const $await_content = _resume("a1", /*@__PURE__*/ _await_content(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $await_content__setup));
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
