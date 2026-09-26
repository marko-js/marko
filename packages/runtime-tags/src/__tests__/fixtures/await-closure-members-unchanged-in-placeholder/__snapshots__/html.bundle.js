// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value_a__closures = /* @__PURE__ */ new Set();
	const $value_b__closures = /* @__PURE__ */ new Set();
	let value = {
		a: 1,
		b: 1
	};
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", value.a + value.b)}</span>`);
			_subscribe($value_b__closures, _subscribe($value_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0"), "a1");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: value?.a,
		f: $value_a__closures,
		g: $value_b__closures
	});
}, 1);
