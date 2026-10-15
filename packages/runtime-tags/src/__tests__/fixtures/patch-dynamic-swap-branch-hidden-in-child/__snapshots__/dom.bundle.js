// tags/w.marko
const $if_content2__setup = _script("b5", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.d);
}));
const $if_content__setup = _script("b2", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.d);
}));
const $B_content__if = /*@__PURE__*/ _if(0, "<button>b</button>", " ", $if_content2__setup);
const $B_content__input_show = /*@__PURE__*/ _fill_join_closure("b8", 3, _closure_get(9, ($scope) => $B_content__if($scope, $scope._.d ? 0 : 1), 0, "b7"), 1);
const $B_content__setup = $B_content__input_show;
const $B_content__$params = ($scope, $params3) => $B_content__x($scope, $params3[0].x);
const $B_content__x = /*@__PURE__*/ _const(3);
const $B_content = _content$1("b6", "<u>B</u><!><!>", "b%", $B_content__setup, $B_content__$params);
const $A_content__if = /*@__PURE__*/ _if(0, "<button>a</button>", " ", $if_content__setup);
const $A_content__input_show = /*@__PURE__*/ _fill_join_closure("b8", 3, _closure_get(9, ($scope) => $A_content__if($scope, $scope._.d ? 0 : 1), 0, "b4"), 0);
const $A_content__setup = $A_content__input_show;
const $A_content__$params = ($scope, $params2) => $A_content__x($scope, $params2[0].x);
const $A_content__x = /*@__PURE__*/ _const(3);
const $A_content = _content$1("b3", "<u>A</u><!><!>", "b%", $A_content__setup, $A_content__$params);
