// template.marko
const $Plain_content__item = /* @__PURE__ */ _dynamic_tag(0);
const $Plain_content__$params = ($scope, $params3) => $Plain_content__item($scope, $params3[0].item);
const $Plain_content = _content$1("a0", "<!><!><!>", "b%", 0, $Plain_content__$params);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__item = /*@__PURE__*/ _fill_join("a4", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $Wrap_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__item);
const $Wrap_content__open = /*@__PURE__*/ _fill_let("a5", 5, ($scope) => $Wrap_content__if($scope, $scope.f ? 0 : 1));
const $Wrap_content__setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$Wrap_content__open($scope, !$scope.f);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__setup__script($scope);
	$Wrap_content__open($scope, true);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__item($scope, $params2[0].item);
const $Wrap_content__item = /*@__PURE__*/ _fill_const("a4", 4, $if_content__item);
const $Wrap_content = _content$1("a1", "<button class=toggle>t</button><!><!>", " b%", $Wrap_content__setup, $Wrap_content__$params);
const $item_content__input_note = /*@__PURE__*/ _fill_join_closure("a7", 4, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.e), 0, "a6"), 0);
const $item_content = _content$1("a2", "<em> </em>", "D ", $item_content__input_note);
_content_resume($item_content);
