// tags/rec.marko
const $rec_content__label = /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.a, $scope._._.j), ($scope) => $scope._._, "b0");
const $rec_content = _content("b1", "<em>held <!></em>", "Db%", $rec_content__label);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.h));
const $if_content__setup = $if_content__input_content;
const $label = /*@__PURE__*/ _const(9, /* @__PURE__ */ _closure($rec_content__label));
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__setup);
const $shown = /*@__PURE__*/ _let(8, ($scope) => {
	$label($scope, $scope.i ? "on" : "off");
	$if($scope, $scope.i ? 0 : 1);
});
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, !$scope.i);
}));
