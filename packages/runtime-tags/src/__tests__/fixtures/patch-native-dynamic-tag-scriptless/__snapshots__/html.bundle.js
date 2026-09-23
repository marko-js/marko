// template.marko
_shells({
	a0: "a0; ; ",
	a: "a;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_on__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $tag = input.on ? "section" : "article";
	const $input2 = { class: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1));
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $sg__input_on__OR__input_label, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, "a0", 0, $scope0_reason, 0));
	$scope0_page && _scope($scope0_id, {
		d: _source_if($scope0_reason, 1) && input.on,
		e: input.label,
		g: $input_label__closures
	});
}, 1, 1);
