// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($Panel_content__template, $Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& l`)($Panel_content__walks, $Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `D/${_w0}&/${_w1}& l`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($Panel_content__template, $Panel_content__template)}`,
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 1), $uf__input_open = _updates_from($scope0_reason, 2), $fg__input_title = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const Panel = { content: _content("__tests__/template.marko_3*content", ({ open, body }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__body = _write_guard($scope3_reason, 2), $wg__open = _write_guard($scope3_reason, 1), $ui__open = _unfilled_if($scope3_reason, 1), $fg__body = _filled_guard($scope3_reason, 2);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", body, {}, 2, 0, 0, $wg__body, $scope3_reason, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__open, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope3_reason, 1);
		$fg__body && _client_guard($scope3_reason, 1) && _patch_render($scope3_id, "__tests__/template.marko_4_body#3:4/setup");
		_write_if($scope3_reason, 1) && _scope($scope3_id, { body: $ui__open && body }, "__tests__/template.marko", "2:2", { body: "2:23" }) || $fg__body && $ui__open && _patch_write($scope3_id, "PatchMarkedWrite:body", body, 1);
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	Panel.content({
		open: count % 2 === 0,
		body: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", input.title, 1, $scope0_reason, 1)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_title#0:5/subscribe", $cg__input_title);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:6"), $cg__input_title && "__tests__/template.marko_1_input_title#0:5/subscribe");
		}, $scope0_id) })
	});
	_patch_child_end();
	_set_scope_reason($uf__input_open << 1 | $uf__input_open << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 2);
	Panel.content({
		open: input.open,
		body: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<strong>${_text_mark($scope2_id, "#text/0", input.title, 1, $scope0_reason, 1)}</strong>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_title#0:5/subscribe", $cg__input_title);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_title/8": $wi__input_title && 1
			}, "__tests__/template.marko", "12:6"), $cg__input_title && "__tests__/template.marko_2_input_title#0:5/subscribe");
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#5/subscribers", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/8": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 1));
}, 1);
