// total: 6415 (min) 2898 (brotli)
// template.marko: 256 (min) 164 (brotli)
const $if = /* @__PURE__ */ _if(2, "<div>Hello</div>", "b");
const $hide__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$hide($scope, !$scope.d);
}));
const $hide = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, !$scope.d ? 0 : 1);
	$hide__script($scope);
});
const $setup__script = _script("a1", ($scope) => {
	$signal($scope, 0).onabort = () => {
		console.log("cleaned up");
	};
	_on($scope.b, "click", function() {
		document.body.innerHTML = "";
	});
});
