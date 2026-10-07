// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 1;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>b ${_text_resume($scope1_id, "a", value, 2)}</p>`);
		_await($scope1_id, "b", resolveAfter("x", 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: value,
		d: $value__closures
	});
});
