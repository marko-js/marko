// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/child.marko_0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(undefined, 1), (_) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_show/pending");
			_dynamic_tag($scope2_id, "#text/0", show ? $Child_withLoadAssets : null, { value: 1 });
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("Loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		"ClosureScopes:show": $show__closures
	}, "__tests__/template.marko", 0, { show: "4:6" });
	_resume_branch($scope0_id);
}, 1);
