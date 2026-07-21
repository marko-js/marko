// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<button id=show>show</button>${_el_resume($scope0_id, "b")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</div>`);
	_if(() => {}, $scope0_id, "d", 1, 1, 1, 0, 1);
	_try($scope0_id, "e", _content_resume("a1", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", resolveAfter(count), (value) => {
			const $scope4_id = _scope_id();
			_html(`resolved: <!>${_escape(value)}${_el_resume($scope4_id, "a")}`);
			writeScope($scope4_id, {});
		});
		_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		f: count,
		h: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
