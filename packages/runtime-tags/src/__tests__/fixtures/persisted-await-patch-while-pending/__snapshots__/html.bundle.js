// template.marko
_shells({
	a0: "a0,<em>loading</em>",
	a1: "a1;D%;<div id=done><!> done</div>",
	a2: "a2;D%;<div id=done><!> done</div>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a5; D l%;<button> </button><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", input.promise, () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a4");
			_html(`<div id=done>${_patch_text($scope2_id, "a", input.msg, void 0, $scope0_owned, 2)} done</div>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		}, 1, "a2", 1);
		$scope0_reason && _subscribe(_source_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("a0", $scope0_id) }) }, 1);
	_script($scope0_id, "a5");
	$scope0_reason && _scope($scope0_id, {
		g: input.msg,
		h: count,
		j: $input_msg__closures,
		i: $input_promise__closures
	});
	_resume_branch($scope0_id);
}, 1, 0);
