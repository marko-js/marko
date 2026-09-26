// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $query__closures = /* @__PURE__ */ new Set();
	let query = "a";
	_html(`<button>${_text_resume($scope0_id, "b", query)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(`found ${query}`, 1), (result) => {
			const $scope3_id = _scope_id();
			_html(`<div>${_text_resume($scope3_id, "a", result)}</div>`);
			_scope($scope3_id, {});
		});
		_subscribe($query__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) }, 0);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: query,
		e: $query__closures
	});
}, 1);
