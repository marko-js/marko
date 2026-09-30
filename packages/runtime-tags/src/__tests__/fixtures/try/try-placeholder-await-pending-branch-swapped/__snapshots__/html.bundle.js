// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $tab__closures = /* @__PURE__ */ new Set();
	let tab = 0;
	_html(`<button>next</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", "ready", (value) => {
					const $scope5_id = _scope_id();
					_html(_text_resume($scope5_id, "a", value));
					_scope($scope5_id, {});
				});
				_subscribe($tab__closures, _scope($scope2_id, { Cd: 1 }), "a0", 0);
				return 0;
			}
		}, $scope1_id, "a");
		_subscribe($tab__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("LOADING");
	}, void 0, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: tab,
		d: $tab__closures
	});
}, 1);
