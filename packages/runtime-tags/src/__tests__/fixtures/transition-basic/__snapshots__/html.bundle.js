// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let other = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}<button id=other>other</button>${_el_resume($scope0_id, "b")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</div><div>other: <!>${_escape(other)}${_el_resume($scope0_id, "d")}</div>`);
	_try($scope0_id, "e", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(count), (value) => {
			const $scope3_id = _scope_id();
			_html(`resolved: <!>${_escape(value)}${_el_resume($scope3_id, "a")}`);
			writeScope($scope3_id, {});
		});
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		f: count,
		g: other,
		Bf: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
