// nested.marko
var nested_default = _template("__tests__/nested.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=nested>nested:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/nested.marko_0");
	_scope($scope0_id, {
		input_shared: input.shared,
		count
	}, "__tests__/nested.marko", 0, {
		input_shared: ["input.shared"],
		count: "5:6"
	});
});

// parent.marko
const $Nested_withLoadAssets = withLoadAssets(nested_default, flush$1, "ready:__tests__/nested.marko");
var parent_default = _template("__tests__/parent.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter("parent", 1), (v) => {
		const $scope1_id = _scope_id();
		const shared = { n: 1 };
		let count = 0;
		_html(`<button class=parent>${_escape(v)}:${_text_resume($scope1_id, "#text/2", count, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		$Nested_withLoadAssets({ shared });
		_script($scope1_id, "__tests__/parent.marko_1");
		_scope($scope1_id, {
			shared,
			count
		}, "__tests__/parent.marko", "4:2", {
			shared: "5:10",
			count: "6:8"
		});
	});
});

// template.marko
const $Parent_withLoadAssets = withLoadAssets(parent_default, flush$1, "ready:__tests__/parent.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Parent_withLoadAssets({});
}, 1);
