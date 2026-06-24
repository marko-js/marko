// template.marko
const $MyTag_content__walks = "Db%c%l", $MyTag_content__template = "<div>Hello <!> <!></div>";
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($MyTag_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($MyTag_content__walks);
const $MyTag_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $MyTag_content__count = ($scope, count) => _text($scope["#text/1"], count);
const $MyTag_content__$params = ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]);
const $MyTag_content__$temp = ($scope, $temp) => {
	$MyTag_content__name($scope, $temp.name);
	$MyTag_content__count($scope, $temp.count);
};
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$MyTag_content__count($scope["#childScope/2"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$MyTag_content__name($scope["#childScope/2"], "Ryan");
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
