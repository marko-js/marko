// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/grand-child.marko", 0);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forUntil(3, 0, 1, () => {
		const $scope1_id = _scope_id();
		$GrandChild_withLoadAssets({ content: _content("__tests__/child.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			let count = 0;
			_html(`<button>${_text_mark($scope2_id, "#text/1", count)}</button>${_el_mark($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/child.marko_2");
			_scope($scope2_id, { count }, "__tests__/child.marko", "4:4", { count: "5:10" });
		}, $scope1_id) });
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
