// template.marko
_shells({ a: "a !a2; D l%b%;<button class=inc> </button><!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden = _unfilled_if($scope0_reason, 7), $ui__input_field__OR__input_checked = _unfilled_if($scope0_reason, 0), $fg__input_tag = _filled_guard($scope0_reason, 8), $fg__input_cls = _filled_guard($scope0_reason, 9), $fg__input_sty = _filled_guard($scope0_reason, 10), $fg__input_title = _filled_guard($scope0_reason, 11), $fg__input_x = _filled_guard($scope0_reason, 12), $fg__input_hidden = _filled_guard($scope0_reason, 13), $fg__input_field = _filled_guard($scope0_reason, 14), $fg__input_checked = _filled_guard($scope0_reason, 15);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.tag, {
		class: input.cls,
		style: input.sty,
		title: input.title,
		"data-x": input.x,
		hidden: input.hidden,
		onClick: _resume(function() {
			console.log("clicked");
		}, "a0")
	}, 1, 0, 0, _write_guard($scope0_reason, 7), $scope0_reason, 7, 0, 8);
	_dynamic_tag($scope0_id, "d", input.field, {
		type: "checkbox",
		checked: input.checked,
		checkedChange: _resume(function(next) {
			console.log(next);
		}, "a1")
	}, 9, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 14);
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", (($fg__input_tag ? " g" : "") + ($fg__input_cls ? " h" : "") + ($fg__input_sty ? " i" : "") + ($fg__input_title ? " j" : "") + ($fg__input_x ? " k" : "") + ($fg__input_hidden ? " l" : "")).slice(1), $scope0_reason, 7);
	_patch_render($scope0_id, "a4", (($fg__input_field ? " n" : "") + ($fg__input_checked ? " o" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 6) && $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && input.tag,
		h: _write_if($scope0_reason, 5) && $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && input.cls,
		i: _write_if($scope0_reason, 4) && $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && input.sty,
		j: _write_if($scope0_reason, 3) && $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && input.title,
		k: _write_if($scope0_reason, 2) && $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && input.x,
		l: _write_if($scope0_reason, 1) && $ui__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && input.hidden,
		n: _write_if($scope0_reason, 15) && $ui__input_field__OR__input_checked && input.field,
		o: _write_if($scope0_reason, 14) && $ui__input_field__OR__input_checked && input.checked,
		q: n
	}) || ($fg__input_tag && _unfilled_if($scope0_reason, 6) && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 8)), $fg__input_cls && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "xh", input.cls, !_server_guard($scope0_reason, 9)), $fg__input_sty && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xi", input.sty, !_server_guard($scope0_reason, 10)), $fg__input_title && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xj", input.title, !_server_guard($scope0_reason, 11)), $fg__input_x && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xk", input.x, !_server_guard($scope0_reason, 12)), $fg__input_hidden && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xl", input.hidden, !_server_guard($scope0_reason, 13)), $fg__input_field && _unfilled_if($scope0_reason, 15) && _patch_write($scope0_id, "xn", input.field, !_server_guard($scope0_reason, 14)), $fg__input_checked && _unfilled_if($scope0_reason, 14) && _patch_write($scope0_id, "xo", input.checked, !_server_guard($scope0_reason, 15)));
}, 1);
