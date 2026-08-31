// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tag = "div";
	let text = "";
	const $tag_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "#text/0", tag, {});
	_var($scope0_id, "#scopeOffset/1", $tag_scope, "__tests__/template.marko_0_el#7/var");
	_html(`<button id=swap>swap</button>${_el_resume($scope0_id, "#button/2")}<button id=read>read</button>${_el_resume($scope0_id, "#button/3")}<output>${_text_resume($scope0_id, "#text/4", text)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		tag,
		el
	}, "__tests__/template.marko", 0, {
		tag: "1:6",
		el: "3:9"
	});
	_resume_branch($scope0_id);
}, 1);
