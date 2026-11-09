// tags/child.marko
var Box = class {
	constructor(n) {
		this.n = n;
	}
};
function $_return2(v) {
	return new Box(v);
}
const $_return = ($scope) => (strings, value) => strings.join(String(value + $scope.a));
_resumed.b1 = $_return2;
_resumed.b0 = $_return;

// template.marko
const $if_content__setup = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$log($scope._, ($scope._.h?.fmt)`a${1}b`);
	});
	_on($scope.b, "click", function() {
		$log($scope._, String(new ($scope._.h?.Box)(2).n));
	});
});
const $log = /*@__PURE__*/ _let(5, ($scope) => _text($scope.e, $scope.f));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$log($scope, Object.keys($scope.h).join());
}));
