// template.marko
_shells({
	a: "a !;D%bD ;<main><!><em> </em></main>",
	a3: "a3 !a1; ;<a>go</a>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs({
				...input.attrs,
				onClick: _resume(function() {
					count++;
				}, "a0", $scope1_id)
			}, "a", $scope1_id, "a", void 0, $scope0_reason, 1)}>go</a>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	_html(`<em>${_text_resume($scope0_id, "b", count)}</em></main>`);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.attrs,
		g: count
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va4", input.attrs, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.attrs));
}, 1);
