// tags/outer.marko
const $template$1 = "<button>plain</button><p> </p><div> </div><i></i><section><!----></section><!><em>shown</em><!><title></title>";
const $walks$1 = " bD lD l bD l%c%b b";
const $setup$1 = [["__tests__/tags/outer.marko_0_input_label#11_f#12/init"], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko __tests__/tags/outer.marko_0_input_label#11_f#12/init!__tests__/tags/outer.marko_0; bD lD l bD l%c%b ;<button>plain</button><p> </p><div> </div><i></i><section><!----></section><!><em>shown</em><!><title></title>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<p>${_text_resume($scope0_id, "#text/1", f(input.label), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "f")}</p><div>${_html_resume($scope0_id, "#text/2", f(input.label), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "f")}</div><i${_attr("title", f(input.label), $scope0_id, "PatchAttr:#i/3 title", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f")}${_attr_class(f(input.label), $scope0_id, "PatchAttr:#i/3 class", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f")}${_attr_style({ color: f(input.label).length > 3 ? "red" : "blue" }, $scope0_id, "PatchAttr:#i/3 style", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f")}></i>${_el_resume($scope0_id, "#i/3")}<section><!--${_escape_comment(f(input.label), $scope0_id, "PatchTextContent:#comment/4", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f") || " "}-->${_el_resume($scope0_id, "#comment/4")}</section>`);
	const $show = f(input.label) !== "w-c";
	_show_start($show, 0);
	_html("<em>shown</em>");
	_show_end($scope0_id, "#text/6", $show, 1, 0, 0, 1, "#text/6", "#text/5", void 0, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f");
	_html(`<title>${_escape(f(input.label), $scope0_id, "PatchTextContent:#title/7", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f")}</title>${_el_resume($scope0_id, "#title/7")}`);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:f", f, 1);
	_scope($scope0_id, {
		input_label: input.label,
		f: _unfilled_if($scope0_reason, 1) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "__tests__/template.marko_0/wrap");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		wrap: _unfilled_if($scope0_reason, 0) && wrap
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		wrap: "1:8"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
