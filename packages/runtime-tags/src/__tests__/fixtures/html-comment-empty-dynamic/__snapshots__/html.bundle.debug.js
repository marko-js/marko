// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	let raw = "";
	_html(`<!--${_escape_comment(text) || " "}-->${_el_resume($scope0_id, "#comment/0")}<!--${_unescaped(raw) || " "}-->${_el_resume($scope0_id, "#comment/1")}<!--${_escape_comment(text) + _escape_comment(raw) || " "}-->${_el_resume($scope0_id, "#comment/2")}<!-- -->${_el_resume($scope0_id, "#comment/3")}<button>reveal</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		text,
		raw
	}, "__tests__/template.marko", 0, {
		text: "1:6",
		raw: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
