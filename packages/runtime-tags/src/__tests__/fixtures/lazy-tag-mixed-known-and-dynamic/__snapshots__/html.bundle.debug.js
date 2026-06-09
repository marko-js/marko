// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let value = 0;
	_html(`<button class=toggle>Toggle</button>${_el_resume($scope0_id, "#button/0")}<button class=inc>Inc</button>${_el_resume($scope0_id, "#button/1")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$Child_withLoadAssets({ value });
	_dynamic_tag($scope0_id, "#text/4", show ? $Child_withLoadAssets : null, { value });
	_script($scope0_id, "__tests__/template.marko_0_value");
	_script($scope0_id, "__tests__/template.marko_0_show");
	writeScope($scope0_id, {
		show,
		value,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		show: "3:6",
		value: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
