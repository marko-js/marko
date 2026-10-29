// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $if_content2__setup = /* @__PURE__ */ _if_closure(1, 0, ($scope) => _attr($scope.a, "for", $scope._.f));
const $Field_content__uid = /*@__PURE__*/ _const(5, ($scope) => _attr($scope.a, "id", $scope.f));
const $Field_content__setup = ($scope) => $Field_content__uid($scope, _id($scope));
const $Field_content__if = /*@__PURE__*/ _if(1, "<label>field</label>", " ", $if_content2__setup);
const $Field_content__show = ($scope, show) => $Field_content__if($scope, show ? 0 : 1);
const $Field_content__$params = ($scope, $params3) => $Field_content__show($scope, $params3[0].show);
const $Field_content = _content$1("a2", "<input><!><!>", " b%", $Field_content__setup, $Field_content__$params);
