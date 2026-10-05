// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_value = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}: ${_text_resume($scope0_id, "b", input.value, $wg__input_value * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(34);
			const $childScope = _peek_scope_id();
			$Child_withLoadAssets({
				label: "x",
				value: count
			});
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
}, 1);
