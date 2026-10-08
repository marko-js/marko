// tags/page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/page.marko_1*content": "__tests__/tags/page.marko_1*content __tests__/tags/page.marko_1_likes#0:4/init!__tests__/tags/page.marko_1; D%c%c%;<button><!> <!> <!></button>",
	"__tests__/tags/page.marko_0_#text#0/await": "__tests__/tags/page.marko_0_#text#0/await __tests__/tags/page.marko_1_likes#0:4/init!__tests__/tags/page.marko_1; D%c%c%;<button><!> <!> <!></button>",
	"__tests__/tags/page.marko": "__tests__/tags/page.marko !;b%;<!><!><!>"
});
var page_default = _template_patch("__tests__/tags/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $likes__closures = new Set();
	let likes = 3;
	_await($scope0_id, "#text/0", input.promise, (v) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<button>${_patch_text($scope1_id, "#text/1", v, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "#text/2", likes, 2)} ${_text_resume($scope1_id, "#text/3", open ? "open" : "closed", 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/page.marko_1");
		_patch_value($scope1_id, "__tests__/tags/page.marko_fill1", open, 1);
		_subscribe($likes__closures, _scope($scope1_id, {
			open,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/page.marko", "2:2", { open: "3:8" }), "__tests__/tags/page.marko_1_likes#0:4/subscribe");
	}, 1, "__tests__/tags/page.marko_1*content", 1);
	_patch_value($scope0_id, "__tests__/tags/page.marko_fill0", likes, 1);
	$scope0_page && _scope($scope0_id, {
		likes,
		"ClosureScopes:likes/5": $likes__closures
	}, "__tests__/tags/page.marko", 0, { likes: "1:6" });
	$scope0_page && _resume_branch($scope0_id);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_default({ promise: input.promise });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_promise: input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.promise);
}, 1);
