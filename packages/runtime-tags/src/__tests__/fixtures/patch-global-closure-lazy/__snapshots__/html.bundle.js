// child.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup$1 = [[], ["a3"]];
_shells({
	a: "a !a3; D l%;<button> </button><!><!>",
	a2: "a2;b%;<!><!><!>",
	a1: "a1;D%b%;<i><!><!></i>"
});
var child_default = _template("a", (input) => {
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
				_fill_global_subscribe("a0", $scope1_id);
				$scope0_page && _scope($scope2_id, {});
			}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a1", 0, 0);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 0, void 0, void 0, void 0, ["a2"], 0, 0);
	_script($scope0_id, "a3");
	_patch_fill($scope0_id, "va4", count, 1);
	$scope0_page && _scope($scope0_id, { e: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)($walks)};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
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
