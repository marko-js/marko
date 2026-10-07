// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	let Tag = $Child_withLoadAssets;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", Tag, { value: count });
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		c: count,
		d: Tag
	});
}, 1);
