// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $b_getter = _hoist($scope0_id, "a2");
	let a = _resume(() => $b_getter, "a0", $scope0_id);
	let b = _resume(() => a, "a1", $scope0_id);
	_html(`<button>${_text_mark($scope0_id, "b", typeof a)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: a,
		d: b
	});
}, 1);
