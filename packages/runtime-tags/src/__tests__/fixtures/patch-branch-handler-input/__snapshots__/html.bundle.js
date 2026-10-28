// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a1: "a1 !a0; ;<button>read</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<button>read</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, { g: input.tag }) || _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "wg", input.tag, !_server_guard($scope0_reason, 2));
}, 1);
