// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko !; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell; D lD ;<h2> </h2><p> </p>"
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<h2${_attr_class(input.title, $scope1_id, "#h2/0", $scope0_reason, 2)}>${_text_resume($scope1_id, "#text/1", input.title, void 0, $scope0_reason, 2)}</h2>${_el_resume($scope1_id, "#h2/0", _mask_group($scope0_reason, 2))}<p>${_text_resume($scope1_id, "#text/2", input.note, void 0, $scope0_reason, 3)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/card/index.marko_1_input_title#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/card/index.marko_1_input_note#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/card/index.marko_1*shell"], $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.title,
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.note
	}, "__tests__/tags/card/index.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill0", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill1", input.note, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({
		show: input.show,
		title: "fixed",
		note: input.note
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
