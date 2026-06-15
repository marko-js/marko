// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<title>${_escape(input.a)} - ${_escape(n)}</title>${_el_resume($scope0_id, "#title/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_n");
	writeScope($scope0_id, {
		input_a: input.a,
		n
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		n: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
