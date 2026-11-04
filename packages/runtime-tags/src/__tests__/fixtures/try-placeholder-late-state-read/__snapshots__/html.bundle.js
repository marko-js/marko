// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = /* @__PURE__ */ new Set();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "b", clicks)}</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "c", resolveAfter("first", 1), () => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("done", 2), () => {
				const $scope4_id = _scope_id();
				_html(`<b>loaded ${_text_resume($scope4_id, "a", clicks, 2)}</b>`);
				_subscribe($clicks__closures, _scope($scope4_id, { Ce: 1 }), "a1");
			});
			_scope($scope3_id, { _: _scope_with_id($scope1_id) });
		}, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>loading ${_text_resume($scope2_id, "a", clicks, 2)}</i>`);
			_subscribe($clicks__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}, void 0, "a2");
		_scope($scope1_id, {});
	});
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: clicks,
		e: $clicks__closures
	});
}, 1);
