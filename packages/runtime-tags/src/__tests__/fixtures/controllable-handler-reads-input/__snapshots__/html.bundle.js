// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</p><input${_attr_input_value($scope0_id, "b", input.label, _resume(function(v) {
		console.log(v + ":" + input.label);
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: input.label,
		i: count
	});
}, 1);
