// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 0;
	_try($scope0_id, "a", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a0");
			_html(`${_escape(value)}${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a1");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		b: value,
		Bb: $value__closures
	});
	_resume_branch($scope0_id);
}, 1);
