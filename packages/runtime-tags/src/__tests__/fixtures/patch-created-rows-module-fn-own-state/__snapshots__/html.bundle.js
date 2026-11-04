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
	b2: "b2;b%;<!><!><!>",
	b: "b !b8;b%b ;<!><!><button class=l>l</button>",
	b3: `b3 b12;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	b1: "b1;D ;<em> </em>"
});
var rowsx_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_open = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let suffix = "s";
	const Panel = { content: _content("b2", ({ isOpen, fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 4), $fg__fmt = _filled_guard($scope2_reason, 5), $fg__label = _filled_guard($scope2_reason, 6), $cg__isOpen = _client_guard($scope2_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", fmt(label), 1, $scope2_reason, 2)}</em>`);
				_patch_render($scope3_id, "b0", [_filled_guard($scope2_reason, 5) && ">e", _filled_guard($scope2_reason, 6) && ">f"], $scope2_reason, 2);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["b1"], $scope2_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope2_id, "b4", "e");
		$fg__label && $cg__isOpen && _patch_render($scope2_id, "b5", "f");
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 6)) && fmt,
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 2)) && label
		}) || ($fg__fmt && _unfilled_if($scope2_reason, 1) && _patch_write($scope2_id, "xe", fmt, !_server_guard($scope2_reason, 5)), $fg__label && _unfilled_if($scope2_reason, 0) && _patch_write($scope2_id, "xf", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id, 0) };
	_for_of(input.items, (x) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 0));
		_set_scope_reason(25080 | (_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 9));
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Panel.content({
			isOpen: input.open,
			fmt: lib.format,
			label: suffix + x
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b6");
		_patch_render($scope1_id, "b7", _filled_guard($scope0_reason, 0) && "c");
		_scope($scope1_id, {
			c: x,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b3", $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b8");
	$fg__input_open && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b6", "f");
	_patch_fill($scope0_id, "vb9", suffix, 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		g: suffix
	}) || $fg__input_open && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.open, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 2), $fg__input_items = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rowsx_default({
				open: input.open,
				items: input.items
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a0", "e");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.items
	}) || ($fg__input_open && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.open, !_server_guard($scope0_reason, 2)), $fg__input_items && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 3)));
}, 1);
