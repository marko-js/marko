// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["b9"]];
_shells({
	b3: "b3;b%;<!><!><!>",
	"~b3": "~b3;b%;<!><!><!>",
	b: "b !b9;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	b4: /*@__PURE__*/ (() => `b4;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	b2: "b2;D ;<em> </em>"
});
var rowsx_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("b3", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", fmt(label), 1, $scope3_reason, 2)}</em>`);
				_patch_join_init($scope4_id, "b1", $scope3_reason, 2, _filled_guard($scope3_reason, 5) && ">e", _filled_guard($scope3_reason, 6) && ">f");
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, 1, 0, 0, ["b2"], $scope3_reason, 4);
		_filled_guard($scope3_reason, 5) && $cg__isOpen ? _patch_fill($scope3_id, "vb5", fmt) : _client_guard($scope3_reason, 1) && _patch_write($scope3_id, "xe", fmt, !(_filled_guard($scope3_reason, 5) && _client_guard($scope3_reason, 6)));
		_filled_guard($scope3_reason, 6) && $cg__isOpen ? _patch_fill($scope3_id, "vb6", label) : _filled_guard($scope3_reason, 6) && _client_guard($scope3_reason, 5) && _patch_write($scope3_id, "xf", label);
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			e: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 2)) && fmt,
			f: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 2)) && label
		});
	}, $scope0_id, 1) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 2));
		_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 3) << 9 | _mask_group($scope0_reason, 0) << 13);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Panel.content({
			isOpen: input.open,
			fmt: _resume((v) => lib.format(v), "b0"),
			label: input.label + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b7");
		(_filled_guard($scope0_reason, 4) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope1_id, "b8", $scope0_reason, 0, _filled_guard($scope0_reason, 4) && ">h", _filled_guard($scope0_reason, 2) && "c");
		_scope($scope1_id, {
			c: _write_if($scope0_reason, 4) && x,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b4", $scope0_reason, 2);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b9");
	_patch_fill($scope0_id, "vb13", open, 1);
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		h: input.label,
		i: open
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_items && _patch_fill($scope0_id, "vb10", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && ($cg__input_items ? _patch_fill($scope0_id, "vb12", input.label) : _patch_fill($scope0_id, "vb11", input.label, !_server_guard($scope0_reason, 4))));
});

// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button class=l>l</button>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([["a7"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(542 | (_mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 1) << 7));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rowsx_default({
				label: l,
				open: input.open,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.items,
		h: l
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va4", input.open, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va5", input.items, !_server_guard($scope0_reason, 2)));
}, 1);
