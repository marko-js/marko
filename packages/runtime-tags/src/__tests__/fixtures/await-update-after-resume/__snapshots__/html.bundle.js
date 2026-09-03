// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 0;
	_html(`<div id=outside>${_text_resume($scope0_id, "a", value)}</div>`);
	_try($scope0_id, "b", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(value), (value) => {
			const $scope3_id = _scope_id();
			_html(`<div id=inside>${_text_resume($scope3_id, "a", value)}</div>`);
			_script($scope3_id, "a0");
			_script($scope3_id, "a1");
			_scope($scope3_id, { c: value });
		});
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "a4");
	_scope($scope0_id, { d: $value__closures });
}, 1);
