// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return "blue";
});

// tags/swatch.marko
var swatch_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_c0:${_escape_style_value(input.color)};`)}${_el_mark($scope0_id, "a", $wg__input_color)}<div class=swatch></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_content("a1", ({ color }) => {
		_scope_id();
		_scope_reason();
		_html(`${_style_html(`--M_a0:${_escape_style_value(color)};`)}<div class=box></div>`);
	}, $scope0_id);
	_content("a2", ({ value }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_await($scope3_id, "a", value, (v) => {
			_scope_id();
			_html(`<span>${_escape(v)}</span>`);
		}, 0);
	}, $scope0_id);
	let top = child_default({});
	swatch_default({ color: top });
	let open = false;
	_html(`<button>Toggle</button>${_el_mark($scope0_id, "d")}`);
	_if(() => {}, $scope0_id, "e");
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: open });
}, 1);
