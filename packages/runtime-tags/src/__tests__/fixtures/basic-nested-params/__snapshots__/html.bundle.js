// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { content, value } = input;
	_html("<div>");
	_dynamic_tag($scope0_id, "a", content, [value], 0, 1, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
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
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		2: 1
	});
	child_default({
		value: x,
		content: _content_resume("a1", (outer) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const $child_content__outer__closures = /* @__PURE__ */ new Set();
			child_default({
				value: y,
				content: _content_resume("a0", (inner) => {
					const $sg__inner = _serialize_guard(_scope_reason(), 0);
					const $scope2_id = _scope_id();
					_html(`<div>${_escape(outer)}${_el_resume($scope2_id, "a", _serialize_guard($scope1_reason, 0))}.${_sep($sg__inner)}${_escape(inner)}${_el_resume($scope2_id, "b", $sg__inner)}</div>`);
					_subscribe($child_content__outer__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					_resume_branch($scope2_id);
				}, $scope1_id)
			});
			writeScope($scope1_id, {
				c: outer,
				_: _scope_with_id($scope0_id),
				Bc: _serialize_if($scope1_reason, 0) && $child_content__outer__closures
			});
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		c: x,
		d: y,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
