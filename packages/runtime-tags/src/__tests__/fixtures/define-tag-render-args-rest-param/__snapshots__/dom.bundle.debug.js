// template.marko
const $MyTag_content__walks = "D%c%l", $MyTag_content__template = "<div><!>|<!></div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($MyTag_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)($MyTag_content__walks);
const $MyTag_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $MyTag_content__rest = ($scope, rest) => _text($scope["#text/1"], JSON.stringify(rest));
const $MyTag_content__tag_params = ($scope, $params2) => {
	(([, ...rest]) => $MyTag_content__rest($scope, rest))($params2);
	$MyTag_content__a($scope, $params2[0]);
};
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	$MyTag_content__tag_params($scope["#childScope/0"], [
		$scope.x,
		"two",
		"three"
	]);
	_text($scope["#text/2"], $scope.x);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
