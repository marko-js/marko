// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(10, 1), (value) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_resume($scope2_id, "b", count)}:${_escape(value)}</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), {});
	_scope($scope0_id, {
		b: count,
		c: $count__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div>before</div>");
	$Child_withLoadAssets({});
}, 1);
