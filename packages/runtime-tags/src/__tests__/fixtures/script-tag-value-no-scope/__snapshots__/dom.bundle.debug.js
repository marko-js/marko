// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setText2__script = _script("__tests__/template.marko_0_setText", ($scope) => $scope.setText());
const $setText2 = /* @__PURE__ */ _const("setText", $setText2__script);
function $setup($scope) {
	$setText2($scope, $setText($scope));
}
function $setText($scope) {
	return function(arg) {
		if (arg) {
			throw new Error(`Expected no argument to be passed, but received "${typeof arg}".`);
		}
		_el_read($scope["#div/0"]).textContent = typeof arg;
	};
}
_resume("__tests__/template.marko_0/setText", $setText);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
