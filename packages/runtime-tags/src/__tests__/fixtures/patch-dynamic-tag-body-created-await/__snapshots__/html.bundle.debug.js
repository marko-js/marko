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
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%c%;<em><!> <!></em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%;<em><!> <!></em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_on__OR__input_w__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_w__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.w, (w) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", input.note, void 0, $scope0_reason, 4)} ${_patch_text($scope2_id, "#text/1", w, 2, $scope0_reason, 3)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "__tests__/template.marko_2_input_note#0:5/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_w__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"));
		}, 1, "__tests__/template.marko_2*content");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_w#0:4/subscribe");
		$wi__input_on__OR__input_w__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"));
		$wi__input_on__OR__input_w__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{
		input_note: input.note,
		input_w: input.w
	}] : [{ input_w: input.w }]), 0, $wg__input_on, void 0, 2, $scope0_reason, 2);
	_html("</main>");
	_patch_write($scope0_id, "PatchWrite:input_w", input.w, 1);
	$scope0_page ? _scope($scope0_id, {
		input_w: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.w,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures,
		"ClosureScopes:input_w/6": _write_if($scope0_reason, 3) && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		input_note: ["input.note"]
	}) : _filled_guard($scope0_reason, 4) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 4));
}, 1);
