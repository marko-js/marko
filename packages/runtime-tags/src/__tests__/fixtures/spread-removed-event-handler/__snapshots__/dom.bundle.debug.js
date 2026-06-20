// template.marko
const $template = "<div><!>:<!></div>";
const $walks = " D%c%l";
const $attrs4__script = _script("__tests__/template.marko_0_attrs", ($scope) => _attrs_script($scope, "#div/0"));
const $attrs4 = /* @__PURE__ */ _const("attrs", ($scope) => {
	_attrs($scope, "#div/0", $scope.attrs);
	$attrs4__script($scope);
});
const $phase__OR__log = /* @__PURE__ */ _or(5, ($scope) => $attrs4($scope, $scope.phase === 0 ? {
	onClick: $attrs($scope),
	onMouseOver: $attrs2($scope)
} : { onClick: $attrs3($scope) }));
const $phase = /* @__PURE__ */ _let("phase/3", ($scope) => {
	_text($scope["#text/1"], $scope.phase);
	$phase__OR__log($scope);
});
const $log = /* @__PURE__ */ _let("log/4", ($scope) => {
	_text($scope["#text/2"], $scope.log);
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
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
