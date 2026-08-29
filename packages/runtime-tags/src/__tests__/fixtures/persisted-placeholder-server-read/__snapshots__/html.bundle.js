// template.marko
_shells({
	a0: "a0,<div id=done>done</div>",
	a1: "a1,<div id=done>done</div>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_persisted_reason();
		_await($scope2_id, "a", input.promise, () => {
			_scope_id();
			_html("<div id=done>done</div>");
		}, 1, "a1");
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_html(`<em>loading ${_text_resume($scope1_id, "a", input.msg, 2)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_msg__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) }) }, 1);
	_script($scope0_id, "a4");
	$scope0_reason ? _scope($scope0_id, {
		f: input.msg,
		h: count,
		i: $input_msg__closures,
		j: $input_promise__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.msg);
	_resume_branch($scope0_id);
}, 1, 0);
