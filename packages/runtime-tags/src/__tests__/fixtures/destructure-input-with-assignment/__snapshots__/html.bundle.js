// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { valueChange: $valueChange, value, ...rest } = input;
	_html("<div");
	_attrs_content(rest, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, { d: $valueChange });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 1;
	child_default({
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id),
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(value)}${_el_resume($scope1_id, "a")}`);
			_subscribe($value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	writeScope($scope0_id, {
		b: value,
		Bb: $value__closures
	});
	_resume_branch($scope0_id);
}, 1);
