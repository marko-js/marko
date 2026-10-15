// template.marko
_shells({ a: "a !a2; D l%b%;<button class=inc> </button><!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
	}, 0, 0, _write_guard($scope0_reason, 7), void 0, 1, $scope0_reason, 7);
	_dynamic_tag($scope0_id, "d", input.field, {
		type: "checkbox",
		checked: input.checked,
		checkedChange: _resume(function(next) {
			console.log(next);
		}, "a1")
	}, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "wg", input.tag, 1);
	_patch_write($scope0_id, "wh", input.cls, 1);
	_patch_write($scope0_id, "wi", input.sty, 1);
	_patch_write($scope0_id, "wj", input.title, 1);
	_patch_write($scope0_id, "wk", input.x, 1);
	_patch_write($scope0_id, "wl", input.hidden, 1);
	_patch_write($scope0_id, "wn", input.field, 1);
	_patch_write($scope0_id, "wo", input.checked, 1);
	_client_guard($scope0_reason, 7) && _patch_init($scope0_id, "a11");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a12");
	_patch_value($scope0_id, "va13", n, 1);
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
	}) : (_filled_guard($scope0_reason, 8) && _client_guard($scope0_reason, 6) && _patch_value($scope0_id, "va3", input.tag, !_server_guard($scope0_reason, 8)), _filled_guard($scope0_reason, 9) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "va4", input.cls, !_server_guard($scope0_reason, 9)), _filled_guard($scope0_reason, 10) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va5", input.sty, !_server_guard($scope0_reason, 10)), _filled_guard($scope0_reason, 11) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "va6", input.title, !_server_guard($scope0_reason, 11)), _filled_guard($scope0_reason, 12) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va7", input.x, !_server_guard($scope0_reason, 12)), _filled_guard($scope0_reason, 13) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va8", input.hidden, !_server_guard($scope0_reason, 13)), _filled_guard($scope0_reason, 14) && _client_guard($scope0_reason, 15) && _patch_value($scope0_id, "va9", input.field, !_server_guard($scope0_reason, 14)), _filled_guard($scope0_reason, 15) && _client_guard($scope0_reason, 14) && _patch_value($scope0_id, "va10", input.checked, !_server_guard($scope0_reason, 15)));
}, 1);
