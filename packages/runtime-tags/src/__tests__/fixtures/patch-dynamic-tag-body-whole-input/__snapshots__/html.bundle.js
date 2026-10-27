// tags/show-header.marko
_shells({ d: "d;b%;<!><!><!>" });
var show_header_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/card.marko
_shells({ b: "b !b0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			show_header_default(input);
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: open,
		f: input.header
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.header, !_server_guard($scope0_reason, 0)), _content_withhold(input.header));
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
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const H = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : plain_default, { header: H }, 1, 0, 0, $wg__input_on, $scope0_reason, 2);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		f: _unfilled_if($scope0_reason, 2) && H,
		h: _write_if($scope0_reason, 1) && $input_note__closures
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("a0", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_fill($scope0_id, "va3", input.note, !_server_guard($scope0_reason, 1));
}, 1);
