// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<html${_attr("lang", input.lang)}><head><title>t</title>${_flush_head()}</head><body><button>${_escape(n)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`), _trailers(`</body></html>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { g: n });
	_resume_branch($scope0_id);
}, 1);
