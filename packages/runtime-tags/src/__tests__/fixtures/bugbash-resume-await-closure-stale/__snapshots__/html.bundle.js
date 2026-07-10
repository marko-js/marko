// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div>count:<!>${_escape(count)}${_el_resume($scope0_id, "b")}</div>`);
	_try($scope0_id, "c", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("v", 1), (value) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a0");
			_html(`<span>${_escape(value)} closure:<!>${_escape(count)}${_el_resume($scope2_id, "b")}</span>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		d: count,
		Bd: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
