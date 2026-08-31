// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<!doctype html><html>${_flush_head()}<body><button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`), _trailers("</body></html>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: n });
	_resume_branch($scope0_id);
}, 1);
