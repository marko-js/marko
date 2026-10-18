// template.marko
_shells({
	a0: "a0 !a2,",
	a1: "a1,",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content_resume("a0", ({ content }) => {
		const $scope2_id = _scope_id();
		_content_withhold(content), _patch_value($scope2_id, "va3", content);
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		let open = false;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "a")}<section>`);
		_dynamic_tag($scope2_id, "b", content, {}, 0, 0, $wg__content, void 0, 2);
		_html("</section>");
		if ($scope0_page) _if(() => {}, $scope2_id, "c");
		_script($scope2_id, "a2");
		_patch_value($scope2_id, "va4", open, 1);
		_scope($scope2_id, {
			f: content,
			g: open
		});
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? Wrap : "div", {}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 1);
	_html("</main>");
	_patch_write($scope0_id, "wf", Wrap, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _unfilled_if($scope0_reason, 1) && Wrap,
		h: _write_if($scope0_reason, 2) && $input_note__closures
	}) : _filled_guard($scope0_reason, 2) && _content_withheld("a1", $scope0_id) && _patch_value($scope0_id, "va6", input.note, !_server_guard($scope0_reason, 2));
}, 1);
