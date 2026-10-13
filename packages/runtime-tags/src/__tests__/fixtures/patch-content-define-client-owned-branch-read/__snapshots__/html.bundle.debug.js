// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Panel_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const Panel = { content: _content_elide("__tests__/template.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</em>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_input_title#0:4/init");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: ($wi__input_title || $wi__open) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_input_title#0:4/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__open, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		($wi__input_title || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Panel.content({ open: count % 2 === 0 });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/6": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.title);
}, 1);
