// template.marko
const $Counter_content__walks = "E%c%l l";
const $Counter_content__template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell !#childScope/0>__tests__/template.marko_2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Counter_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Counter_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_start = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Counter = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		let n = input.start;
		_html(`<div class=counter><span>${_text_mark($scope2_id, "#text/0", input.label, 1, $scope2_reason, 1)}: ${_text_mark($scope2_id, "#text/1", n, 2)}</span><button class=inc>+</button>${_el_mark($scope2_id, "#button/2")}</div>`);
		_script($scope2_id, "__tests__/template.marko_2");
		_filled_guard($scope2_reason, 0) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_2_n#7/fill", n, 1);
		_scope($scope2_id, { n }, "__tests__/template.marko", "1:2", { n: "2:8" });
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Counter.content({
				label: input.title,
				start: input.start
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_start#0:5/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "9:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	$fg__input_start && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_start#0:5/setup", "input_start");
	_scope($scope0_id, {
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.title,
		input_start: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.start
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_start: ["input.start"]
	}) || ($fg__input_title && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)), $fg__input_start && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_start", input.start, !_server_guard($scope0_reason, 3)));
}, 1);
