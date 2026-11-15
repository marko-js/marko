// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $failing__closures = /* @__PURE__ */ new Set();
	forOf(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "a", item));
			_subscribe($failing__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}, void 0, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(_escape(index));
			_scope($scope3_id, { _: _scope_with_id($scope1_id) });
		}, 0, "a1");
		_scope($scope1_id, {
			c: item,
			M: index,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<button>fail</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { d: $failing__closures });
}, 1);
