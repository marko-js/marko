// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let outer = true;
	let inner = true;
	let count = 0;
	_html(`<div><button id=outer></button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button id=inner></button>${_el_resume($scope1_id, "a")}`);
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<button id=count>${_text_resume($scope2_id, "b", count)}</button>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "a0");
					_subscribe($count__closures, _scope($scope2_id, {}));
					return 0;
				}
			}, $scope1_id, "b", 1, 1, 1, 0, 1);
			_script($scope1_id, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html(" hello</div>");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: outer,
		d: inner,
		e: count,
		g: $count__closures
	});
}, 1);
