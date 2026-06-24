// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "";
	const rest = { placeholder: "p" };
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<input${_attrs({
		type: "checkbox",
		checkedValue: v,
		value: "",
		...rest
	}, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<output>${_escape("value=")}${_el_resume($scope0_id, "c")}</output>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: v,
		e: rest
	});
	_resume_branch($scope0_id);
}, 1);
