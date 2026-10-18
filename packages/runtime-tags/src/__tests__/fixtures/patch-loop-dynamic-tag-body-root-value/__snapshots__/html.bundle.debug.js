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
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_rows__OR__input_on__OR__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_patch_text($scope2_id, "#text/0", input.note, void 0, $scope0_reason, 4)} ${_patch_text($scope2_id, "#text/1", row.label, 2, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "__tests__/template.marko_2_input_note#0:5/subscribe");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_row_label#1:3/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $for_content__row_label__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_on__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:8")));
		}, $scope1_id, ($scope) => $scope0_page ? [{ input_note: input.note }, {
			row_label: row?.label,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_on, void 0, 2, $scope0_reason, 3);
		_filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_2*content", $scope1_id) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill2", row?.label);
		$wi__input_rows__OR__input_on__OR__input_note && _scope($scope1_id, {
			row_label: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && row?.label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_label/8": _write_if($scope0_reason, 2) && $for_content__row_label__closures
		}, "__tests__/template.marko", "3:4", { row_label: ["row.label", "3:8"] });
	}, "id", $scope0_id, "#main/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_html(`</main>${_el_resume($scope0_id, "#main/0")}`);
	$scope0_page ? _scope($scope0_id, {
		input_on: _unfilled_if($scope0_reason, 2) && input.on,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_note: ["input.note"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 3)), _client_guard($scope0_reason, 2) && _content_withhold(input.on), _filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.note, !_server_guard($scope0_reason, 4)) : _content_withheld("__tests__/template.marko_2*content", $scope0_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1/content", input.note)));
}, 1);
