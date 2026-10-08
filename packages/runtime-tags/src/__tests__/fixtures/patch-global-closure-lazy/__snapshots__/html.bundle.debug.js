// child.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
_shells({
	"__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D l%;<button> </button><!><!>",
	"__tests__/child.marko_1*shell": "__tests__/child.marko_1*shell;b%;<!><!><!>",
	"__tests__/child.marko_2*shell": "__tests__/child.marko_2*shell;D%b%;<i><!><!></i>"
});
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_for_of([1, 2], (x) => {
				const $scope2_id = _scope_id();
				_html(`<i>${_patch_text($scope2_id, "#text/0", x, void 0, 0, 0)}${_patch_text($scope2_id, "#text/1", $global$1.brand, 2)}</i>`);
				_fill_global_subscribe("__tests__/child.marko_2_$global_brand#5/global", $scope2_id);
				_scope($scope2_id, {}, "__tests__/child.marko", "5:4");
			}, 0, $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/child.marko_2*shell", 0, 0);
			_scope($scope1_id, {}, "__tests__/child.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 0, void 0, void 0, void 0, ["__tests__/child.marko_1*shell"]);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "2:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)($walks$1);
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `D%b/${_w0}&l`)($walks$1)};${((_w0) => `<main><!>${_w0}</main>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	$Child_withLoadAssets({});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
