// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $a__closures = /* @__PURE__ */ new Set();
	const $b__closures = /* @__PURE__ */ new Set();
	let a = 0;
	let b = 0;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		{
			const $scope2_id = _scope_id();
			_html(`<div>${_text_resume($scope2_id, "a", a)}</div><div>${_text_resume($scope2_id, "b", b)}</div>`);
			_subscribe($b__closures, _subscribe($a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0"), "a1");
		}
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("error");
	}, void 0, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: a,
		d: b,
		e: $a__closures,
		f: $b__closures
	});
}, 1);
