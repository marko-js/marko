// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = "<main><div></div><!></main>";
const $walks = "D b%l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !;b%;<!><!><!>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await !;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;D b%;<main><div></div><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_note__OR__input_v__OR__input_on = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	_html(`<main><div></div>${_el_resume($scope0_id, "#div/0")}`);
	_await($scope0_id, "#text/1", input.v, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_patch_text($scope2_id, "#text/0", input.note, void 0, $scope0_reason, 1)} ${_patch_text($scope2_id, "#text/1", v, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_input_note#0:4/subscribe");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_v#1:2/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_v__OR__input_on && _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:8")));
		}, $scope1_id, ($scope) => $scope0_page ? [{ v }] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 3);
		_filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_2*content", $scope1_id) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", v);
		_filled_guard($scope0_reason, 1) && _content_withheld("__tests__/template.marko_2*content", $scope1_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.note);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_on#0:6/subscribe");
		$wi__input_note__OR__input_v__OR__input_on && _subscribe(_unfilled_if($scope0_reason, 3) && $input_on__closures, _scope($scope1_id, {
			v: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && v,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:v/9": _write_if($scope0_reason, 2) && $await_content__v__closures
		}, "__tests__/template.marko", "5:4", { v: "5:10" }), _client_guard($scope0_reason, 3) && "__tests__/template.marko_1_input_on#0:6/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_note__OR__input_v__OR__input_on && _resume_branch($scope1_id);
	}, 1, "__tests__/template.marko_1*content", 1);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0_input_note#4", 1, 1);
	_server_guard($scope0_reason, 1) && _patch_effect($scope0_id, "PatchEffect:__tests__/template.marko_0_input_note#4", "input_note");
	_patch_write($scope0_id, "PatchWrite:input_on", input.on, 1);
	$scope0_page ? _scope($scope0_id, {
		input_note: input.note,
		input_on: _unfilled_if($scope0_reason, 2) && input.on,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 1) && $input_note__closures,
		"ClosureScopes:input_on/8": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_on__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_on: ["input.on"]
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:input_note", input.note, !_server_guard($scope0_reason, 1));
}, 1);
