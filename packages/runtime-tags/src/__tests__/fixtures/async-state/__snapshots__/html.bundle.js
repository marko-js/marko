// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = /* @__PURE__ */ new Set();
	let clickCount = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(clickCount), (value) => {
			const $scope3_id = _scope_id();
			_html(`${_escape(value)}${_el_resume($scope3_id, "a")}`);
			writeScope($scope3_id, {});
		});
		_subscribe($clickCount__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		c: clickCount,
		Bc: $clickCount__closures
	});
	_resume_branch($scope0_id);
}, 1);
