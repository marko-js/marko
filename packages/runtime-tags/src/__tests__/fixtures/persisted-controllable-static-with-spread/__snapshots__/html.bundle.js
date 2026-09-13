// template.marko
_shells({ a: "a !; bD ;<input><p> </p>" });
var template_default = _template_persisted("a", (input) => {
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
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: input.rest,
		f: text
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.rest);
}, 1, 0);
