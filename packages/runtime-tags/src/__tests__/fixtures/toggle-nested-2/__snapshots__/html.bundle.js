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
					_html(`<button id=count>${_escape(count)}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "a0");
					_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "b", 1, 1, 1, 0, 1);
			_script($scope1_id, "a1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b");
	_html("</div>");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		c: outer,
		d: inner,
		e: count,
		Be: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
