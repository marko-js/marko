// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b");

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div> </div>${_w0}<div><!> <!></div><button>update</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&D%c%l b`)("b");
const $list = /*@__PURE__*/ _let("list/5", ($scope) => {
	$more($scope, (([, , ...more]) => more)($scope.list));
	$list_($scope, $scope.list[1]);
});
const $more = /*@__PURE__*/ _const("more", ($scope) => $more_length($scope, $scope.more.length));
const $more_length = /*@__PURE__*/ _const("more_length", ($scope) => _text($scope["#text/3"], $scope.more_length));
const $list_ = /*@__PURE__*/ _const("list_1", ($scope) => {
	_text($scope["#text/0"], $scope.list_1);
	$second($scope, $scope.list_1);
});
const $second = ($scope) => _text($scope["#text/2"], $scope.list_1);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$list($scope, [
		4,
		5,
		6,
		7
	]);
}));
function $setup($scope) {
	$list($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
