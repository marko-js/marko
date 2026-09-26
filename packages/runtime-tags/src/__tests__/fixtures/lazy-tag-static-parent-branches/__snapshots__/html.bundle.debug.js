// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(10, 1), (value) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_resume($scope2_id, "#text/1", count)}:${_escape(value)}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/child.marko_2");
			_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/child.marko", "5:4"), "__tests__/child.marko_2_count#1/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/child.marko", "4:2");
	}, $scope0_id), {});
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/child.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>before</div>");
	$Child_withLoadAssets({});
}, 1);
