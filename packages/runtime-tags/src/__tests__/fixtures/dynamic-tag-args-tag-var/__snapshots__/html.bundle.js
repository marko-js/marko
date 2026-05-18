// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>Child: ${_sep($sg__input)}${_escape(input)}${_el_resume($scope0_id, "a", $sg__input)}</div>`);
	const $return = input;
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
	return $return;
});

// template.marko
const tags = [custom_tag_default];
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button>Count: <!>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $tags0_scope = _peek_scope_id();
	let y = _dynamic_tag($scope0_id, "c", tags[0], [x], 0, 1);
	_var($scope0_id, "d", $tags0_scope, "a0");
	_html(`<div>Parent: <!>${_escape(y)}${_el_resume($scope0_id, "e")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { f: x });
	_resume_branch($scope0_id);
}, 1);
