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
	let show = true;
	let value = 1;
	_html(`<button class=toggle>Toggle</button>${_el_resume($scope0_id, "a")}<button class=inc>Inc</button>${_el_resume($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "c", $Child_withLoadAssets, {
		label: "x",
		value
	});
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: show,
		e: value
	});
}, 1);
