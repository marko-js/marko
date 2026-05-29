// total: 2575 (min) 1263 (brotli)
// tags/child.marko: 30 (min) 34 (brotli)
const $input__script = _script("b0", ($scope) => $scope.b.action());

// tags/source.marko: 106 (min) 82 (brotli)
function $_return($scope) {
	return () => ({
		setHtml(value) {
			$scope.a.innerHTML = value;
		},
		addClass(value) {
			$scope.a.classList.add(value);
		}
	});
}
_resume("c0", $_return);

// template.marko: 161 (min) 116 (brotli)
const $api_getter = _hoist(3);
const $setup__script = _script("a1", ($scope) => $api_getter($scope)().setHtml("works"));
const $api = _var_resume("a2", /* @__PURE__ */ _const(3));
function $action($scope) {
	return function() {
		$api_getter($scope)().addClass("child");
	};
}
_resume("a0", $action);
