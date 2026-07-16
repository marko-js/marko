// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	let raw = "";
	_html(`<!--${_escape_comment(text) || " "}-->${_el_resume($scope0_id, "a")}<!--${_unescaped(raw) || " "}-->${_el_resume($scope0_id, "b")}<!--${_escape_comment(text) + _escape_comment(raw) || " "}-->${_el_resume($scope0_id, "c")}<!-- -->${_el_resume($scope0_id, "d")}<button>reveal</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		f: text,
		g: raw
	});
	_resume_branch($scope0_id);
}, 1);
