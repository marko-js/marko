// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a0: "a0 a3;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let x = input.a;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", x + input.b)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 2);
	_scope($scope0_id, {
		f: input.b,
		g: _write_if($scope0_reason, 0) && x
	}) || _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va1", input.b, !_server_guard($scope0_reason, 3));
	$wg__input_show || _resume_branch($scope0_id);
}, 1);
