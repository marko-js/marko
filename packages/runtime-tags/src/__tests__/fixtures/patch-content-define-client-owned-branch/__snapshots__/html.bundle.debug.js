// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ open, body }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__body = _write_guard($scope2_reason, 2), $wg__open = _write_guard($scope2_reason, 1), $fg__body = _filled_guard($scope2_reason, 2);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", body, {}, 0, 0, 0, $wg__body);
				_write_if($scope2_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 0), $wg__open);
		$fg__body && _patch_render($scope2_id, "__tests__/template.marko_3_body#2:4/setup", "body");
		_write_if($scope2_reason, 1) && _scope($scope2_id, { body }, "__tests__/template.marko", "2:2", { body: "2:23" }) || $fg__body && _patch_write($scope2_id, "PatchMarkedWrite:body", body, 1);
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	Panel.content({
		open: count % 2 === 0,
		body: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", input.title, 1, $scope0_reason, 0)}</em>`);
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:6"), $cg__input_title && "__tests__/template.marko_1_input_title#0:4/subscribe");
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#4/subscribers", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/6": _write_if($scope0_reason, 0) && $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
