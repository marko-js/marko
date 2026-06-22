// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "b0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// tags/thing.marko
var thing_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "c0");
	writeScope($scope0_id, { c: input.value });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $setHtml_getter = _hoist($scope0_id, "a0");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					const $Child_scope = _peek_scope_id();
					let setHtml = _dynamic_tag($scope2_id, "a", child_default, {});
					_var($scope2_id, "b", $Child_scope, "a1");
					writeScope($scope2_id, { c: setHtml });
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, 1);
			writeScope($scope1_id, { _: $si__input_show && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, 1);
	thing_default({ value: $setHtml_getter });
	_if(() => {
		{
			const $scope3_id = _scope_id();
			const $Child_scope2 = _peek_scope_id();
			let setHtml2 = _dynamic_tag($scope3_id, "a", child_default, {});
			_var($scope3_id, "b", $Child_scope2, "a2");
			writeScope($scope3_id, { c: setHtml2 });
			return 0;
		}
	}, $scope0_id, "c", 1, 0, $sg__input_show, void 0, void 0, 1);
	_if(() => {
		{
			const $scope4_id = _scope_id();
			const $Child_scope3 = _peek_scope_id();
			let setHtml3 = _dynamic_tag($scope4_id, "a", child_default, {});
			_var($scope4_id, "b", $Child_scope3, "a3");
			writeScope($scope4_id, { c: setHtml3 });
			return 0;
		}
	}, $scope0_id, "d", 1, 0, $sg__input_show, void 0, void 0, 1);
	{
		const $scope5_id = _scope_id();
		_script($scope5_id, "a4");
		writeScope($scope5_id, { _: _scope_with_id($scope0_id) });
	}
	_script($scope0_id, "a5");
	$si__input_show && writeScope($scope0_id, { h: input.show });
}, 1);
