// tags/card.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/outer.marko
_shells({ c: "c !c0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let T = input.tag;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "c0");
	_patch_render($scope0_id, "c1", $fg__input_label && "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc2", T, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 1) && T
	}) || (_client_branch(input.tag), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.show ? outer_default : null, {
		tag: card_default,
		label: input.label
	}, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "a0", (($fg__input_show ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_show__OR__input_label && input.show,
		e: _write_if($scope0_reason, 1) && $ui__input_show__OR__input_label && input.label
	}) || ($fg__input_show && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
