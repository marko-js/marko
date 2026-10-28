// template.marko
_shells({
	a: "a !a3;D%b ;<main><!><button>+</button></main>",
	a2: "a2 a6;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = "[" + input.title + "]";
			_filled_guard($scope0_reason, 1) ? _patch_fill($scope1_id, "va0", label) : _patch_init($scope1_id, "a1");
			_html(`<p>${_text_resume($scope1_id, "a", label + " #0")}</p>`);
			_scope($scope1_id, {
				b: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title,
		g: count
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.title, !$sg__input_title);
}, 1);
