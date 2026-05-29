// total: 15410 (min) 6028 (brotli)
// tags/sections.marko: 0 (min) 1 (brotli)
const $if_content__dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $if_content__content = /* @__PURE__ */ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d));
const $for_content__if = /* @__PURE__ */ _if(0, "<!><!><!>", "b%c", $if_content__content);
const $for_content__content = /* @__PURE__ */ _const(3, ($scope) => {
	$for_content__if($scope, $scope.d ? 0 : 1);
	$if_content__content($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => $for_content__content($scope, $temp.content);
const $for = /* @__PURE__ */ _for_of(0, "<!><!><!>", "b%c", 0, $for_content__$params);
const $input_section = ($scope, input_section) => $for($scope, [input_section]);

// template.marko: 230 (min) 147 (brotli)
const $section_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $section_content = _content_resume("a1", " ", " b", $section_content__count);
const $count__closure = /* @__PURE__ */ _closure($section_content__count);
const $count = /* @__PURE__ */ _let(1, ($scope) => {
	$input_section($scope.a, attrTag({
		onClick: $onClick($scope),
		content: $section_content($scope)
	}));
	$count__closure($scope);
});
function $onClick($scope) {
	return function() {
		$count($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
