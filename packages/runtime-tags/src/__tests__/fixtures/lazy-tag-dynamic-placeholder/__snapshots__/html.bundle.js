// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_value = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}: ${_text_resume($scope0_id, "b", input.value, $wg__input_value * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	const $value__closures = /* @__PURE__ */ new Set();
	let show = true;
	let value = 1;
	_html(`<button class=toggle>Toggle</button>${_el_resume($scope0_id, "a")}<button class=inc>Inc</button>${_el_resume($scope0_id, "b")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", $Child_withLoadAssets, {
			label: "x",
			value
		});
		_subscribe($value__closures, _subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0"), "b1");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, void 0, "b2");
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		d: show,
		e: value,
		f: $show__closures,
		g: $value__closures
	});
}, 1);
