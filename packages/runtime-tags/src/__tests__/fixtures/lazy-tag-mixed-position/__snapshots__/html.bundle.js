// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $lazy_Child = withAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let value = 0;
	_html(`<button class=toggle>Toggle</button>${_el_resume($scope0_id, "a")}<button class=inc>Inc</button>${_el_resume($scope0_id, "b")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$lazy_Child({ value });
	_dynamic_tag($scope0_id, "e", child_default, { value });
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		f: show,
		g: value,
		d: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
