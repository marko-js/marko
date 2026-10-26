// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", x, $wg__input_label)}</p>`);
				_if(() => {}, $scope2_id, "b", 1, 1, 0, 0, 1);
				_script($scope2_id, "a1");
				_subscribe($n__closures, _scope($scope2_id, {
					d: x,
					_: _scope_with_id($scope1_id)
				}), "a2");
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.label,
		g: n,
		i: $n__closures
	});
}, 1);
