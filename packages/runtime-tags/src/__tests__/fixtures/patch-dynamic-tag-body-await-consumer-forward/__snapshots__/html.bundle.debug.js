// tags/keeper.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
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

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/card.marko_2*content": "__tests__/tags/card.marko_2*content __tests__/tags/card.marko_2_input_content#0:4/subscribe,",
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/card.marko_0_#text#0/await": "__tests__/tags/card.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_p__OR__input_content = _write_if($scope0_reason, 0), $wg__input_p = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_await($scope0_id, "#text/0", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", x ? keeper_default : "div", {}, _content_resume("__tests__/tags/card.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/tags/card.marko_2_input_content#0:4/init");
			$wi__input_p__OR__input_content && _subscribe(_unfilled_if($scope0_reason, 2) && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "3:6"));
			$wg__input_content || $wi__input_p__OR__input_content && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => $scope0_page ? [{ input_content: input.content }, { _: $scope($scope0_id) }] : []), 0, $wg__input_p, void 0, 2, $scope0_reason, 1);
		_filled_guard($scope0_reason, 2) && _content_withheld("__tests__/tags/card.marko_2*content", $scope1_id) && _patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill0", input.content);
		$wi__input_p__OR__input_content && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2");
	}, 1, "__tests__/tags/card.marko_1*content", 1, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		"ClosureScopes:input_content/5": _write_if($scope0_reason, 2) && $input_content__closures
	}, "__tests__/tags/card.marko", 0, { input_content: ["input.content"] }) : _content_withheld("__tests__/tags/card.marko_2*content", $scope0_id) && _content_withhold(input.content);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { p: input.on && input.p }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/template.marko_1_input_note#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []), 0, $wg__input_on__OR__input_p, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	_patch_write($scope0_id, "PatchWrite:input_on", input.on, 1);
	_patch_write($scope0_id, "PatchWrite:input_p", input.p, 1);
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.p,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_p: ["input.p"],
		input_note: ["input.note"]
	}) : _filled_guard($scope0_reason, 4) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 4));
}, 1);
