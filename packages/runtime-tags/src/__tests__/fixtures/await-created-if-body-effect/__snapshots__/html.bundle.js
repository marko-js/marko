// lazy.marko
var lazy_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
});

// template.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "a", flush, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(input.label), (x) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id();
				$Lazy_withLoadAssets({ label: x + n });
				_script($scope2_id, "b0");
				_subscribe($n__closures, _scope($scope2_id, {
					d: x,
					_: _scope_with_id($scope1_id),
					b: _existing_scope($childScope)
				}), "b1");
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.label,
		g: n,
		i: $n__closures
	});
}, 1);
