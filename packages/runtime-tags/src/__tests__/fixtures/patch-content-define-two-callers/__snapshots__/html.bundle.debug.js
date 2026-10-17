// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($Panel_content__template, $Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& l`)($Panel_content__walks, $Panel_content__walks);
_shells({
	"__tests__/template.marko_3*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_3*content !;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `D/${_w0}&/${_w1}& l`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($Panel_content__template, $Panel_content__template)}`)(),
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const Panel = { content: _content_elide("__tests__/template.marko_3*content", ({ open, body }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__body = _write_guard($scope3_reason, 2), $wg__open = _write_guard($scope3_reason, 1), $scope3_page = _page_render();
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", body, {}, 0, 0, $wg__body, void 0, 2, $scope3_reason, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__open, void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope3_reason, 1);
		$scope3_page ? _write_if($scope3_reason, 1) && _scope($scope3_id, { body: _unfilled_if($scope3_reason, 1) && body }, "__tests__/template.marko", "2:2", { body: "2:23" }) : _filled_guard($scope3_reason, 2) && _client_guard($scope3_reason, 1) && _patch_value($scope3_id, "PatchValue:__tests__/template.marko_fill2", body, !_server_guard($scope3_reason, 2));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Panel.content({
		open: count % 2 === 0,
		body: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:6"), "__tests__/template.marko_1_input_title#0:5/subscribe");
		}, $scope0_id) })
	});
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	Panel.content({
		open: input.open,
		body: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<strong>${_patch_text($scope2_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</strong>`);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_title/8": $wi__input_title && 1
			}, "__tests__/template.marko", "12:6"), "__tests__/template.marko_2_input_title#0:5/subscribe");
		}, $scope0_id) })
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/8": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 1));
}, 1);
