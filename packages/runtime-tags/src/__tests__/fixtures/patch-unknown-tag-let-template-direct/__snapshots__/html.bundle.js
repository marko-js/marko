// tags/item.marko
_shells({ c: "c;D ;<em> </em>" });
var item_default = _template("c", (input) => {
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

// template.marko
function pick(framed) {
	return framed ? frame_default : null;
}
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_framed__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_framed = _unfilled_if($scope0_reason, 1), $fg__input_framed = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", pick(input.framed), {
		item: item_default,
		label: input.label
	}, 1, 0, 0, $wg__input_framed__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "a0", (($fg__input_framed ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_label || $ui__input_framed__OR__input_label) && input.framed,
		e: ($ui__input_framed || $ui__input_framed__OR__input_label) && input.label
	}) || ($fg__input_framed && $ui__input_label && _patch_write($scope0_id, "xd", input.framed, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_framed && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
