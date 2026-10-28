// template.marko
_shells({
	a: "a !a4; b%;<button class=open>inc</button><!><!>",
	a3: "a3 a7;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const y = input.label + "!";
			_filled_guard($scope0_reason, 1) ? _patch_fill($scope1_id, "va0", y) : _patch_init($scope1_id, "a1");
			_html(`<p>${_text_resume($scope1_id, "a", y + n)}</p>`);
			_script($scope1_id, "a2");
			_scope($scope1_id, {
				b: y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.label, !$sg__input_label);
}, 1);
