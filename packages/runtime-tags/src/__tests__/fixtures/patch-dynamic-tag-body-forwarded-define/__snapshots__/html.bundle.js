// tags/fwd.marko
_shells({
	b0: "b0 !b2; b%;<button class=toggle>t</button><!><!>",
	b1: "b1 b10,",
	b: "b !;b%;<!><!><!>"
});
var fwd_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const Wrap = { content: _content_elide("b0", ({ content }) => {
		const $scope2_id = _scope_id();
		_content_withhold(content), _patch_value($scope2_id, "vb3", content);
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "a")}`);
		if ($scope0_page) _if(() => {
			{
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 0, 0, $wg__content);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope2_id, "b");
		_script($scope2_id, "b2");
		_patch_value($scope2_id, "vb4", open, 1);
		_scope($scope2_id, {
			e: content,
			f: open
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", $global$1.p ? "p" : Wrap, {}, _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b5");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ d: input.content }] : []), 0, $scope0_page, void 0, 2);
	_fill_global_subscribe("b6", $scope0_id);
	$scope0_page ? _scope($scope0_id, { f: $wi__input_content && $input_content__closures }) : (_filled_guard($scope0_reason, 0) && _content_withheld("b1", $scope0_id) && _patch_value($scope0_id, "vb7", input.content, !_server_guard($scope0_reason, 0)), _content_withheld("b1", $scope0_id) && _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? fwd_default : "div", {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) : _filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope0_id) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 2));
}, 1);
