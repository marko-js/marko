// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/grand-child.marko_0");
	_script($scope0_id, "__tests__/grand-child.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/grand-child.marko", 0, { "EventAttributes:#div/0": ["...input", "1:9"] });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$GrandChild_withLoadAssets({ content: _content("__tests__/child.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button>count:${_text_mark($scope1_id, "#text/1", count, 2)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/child.marko_1");
		_scope($scope1_id, { count }, "__tests__/child.marko", "3:2", { count: "4:8" });
	}, $scope0_id) });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
