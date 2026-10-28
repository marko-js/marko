// template.marko
_shells({
	a: "a !a1;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a4;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.title + " #0")}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.title,
		g: count
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.title, !_server_guard($scope0_reason, 1));
}, 1);
