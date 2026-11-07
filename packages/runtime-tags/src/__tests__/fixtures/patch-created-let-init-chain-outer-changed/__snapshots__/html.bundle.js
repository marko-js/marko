// template.marko
_shells({
	a: "a !a2; D l%;<button class=x> </button><!><!>",
	a1: "a1 a4!a0; D lD ;<button class=s> </button><p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=x>${_text_mark($scope0_id, "b", x)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let s = x;
			let b = s;
			_html(`<button class=s>${_text_mark($scope1_id, "b", s)}</button>${_el_mark($scope1_id, "a")}<p>${_text_mark($scope1_id, "c", b)}</p>`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				d: s,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	_scope($scope0_id, { g: x });
}, 1);
