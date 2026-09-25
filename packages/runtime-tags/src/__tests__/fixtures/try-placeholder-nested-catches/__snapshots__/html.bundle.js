// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "a", _content_resume("a1", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_await($scope2_id, "a", resolveAfter(count), (value) => {
				const $scope5_id = _scope_id();
				_html(_text_resume($scope5_id, "a", value));
				_scope($scope5_id, {});
			});
			_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2", 0);
			_resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("inner loading");
		}, $scope1_id) }) });
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		_scope_id();
		_html("outer loading");
	}, $scope0_id) }) });
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
}, 1);
