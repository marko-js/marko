// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 1;
	_html(`<button>${_text_resume($scope0_id, "b", value)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a0");
			_html(`<span>${_text_resume($scope2_id, "a", value)}</span>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: value,
		e: $value__closures
	});
}, 1);
