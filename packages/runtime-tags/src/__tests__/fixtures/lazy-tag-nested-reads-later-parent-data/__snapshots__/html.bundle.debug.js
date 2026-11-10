// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let item = input.item;
	_html(`<button class=child>${_text_mark($scope0_id, "#text/1", item.name)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, { item }, "__tests__/child.marko", 0, { item: "1:6" });
});

// parent.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush$1, "ready:__tests__/child.marko");
var parent_default = _template("__tests__/parent.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const first = { name: "first" };
	_html(`<button class=parent>parent</button>${_el_mark($scope0_id, "#button/0")}`);
	$Child_withLoadAssets({ item: first });
	_await($scope0_id, "#text/3", resolveAfter("second", 1), (name) => {
		const $scope1_id = _scope_id();
		const second = { name };
		_html(`<button class=later>later</button>${_el_mark($scope1_id, "#button/0")}`);
		$Child_withLoadAssets({ item: second });
		_try($scope1_id, "#text/3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", resolveAfter("third", 2), (_) => {
				const $scope3_id = _scope_id();
				$Child_withLoadAssets({ item: first });
			}, 0);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("loading");
		}, void 0, "__tests__/parent.marko_4*content");
		_script($scope1_id, "__tests__/parent.marko_1");
		_scope($scope1_id, { second }, "__tests__/parent.marko", "9:2", { second: "10:10" });
	});
	_script($scope0_id, "__tests__/parent.marko_0");
	_scope($scope0_id, { first }, "__tests__/parent.marko", 0, { first: "4:8" });
});

// template.marko
const $Parent_withLoadAssets = withLoadAssets(() => parent_default, "__tests__/parent.marko", flush$1, "ready:__tests__/parent.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Parent_withLoadAssets({});
}, 1);
