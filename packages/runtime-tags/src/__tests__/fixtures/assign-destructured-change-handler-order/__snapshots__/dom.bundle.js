// tags/child.marko
const $a__OR__b = /*@__PURE__*/ _or(2, ($scope) => _return($scope, {
	a: $scope.a,
	aChange: $_return($scope),
	b: $scope.b,
	bChange: $_return2($scope)
}));
const $a$1 = /*@__PURE__*/ _let(0, $a__OR__b);
const $b$1 = /*@__PURE__*/ _let(1, $a__OR__b);
const $_return2 = ($scope) => function(next) {
	$b$1($scope, next);
};
const $_return = ($scope) => function(next) {
	$a$1($scope, next);
};
_resumed.b1 = $_return2;
_resumed.b0 = $_return;

// template.marko
const $LastRenamed_content__onValue__script = _script("a16", ($scope) => _on($scope.a, "click", function() {
	$scope.f($scope.g + "?");
}));
const $LastRenamed_content__value = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
const $FirstRenamed_content__onValue__script = _script("a14", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.f + "?");
}));
const $FirstRenamed_content__value = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
const $Last_content__valueChange__script = _script("a12", ($scope) => _on($scope.a, "click", function() {
	$scope.f($scope.g + "?");
}));
const $Last_content__value = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
const $First_content__valueChange__script = _script("a10", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.f + "?");
}));
const $First_content__value = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
const $pattern5 = _var_resume("a4", ($scope, $pattern) => {
	$a($scope, $pattern.a);
	$aChange3($scope, $pattern.aChange);
});
const $a = /*@__PURE__*/ _const(35, ($scope) => _text($scope.j, $scope.a9));
const $aChange3__script = _script("a21", ($scope) => _on($scope.i, "click", function() {
	$scope.aa($scope.a9 + "!");
}));
const $aChange3 = /*@__PURE__*/ _const(36, ($scope) => {
	_text($scope.k, typeof $scope.aa);
	$aChange3__script($scope);
});
const $w = /*@__PURE__*/ _let(50, ($scope) => {
	$First_content__value($scope.a0, $scope.ao);
	_text($scope.a4, $scope.ao);
});
const $x = /*@__PURE__*/ _let(51, ($scope) => {
	$Last_content__value($scope.a1, $scope.ap);
	_text($scope.a5, $scope.ap);
});
const $y = /*@__PURE__*/ _let(52, ($scope) => {
	$FirstRenamed_content__value($scope.a2, $scope.aq);
	_text($scope.a6, $scope.aq);
});
const $z = /*@__PURE__*/ _let(53, ($scope) => {
	$LastRenamed_content__value($scope.a3, $scope.ar);
	_text($scope.a7, $scope.ar);
});
const $pattern6 = _var_resume("a5", ($scope, $pattern2) => {
	$bChange($scope, $pattern2.bChange);
	$b($scope, $pattern2.b);
});
const $bChange__script = _script("a20", ($scope) => _on($scope.l, "click", function() {
	$scope.ac($scope.ad + "!");
}));
const $bChange = /*@__PURE__*/ _const(38, ($scope) => {
	_text($scope.n, typeof $scope.ac);
	$bChange__script($scope);
});
const $b = /*@__PURE__*/ _const(39, ($scope) => _text($scope.m, $scope.ad));
const $pattern7 = _var_resume("a6", ($scope, $pattern3) => {
	$c($scope, $pattern3.a);
	$onC($scope, $pattern3.aChange);
});
const $c = /*@__PURE__*/ _const(41, ($scope) => _text($scope.p, $scope.af));
const $onC__script = _script("a19", ($scope) => _on($scope.o, "click", function() {
	$scope.ag($scope.af + "!");
}));
const $onC = /*@__PURE__*/ _const(42, ($scope) => {
	_text($scope.q, typeof $scope.ag);
	$onC__script($scope);
});
const $pattern8 = _var_resume("a7", ($scope, $pattern4) => {
	$onD($scope, $pattern4.bChange);
	$d($scope, $pattern4.b);
});
const $onD__script = _script("a18", ($scope) => _on($scope.r, "click", function() {
	$scope.ai($scope.aj + "!");
}));
const $onD = /*@__PURE__*/ _const(44, ($scope) => {
	_text($scope.t, typeof $scope.ai);
	$onD__script($scope);
});
const $d = /*@__PURE__*/ _const(45, ($scope) => _text($scope.s, $scope.aj));
const $obj = _var_resume("a8", ($scope, obj) => {
	$rest($scope, (({ a, aChange, ...rest }) => rest)(obj));
	$obj_aChange($scope, obj.aChange);
	$e($scope, obj.a);
});
const $rest = ($scope, rest) => _text($scope.z, Object.keys(rest).join());
const $obj_aChange__script = _script("a17", ($scope) => _on($scope.w, "click", function() {
	$scope.al($scope.am + "!");
}));
const $obj_aChange = /*@__PURE__*/ _const(47, ($scope) => {
	_text($scope.y, typeof $scope.al);
	$obj_aChange__script($scope);
});
const $e = /*@__PURE__*/ _const(48, ($scope) => _text($scope.x, $scope.am));
const $valueChange6 = ($scope) => (_new_z) => $z($scope, _new_z);
const $valueChange5 = ($scope) => (_new_y) => $y($scope, _new_y);
const $valueChange4 = ($scope) => (_new_x) => $x($scope, _new_x);
const $valueChange3 = ($scope) => (_new_w) => $w($scope, _new_w);
_resumed.a3 = $valueChange6;
_resumed.a2 = $valueChange5;
_resumed.a1 = $valueChange4;
_resumed.a0 = $valueChange3;
