// template.marko
_shells({
	a2: "a2;D%c%;<p><!> <!></p>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_await($scope0_id, "a", Promise.resolve(x), (r) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", r)} ${_text_resume($scope1_id, "b", input.w, _write_guard($scope0_reason, 1) * 2)}</p>`);
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, {}), "a0");
	}, 1, 0);
	_scope($scope0_id, { g: $wi__input_w && $input_w__closures }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.w, !_server_guard($scope0_reason, 1));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
