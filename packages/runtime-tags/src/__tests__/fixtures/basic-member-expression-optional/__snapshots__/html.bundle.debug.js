// template.marko
const names = [
	"Dylan",
	"Michael",
	"Ryan",
	"Luke"
];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let index = -1;
	let user = undefined;
	_html(`<div>${_escape(user?.id)}${_el_resume($scope0_id, "#text/0")}</div><div>${_escape(user?.name)}${_el_resume($scope0_id, "#text/1")}</div><button>Update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_index");
	writeScope($scope0_id, { index }, "__tests__/template.marko", 0, { index: "9:5" });
	_resume_branch($scope0_id);
}, 1);
