// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button><pre>a    1    ${_text_resume($scope0_id, "b", 0, 2)}</pre><pre>b    2    ${_text_resume($scope0_id, "c", 0, 2)}</pre><pre>c  {c:4}  ${_text_resume($scope0_id, "d", JSON.stringify({}), 2)}</pre><pre>d    7    ${_text_resume($scope0_id, "e", 0, 2)}</pre><pre>f   [9]   ${_text_resume($scope0_id, "f", JSON.stringify([]), 2)}</pre></button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
