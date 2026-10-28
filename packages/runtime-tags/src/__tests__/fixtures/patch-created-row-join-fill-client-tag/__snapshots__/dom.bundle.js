// tags/plain-let.marko
const $value = /*@__PURE__*/ _fill_let("b1", 3, ($scope) => _return($scope, $scope.d));
const $input_value = $value;
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
}
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resumed.b0 = $valueChange;

// tags/row-list.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>+</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $if_content__input_settled__OR__bounty__OR__t = /*@__PURE__*/ _fill_join_if("c6", 2, /*@__PURE__*/ _fill_join("c10", 8, /*@__PURE__*/ _or_resume("c1", 1, ($scope) => _text($scope.a, $scope._.c + $scope._._.j + $scope._._.i), 2), ($join) => /*@__PURE__*/ _for_closure(2, /*@__PURE__*/ _if_closure(0, 0, $join))), 0, 0);
const $if_content__input_settled = /*@__PURE__*/ _closure_get(11, $if_content__input_settled__OR__bounty__OR__t, ($scope) => $scope._._, "c2");
const $if_content__setup$1 = ($scope) => {
	$if_content__input_settled($scope);
	$if_content__bounty($scope);
	$if_content__t._($scope);
};
const $if_content__bounty = /*@__PURE__*/ _init_resume("c12", /*@__PURE__*/ _closure_get(12, $if_content__input_settled__OR__bounty__OR__t, ($scope) => $scope._._, "c3"));
const $if_content__t = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_settled__OR__bounty__OR__t);
const $for_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content__setup$1);
const $for_content__input_type = /*@__PURE__*/ _init_resume("c7", /*@__PURE__*/ _fill_join("c9", 7, /*@__PURE__*/ _for_closure(2, ($scope) => $for_content__if($scope, $scope._.h ? 0 : 1))));
const $for_content__setup = $for_content__input_type;
const $for_content__$params = ($scope, $params2) => $for_content__t($scope, $params2[0]);
const $for_content__t = /*@__PURE__*/ _fill_const("c6", 2, $if_content__t, /*@__PURE__*/ _fill_mark(2, $if_content__t));
const $bounty = _var_resume("c0", /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($if_content__bounty)));
const $setup__script$1 = _script("c8", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, +$scope.j + 1);
}));
function $setup($scope) {
	$setup$1($scope.a);
	$input_value($scope.a, 1);
	_var($scope, 0, $bounty);
	$setup__script$1($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed(2, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tally = ($scope, input_tally) => $for($scope, [input_tally]);
const $input_type = /*@__PURE__*/ _fill_const("c9", 7, $for_content__input_type);
const $input_settled__closure = /*@__PURE__*/ _closure($if_content__input_settled);
const $input_settled = /*@__PURE__*/ _fill_const("c10", 8, $input_settled__closure, /*@__PURE__*/ _fill_mark(8, $input_settled__closure));

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
	$input_tally($scope.a, []);
	$input_type($scope.a, "a");
	$input_settled($scope.a, 0);
};
const $if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $if_content__setup);
const $more = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$more($scope, true);
}));
