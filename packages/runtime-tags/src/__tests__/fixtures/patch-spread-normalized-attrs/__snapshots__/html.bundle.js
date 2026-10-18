// template.marko
_shells({
	a: "a !a2 a3 a4; D l b%b ;<button class=inc> </button><div>x</div><!><input>",
	a0: "a0 !a1; ;<a>z</a>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<div${_patch_attrs(input.attrs, "c", $scope0_id, "div", void 0, $scope0_reason, 0)}>x</div>${_el_resume($scope0_id, "c")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attrs(input.link, "a", $scope1_id, "a", void 0, $scope0_reason, 2)}>z</a>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`<input${_patch_attrs(input.field, "e", $scope0_id, "input", 1, $scope0_reason, 3)}>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "va6", n, 1);
	$scope0_page ? _scope($scope0_id, {
		j: _unfilled_if($scope0_reason, 1) && input.link,
		l: n
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.link, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.link));
}, 1);
