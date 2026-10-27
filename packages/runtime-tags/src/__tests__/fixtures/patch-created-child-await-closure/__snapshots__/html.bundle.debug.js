// tags/page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/page.marko_1*content": "__tests__/tags/page.marko_1*content __tests__/tags/page.marko_1_likes#0:4/init!__tests__/tags/page.marko_1; D%c%c%;<button><!> <!> <!></button>",
	"__tests__/tags/page.marko_0_#text#0/await": "__tests__/tags/page.marko_0_#text#0/await __tests__/tags/page.marko_1_likes#0:4/init!__tests__/tags/page.marko_1; D%c%c%;<button><!> <!> <!></button>",
	"__tests__/tags/page.marko": "__tests__/tags/page.marko !;b%;<!><!><!>"
});
var page_default = _template("__tests__/tags/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $likes__closures = new Set();
	let likes = 3;
	_await($scope0_id, "#text/0", input.promise, (v) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<button>${_patch_text($scope1_id, "#text/1", v, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "#text/2", likes, 2)} ${_text_resume($scope1_id, "#text/3", open ? "open" : "closed", 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/page.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/tags/page.marko_fill1", open, 1);
		$scope0_page && _subscribe($likes__closures, _scope($scope1_id, { open }, "__tests__/tags/page.marko", "2:2", { open: "3:8" }), "__tests__/tags/page.marko_1_likes#0:4/subscribe");
	}, 1, "__tests__/tags/page.marko_1*content", 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/page.marko_fill0", likes, 1);
	$scope0_page && _scope($scope0_id, {
		likes,
		"ClosureScopes:likes/5": $likes__closures
	}, "__tests__/tags/page.marko", 0, { likes: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			page_default({ promise: input.promise });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:4/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_promise: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
