// template.marko
_shells({
	a: "a !a3; D l%;<button> </button><!><!>",
	a2: "a2 a5!a1; ;<input>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = input.n;
	_html(`<button>${_text_mark($scope0_id, "b", l)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "a", String(l), _resume(function(v) {
				console.log(v);
			}, "a0"))}>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_script($scope0_id, "a3");
	_scope($scope0_id, { h: l });
}, 1);
