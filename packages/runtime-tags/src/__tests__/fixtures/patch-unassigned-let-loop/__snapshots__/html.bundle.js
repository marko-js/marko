// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let xs = input.items;
	_for_of(xs, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", x)} ${_text_resume($scope1_id, "b", input.w, _write_guard($scope0_reason, 1) * 2)}</p>`);
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 1, 0, 0, 1);
	_scope($scope0_id, { e: input.w }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
