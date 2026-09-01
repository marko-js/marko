// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tag = input.tag;
	let v = "";
	_dynamic_tag($scope0_id, "a", tag, {
		value: v,
		valueChange: _resume((_new_v) => {
			v = _new_v;
		}, "a0", $scope0_id)
	});
	_html(`<output>${_text_resume($scope0_id, "b", v)}</output>`);
	_scope($scope0_id, { f: tag });
	_resume_branch($scope0_id);
}, 1);
