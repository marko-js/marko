// tags/fwd.marko
_shells({
	b0: "b0 !b1; b%;<button class=toggle>t</button><!><!>",
	b4: "b4",
	b: "b;b%;<!><!><!>"
});
var fwd_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const Wrap = { content: _content("b0", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_patch_write($scope2_id, "xe", content);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_mark($scope2_id, "a")}`);
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 0, 0, 0, $wg__content);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope2_id, "b");
		_script($scope2_id, "b1");
		_patch_render($scope2_id, "b2", "e");
		_patch_fill($scope2_id, "vb3", open, 1);
		_scope($scope2_id, {
			e: content,
			f: open
		});
	}, $scope0_id, 0) };
	_dynamic_tag($scope0_id, "a", $global$1.p ? "p" : Wrap, {}, 18, _content_resume("b4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b5", _client_guard($scope0_reason, 0));
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ d: input.content }] : []), 0, $scope0_page, void 0, void 0, 0, void 0, 0, 0, "b4");
	_fill_global_subscribe("b6", $scope0_id);
	$fg__input_content && _client_branch_if("b4", $scope0_id) && _patch_subscribers($scope0_id, "b7", "d");
	_scope($scope0_id, { f: $wi__input_content && $input_content__closures }) || $fg__input_content && _client_branch_if("b4", $scope0_id) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? fwd_default : "div", {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 2));
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []), 0, $wg__input_on, $scope0_reason, 1, 0, void 0, 0, 0, "a0");
	_html("</main>");
	$fg__input_note && (_client_branch_if("a0", $scope0_id) || $cg__input_on) && _patch_subscribers($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures
	}) || $fg__input_note && (_client_branch_if("a0", $scope0_id) || $cg__input_on) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2));
}, 1);
