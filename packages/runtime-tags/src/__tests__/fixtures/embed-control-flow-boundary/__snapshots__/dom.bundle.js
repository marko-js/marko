// template.marko
const $if = /* @__PURE__ */ _if(2, "<div>Hello</div>", "b");
const $hide = /* @__PURE__ */ _let(3, ($scope) => $if($scope, !$scope.d ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	$signal($scope, 0).onabort = () => {
		console.log("cleaned up");
	};
	_on($scope.a, "click", function() {
		$hide($scope, !$scope.d);
	});
	_on($scope.b, "click", function() {
		document.body.innerHTML = "";
	});
});
