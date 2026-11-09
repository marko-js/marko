// tags/counter.marko
const $template$1 = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks$1 = "E%c%l l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0;E%c%l ;<div class=counter><span><!>: <!></span><button class=inc>+</button></div>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<div class=counter><span>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 1)}: ${_text_mark($scope0_id, "#text/1", n, 2)}</span><button class=inc>+</button>${_el_mark($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_0_n#7/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_start = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			counter_default({
				label: input.title,
				start: input.start
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_start#0:5/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	$fg__input_start && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_start#0:5/setup", "input_start");
	_scope($scope0_id, {
		input_title: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.title,
		input_start: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.start
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_start: ["input.start"]
	}) || ($fg__input_title && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)), $fg__input_start && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_start", input.start, !_server_guard($scope0_reason, 3)));
}, 1);
