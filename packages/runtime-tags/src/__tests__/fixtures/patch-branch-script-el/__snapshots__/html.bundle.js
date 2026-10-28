// template.marko
_shells({
	a: "a !;E l%;<main><h1> </h1><!></main>",
	a2: "a2 !a0; D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "b", input.label, 1, $scope0_reason, 2)}</span>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, { g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
