// tags/gm/index.marko
const $template = "<p> </p>";
const $z = /*@__PURE__*/ _const(4, /* @__PURE__ */ _global_or(6, ($scope) => _text($scope.a, $scope.e + $scope.$.mark), /* @__PURE__ */ _global_closure("b1", /* @__PURE__ */ _global_key(9, "mark"))));
const $input_v__OR__$global_flag = /*@__PURE__*/ _global_or(5, ($scope) => $z($scope, $scope.d + $scope.$.flag), /* @__PURE__ */ _global_closure("b0", /* @__PURE__ */ _global_key(8, "flag")));
const $input_v = /*@__PURE__*/ _const(3, $input_v__OR__$global_flag);

// template.marko
const $if_content__setup = ($scope) => $input_v($scope.a, "a");
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.c);
}));
