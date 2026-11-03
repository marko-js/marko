// template.marko
const $for_content2__it = /* @__PURE__ */ _dynamic_tag(0);
const $for_content2__$params = ($scope, $params5) => $for_content2__it($scope, $params5[0]);
const $Plain_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content2__$params);
const $Plain_content__item = ($scope, item) => $Plain_content__for($scope, [item]);
const $Plain_content__$params = ($scope, $params4) => $Plain_content__item($scope, $params4[0].item);
const $Plain_content = _content("a2", "<!><!><!>", "b%", 0, $Plain_content__$params);
const $for_content__it = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params3) => $for_content__it($scope, $params3[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__item = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__for($scope, [$scope._.e]));
const $Wrap_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__item);
const $Wrap_content__open = /*@__PURE__*/ _let(5, ($scope) => $Wrap_content__if($scope, $scope.f ? 0 : 1));
const $Wrap_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Wrap_content__open($scope, !$scope.f);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__open($scope, true);
	$Wrap_content__setup__script($scope);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__item($scope, $params2[0].item);
const $Wrap_content__item = /*@__PURE__*/ _const(4, $if_content__item);
const $Wrap_content = _content("a0", "<button class=toggle>t</button><!><!>", " b%", $Wrap_content__setup, $Wrap_content__$params);
const $item_content2__input_b = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.f), 0, "a4");
const $item_content2 = _content("a6", "<b> </b>", "D ", $item_content2__input_b);
_content_resume($item_content2);
const $item_content__input_a = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.e), 0, "a3");
const $item_content = _content("a5", "<em> </em>", "D ", $item_content__input_a);
_content_resume($item_content);
