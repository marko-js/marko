// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 0;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(1, 3), (a) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_mark($scope2_id, "b", value)}</button>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_subscribe($value__closures, _scope($scope2_id, {}), "a1");
		});
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter(2, 2), (b) => {
				const $scope4_id = _scope_id();
				_html(`<button>${_text_mark($scope4_id, "b", value)}</button>${_el_mark($scope4_id, "a")}`);
				_script($scope4_id, "a2");
				_subscribe($value__closures, _scope($scope4_id, { Cd: 2 }), "a3");
			});
			_html(`<button>${_text_mark($scope3_id, "c", value)}</button>${_el_mark($scope3_id, "b")}`);
			_script($scope3_id, "a4");
			_subscribe($value__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				Cd: 1
			}), "a5");
		}, () => {
			_scope_reason();
			_scope_id();
			_html("inner");
		}, void 0, "a6");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("outer");
	}, void 0, "a7");
	_await($scope0_id, "b", resolveAfter(3, 1), (c) => {
		const $scope5_id = _scope_id();
		_html(`<button>${_text_mark($scope5_id, "b", value)}</button>${_el_mark($scope5_id, "a")}`);
		_script($scope5_id, "a8");
		_subscribe($value__closures, _scope($scope5_id, { Cd: 3 }), "a9");
	});
	_scope($scope0_id, {
		c: value,
		d: $value__closures
	});
	_resume_branch($scope0_id);
}, 1);
