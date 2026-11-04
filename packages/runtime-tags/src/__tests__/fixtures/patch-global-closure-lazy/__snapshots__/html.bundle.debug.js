// child.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D l%;<button> </button><!><!>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			forOf([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_escape(x)}${_text_mark($scope2_id, "#text/1", $global$1.brand, $scope0_page * 2)}</i>`);
				_fill_global_subscribe("__tests__/child.marko_2_$global_brand#0:13", $scope2_id, 1);
				_scope($scope2_id, {}, "__tests__/child.marko", "5:4");
			});
			_scope($scope1_id, {}, "__tests__/child.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_0_on#3/fill", on, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_0_count#4/fill", count, 1);
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "2:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks$1);
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)($walks$1)};${((_w0) => `<main><!>${_w0}</main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	$Child_withLoadAssets({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
