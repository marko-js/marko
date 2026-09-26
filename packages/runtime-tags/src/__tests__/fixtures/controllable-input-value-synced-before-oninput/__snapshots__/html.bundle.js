// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let q = "";
	_html(`<input class=first>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "b", q, _resume((_new_q) => {
		q = _new_q;
	}, "a0", $scope0_id))} class=ctrl>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: q });
}, 1);
