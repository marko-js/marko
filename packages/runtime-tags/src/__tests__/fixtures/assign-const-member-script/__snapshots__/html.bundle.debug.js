// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const opts = input.label ? { label: input.label } : null;
	_html(`<pre></pre>${_el_resume($scope0_id, "#pre/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_opts#4");
	_scope($scope0_id, { opts }, "__tests__/template.marko", 0, { opts: "1:8" });
}, 1);
