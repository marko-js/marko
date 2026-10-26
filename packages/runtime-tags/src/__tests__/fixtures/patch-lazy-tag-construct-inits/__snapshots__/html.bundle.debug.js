// child.marko
const $template$1 = "<button>+</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({
	"__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; b%;<button>+</button><!><!>",
	"__tests__/child.marko_1*shell": "__tests__/child.marko_1*shell __tests__/child.marko_1_count#0:5/init;D%c%;<span><!>:<!></span>"
});
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_patch_fill($scope1_id, "PatchFill:__tests__/child.marko_fill1", i);
		_html(`<span>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope1_id, "#text/1", count + i, 2)}</span>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/child.marko_1_input_label#0:4/init");
		$scope0_page && _scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/child.marko", "3:2", { i: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/child.marko_1*shell", 0, 0);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
const $template = "<button class=n> </button><main></main><p> </p>";
const $walks = " D l bD l";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l bD ;<button class=n> </button><main></main><p> </p>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/1");
			$Child_withLoadAssets({ label: input.label });
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:7/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/2", $wg__input_show)}<p>${_patch_text($scope0_id, "#text/3", input.label, void 0, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "3:6"
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
