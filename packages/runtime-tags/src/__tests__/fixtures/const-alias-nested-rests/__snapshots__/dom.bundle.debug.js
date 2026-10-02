// template.marko
const $template = "<div><!> <!> <!></div><div><!> <!> <!></div><button>update</button>";
const $walks = "D%c%c%lD%c%c%l b";
const $obj = /*@__PURE__*/ _let("obj/7", ($scope) => {
	$outer($scope, (({ a, ...outer }) => outer)($scope.obj));
	$obj_d($scope, $scope.obj.d);
	$a2($scope, $scope.obj.a);
});
const $outer = /*@__PURE__*/ _const("outer", ($scope) => _text($scope["#text/2"], JSON.stringify($scope.outer)));
const $pattern2 = ($scope, $pattern) => {
	$last($scope, (([, , ...last]) => last)($pattern));
	$first($scope, $pattern[0]);
	$second($scope, $pattern[1]);
};
const $obj_d = /*@__PURE__*/ _const("obj_d", ($scope) => $pattern2($scope, [
	$scope.obj_d,
	4,
	5,
	6
]));
const $a2 = /*@__PURE__*/ _const("$a", ($scope) => {
	$inner($scope, (({ b, ...inner }) => inner)($scope.$a));
	$b($scope, $scope.$a.b);
});
const $inner = /*@__PURE__*/ _const("inner", ($scope) => _text($scope["#text/1"], JSON.stringify($scope.inner)));
const $b = /*@__PURE__*/ _const("b", ($scope) => _text($scope["#text/0"], $scope.b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/6"], "click", function() {
	$obj($scope, {
		a: {
			b: 4,
			c: 5
		},
		d: 6
	});
}));
function $setup($scope) {
	$obj($scope, {
		a: {
			b: 1,
			c: 2
		},
		d: 3
	});
	$setup__script($scope);
}
const $last = ($scope, last) => _text($scope["#text/5"], last.join("+"));
const $first = ($scope, first) => _text($scope["#text/3"], first);
const $second = ($scope, second) => _text($scope["#text/4"], second);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
