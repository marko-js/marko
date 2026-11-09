// template.marko
const $MyTag_content__walks = "D%c%l";
const $MyTag_content__template = "<div><!>|<!></div>";
const $Wrap_content2__walks = "D%l";
const $Wrap_content2__template = "<p><!></p>";
const $Titled_content__walks = "D l";
const $Titled_content__template = "<h1> </h1>";
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button> </button>`)($MyTag_content__template, $Wrap_content2__template, $Titled_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& D l`)($MyTag_content__walks, $Wrap_content2__walks, $Titled_content__walks);
const $opts_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $Titled_content__opts_title = ($scope, opts_title) => _text($scope["#text/0"], opts_title);
const $Titled_content__$params = ($scope, $params4) => $Titled_content__opts($scope, $params4[1]);
const $Titled_content__opts = ($scope, opts) => $Titled_content__opts_title($scope, opts?.title);
const $Wrap_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content2__opts_content = $Wrap_content2__dynamicTag;
const $Wrap_content2__$params = ($scope, $params3) => $Wrap_content2__opts($scope, $params3[1]);
const $Wrap_content2__opts = ($scope, opts) => $Wrap_content2__opts_content($scope, opts?.content);
const $MyTag_content__b = ($scope, b) => _text($scope["#text/0"], b);
const $MyTag_content__c = ($scope, c) => _text($scope["#text/1"], c);
const $MyTag_content__$params = ($scope, $params2) => {
	$MyTag_content__b($scope, $params2[1]);
	$MyTag_content__c($scope, $params2[2]);
};
const $Wrap_content__x = /*@__PURE__*/ _closure_get("x/6", ($scope) => _text($scope["#text/0"], $scope._.x), 0, "__tests__/template.marko_1_x#0:5/subscribe");
const $Wrap_content__setup = $Wrap_content__x;
const $Wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $Wrap_content__setup);
const $x__closure = /*@__PURE__*/ _closure($Wrap_content__x);
const $x = /*@__PURE__*/ _let("x/5", ($scope) => {
	$MyTag_content__c($scope["#childScope/0"], $scope.x);
	_text($scope["#text/4"], $scope.x);
	$x__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$MyTag_content__b($scope["#childScope/0"], "Hello");
	$opts_content_direct($scope["#childScope/1"], $Wrap_content($scope));
	$Titled_content__opts_title($scope["#childScope/2"]);
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
