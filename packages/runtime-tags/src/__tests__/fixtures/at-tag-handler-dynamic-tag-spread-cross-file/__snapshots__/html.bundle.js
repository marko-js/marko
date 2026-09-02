// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.tag, input.button, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.tag,
		e: _serialize_if($scope0_reason, 1) && input.button
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		tag: "button",
		button: attrTag({
			onClick: _resume(function() {
				count++;
			}, "a0", $scope0_id),
			content: _content("a1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(_text_resume($scope1_id, "a", count));
				_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
				_resume_branch($scope1_id);
			}, $scope0_id)
		})
	});
	_scope($scope0_id, {
		b: count,
		c: $count__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
