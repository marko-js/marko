// tags/probe.marko
const $template = "<em> </em>";
const $input_name__OR__input_log__script = _script("b0", ($scope) => {
	$scope.e(`mount ${$scope.d}`);
	$signal($scope, 0).onabort = () => $scope.e(`abort ${$scope.d}`);
});
const $input_name__OR__input_log = /*@__PURE__*/ _or(5, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_log__script($scope);
});
const $name = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$input_name__OR__input_log($scope);
});
const $log$1 = /*@__PURE__*/ _const(4, $input_name__OR__input_log);

// template.marko
const $for_content__setup = /* @__PURE__ */ _for_closure(1, ($scope) => $log$1($scope.a, $scope._.g));
const $for_content__name = ($scope, name) => $name($scope.a, name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, (name) => name]));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		$items($scope, [
			"z",
			"x",
			"y"
		]);
	});
	_on($scope.d, "click", function() {
		$items($scope, ["z", "y"]);
	});
	_on($scope.e, "click", function() {
		$items($scope, []);
	});
});
function $log($scope) {
	return function(msg) {
		$scope.a.textContent += msg + ";";
	};
}
_resume("a0", $log);
