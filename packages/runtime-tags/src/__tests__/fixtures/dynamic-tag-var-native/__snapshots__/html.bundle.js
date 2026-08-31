// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tag = "div";
	let text = "";
	const $tag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", tag, {});
	_var($scope0_id, "b", $tag_scope, "a0");
	_html(`<button id=swap>swap</button>${_el_resume($scope0_id, "c")}<button id=read>read</button>${_el_resume($scope0_id, "d")}<output>${_text_resume($scope0_id, "e", text)}</output>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: tag,
		h: el
	});
	_resume_branch($scope0_id);
}, 1);
