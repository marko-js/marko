// tags/sections.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d));
const $for_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__content);
const $for_content__content = /*@__PURE__*/ _const(3, ($scope) => {
	$for_content__if($scope, $scope.d ? 0 : 1);
	$if_content__content($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__content($scope, ($params2?.[0]).content);
const $for = /*@__PURE__*/ _for_of(0, "<div></div>", " ", 0, $for_content__$params);
const $input_section = ($scope, input_section) => $for($scope, [input_section]);

// template.marko
const $section_content = /*@__PURE__*/ _content("a0", " ", " ", /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.a, $scope._.c)));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	let $section;
	forTo($scope.d, 1, 1, (i) => {
		$section = attrTags($section, { content: $section_content($scope) });
	});
	$input_section($scope.b, $section);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.d + 1);
}));
