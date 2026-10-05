// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_value = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}: ${_text_resume($scope0_id, "#text/1", input.value, $wg__input_value * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (count % 2 === 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason(34);
			const $childScope = _peek_scope_id();
			$Child_withLoadAssets({
				label: "x",
				value: count
			});
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
