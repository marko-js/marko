// tags/thing.marko
var thing_default = _template("__tests__/tags/thing.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/thing.marko_0_input_value");
	writeScope($scope0_id, { input_value: input.value }, "__tests__/tags/thing.marko", 0, { input_value: ["input.value"] });
});

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $setHtml_getter = _hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
	thing_default({ value: $setHtml_getter });
	let setHtml = child_default({});
	writeScope($scope0_id, { setHtml }, "__tests__/template.marko", 0, { setHtml: "2:8" });
	_assert_hoist(setHtml);
}, 1);
