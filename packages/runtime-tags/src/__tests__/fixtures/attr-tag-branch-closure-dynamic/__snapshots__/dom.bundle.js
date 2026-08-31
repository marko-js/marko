// tags/pager.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_start_content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(0, "<span><!></span>", "D%", $if_content__input_start_content);
const $input_start = ($scope, input_start) => {
	$input_start_content($scope, input_start?.content);
	$if($scope, input_start ? 0 : 1);
};
const $input_start_content = /*@__PURE__*/ _const(4, $if_content__input_start_content);

// tags/page.marko
const items = [{ title: "First" }, { title: "Second" }];
const $start_content__next_title = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.f));
const $start_content = /*@__PURE__*/ _content("b0", " ", " ", $start_content__next_title);
const $next = /*@__PURE__*/ _const(4, ($scope) => {
	let $start;
	if ($scope.e) $start = attrTag({ content: $start_content($scope) });
	$input_start($scope.a, $start);
	$next_title($scope, $scope.e?.title);
});
const $next_title = /*@__PURE__*/ _const(5, /* @__PURE__ */ _closure($start_content__next_title));
const $input_index = ($scope, input_index) => $next($scope, items[input_index]);

// template.marko
const $index = /*@__PURE__*/ _let(2, ($scope) => $input_index($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$index($scope, ($scope.c + 1) % 3);
}));
