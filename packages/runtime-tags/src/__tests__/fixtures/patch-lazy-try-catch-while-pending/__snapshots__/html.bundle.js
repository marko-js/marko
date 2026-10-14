// child.marko
const $template = "<!><!><!>";
_shells({
	a0: "a0;D%c%;<em><!> <!></em>",
	a1: "a1;D%c%;<em><!> <!></em>",
	a2: "a2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", $global$1.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "a", $global$1.name)} ${_patch_text($scope4_id, "b", v, 2)}</em>`);
			_fill_global_subscribe("a3", $scope4_id);
			_scope($scope4_id, {});
		}, 1, "a0", 1);
		_fill_global_subscribe("a4", $scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<s>caught</s>");
	}, "a5", "a6", "a2");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "b");
	$Child_withLoadAssets({});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
