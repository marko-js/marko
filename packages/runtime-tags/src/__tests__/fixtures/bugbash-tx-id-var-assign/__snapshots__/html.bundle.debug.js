// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const x = _id();
	let y = 0;
	_html(`<button>set</button>${_el_resume($scope0_id, "#button/0")}<div${_attr("id", x)}>${_escape(y)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { y }, "__tests__/template.marko", 0, { y: "2:6" });
	_resume_branch($scope0_id);
}, 1);
