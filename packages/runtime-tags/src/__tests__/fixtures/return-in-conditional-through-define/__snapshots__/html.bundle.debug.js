// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = "foo";
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrapper = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = input.value;
		return $return;
	}, $scope0_id) };
	let open = false;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			let value = child_default({});
			const $childScope = _peek_scope_id();
			let wrapped = Wrapper.content({ value });
			_var($scope2_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_2_wrapped#6/var");
			_html(`<div>Value: ${_text_resume($scope2_id, "#text/4", wrapped, 2)}</div>`);
			_scope($scope2_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "5:6" });
	_resume_branch($scope0_id);
}, 1);
