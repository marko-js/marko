// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button class=toggle>toggle</button>";
const $walks = "b%b%b b";
const $setup$1 = [[], ["b8"]];
_shells({
	b2: "b2;b%;<!><!><!>",
	b: "b !b8;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	b3: /*@__PURE__*/ (() => `b3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	b1: "b1;D ;<em> </em>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 3), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content_elide("b2", ({ isOpen, fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 4), $cg__isOpen = _client_guard($scope3_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_patch_text($scope4_id, "a", fmt(label), void 0, $scope3_reason, 2)}</em>`);
				_patch_join_init($scope4_id, "b0", $scope3_reason, 2, _filled_guard($scope3_reason, 5) && ">e", _filled_guard($scope3_reason, 6) && ">f");
				_scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["b1"], $scope3_reason, 4);
		_filled_guard($scope3_reason, 5) && $cg__isOpen ? _patch_fill($scope3_id, "vb4", fmt) : _filled_guard($scope3_reason, 5) && _client_guard($scope3_reason, 6) && _patch_write($scope3_id, "xe", fmt);
		_filled_guard($scope3_reason, 6) && $cg__isOpen ? _patch_fill($scope3_id, "vb5", label) : _client_guard($scope3_reason, 0) && _patch_write($scope3_id, "xf", label, !(_filled_guard($scope3_reason, 6) && _client_guard($scope3_reason, 5)));
		_write_if($scope3_reason, 3) && _scope($scope3_id, {
			e: (_unfilled_if($scope3_reason, 1, 5) || _unfilled_if($scope3_reason, 2, 5)) && fmt,
			f: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 2)) && label
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 3) << 13);
			const $childScope = _patch_child($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b6");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b7");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["b3"], $scope0_reason, 1);
	if ($scope0_page) _if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</b>`);
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b8");
	_script($scope0_id, "b9");
	_patch_fill($scope0_id, "vb13", open, 1);
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		i: open
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb10", input.open, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb12", input.label) : _patch_fill($scope0_id, "vb11", input.label, !_server_guard($scope0_reason, 3))));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _patch_child($scope0_id, "a", 0);
	card_default({
		show: input.show,
		open: true,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
