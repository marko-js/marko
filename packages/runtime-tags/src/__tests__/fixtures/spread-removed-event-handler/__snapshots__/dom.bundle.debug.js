// template.marko
const $template = "<div><!>:<!></div>";
const $walks = " D%c%l";
const $attrs4__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "#div/0", $scope.attrs));
const $attrs4__script = _script("__tests__/template.marko_0_attrs", ($scope) => _attrs_script($scope, "#div/0"));
const $attrs4 = /*@__PURE__*/ _const("attrs", ($scope) => {
	$attrs4__render($scope);
	$attrs4__script($scope);
});
const $phase__OR__log = /*@__PURE__*/ _or(5, ($scope) => $attrs4($scope, $scope.phase === 0 ? {
	onClick: $attrs($scope),
	onMouseOver: $attrs2($scope)
} : { onClick: $attrs3($scope) }));
const $phase__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.phase));
const $phase = /*@__PURE__*/ _let("phase/3", ($scope) => {
	$phase__render($scope);
	$phase__OR__log($scope);
});
const $log__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], $scope.log));
const $log = /*@__PURE__*/ _let("log/4", ($scope) => {
	$log__render($scope);
	$phase__OR__log($scope);
});
function $setup($scope) {
	$phase($scope, 0);
	$log($scope, "");
}
function $attrs3($scope) {
	return function() {
		$phase($scope, 0);
	};
}
function $attrs2($scope) {
	return function() {
		$log($scope, `${$scope.log}M`);
	};
}
function $attrs($scope) {
	return function() {
		$phase($scope, 1);
	};
}
_resume("__tests__/template.marko_0/attrs3", $attrs3);
_resume("__tests__/template.marko_0/attrs2", $attrs2);
_resume("__tests__/template.marko_0/attrs", $attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
