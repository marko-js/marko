// tags/outer.marko
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (f(input.label) === "w-b") {
			const $scope1_id = _scope_id();
			_html("<b>yes</b>");
			_scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<i>no</i>");
			_scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.fmt,
		f: input.label,
		g: f
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "a0");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		e: input.label,
		f: wrap
	});
}, 1);
