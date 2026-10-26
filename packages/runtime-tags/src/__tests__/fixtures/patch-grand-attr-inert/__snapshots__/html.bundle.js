// helper.ts
function stamp() {
	return "stamp";
}

// tags/mid/tags/leaf/index.marko
const $template = "<pre> </pre>";
const $setup$1 = [[], []];
_shells({ c: "c;D ;<pre> </pre>" });
var leaf_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<pre>${_patch_text($scope0_id, "a", input.stamp, void 0, $scope0_reason, 0)}</pre>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/mid/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var mid_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	leaf_default({ stamp: stamp() });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			mid_default({});
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { c: show });
}, 1);
