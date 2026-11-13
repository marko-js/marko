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
	a: "a;D%b%;<main><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 2), $wg__input_x = _write_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 4), $ui__input_x__OR__input_on = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Label = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_note && "a1");
	}, $scope0_id, ($scope) => $scope0_page ? [{ e: input.note }] : []) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.x ? Label : "span", {}, 2, 0, 0, $wg__input_x, $scope0_reason, 3);
	_dynamic_tag($scope0_id, "b", input.on ? card_default : "div", { content: Label }, 9, 0, 0, $wg__input_on, $scope0_reason, 4, 0, void 0, 0, 0, "a0");
	_html("</main>");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && ($ui__input_x__OR__input_on || _unfilled_if($scope0_reason, 2)) && input.note,
		h: ($ui__input_x__OR__input_on || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && Label,
		k: _write_if($scope0_reason, 2) && $input_note__closures
	}) || _filled_guard($scope0_reason, 2) && (_client_branch_if("a0", $scope0_id) || _client_guard($scope0_reason, 0) || $ui__input_x__OR__input_on) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
