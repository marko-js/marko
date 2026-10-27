// tags/outer/tags/inner/index.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/outer/tags/inner/index.marko": "__tests__/tags/outer/tags/inner/index.marko;b%;<!><!><!>",
	"__tests__/tags/outer/tags/inner/index.marko_1*shell": "__tests__/tags/outer/tags/inner/index.marko_1*shell,<em>o</em>"
});
var inner_default = _template("__tests__/tags/outer/tags/inner/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_open = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>o</em>");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/outer/tags/inner/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, void 0, void 0, void 0, ["__tests__/tags/outer/tags/inner/index.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/outer/tags/inner/index.marko", 0);
});

// tags/outer/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/outer/index.marko": /*@__PURE__*/ (() => `__tests__/tags/outer/index.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`)() });
var outer_default = _template("__tests__/tags/outer/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	inner_default({ open: input.o });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/outer/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			outer_default({ o: input.o });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_o: input.o,
		show
	}, "__tests__/template.marko", 0, {
		input_o: ["input.o"],
		show: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.o, !_server_guard($scope0_reason, 0));
}, 1);
