// template.marko
_shells({
	a: "a !;D%b%;<main><!><!></main>",
	a2: "a2,",
	a3: "a3;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_script($scope1_id, "a0", 0, _filled_guard($scope0_reason, 1), ">f");
		$cg__input_title && _patch_init($scope1_id, "a1");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_for_of(input.items2, (item) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.title, 1, $scope0_reason, 1)}</p>`);
		$cg__input_title && _patch_init($scope2_id, "a4");
		_scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 2);
	_html("</main>");
	_scope($scope0_id, { f: input.title }) || _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va5", input.title, !$sg__input_title) : _patch_write($scope0_id, "xf", input.title, !$sg__input_title));
}, 1);
