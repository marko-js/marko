// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: "a2;Db%;<p>yes <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $cg__input_v = _client_guard($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_html(`<p>yes ${_text_resume($scope1_id, "a", x, 2, $scope0_reason, 0)}</p>`);
			$cg__input_v && _patch_init($scope1_id, "a1");
			_scope($scope1_id, { _: $wi__input_v && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_v, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {}) || _filled_guard($scope0_reason, 0) && $cg__input_v && _patch_fill($scope0_id, "va3", x, !_server_guard($scope0_reason, 0));
	$wg__input_v || $wi__input_v && _resume_branch($scope0_id);
}, 1);
