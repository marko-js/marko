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
	const $count__closures = new Set();
	let count = 0;
	$GrandChild_withLoadAssets({ content: _content("__tests__/child.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>count:${_text_mark($scope1_id, "#text/1", count, 2)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/child.marko_1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/child.marko", "4:2"), "__tests__/child.marko_1_count#0:2/subscribe");
	}, $scope0_id) });
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/3": $count__closures
	}, "__tests__/child.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
