// template.marko
const $Wrap_content__walks = "D%c%l", $Wrap_content__template = "<div><!>|<!></div>";
const $template = /* @__PURE__ */ ((_w0, _w1) => `<button>inc</button>${_w0}${_w1}<!>`)($Wrap_content__template, $Wrap_content__template);
const $walks = /* @__PURE__ */ ((_w0, _w1) => ` b/${_w0}&/${_w1}&b`)($Wrap_content__walks, $Wrap_content__walks);
const $Wrap_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $Wrap_content__$a = ($scope, $a) => $Wrap_content__a($scope, void 0 !== $a ? $a : 1);
const $Wrap_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $Wrap_content__tag_param_ = ($scope, $temp) => {
	$Wrap_content__$a($scope, $temp[0]);
	$Wrap_content__b($scope, $temp[1]);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__tag_param_($scope, $params2?.[0]);
const $n = /* @__PURE__ */ _let("n/3", ($scope) => {
	$Wrap_content__tag_param_($scope["#childScope/1"], [undefined, $scope.n]);
	$Wrap_content__tag_param_($scope["#childScope/2"], [$scope.n, 10]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 2);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
