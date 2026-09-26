// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	_html(`<button id=show>show</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_await($scope1_id, "b", resolveAfter("server", 1), (v) => {
			_scope_id();
			_html(`<div>${_escape(v)}</div>`);
		}, 0);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "a4");
	_scope($scope0_id, { d: $show__closures });
}, 1);
