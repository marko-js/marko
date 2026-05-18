// template.marko
const $MyTag_content__walks = "Db%c%l D l", $MyTag_content__template = "<div>Hello <!> <!></div><button> </button>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($MyTag_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($MyTag_content__walks);
const $MyTag_content__y__script = _script("__tests__/template.marko_1_y", ($scope) => _on($scope["#button/2"], "click", function() {
	$MyTag_content__y($scope, $scope.y + 1);
}));
const $MyTag_content__y = /* @__PURE__ */ _let("y/7", ($scope) => {
	_text($scope["#text/1"], $scope.y);
	_text($scope["#text/3"], $scope.y);
	$MyTag_content__y__script($scope);
});
const $MyTag_content__setup = /* @__PURE__ */ _child_setup(($scope) => $MyTag_content__y($scope, 1));
const $MyTag_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $MyTag_content__$params = ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]);
const $MyTag_content__$temp = ($scope, $temp) => $MyTag_content__name($scope, $temp.name);
function $setup($scope) {
	$MyTag_content__setup._($scope["#childScope/0"], $scope);
	$MyTag_content__name($scope["#childScope/0"], "Ryan");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
