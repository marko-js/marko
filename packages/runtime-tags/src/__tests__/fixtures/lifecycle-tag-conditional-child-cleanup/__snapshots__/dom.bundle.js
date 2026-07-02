// tags/child.marko
const $template = "<p>child</p>";
const $setup__script$1 = _script("b0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mounted";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroyed";
	}
}));
const $setup = $setup__script$1;

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /* @__PURE__ */ _if(1, $template, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $show = /* @__PURE__ */ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
