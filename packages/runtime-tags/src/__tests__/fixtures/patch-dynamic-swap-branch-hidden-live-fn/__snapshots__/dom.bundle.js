// tags/probe.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// tags/w.marko
const $if_content2__setup = _script("c7", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.d);
}));
const $if_content__setup = _script("c1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.d);
}));
const $B_content__if = /*@__PURE__*/ _if(0, "<button>b</button>", " ", $if_content2__setup);
const $B_content__input_show = /*@__PURE__*/ _init_resume("c8", _closure_resume("c14", /*@__PURE__*/ _fill_closure("c9", 4, /*@__PURE__*/ _closure_get(10, ($scope) => $B_content__if($scope, $scope._.e ? 0 : 1)), 1)));
const $B_content__setup = $B_content__input_show;
const $B_content__$params = ($scope, $params3) => $B_content__x($scope, $params3[0].x);
const $B_content__x = /*@__PURE__*/ _const(3);
const $B_content = _content$1("c3", "<u>B</u><!><!>", "b%", $B_content__setup, $B_content__$params);
const $A_content__if = /*@__PURE__*/ _if(0, "<button>a</button>", " ", $if_content__setup);
const $A_content__input_show = /*@__PURE__*/ _init_resume("c6", _closure_resume("c16", /*@__PURE__*/ _fill_closure("c9", 4, /*@__PURE__*/ _closure_get(10, ($scope) => $A_content__if($scope, $scope._.e ? 0 : 1)), 0)));
const $A_content__setup = $A_content__input_show;
const $A_content__$params = ($scope, $params2) => $A_content__x($scope, $params2[0].x);
const $A_content__x = /*@__PURE__*/ _const(3);
const $A_content = _content$1("c4", "<u>A</u><!><!>", "b%", $A_content__setup, $A_content__$params);
const $get = ($scope) => function() {
	return "s:" + $scope.e;
};
_bind_resume("c0 e", $get);
