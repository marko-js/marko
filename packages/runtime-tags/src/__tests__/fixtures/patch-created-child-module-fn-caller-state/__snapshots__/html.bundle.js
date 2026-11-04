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
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $setup = [[], []];
_shells({
	b2: `b2;${$Panel_content__walks};${$Panel_content__template}`,
	b: `b;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	b1: "b1;D ;<em> </em>"
});
var rowsx_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_open__OR__input_label = _updates_from($scope0_reason, 0), $uf__input_open = _updates_from($scope0_reason, 1), $uf__input_label = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Panel = { content: _content("b2", ({ isOpen, fmt, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 4), $ui__fmt__OR__label = _unfilled_if($scope1_reason, 2), $ui__isOpen__OR__label = _unfilled_if($scope1_reason, 1), $ui__isOpen__OR__fmt = _unfilled_if($scope1_reason, 0), $fg__fmt = _filled_guard($scope1_reason, 5), $fg__label = _filled_guard($scope1_reason, 6), $cg__isOpen = _client_guard($scope1_reason, 4);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", fmt(label), 1, $scope1_reason, 2)}</em>`);
				_patch_render($scope2_id, "b0", ((_filled_guard($scope1_reason, 5) ? " >e" : "") + (_filled_guard($scope1_reason, 6) ? " >f" : "")).slice(1), $scope1_reason, 2);
				_scope($scope2_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["b1"], $scope1_reason, 4);
		$fg__fmt && $cg__isOpen && _patch_render($scope1_id, "b3", "e");
		$fg__label && $cg__isOpen && _patch_render($scope1_id, "b4", "f");
		_write_if($scope1_reason, 3) && _scope($scope1_id, {
			e: _write_if($scope1_reason, 1) && ($ui__isOpen__OR__label || $ui__fmt__OR__label) && fmt,
			f: _write_if($scope1_reason, 0) && ($ui__isOpen__OR__fmt || $ui__fmt__OR__label) && label
		}) || ($fg__fmt && $ui__isOpen__OR__label && _patch_write($scope1_id, "xe", fmt, 1), $fg__label && $ui__isOpen__OR__fmt && _patch_write($scope1_id, "xf", label, !_server_guard($scope1_reason, 6)));
	}, $scope0_id, 0) };
	_set_scope_reason($uf__input_open << 1 | $uf__input_open__OR__input_label << 3 | $uf__input_label << 5 | $uf__input_open__OR__input_label << 7 | $uf__input_open << 9 | $uf__input_label << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({
		isOpen: input.open,
		fmt: lib.format,
		label: input.label + "1"
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button class=l>l</button>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_open = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			rowsx_default({
				label: l,
				open: input.open
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$fg__input_open && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.open,
		g: l
	}) || $fg__input_open && $ui__input_show && _patch_write($scope0_id, "xf", input.open, !_server_guard($scope0_reason, 1));
}, 1);
