// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Outer_content__walks);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($Outer_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template)}`)(),
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const Inner = { content: _content("__tests__/template.marko_2*content", ({ open, body }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__body = _write_guard($scope2_reason, 2), $wg__open = _write_guard($scope2_reason, 1), $scope2_page = _page_render();
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", body, {}, 0, 0, $wg__body, void 0, 2, $scope2_reason, 2);
				_write_if($scope2_reason, 0) && _scope($scope4_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__open, void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope2_reason, 1);
		$scope2_page ? _write_if($scope2_reason, 1) && _scope($scope2_id, { body: _unfilled_if($scope2_reason, 1) && body }, "__tests__/template.marko", "2:2", { body: "2:23" }) : _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill2", body, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_3*content", ({ open, body }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html("<section>");
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope = _patch_child($scope3_id, "#childScope/0");
		Inner.content({
			open,
			body
		});
		_html("</section>");
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0");
	Outer.content({
		open: count % 2 === 0,
		body: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</em>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:6"));
		}, $scope0_id) })
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/6": _write_if($scope0_reason, 0) && $input_title__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
}, 1);
