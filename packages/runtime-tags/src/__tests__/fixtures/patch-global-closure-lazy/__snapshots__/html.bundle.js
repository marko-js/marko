// child.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	a: "a !a3; D l%;<button> </button><!><!>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1;D%b%;<i><!><!></i>"
});
var child_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_for_of([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_patch_text($scope2_id, "a", x, void 0, 0, 0)}${_patch_text($scope2_id, "b", $global$1.brand, 2)}</i>`);
				_fill_global_subscribe("a2", $scope2_id);
				_scope($scope2_id, {});
			}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a1", 0, 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 0, void 0, void 0, void 0, ["a0"]);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "a4", count, 1);
	$scope0_page && _scope($scope0_id, { e: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `D%b/${_w0}&l`)($walks)};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Child_withLoadAssets({});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
