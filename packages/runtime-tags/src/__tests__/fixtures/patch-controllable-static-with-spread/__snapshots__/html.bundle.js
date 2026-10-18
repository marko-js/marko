// template.marko
_shells({ a: "a !; bD ;<input><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let text = "init";
	_html(`<input${_attrs({
		value: text,
		valueChange: _resume((_new_text) => {
			text = _new_text;
		}, "a0", $scope0_id),
		...input.rest
	}, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", text)}</p>`);
	_script($scope0_id, "a1", 1, 1);
	_patch_value($scope0_id, "va3", text, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.rest,
		f: _write_if($scope0_reason, 0) && text
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.rest, !_server_guard($scope0_reason, 0)), _content_withhold(input.rest));
}, 1);
