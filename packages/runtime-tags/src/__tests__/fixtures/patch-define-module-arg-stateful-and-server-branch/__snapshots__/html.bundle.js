// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
_shells({
	a: "a !a5;b%b%b ;<!><!><!><button class=toggle>toggle</button>",
	a4: `a4;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Panel_content__walks)};${$Panel_content__template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $fg__fmt = _filled_guard($scope3_reason, 1);
		_html(`<em>${_text_mark($scope3_id, "a", fmt(label), 1, $scope3_reason, 0)}</em>`);
		_patch_render($scope3_id, "a1", (($fg__fmt ? " d" : "") + (_filled_guard($scope3_reason, 2) ? " e" : "")).slice(1), $scope3_reason, 0);
		_scope($scope3_id, {
			d: _unfilled_if($scope3_reason, 0, 1) && fmt,
			e: _unfilled_if($scope3_reason, 0) && label
		}) || $fg__fmt && _unfilled_if($scope3_reason, 2) && _patch_write($scope3_id, "xd", fmt, 1);
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			$cg__input_label && _patch_render($scope1_id, "a2");
			_scope($scope1_id, { a: $wi__input_label && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			$cg__input_label && _patch_render($scope2_id, "a3");
			_scope($scope2_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a5");
	$fg__input_label && _patch_render($scope0_id, "a2", "f");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, {
		f: input.label,
		h: open
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
