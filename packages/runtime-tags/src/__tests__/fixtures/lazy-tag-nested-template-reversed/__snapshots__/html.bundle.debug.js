// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, 0, 0, $wg__input_tag);
	_script($scope0_id, "__tests__/grand-child.marko_0", $wg__input_tag);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/grand-child.marko", 0);
});

// counter.marko
var counter_default = _template("__tests__/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>count:${_text_mark($scope0_id, "#text/1", count, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/counter.marko", 0, { count: "1:6" });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$GrandChild_withLoadAssets({ tag: counter_default });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
