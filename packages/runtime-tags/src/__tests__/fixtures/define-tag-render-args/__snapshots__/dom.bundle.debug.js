// template.marko
const $MyTag_content__walks = "D%c%c%l", $MyTag_content__template = "<div><!>|<!>|<!></div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($MyTag_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)($MyTag_content__walks);
const $MyTag_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $MyTag_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $MyTag_content__c = ($scope, c) => _text($scope["#text/2"], c);
const $MyTag_content__$params = ($scope, $params2) => {
	$MyTag_content__a($scope, $params2[0]);
	$MyTag_content__b($scope, $params2[1]);
	$MyTag_content__c($scope, $params2[2]);
};
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	$MyTag_content__c($scope["#childScope/0"], $scope.x);
	_text($scope["#text/2"], $scope.x);
	$x__script($scope);
});
function $setup($scope) {
	$MyTag_content__a($scope["#childScope/0"], 1);
	$MyTag_content__b($scope["#childScope/0"], "Hello");
	$x($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
