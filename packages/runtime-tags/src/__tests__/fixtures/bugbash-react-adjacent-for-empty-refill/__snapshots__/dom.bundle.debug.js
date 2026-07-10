// template.marko
const $template = "<div id=wrap><!><!></div><button id=empty-a>empty a</button><button id=refill-a>refill a</button><button id=empty-both>empty both</button><button id=refill-both>refill both</button>";
const $walks = "D%b%l b b b b";
const $for_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content2__$params = ($scope, $params3) => $for_content2__x($scope, $params3[0]);
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<i>a<!></i>", "Db%l", 0, $for_content__$params);
const $a = /*@__PURE__*/ _let("a/6", ($scope) => $for($scope, [$scope.a, (x) => x]));
const $for2 = /*@__PURE__*/ _for_of("#text/1", "<b>b<!></b>", "Db%l", 0, $for_content2__$params);
const $b = /*@__PURE__*/ _let("b/7", ($scope) => $for2($scope, [$scope.b, (x) => x]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$a($scope, []);
	});
	_on($scope["#button/3"], "click", function() {
		$a($scope, [3, 1]);
	});
	_on($scope["#button/4"], "click", function() {
		$a($scope, []);
		$b($scope, []);
	});
	_on($scope["#button/5"], "click", function() {
		$a($scope, [7]);
		$b($scope, [5, 6]);
	});
});
function $setup($scope) {
	$a($scope, [1, 2]);
	$b($scope, [8, 9]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
