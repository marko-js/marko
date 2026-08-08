// tags/child.marko
const $input__script = _script("b0", ($scope) => $scope.b.action());

// tags/source.marko
const $_return = ($scope) => () => ({
	setHtml(value) {
		$scope.a.innerHTML = value;
	},
	addClass(value) {
		$scope.a.classList.add(value);
	}
});
_resume("c0", $_return);

// template.marko
const $api_getter = /*@__PURE__*/ _hoist(3);
const $setup__script = _script("a1", ($scope) => $api_getter($scope)().setHtml("works"));
const $action = ($scope) => function() {
	$api_getter($scope)().addClass("child");
};
_resume("a0", $action);
