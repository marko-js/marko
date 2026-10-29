// template.marko
_shells({
	a: "a !a3;D l%b D ;<h1> </h1><!><button> </button>",
	a2: "a2 a6!a0;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_text_resume($scope0_id, "a", input.label.toUpperCase(), 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.label + ": 0")}</p>`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: input.label,
		i: count
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 0));
}, 1);
