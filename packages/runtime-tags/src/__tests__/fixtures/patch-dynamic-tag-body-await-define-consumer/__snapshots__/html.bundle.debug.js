// tags/keeper.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/keeper.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/keeper.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $K_content__walks = "b%c";
const $K_content__template = "<!><!><!>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_3*content": `__tests__/tags/card.marko_3*content >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($K_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($K_content__template)}`,
	"__tests__/tags/card.marko_2*content": "__tests__/tags/card.marko_2*content",
	"__tests__/tags/card.marko_1*content": `__tests__/tags/card.marko_1*content;${$K_content__walks};${$K_content__template}`,
	"__tests__/tags/card.marko_0_#text#0/await": `__tests__/tags/card.marko_0_#text#0/await >#childScope/0>;${((_w0) => `b/${_w0}&b`)($K_content__walks)};${((_w0) => `<!>${_w0}<!>`)($K_content__template)}`,
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $cg__input_content = _client_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $ui__input_p = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const K = { content: _content("__tests__/tags/card.marko_1*content", ({ x }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__x = _write_if($scope1_reason, 0), $wg__x = _write_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "#text/0", x ? keeper_default : "div", {}, 10, _content_resume("__tests__/tags/card.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_dynamic_tag($scope2_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/card.marko_2_input_content#0:3/subscribe", $cg__input_content);
			($wi__input_content || $wi__x) && _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "3:6"), $cg__input_content && "__tests__/tags/card.marko_2_input_content#0:3/subscribe", $wg__input_content);
			$wg__input_content || ($wi__input_content || $wi__x) && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => $scope1_page ? [{ input_content: input.content }, { _: $scope($scope0_id) }] : []), 0, $wg__x, $scope1_reason, 0, 0, void 0, 0, 0, "__tests__/tags/card.marko_2*content");
		($wi__input_content || $wi__x) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2");
	}, $scope0_id, 0) };
	_await($scope0_id, "#text/0", input.p, (x) => {
		const $scope3_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
		const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 2, 0, $scope0_id);
		K.content({ x });
		_patch_child_end();
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/card.marko", "5:2");
	}, 1, "__tests__/tags/card.marko_3*content", $ui__input_p, 1, 1);
	_scope($scope0_id, {
		input_content: ($ui__input_p || _unfilled_if($scope0_reason, 1)) && input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures
	}, "__tests__/tags/card.marko", 0, { input_content: ["input.content"] }) || _filled_guard($scope0_reason, 1) && (_client_branch_if("__tests__/tags/card.marko_2*content", $scope0_id) || $ui__input_p) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/tags/card.marko_0_input_content#3/subscribers", "input_content");
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
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_note = _client_guard($scope0_reason, 4), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $ui__input_on__OR__input_p = _unfilled_if($scope0_reason, 0), $ui__input_p = _unfilled_if($scope0_reason, 3), $ui__input_on = _unfilled_if($scope0_reason, 2), $fg__input_on = _filled_guard($scope0_reason, 2), $fg__input_p = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { p: input.on && input.p }, 1, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_note#0:6/subscribe", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"), $cg__input_note && "__tests__/template.marko_1_input_note#0:6/subscribe");
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on__OR__input_p, $scope0_reason, 0, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	_html("</main>");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_on#3_input_p#4/setup", (($fg__input_on ? " input_on" : "") + ($fg__input_p ? " input_p" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_on: ($ui__input_p || $ui__input_on__OR__input_p) && input.on,
		input_p: ($ui__input_on || $ui__input_on__OR__input_p) && input.p,
		input_note: ($ui__input_on__OR__input_p || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_p: ["input.p"],
		input_note: ["input.note"]
	}) || ($fg__input_on && $ui__input_p && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 2)), $fg__input_p && $ui__input_on && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || $ui__input_on__OR__input_p) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#6/subscribers", "input_note"));
}, 1);
