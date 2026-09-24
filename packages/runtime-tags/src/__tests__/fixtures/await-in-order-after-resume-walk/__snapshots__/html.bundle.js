// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 0;
	_try($scope0_id, "a", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(1, 1), (x) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a0");
			_html(`<button>${_text_resume($scope2_id, "b", value)}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("loading button");
	}, $scope0_id) }) });
	_await($scope0_id, "b", resolveAfter(value, 3), (v) => {
		const $scope4_id = _scope_id();
		_html(`<div>${_text_resume($scope4_id, "a", v)}</div>`);
		_scope($scope4_id, {});
	});
	_scope($scope0_id, {
		c: value,
		d: $value__closures
	});
	_resume_branch($scope0_id);
}, 1);
