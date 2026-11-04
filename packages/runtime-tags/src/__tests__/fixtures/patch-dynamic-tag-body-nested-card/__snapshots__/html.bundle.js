// tags/card.marko
_shells({ b: "b !b1; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a2: "a2",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_p = _write_guard($scope0_reason, 3), $wi__input_on__OR__input_p__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $fg__input_p = _filled_guard($scope0_reason, 3), $fg__input_note = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {}, 10, _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "a", input.p ? card_default : "span", {}, 2, _content_resume("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 4)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a1", _client_guard($scope0_reason, 4));
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_p__OR__input_note && _scope_with_id($scope1_id) }));
		}, $scope1_id, ($scope) => $scope1_page ? [{ f: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_p, $scope0_reason, 3, 0, void 0, 0, 0, "a0");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a3", _client_guard($scope0_reason, 3));
		$wi__input_on__OR__input_p__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_p || $wi__input_on__OR__input_p__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope2) => $scope0_page ? [{
		f: input.note,
		e: input.p
	}] : []), 0, $wg__input_on, $scope0_reason, 2, 0, void 0, 0, 0, "a2");
	_html("</main>");
	$fg__input_p && _patch_subscribers($scope0_id, "a4", "e");
	$fg__input_note && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.p,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		h: _write_if($scope0_reason, 4) && $input_note__closures,
		g: _write_if($scope0_reason, 3) && $input_p__closures
	}) || ($fg__input_p && (_client_branch_if("a2", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 3)), $fg__input_note && (_client_branch_if("a2", $scope0_id) || _client_branch_if("a0", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
