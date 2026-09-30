// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $show__closures = /* @__PURE__ */ new Set();
	const tag = "section";
	let count = 0;
	let show = true;
	_dynamic_tag($scope0_id, "a", tag, {}, _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=inc>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			{
				const $scope2_id = _scope_id();
				forOf([1, 2], (i) => {
					const $scope3_id = _scope_id();
					_html(`<span class=inner>${_text_resume($scope3_id, "a", count * i)}</span>`);
					_subscribe($count__closures, _scope($scope3_id, {
						c: i,
						_: _scope_with_id($scope2_id),
						Ce: 1
					}), "a0");
				});
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "c");
		_html(`<button id=toggle>toggle</button>${_el_resume($scope1_id, "d")}`);
		_script($scope1_id, "a2");
		_subscribe($show__closures, _subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3"), "a4");
	}, $scope0_id), 0, 0);
	_scope($scope0_id, {
		c: count,
		d: show,
		e: $count__closures,
		f: $show__closures
	});
	_resume_branch($scope0_id);
}, 1);
