// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $view2__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const view = _resume(() => count, "a0", $scope0_id);
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a1");
			_script($scope2_id, "a2");
			_html(`<p>${_text_resume($scope2_id, "a", view())}</p><button>${_text_resume($scope2_id, "c", count)}</button>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a3");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		b: count,
		c: view,
		d: $count__closures,
		e: $view2__closures
	});
	_resume_branch($scope0_id);
}, 1);
