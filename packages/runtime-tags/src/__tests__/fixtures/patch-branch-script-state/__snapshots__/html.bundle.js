// template.marko
_shells({
	a: "a !a2;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a1: "a1 a4,<p>promo</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "a0", 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { h: count });
}, 1);
