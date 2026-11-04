// tags/show-body.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/show-body.marko_0"]];
_shells({ "__tests__/tags/show-body.marko": "__tests__/tags/show-body.marko !__tests__/tags/show-body.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var show_body_default = _template("__tests__/tags/show-body.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 0), $fg__input_body = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.body, {}, 0, 0, 0, $wg__input_body);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/show-body.marko_1_input_body#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/show-body.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/show-body.marko_0");
	$fg__input_body && _patch_render($scope0_id, "__tests__/tags/show-body.marko_1_input_body#0:4/setup", "input_body");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/show-body.marko_fill0", open, 1);
	_scope($scope0_id, {
		input_body: input.body,
		open
	}, "__tests__/tags/show-body.marko", 0, {
		input_body: ["input.body"],
		open: "1:6"
	}) || $fg__input_body && _patch_write($scope0_id, "PatchMarkedWrite:input_body", input.body, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_1*content": `__tests__/tags/card.marko_1*content${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2)}`,
	"__tests__/tags/card.marko_0_#text#0/await": `__tests__/tags/card.marko_0_#text#0/await${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${((_w0) => `/${_w0}&b`)($walks$2)};${((_w0) => `${_w0}<!>`)($template$2)}`,
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_await($scope0_id, "#text/0", input.p, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		show_body_default({ body: input.content });
		_patch_child_end();
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/tags/card.marko_1_input_content#0:4/subscribe", $cg__input_content);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/card.marko", "1:2"), $cg__input_content && "__tests__/tags/card.marko_1_input_content#0:4/subscribe", 0);
		_resume_branch($scope1_id);
	}, 1, "__tests__/tags/card.marko_1*content", _unfilled_if($scope0_reason, 0), 1, 1);
	_scope($scope0_id, { "ClosureScopes:input_content/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_content__closures }, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 4), $fg__input_on = _filled_guard($scope0_reason, 2), $fg__input_p = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { p: input.on && input.p }, 1, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_note#0:6/subscribe", _client_guard($scope0_reason, 4));
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on__OR__input_p, $scope0_reason, 0, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#6/subscribers", "input_note");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_on#3_input_p#4/setup", [$fg__input_on && "input_on", $fg__input_p && "input_p"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.p,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_p: ["input.p"],
		input_note: ["input.note"]
	}) || ($fg__input_on && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 2)), $fg__input_p && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 3)), $fg__input_note && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
