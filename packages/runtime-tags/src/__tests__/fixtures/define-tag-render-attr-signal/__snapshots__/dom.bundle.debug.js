// template.marko
const $MyTag_content__walks = "D l", $MyTag_content__template = "<div> </div>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<button> </button>`)($MyTag_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}& D l`)($MyTag_content__walks);
const $MyTag_content__number = ($scope, number) => _text($scope["#text/0"], number);
const $MyTag_content__$params = ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]);
const $MyTag_content__$temp = ($scope, $temp) => $MyTag_content__number($scope, $temp.number);
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	$MyTag_content__number($scope["#childScope/0"], $scope.x);
	_text($scope["#text/2"], $scope.x);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
