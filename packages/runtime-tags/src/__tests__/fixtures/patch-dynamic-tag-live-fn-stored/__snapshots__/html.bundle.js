// tags/reader.marko
_shells({ b: "b; b ;<button class=call>call</button><pre></pre>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "e");
	$scope0_page ? _scope($scope0_id, { e: input.fn }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a !;b%;<output id=out></output><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_alt = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 1), $cg__input_alt = _client_guard($scope0_reason, 2), $sg__input_title = _server_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const fn = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "a0", $scope0_id);
	_html("<output id=out></output>");
	_dynamic_tag($scope0_id, "a", input.alt || reader_default, { fn }, 0, 0, $wg__input_title__OR__input_alt, void 0, 1, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.alt,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && fn
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_title && _patch_fill($scope0_id, "va1", input.alt, !_server_guard($scope0_reason, 2)), $cg__input_title && _content_withhold(input.alt), _filled_guard($scope0_reason, 1) && $cg__input_alt && _patch_fill($scope0_id, "va2", fn, !$sg__input_title), $cg__input_alt && _content_withhold(fn));
}, 1);
