// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", input.tag, {});
	_var($scope0_id, "b", $inputtag_scope, "a0");
	_html(`<button>${_text_resume($scope0_id, "d", clicks)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		h: clicks,
		i: el
	});
	_resume_branch($scope0_id);
}, 1);
