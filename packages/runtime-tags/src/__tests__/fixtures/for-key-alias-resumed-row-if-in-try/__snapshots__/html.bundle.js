// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	forOf(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				{
					const $scope3_id = _scope_id();
					_html(_escape(index));
					_scope($scope3_id, {});
					return 0;
				}
			}, $scope2_id, "a");
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("caught");
		}, 0, "a1");
		_scope($scope1_id, {
			M: index,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		d: $show__closures
	});
}, 1);
