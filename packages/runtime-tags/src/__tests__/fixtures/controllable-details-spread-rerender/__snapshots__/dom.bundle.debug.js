// template.marko
const $template = "<button>bump</button><details><summary>s</summary>body</details><output><!>/<!></output>";
const $walks = " b bD%c%l";
const $attrs2__script = _script("__tests__/template.marko_0_attrs", ($scope) => _attrs_script($scope, "#details/1"));
const $attrs2 = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs($scope, "#details/1", $scope.attrs, _controllable_open);
	$attrs2__script($scope);
});
const $open__OR__n = /*@__PURE__*/ _or(6, ($scope) => $attrs2($scope, {
	open: $scope.open,
	openChange: $attrs($scope),
	"data-n": $scope.n
}));
const $open = /*@__PURE__*/ _let("open/4", ($scope) => {
	_text($scope["#text/2"], $scope.open ? "open" : "closed");
	$open__OR__n($scope);
});
const $n = /*@__PURE__*/ _let("n/5", ($scope) => {
	_text($scope["#text/3"], $scope.n);
	$open__OR__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$open($scope, false);
	$n($scope, 0);
	$setup__script($scope);
}
function $attrs($scope) {
	return function(next) {
		$open($scope, next);
	};
}
_resume("__tests__/template.marko_0/attrs", $attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
