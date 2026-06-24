// template.marko
const $MyTag_content__walks = "Db%l", $MyTag_content__template = "<div>Hello <!></div>";
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $MyTag_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $MyTag_content__$params = ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]);
const $MyTag_content__$temp = ($scope, $temp) => $MyTag_content__value($scope, $temp.value);
const $if_content__x = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $MyTag_content__value($scope["#childScope/0"], $scope._.x));
const $if_content__setup = $if_content__x;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($MyTag_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($MyTag_content__walks), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
	$show($scope, true);
}));
const $x = /*@__PURE__*/ _let("x/4", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$if_content__x($scope);
	$x__script($scope);
});
function $setup($scope) {
	$show($scope, true);
	$x($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
