// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let value = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", child_default, { value });
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		c: show,
		d: value
	});
	_resume_branch($scope0_id);
}, 1);
