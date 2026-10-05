// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=child>${_text_resume($scope0_id, "#text/1", input.value, _write_guard($scope0_reason, 0))}</span>${_el_resume($scope0_id, "#span/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		$Child_withLoadAssets({ value: "hi" });
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
