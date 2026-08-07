// tags/echo/index.marko
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { ...rest } = input;
	_html(`<em>${_escape(rest.label)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</em>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html("<main>");
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	echo_default({ label });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: label,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
