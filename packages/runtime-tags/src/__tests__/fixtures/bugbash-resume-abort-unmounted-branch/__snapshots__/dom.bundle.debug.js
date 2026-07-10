// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	console.log("script ran");
	$signal($scope, 0).onabort = () => console.log("aborted");
});
const $if_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<div>shown</div>", "b", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
