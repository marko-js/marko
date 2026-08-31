// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	const $inputtag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "#text/0", input.tag, {});
	_var($scope0_id, "#scopeOffset/1", $inputtag_scope, "__tests__/template.marko_0_el#8/var");
	_html(`<button>${_text_resume($scope0_id, "#text/3", clicks)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		clicks,
		el
	}, "__tests__/template.marko", 0, {
		clicks: "1:6",
		el: "2:15"
	});
	_resume_branch($scope0_id);
}, 1);
