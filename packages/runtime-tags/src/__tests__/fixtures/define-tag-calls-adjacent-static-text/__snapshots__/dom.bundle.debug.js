// template.marko
const $D_content__walks = "b";
const $D_content__template = "Z";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<!>${_w1}<span> </span><!><button>inc</button>`)($D_content__template, $D_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&b/${_w1}&D l%b b`)($D_content__walks, $D_content__walks);
const $if = /*@__PURE__*/ _if("#text/3", "more", 0, 0, "none");
const $n = /*@__PURE__*/ _let("n/5", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$if($scope, $scope.n > 0 ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
