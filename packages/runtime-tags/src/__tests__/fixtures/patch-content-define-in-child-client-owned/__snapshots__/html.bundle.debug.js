// tags/wrap.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
_shells({
	"__tests__/tags/wrap.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/wrap.marko_1*content;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	"__tests__/tags/wrap.marko": /*@__PURE__*/ (() => `__tests__/tags/wrap.marko;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/tags/wrap.marko_2*shell": "__tests__/tags/wrap.marko_2*shell;D ;<em> </em>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const Panel = { content: _content_elide("__tests__/tags/wrap.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</em>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "__tests__/tags/wrap.marko_2_input_title#0:3/init" : "__tests__/tags/wrap.marko_2_input_title#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: ($wi__input_title || $wi__open) && _scope_with_id($scope1_id) }, "__tests__/tags/wrap.marko", "2:4"), _client_guard($scope0_reason, 0) && "__tests__/tags/wrap.marko_2_input_title#0:3/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__open, void 0, void 0, void 0, ["__tests__/tags/wrap.marko_2*shell"], $scope1_reason, 0);
		($wi__input_title || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Panel.content({ open: input.open });
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		"ClosureScopes:input_title/5": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/wrap.marko", 0, { input_title: ["input.title"] }) : _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/wrap.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($walks$1)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	wrap_default({
		open: count % 2 === 0,
		title: input.title
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
