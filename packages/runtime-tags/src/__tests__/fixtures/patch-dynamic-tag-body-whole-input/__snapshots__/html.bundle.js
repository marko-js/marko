// tags/show-header.marko
_shells({ d: "d;b%;<!><!><!>" });
var show_header_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/card.marko
_shells({ b: "b !b1; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_header = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_header_default(input);
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_header && _patch_render($scope0_id, "b0", "f");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: open,
		f: input.header
	}) || $fg__input_header && _patch_write($scope0_id, "xf", input.header, !_server_guard($scope0_reason, 0));
});

// tags/plain.marko
_shells({ c: "c;D%;<span><!></span>" });
var plain_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<span>");
	_dynamic_tag($scope0_id, "a", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 0);
	_html("</span>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const H = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a1", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_note && "a1");
	}, $scope0_id, ($scope) => $scope0_page ? [{ d: input.note }] : []) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : plain_default, { header: H }, 1, 0, 0, $wg__input_on, $scope0_reason, 2, 0, void 0, 0, 0, "a0");
	_html("</main>");
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && ($ui__input_on || _unfilled_if($scope0_reason, 1)) && input.note,
		f: $ui__input_on && H,
		h: _write_if($scope0_reason, 1) && $input_note__closures
	}) || _filled_guard($scope0_reason, 1) && (_client_branch_if("a0", $scope0_id) || _client_guard($scope0_reason, 2) || $ui__input_on) && _patch_write($scope0_id, "xd", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a2", "d");
}, 1);
