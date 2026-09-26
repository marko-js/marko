// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checked = false;
	const attrs = { name: "x" };
	_html(`<input value=yes${_attrs_partial({
		type: "checkbox",
		...attrs,
		checked
	}, { value: 1 }, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: checked,
		e: attrs
	});
}, 1);
