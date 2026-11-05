// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let a = true;
	let count = 0;
	_html("<p>Count: ");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_html(_text_mark($scope2_id, "a", count));
					_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
					return 0;
				}
			}, $scope1_id, "a", $wg__input_b, $wg__input_b);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`</p><button id=inc>inc</button>${_el_mark($scope0_id, "b")}<button id=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.b,
		g: a,
		h: count,
		j: $count__closures
	});
}, 1);
