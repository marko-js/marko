// tags/item.marko
_shells({ c: "c;D ;<em> </em>" });
var item_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/frame.marko
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_item__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_item = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.item, { label: input.label }, 1, 0, 0, $wg__input_item__OR__input_label, $scope0_reason, 0, 0, 1);
	_html("</section>");
	_patch_render($scope0_id, "b0", (($fg__input_item ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_item__OR__input_label && input.item,
		e: _write_if($scope0_reason, 1) && $ui__input_item__OR__input_label && input.label
	}) || ($fg__input_item && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.item, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: "a !a0; D l%;<button> </button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_framed__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_framed = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", (($fg__input_framed ? " f" : "") + ($fg__input_label ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && $ui__input_framed__OR__input_label && input.framed,
		g: _write_if($scope0_reason, 1) && $ui__input_framed__OR__input_label && input.label,
		i: n
	}) || ($fg__input_framed && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.framed, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
