// child.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup$1 = [[], ["a1"]];
_shells({ a: "a !a1; D l%;<button> </button><!><!>" });
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			forOf([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_escape(x)}${_text_mark($scope2_id, "b", $global$1.brand, $scope0_page * 2)}</i>`);
				_fill_global_subscribe("a0", $scope2_id, 1);
				_scope($scope2_id, {});
			});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "a1");
	_patch_fill($scope0_id, "va2", on, 1);
	_patch_fill($scope0_id, "va3", count, 1);
	_scope($scope0_id, { e: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)($walks)};${((_w0) => `<main><!>${_w0}</main>`)($template)}` });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Child_withLoadAssets({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
