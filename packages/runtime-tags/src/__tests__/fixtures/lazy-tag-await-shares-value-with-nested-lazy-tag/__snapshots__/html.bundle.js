// nested.marko
var nested_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=nested>nested:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.shared,
		f: count
	});
});

// parent.marko
const $Nested_withLoadAssets = withLoadAssets(nested_default, flush$1, "_a");
var parent_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", resolveAfter("parent", 1), (v) => {
		const $scope1_id = _scope_id();
		const shared = { n: 1 };
		let count = 0;
		_html(`<button class=parent>${_escape(v)}:${_text_resume($scope1_id, "c", count, 2)}</button>${_el_resume($scope1_id, "a")}`);
		$Nested_withLoadAssets({ shared });
		_script($scope1_id, "b0");
		_scope($scope1_id, {
			h: shared,
			i: count
		});
	});
});

// template.marko
const $Parent_withLoadAssets = withLoadAssets(parent_default, flush$1, "_b");
var template_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	$Parent_withLoadAssets({});
}, 1);
