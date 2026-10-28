// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": /*@__PURE__*/ (() => `__tests__/template.marko_3*content >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_0_#text#0/await": /*@__PURE__*/ (() => `__tests__/template.marko_0_#text#0/await >#childScope/0>;${((_w0) => `b/${_w0}&b`)($Body_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "#text/0", input.on ? card_default : "div", {}, 2, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_resume($scope2_id, "#text/0", input.note, 1, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_2_input_note#0:4/init" : "__tests__/template.marko_2_input_note#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
		}, $scope1_id, ($scope) => $scope1_page ? [{ input_note: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_on, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_on ? "__tests__/template.marko_1_input_on#0:3/init" : "__tests__/template.marko_1_input_on#0:3/subscribe");
		$wi__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 1) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), $cg__input_on && "__tests__/template.marko_1_input_on#0:3/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<main>");
	_await($scope0_id, "#text/0", input.v, (v) => {
		const $scope3_id = _scope_id();
		const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 1, 0, $scope0_id);
		Body.content({});
		_patch_child_end();
		_filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_2*content", $scope3_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note);
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
	}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 3), 1, 1);
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 2) && $input_note__closures,
		"ClosureScopes:input_on/6": _write_if($scope0_reason, 1) && $input_on__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 2));
}, 1);
