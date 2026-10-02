// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		input_shared: input.shared,
		count
	}, "__tests__/child.marko", 0, {
		input_shared: ["input.shared"],
		count: "5:6"
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter("done", 1), (v) => {
			const $scope3_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		const shared = { n: 1 };
		$Child_withLoadAssets({ shared });
		let count = 0;
		_html(`<button class=placeholder>${_text_resume($scope2_id, "#text/3", count)}</button>${_el_resume($scope2_id, "#button/2")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			shared,
			count
		}, "__tests__/template.marko", "5:4", {
			shared: "6:12",
			count: "8:10"
		});
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
