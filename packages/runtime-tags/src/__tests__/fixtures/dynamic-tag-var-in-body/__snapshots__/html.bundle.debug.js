// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`<div></div>${_el_resume($scope0_id, "#div/1")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $setHtml__closures = new Set();
	const $Child_scope = _peek_scope_id();
	let setHtml = _dynamic_tag($scope0_id, "#text/0", 1 && child_default, {}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "__tests__/template.marko_1_setHtml");
		_subscribe($setHtml__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_var($scope0_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_0_setHtml/var");
	writeScope($scope0_id, {
		setHtml,
		"ClosureScopes:setHtml": $setHtml__closures
	}, "__tests__/template.marko", 0, { setHtml: "3:16" });
}, 1);
