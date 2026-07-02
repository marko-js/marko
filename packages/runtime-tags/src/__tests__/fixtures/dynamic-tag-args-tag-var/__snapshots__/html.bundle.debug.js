// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>Child: ${_sep($sg__input)}${_escape(input)}${_el_resume($scope0_id, "#text/0", $sg__input)}</div>`);
	const $return = input;
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
	return $return;
});

// template.marko
const tags = [custom_tag_default];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button>Count: <!>${_escape(x)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $tags0_scope = _peek_scope_id();
	let y = _dynamic_tag($scope0_id, "#text/2", tags[0], [x], 0, 1);
	_var($scope0_id, "#scopeOffset/3", $tags0_scope, "__tests__/template.marko_0_y/var");
	_html(`<div>Parent: <!>${_escape(y)}${_el_resume($scope0_id, "#text/4")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "3:6" });
	_resume_branch($scope0_id);
}, 1);
