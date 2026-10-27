// tags/keeper.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/card.marko
const $Pass_content__walks = "b%c";
const $Pass_content__template = "<!><!><!>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_2*content": "__tests__/tags/card.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/card.marko_1*content": /*@__PURE__*/ (() => `__tests__/tags/card.marko_1*content;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Pass_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Pass_content__template)}`)(),
	"__tests__/tags/card.marko_0_#text#0/await": /*@__PURE__*/ (() => `__tests__/tags/card.marko_0_#text#0/await;${((_w0) => `b/${_w0}&b`)($Pass_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Pass_content__template)}`)(),
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Pass = { content: _content_elide("__tests__/tags/card.marko_2*content", ({ c, on }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__c__OR__on = _write_guard($scope2_reason, 0), $cg__on = _client_guard($scope2_reason, 2), $cg__c = _client_guard($scope2_reason, 1), $scope2_page = _page_render();
		_dynamic_tag($scope2_id, "#text/0", on ? keeper_default : "div", { content: c }, 1, 0, 0, $wg__c__OR__on, $scope2_reason, 0);
		$cg__on && _patch_write($scope2_id, "PatchMarkedWrite:c", c, !(_filled_guard($scope2_reason, 1) && $cg__on));
		$cg__c && _patch_write($scope2_id, "PatchMarkedWrite:on", on, !(_filled_guard($scope2_reason, 2) && $cg__c));
		_patch_join_init($scope2_id, "__tests__/tags/card.marko_2_c#3_on#4/init", $scope2_reason, 0, _filled_guard($scope2_reason, 1) && "c", _filled_guard($scope2_reason, 2) && "on");
		$scope2_page && _write_if($scope2_reason, 0) && _scope($scope2_id, {
			c: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0)) && c,
			on: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && on
		}, "__tests__/tags/card.marko", "2:2", {
			c: "2:16",
			on: "2:19"
		});
	}, $scope0_id) };
	_await($scope0_id, "#text/0", input.p, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 1);
		Pass.content({
			c: input.content,
			on: x
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_content ? "__tests__/tags/card.marko_1_input_content#0:4/init" : "__tests__/tags/card.marko_1_input_content#0:4/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/card.marko", "5:2"), $cg__input_content && "__tests__/tags/card.marko_1_input_content#0:4/subscribe");
	}, 1, "__tests__/tags/card.marko_1*content", 1, 1);
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_content/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_content__closures }, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $cg__input_p = _client_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { p: input.on && input.p }, 1, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, _client_guard($scope0_reason, 4) ? "__tests__/template.marko_1_input_note#0:6/init" : "__tests__/template.marko_1_input_note#0:6/subscribe");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on__OR__input_p, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.p,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_p: ["input.p"],
		input_note: ["input.note"]
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_p && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 2)), $cg__input_p && _content_withhold(input.on), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.p, !_server_guard($scope0_reason, 3)), $cg__input_on && _content_withhold(input.p), _filled_guard($scope0_reason, 4) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
