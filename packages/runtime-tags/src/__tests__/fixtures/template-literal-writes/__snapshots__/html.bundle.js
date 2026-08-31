// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = "y";
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}<textarea>${_textarea_value(`a-${d}-b`)}</textarea>${_el_resume($scope0_id, "b")}<div${_attr("id", `id-${d}`)}${_attr("data-x", `${d}`)}>t-${_text_resume($scope0_id, "d", `${d}`, 2)}-z</div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: d });
	_resume_branch($scope0_id);
}, 1);
