// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(JSON.stringify(input))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});

// template.marko
const tags = [custom_tag_default];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button>Count: <!>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", tags[0], [x, "foo"], 0, 1);
	_dynamic_tag($scope0_id, "#text/3", tags[0], [false], 0, 1, 0);
	_dynamic_tag($scope0_id, "#text/4", tags[0], [true], 0, 1, 0);
	_dynamic_tag($scope0_id, "#text/5", tags[0], [...["spread1", "spread2"]], 0, 1, 0);
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "3:6" });
	_resume_branch($scope0_id);
}, 1);
