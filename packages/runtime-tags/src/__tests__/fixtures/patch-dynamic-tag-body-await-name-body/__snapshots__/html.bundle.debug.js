// tags/card.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
_shells({
	"__tests__/tags/card.marko_2*content": "",
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/card.marko_0_#text#0/await": "__tests__/tags/card.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_p__OR__input_content = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_await($scope0_id, "#text/0", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, _content_resume("__tests__/tags/card.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html("<i>x</i>");
		}, $scope1_id), 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/tags/card.marko_1_input_content#0:4/init" : "__tests__/tags/card.marko_1_input_content#0:4/subscribe");
		$wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "1:2"), _client_guard($scope0_reason, 2) && "__tests__/tags/card.marko_1_input_content#0:4/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_p__OR__input_content && _resume_branch($scope1_id);
	}, 1, "__tests__/tags/card.marko_1*content", 1, 1);
	_patch_write($scope0_id, "PatchWrite:input_content", input.content, 1);
	$scope0_page && _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		"ClosureScopes:input_content/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_content__closures
	}, "__tests__/tags/card.marko", 0, { input_content: ["input.content"] });
});

// tags/keeper.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/tags/keeper.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/keeper.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c");
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template$2)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_p__OR__input_on__OR__input_note = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	card_default({
		p: input.p,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.on ? keeper_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.note, void 0, $scope0_reason, 4)}</em>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "__tests__/template.marko_2_input_note#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_p__OR__input_on__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8"));
			}, $scope1_id, ($scope) => $scope1_page ? [{ input_note: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 3);
			$wi__input_p__OR__input_on__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_1_input_on#0:4/subscribe", $wg__input_on);
			$wg__input_on || $wi__input_p__OR__input_on__OR__input_note && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	_patch_write($scope0_id, "PatchWrite:input_on", input.on, 1);
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures,
		"ClosureScopes:input_on/6": _write_if($scope0_reason, 3) && $input_on__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_note: ["input.note"]
	}) : _filled_guard($scope0_reason, 4) && _content_withheld("__tests__/template.marko_2*content", $scope0_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 4));
}, 1);
