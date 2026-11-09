// template.marko
const $template = "<div class=abc><!> <!> <!></div><div class=rest> </div><div class=rest2> </div><div class=rest3> </div>";
const $walks = "D%c%c%lD lD lD l";
const $pattern2 = ($scope, $pattern) => {
	$rest($scope, (({ a, ...rest }) => rest)($pattern));
	$rest2($scope, (({ a, b, ...rest2 }) => rest2)($pattern));
	$rest3($scope, (({ a, b, c, ...rest3 }) => rest3)($pattern));
	_text($scope["#text/0"], $pattern.a);
	_text($scope["#text/1"], $pattern.b);
	_text($scope["#text/2"], $pattern.c);
};
const $rest = ($scope, rest) => _text($scope["#text/3"], JSON.stringify(rest));
const $rest2 = ($scope, rest2) => _text($scope["#text/4"], JSON.stringify(rest2));
const $rest3 = ($scope, rest3) => _text($scope["#text/5"], JSON.stringify(rest3));
function $setup($scope) {
	$pattern2($scope, {
		a: 1,
		b: 2,
		c: 3,
		d: 4
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
