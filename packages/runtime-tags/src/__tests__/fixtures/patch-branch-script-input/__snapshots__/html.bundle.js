// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a2: "a2,<p>promo</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "a0", 0, _filled_guard($scope0_reason, 2), ">g");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_html("</main>");
	_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_init_entry($scope0_id, "a1", "g");
	_scope($scope0_id, { g: input.value }) || _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.value, !_server_guard($scope0_reason, 2));
}, 1);
