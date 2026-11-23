// template.marko
const $template = "<div></div><div></div><button></button>";
const $walks = " b b b";
const $el_getter = _hoist_resume("__tests__/template.marko_0_#div#0/hoist", "#div/0");
const $later_getter = _hoist_resume("__tests__/template.marko_0_#div#1/hoist", "#div/1");
const $laterRef = /*@__PURE__*/ _const("laterRef");
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $laterRef($scope, $scope.show && $later_getter($scope)));
const $ref = /*@__PURE__*/ _let("ref/4");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const get = $el_getter($scope);
		get().dataset.read = "script";
		const getLater = $later_getter($scope);
		getLater().dataset.read = "script";
	}
	_on($scope["#button/2"], "click", function() {
		$scope.ref().textContent = "clicked";
		$scope.laterRef().textContent = "clicked";
	});
});
function $setup($scope) {
	$show($scope, true);
	$ref($scope, $el_getter($scope));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
