// tags/panel.marko
const $template$3 = "<ul></ul>";
const $walks$3 = " b";
const $setup$3 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko; ;<ul></ul>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell;D ;<li> </li>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", row.name, void 0, $scope0_reason, 0)}</li>`);
		_scope($scope1_id, {}, "__tests__/tags/panel.marko", "1:6");
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/panel.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});

// tags/gate.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/gate.marko": "__tests__/tags/gate.marko !;b%;<!><!><!>",
	"__tests__/tags/gate.marko_1*shell": "__tests__/tags/gate.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/gate.marko_2*shell": "__tests__/tags/gate.marko_2*shell;b%;<!><!><!>"
});
var gate_default = _template("__tests__/tags/gate.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_admin = _write_guard($scope0_reason, 3), $wg__input_guest = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.admin, {}, 2, 0, 0, $wg__input_admin, $scope0_reason, 3);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/gate.marko_1_input_admin#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/tags/gate.marko", "1:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", input.guest, {}, 2, 0, 0, $wg__input_guest, $scope0_reason, 4);
			_client_guard($scope0_reason, 4) && _patch_init($scope2_id, "__tests__/tags/gate.marko_2_input_guest#0:5/init");
			_write_if($scope0_reason, 1) && _scope($scope2_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) }, "__tests__/tags/gate.marko", "2:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/gate.marko_1*shell", "__tests__/tags/gate.marko_2*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_admin: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.admin,
		input_guest: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.guest
	}, "__tests__/tags/gate.marko", 0, {
		input_admin: ["input.admin"],
		input_guest: ["input.guest"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/gate.marko_fill0", input.admin, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.admin), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/gate.marko_fill1", input.guest, !_server_guard($scope0_reason, 4)), $cg__input_show && _content_withhold(input.guest));
});

// tags/wrapper.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko !; ;<div></div>",
	"__tests__/tags/wrapper.marko_1*shell": "__tests__/tags/wrapper.marko_1*shell;b%;<!><!><!>"
});
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/wrapper.marko_1_input_content#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "1:7");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/wrapper.marko_1*shell"], $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_show)}`);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrapper.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrapper.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button class=inc> </button>${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&`)("b%c", " b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$2], ["#childScope/3>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$3]))}`)(),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&`)("b%c", " b")};${((_w0, _w1) => `<button class=inc> </button>${_w0}${_w1}`)($template$2, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_admin = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_rows__closures = new Set();
	const $input_guestText__closures = new Set();
	const $input_bodyText__closures = new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 3) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 1);
	gate_default({
		show: input.admin,
		admin: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			panel_default({ rows: input.rows });
			_patch_child_end();
			_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, _client_guard($scope0_reason, 4) ? "__tests__/template.marko_1_input_rows#0:7/init" : "__tests__/template.marko_1_input_rows#0:7/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_rows__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4"));
		}, $scope0_id) }),
		guest: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.guestText, void 0, $scope0_reason, 5)}</p>`);
			_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, _client_guard($scope0_reason, 5) ? "__tests__/template.marko_2_input_guestText#0:8/init" : "__tests__/template.marko_2_input_guestText#0:8/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 5) && $input_guestText__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		}, $scope0_id) })
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 6) << 1 | _mask_group($scope0_reason, 6) << 3);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/3", 2);
	wrapper_default({
		show: input.showBody,
		content: _content_resume("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", input.bodyText, void 0, $scope0_reason, 7)}</p>`);
			_unfilled_if($scope0_reason, 7) && _patch_init($scope3_id, _client_guard($scope0_reason, 7) ? "__tests__/template.marko_3_input_bodyText#0:10/init" : "__tests__/template.marko_3_input_bodyText#0:10/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 7) && $input_bodyText__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_rows: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.rows,
		input_guestText: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.guestText,
		input_bodyText: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.bodyText,
		n,
		"ClosureScopes:input_rows/12": _write_if($scope0_reason, 4) && $input_rows__closures,
		"ClosureScopes:input_guestText/13": _write_if($scope0_reason, 5) && $input_guestText__closures,
		"#childScope/2": _existing_scope($childScope2),
		"ClosureScopes:input_bodyText/14": _write_if($scope0_reason, 7) && $input_bodyText__closures,
		"#childScope/3": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		input_rows: ["input.rows"],
		input_guestText: ["input.guestText"],
		input_bodyText: ["input.bodyText"],
		n: "1:6"
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_admin && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.rows, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_admin && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.guestText, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 7) && _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.bodyText, !_server_guard($scope0_reason, 7)));
}, 1);
