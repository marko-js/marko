// template.marko
const $template = "<div class=abc><!> <!> <!></div><div class=rest> </div><div class=rest2> </div><div class=rest3> </div>";
const $walks = "D%c%c%lD lD lD l";
const $pattern2 = ($scope, $pattern) => {
	(({ a, ...rest }) => $rest($scope, rest))($pattern);
	(({ a, b, ...rest2 }) => $rest2($scope, rest2))($pattern);
	(({ a, b, c, ...rest3 }) => $rest3($scope, rest3))($pattern);
	$a($scope, $pattern.a);
	$b($scope, $pattern.b);
	$c($scope, $pattern.c);
};
const $rest = ($scope, rest) => _text($scope["#text/3"], JSON.stringify(rest));
const $rest2 = ($scope, rest2) => _text($scope["#text/4"], JSON.stringify(rest2));
const $rest3 = ($scope, rest3) => _text($scope["#text/5"], JSON.stringify(rest3));
const $a = ($scope, a) => _text($scope["#text/0"], a);
const $b = ($scope, b) => _text($scope["#text/1"], b);
const $c = ($scope, c) => _text($scope["#text/2"], c);
function $setup($scope) {
	$pattern2($scope, {
		a: 1,
		b: 2,
		c: 3,
		d: 4
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
