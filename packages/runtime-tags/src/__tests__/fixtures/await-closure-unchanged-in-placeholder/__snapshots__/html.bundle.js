// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 1;
	_html(`<button>set</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", count)}</span>`);
			_script($scope2_id, "a0");
			_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, void 0, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, { d: $count__closures });
}, 1);
