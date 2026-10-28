// template.marko
_shells({ a: "a !a1;b%b D ;<!><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 2), $sg__input_title = _server_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 2) && ($cg__input_tag ? _patch_fill($scope0_id, "va3", input.title, !$sg__input_title) : _patch_write($scope0_id, "xg", input.title, !$sg__input_title)), $cg__input_tag && _content_withhold(input.title);
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.tag, {
		title: input.title,
		onClick: _bind_resume(function() {
			n = input.title.length;
		}, "a0", $scope0_id)
	}, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 1);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tag,
		g: input.title,
		i: n
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_title && _patch_fill($scope0_id, "va2", input.tag, !_server_guard($scope0_reason, 1)), $cg__input_title && _content_withhold(input.tag));
}, 1);
