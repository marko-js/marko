// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_escape(input.value)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}</span>${_el_resume($scope0_id, "#span/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({ value: "hi" });
}, 1);
