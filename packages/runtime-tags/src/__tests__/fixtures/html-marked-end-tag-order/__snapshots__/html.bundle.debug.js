// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<html${_attr("lang", input.lang)}><head><title>t</title>${_flush_head()}</head><body><button>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`), _trailers(`</body></html>${_el_resume($scope0_id, "#html/0", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "6:10" });
	_resume_branch($scope0_id);
}, 1);
