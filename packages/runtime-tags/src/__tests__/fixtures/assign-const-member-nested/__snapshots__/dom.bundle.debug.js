// template.marko
const $template = "<span> </span><button class=open>open</button><button class=read>read</button>";
const $walks = "D l b b";
const $live = ($scope, live) => {
	$live_label($scope, live.label);
	$live_inner($scope, live.inner);
};
const $live_label = ($scope, live_label) => _text($scope["#text/0"], live_label);
const $live_inner__script = _script("__tests__/template.marko_0_live_inner#5", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$scope.live_inner.open = true;
	});
	_on($scope["#button/2"], "click", function() {
		console.log("read", $scope.live_inner.open);
	});
});
const $live_inner = /*@__PURE__*/ _const("live_inner", $live_inner__script);
function $setup($scope) {
	$live($scope, {
		inner: { open: false },
		label: "live"
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
