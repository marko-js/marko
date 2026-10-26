// template.marko
_shells({ a: "a !a2; D l%b%;<button class=inc> </button><!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 6), $cg__input_tag__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 5), $cg__input_tag__OR__input_cls__OR__input_title__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 4), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_x__OR__input_hidden = _client_guard($scope0_reason, 3), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_hidden = _client_guard($scope0_reason, 2), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x = _client_guard($scope0_reason, 1), $cg__input_checked = _client_guard($scope0_reason, 15), $cg__input_field = _client_guard($scope0_reason, 14), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.tag, {
		class: input.cls,
		style: input.sty,
		title: input.title,
		"data-x": input.x,
		hidden: input.hidden,
		onClick: _resume(function() {
			console.log("clicked");
		}, "a0")
	}, 0, 0, _write_guard($scope0_reason, 7), void 0, 1, $scope0_reason, 7, 0, 8);
	_dynamic_tag($scope0_id, "d", input.field, {
		type: "checkbox",
		checked: input.checked,
		checkedChange: _resume(function(next) {
			console.log(next);
		}, "a1")
	}, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0, 0, 14);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 7)) && input.tag,
		h: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.cls,
		i: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.sty,
		j: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.title,
		k: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.x,
		l: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.hidden,
		n: (_unfilled_if($scope0_reason, 15) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 14)) && input.field,
		o: (_unfilled_if($scope0_reason, 14) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 15)) && input.checked,
		q: n
	}) : (_filled_guard($scope0_reason, 8) && $cg__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "va3", input.tag, !_server_guard($scope0_reason, 8)), $cg__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _content_withhold(input.tag), _filled_guard($scope0_reason, 9) && $cg__input_tag__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "va4", input.cls, !_server_guard($scope0_reason, 9)), $cg__input_tag__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden && _content_withhold(input.cls), _filled_guard($scope0_reason, 10) && $cg__input_tag__OR__input_cls__OR__input_title__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "va5", input.sty, !_server_guard($scope0_reason, 10)), $cg__input_tag__OR__input_cls__OR__input_title__OR__input_x__OR__input_hidden && _content_withhold(input.sty), _filled_guard($scope0_reason, 11) && $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_x__OR__input_hidden && _patch_fill($scope0_id, "va6", input.title, !_server_guard($scope0_reason, 11)), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_x__OR__input_hidden && _content_withhold(input.title), _filled_guard($scope0_reason, 12) && $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_hidden && _patch_fill($scope0_id, "va7", input.x, !_server_guard($scope0_reason, 12)), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_hidden && _content_withhold(input.x), _filled_guard($scope0_reason, 13) && $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x && _patch_fill($scope0_id, "va8", input.hidden, !_server_guard($scope0_reason, 13)), $cg__input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x && _content_withhold(input.hidden), _filled_guard($scope0_reason, 14) && $cg__input_checked && _patch_fill($scope0_id, "va9", input.field, !_server_guard($scope0_reason, 14)), $cg__input_checked && _content_withhold(input.field), _filled_guard($scope0_reason, 15) && $cg__input_field && _patch_fill($scope0_id, "va10", input.checked, !_server_guard($scope0_reason, 15)), $cg__input_field && _content_withhold(input.checked));
}, 1);
