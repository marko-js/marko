// template.marko
const $template = "<button id=a>a</button><button id=b>b <!></button><div> </div>";
const $walks = " b Db%lD l";
const $o = ($scope, o) => {
	_text($scope["#text/3"], o.hi());
	$o_hi($scope, o.hi);
};
const $base2 = ($scope, base) => $o($scope, {
	__proto__: base,
	hi() {
		return super.hi() + "!";
	}
});
const $n = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$base2($scope, { hi: $base });
	$n($scope, 1);
	$setup__script($scope);
}
const $o_hi__script = _script("__tests__/template.marko_0_o_hi#6", ($scope) => _on($scope["#button/0"], "click", $scope.o_hi));
const $o_hi = /*@__PURE__*/ _const("o_hi", $o_hi__script);
function $base() {
	return "hi";
}
_resumed["__tests__/template.marko_0/base"] = $base;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
