// outer.marko
_shells({ a: "a;D%;<section><!></section>" });
var outer_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	b0: "b0;b%;body <!>",
	b: "b;b%;<!><!><!>"
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_wrap = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const $tag = input.wrap ? outer_default : "div";
	_dynamic_tag($scope0_id, "a", $tag, {}, _content_elide("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`body ${_patch_text($scope1_id, "a", input.x, 2, $scope0_reason, 2)}`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $sg__input_wrap, _patch_dynamic_tag($scope0_id, "a", $tag, 0, "b0", 0, $scope0_reason, 1));
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.x,
		f: $input_x__closures
	});
}, 1, 1);
