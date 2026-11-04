// template.marko
_shells({
	a: "a !a1; D l%;<button class=x> </button><!><!>",
	a0: "a0 a3;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=x>${_text_mark($scope0_id, "b", x)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", x)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: x });
}, 1);
