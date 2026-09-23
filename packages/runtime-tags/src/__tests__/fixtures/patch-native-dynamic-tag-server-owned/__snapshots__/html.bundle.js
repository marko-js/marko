// template.marko
_shells({
	a0: "a0; ; ",
	a: "a !a1;b%b D ;<!><!><button> </button>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $tag = input.on ? "section" : "article";
	const $input2 = { class: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1));
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "a", $tag, $input2, "a0", 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 1) && input.on,
		g: _source_if($scope0_reason, 0) && input.label,
		i: count,
		j: $input_label__closures
	});
}, 1, 1);
