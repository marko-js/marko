// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", 0, (v) => {
			const $scope3_id = _scope_id();
			_html(`value ${_text_resume($scope3_id, "a", v, 2)}`);
			_scope($scope3_id, {});
		});
		_script($scope1_id, "a2", 0);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", 0);
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING");
	}, $scope0_id) }) });
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
