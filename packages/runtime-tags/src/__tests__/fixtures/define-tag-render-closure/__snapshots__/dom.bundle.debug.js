// template.marko
const $MyTag_content__walks = "D l", $MyTag_content__template = "<div> </div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button> </button>`)($MyTag_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b D l`)($MyTag_content__walks);
const $if_content__setup = ($scope) => {
	$MyTag_content__setup._($scope["#childScope/0"], $scope._);
};
const $MyTag_content__x = /*@__PURE__*/ _closure_get("x", ($scope) => _text($scope["#text/0"], $scope._.x));
const $MyTag_content__setup = /*@__PURE__*/ _child_setup($MyTag_content__x);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($MyTag_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($MyTag_content__walks), $if_content__setup);
const $x__closure = /*@__PURE__*/ _closure($MyTag_content__x);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/2"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /*@__PURE__*/ _let("x/4", ($scope) => {
	_text($scope["#text/3"], $scope.x);
	$if($scope, $scope.x || 1 ? 0 : 1);
	$x__closure($scope);
	$x__script($scope);
});
function $setup($scope) {
	$MyTag_content__setup._($scope["#childScope/0"], $scope);
	$x($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
