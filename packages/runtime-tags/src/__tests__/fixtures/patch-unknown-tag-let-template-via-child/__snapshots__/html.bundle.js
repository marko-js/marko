// tags/item.marko
_shells({ d: "d;D ;<em> </em>" });
var item_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/frame.marko
_shells({ b: "b !b0; bD%;<button>clear</button><section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let T = input.item;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", $fg__input_label && "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", T, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 1) && T
	}) || (_client_branch(input.item), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)));
});

// tags/host.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var host_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_frame__OR__input_item__OR__input_label = _write_guard($scope0_reason, 3), $ui__input_frame__OR__input_item__OR__input_label = _unfilled_if($scope0_reason, 3), $fg__input_frame = _filled_guard($scope0_reason, 4), $fg__input_item = _filled_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.frame, {
		item: input.item,
		label: input.label
	}, 1, 0, 0, $wg__input_frame__OR__input_item__OR__input_label, $scope0_reason, 3, 0, 4);
	_patch_render($scope0_id, "c0", (($fg__input_frame ? " d" : "") + ($fg__input_item ? " e" : "") + ($fg__input_label ? " f" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		d: $ui__input_frame__OR__input_item__OR__input_label && input.frame,
		e: $ui__input_frame__OR__input_item__OR__input_label && input.item,
		f: $ui__input_frame__OR__input_item__OR__input_label && input.label
	}) || ($fg__input_frame && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.frame, !_server_guard($scope0_reason, 4)), $fg__input_item && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.item, !_server_guard($scope0_reason, 5)), $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_framed__OR__input_label = _updates_from($scope0_reason, 0), $uf__input_framed = _updates_from($scope0_reason, 1), $uf__input_label = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_framed << 1 | $uf__input_framed__OR__input_label << 3 | $uf__input_label << 5 | $uf__input_framed__OR__input_label << 7 | $uf__input_framed << 9 | $uf__input_label << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	host_default({
		frame: input.framed ? frame_default : null,
		item: item_default,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
