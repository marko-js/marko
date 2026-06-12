// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.label)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}: ${_sep($sg__input_value)}${_escape(input.value)}${_el_resume($scope0_id, "#text/1", $sg__input_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	const $value__closures = new Set();
	let show = true;
	let value = 1;
	_html(`<button class=toggle>Toggle</button>${_el_resume($scope0_id, "#button/0")}<button class=inc>Inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "#text/0", show ? $Child_withLoadAssets : null, {
			label: "x",
			value
		});
		_subscribe($value__closures, _subscribe($show__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2")));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0_value");
	_script($scope0_id, "__tests__/template.marko_0_show");
	writeScope($scope0_id, {
		show,
		value,
		"ClosureScopes:show": $show__closures,
		"ClosureScopes:value": $value__closures
	}, "__tests__/template.marko", 0, {
		show: "3:6",
		value: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
