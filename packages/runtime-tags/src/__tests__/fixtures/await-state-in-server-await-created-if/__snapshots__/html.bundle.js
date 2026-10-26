// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (s) => {
				const $scope2_id = _scope_id();
				const $await_content__s__closures = /* @__PURE__ */ new Set();
				_await($scope2_id, "a", Promise.resolve(n), (x) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "a", s, _write_guard($scope0_reason, 2))}:${_text_resume($scope3_id, "b", x, 2)}</p>`);
					_subscribe($wi__input_label && $await_content__s__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0");
				});
				_subscribe($n__closures, _scope($scope2_id, {
					c: s,
					_: _scope_with_id($scope1_id),
					j: $wi__input_label && $await_content__s__closures
				}), "a1", 0);
				_resume_branch($scope2_id);
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.label,
		g: n,
		i: $n__closures
	});
}, 1);
