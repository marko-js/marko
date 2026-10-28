// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a0: "a0 a3;D%b%;<p><!><!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", x)}${_text_resume($scope1_id, "b", i, 2, $scope0_reason, 1)}</p>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, (i) => i, $scope0_id, "a", 1, 1, 1, 0, 0, "a0", $scope0_reason, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", x, 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && x });
}, 1);
