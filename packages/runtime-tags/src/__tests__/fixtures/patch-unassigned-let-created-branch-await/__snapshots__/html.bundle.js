// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: "a1;D ;<p> </p>",
	a0: "a0 a5 a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(x), (r) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", r)}</p>`);
				_scope($scope2_id, {});
			}, 1, 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", x, 1);
	_scope($scope0_id, { f: $wi__input_show && x });
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);
