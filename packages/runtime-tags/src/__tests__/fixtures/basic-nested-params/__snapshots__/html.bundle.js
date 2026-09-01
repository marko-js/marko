// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content, value } = input;
	_html("<div>");
	_dynamic_tag($scope0_id, "a", content, [value], 0, 1, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && content,
		e: _serialize_if($scope0_reason, 1) && value
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 2;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		value: x,
		content: _content_resume("a1", (outer) => {
			const $scope1_reason = _scope_reason(), $si__outer = _serialize_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $child_content__outer__closures = /* @__PURE__ */ new Set();
			child_default({
				value: y,
				content: _content("a0", (inner) => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<div>${_text_resume($scope2_id, "a", outer, _serialize_guard($scope1_reason, 0))}.${_text_resume($scope2_id, "b", inner, _serialize_guard($scope2_reason, 0) * 2)}</div>`);
					(_serialize_if($scope1_reason, 0) || _serialize_if($scope2_reason, 0)) && _subscribe($si__outer && $child_content__outer__closures, _scope($scope2_id, { _: $si__outer && _scope_with_id($scope1_id) }));
					_resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				d: $si__outer && $child_content__outer__closures
			});
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: x,
		d: y,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
