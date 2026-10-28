// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a3: "a3; D ;<a> </a>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attr("href", input.href, $scope1_id, "a", $scope0_reason, 3)}${_attr("hidden", input.hidden, $scope1_id, "a", $scope0_reason, 4)}>${_text_resume($scope1_id, "b", input.label, void 0, $scope0_reason, 5)}</a>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 3) || _mask_group($scope0_reason, 4))}`);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a1");
			_client_guard($scope0_reason, 5) && _patch_init($scope1_id, "a2");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a3"], $scope0_reason, 2);
	_html("</main>");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.href,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.hidden,
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.label
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.href, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va5", input.hidden, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 5)));
}, 1);
