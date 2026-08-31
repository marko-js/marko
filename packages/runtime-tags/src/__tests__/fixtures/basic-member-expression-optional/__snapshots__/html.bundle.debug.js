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
	_html(`<div>${_text_resume($scope0_id, "#text/0", user?.id)}</div><div>${_text_resume($scope0_id, "#text/1", user?.name)}</div><button>Update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { index }, "__tests__/template.marko", 0, { index: "9:5" });
	_resume_branch($scope0_id);
}, 1);
