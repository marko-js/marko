// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = "a";
	_html(`<button></button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(value), (v) => {
			const $scope3_id = _scope_id();
			_html(_text_mark($scope3_id, "a", v));
			_scope($scope3_id, {});
		});
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		_resume_branch($scope1_id);
	}, ($label) => {
		const $scope2_reason = _scope_reason(), $wg__$label = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_mark($scope2_id, "a", void 0 !== $label ? $label : "loading", $wg__$label * 2));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, { d: $value__closures });
}, 1);
