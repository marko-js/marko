// template.marko
const $Plain_content__item = /* @__PURE__ */ _dynamic_tag(0);
const $Plain_content__$params = ($scope, $params3) => $Plain_content__item($scope, $params3[0].item);
const $Plain_content = _content("a2", "<!><!><!>", "b%", 0, $Plain_content__$params);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__item = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
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
const $item_content__input_note = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.e), 0, "a3");
const $item_content = _content("a4", "<em> </em>", "D ", $item_content__input_note);
_content_resume($item_content);
