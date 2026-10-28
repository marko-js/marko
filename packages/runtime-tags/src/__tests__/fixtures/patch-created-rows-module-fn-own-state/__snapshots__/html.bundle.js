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
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $setup = [[], ["b8"]];
_shells({
	b2: "b2 !;b%;<!><!><!>",
	"~b2": "~b2 !;b%;<!><!><!>",
	b: "b !b8;b%b ;<!><!><button class=l>l</button>",
	b3: /*@__PURE__*/ (() => `b3 b13;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	b1: "b1;D ;<em> </em>"
});
var rowsx_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let suffix = "s";
	const Panel = { content: _content("b2", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_init($scope3_id, "b0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["b1"], $scope2_reason, 4);
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 4)) && fmt,
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 4) || _unfilled_if($scope2_reason, 6)) && label
		}) || (_filled_guard($scope2_reason, 5) && ($cg__isOpen || _client_guard($scope2_reason, 6)) && _patch_fill($scope2_id, "vb4", fmt, !_server_guard($scope2_reason, 5)), _filled_guard($scope2_reason, 6) && $cg__isOpen && _patch_fill($scope2_id, "vb5", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id, 1) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "vb6", x);
		_set_scope_reason(25080 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 9));
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: suffix + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b7");
		_scope($scope1_id, {
			c: x,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b3", $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b8");
	_patch_fill($scope0_id, "vb10", suffix, 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		g: suffix
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb9", input.open, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rowsx_default({
				open: input.open,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.items
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va3", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.items, !_server_guard($scope0_reason, 3)));
}, 1);
