// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let b = "";
	_html(`<div><span>s</span>${_text_resume($scope0_id, "a", b)}</div><div><!--note-->${_text_resume($scope0_id, "b", b)}</div><button>set</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
