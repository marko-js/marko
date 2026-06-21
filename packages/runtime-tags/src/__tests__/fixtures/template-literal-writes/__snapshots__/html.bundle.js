// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = "y";
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}<textarea>${_escape_textarea(`a-${d}-b`)}</textarea>${_el_resume($scope0_id, "b")}<div${_attr("id", `id-${d}`)}${_attr("data-x", `${d}`)}>${_escape(`t-${d}-z`)}${_el_resume($scope0_id, "d")}</div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: d });
	_resume_branch($scope0_id);
}, 1);
