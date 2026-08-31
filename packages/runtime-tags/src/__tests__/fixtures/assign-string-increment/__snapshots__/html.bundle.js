// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "5";
	_html(`<button id=post>post</button>${_el_resume($scope0_id, "a")}<button id=pre>pre</button>${_el_resume($scope0_id, "b")}<button id=dec>dec</button>${_el_resume($scope0_id, "c")}<div>${_text_resume($scope0_id, "d", x)}:${_text_resume($scope0_id, "e", "", 2)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: x });
	_resume_branch($scope0_id);
}, 1);
