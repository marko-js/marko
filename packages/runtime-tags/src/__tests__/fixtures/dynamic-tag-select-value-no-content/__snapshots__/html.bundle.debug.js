// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tag = input.tag;
	let v = "";
	_dynamic_tag($scope0_id, "#text/0", tag, {
		value: v,
		valueChange: _resume((_new_v) => {
			v = _new_v;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`<output>${_text_resume($scope0_id, "#text/1", v)}</output>`);
	writeScope($scope0_id, { tag }, "__tests__/template.marko", 0, { tag: "1:6" });
	_resume_branch($scope0_id);
}, 1);
