// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_rows = _client_guard($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0), $sg__input_rows = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		const $for_content__row_card__closures = new Set();
		_await($scope1_id, "#text/0", row.p, (v) => {
			const $scope2_id = _scope_id();
			const $await_content__v__closures = new Set();
			_dynamic_tag($scope2_id, "#text/0", row.card ? card_default : "div", {}, 2, _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				_html(`<b>${_text_mark($scope3_id, "#text/0", row.label, 1, $scope0_reason, 0)} ${_text_mark($scope3_id, "#text/1", v, 2, $scope0_reason, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_row_label#1:5/subscribe", $cg__input_rows);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_v#2:2/subscribe", $cg__input_rows);
				_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_label__closures, _scope($scope3_id, { _: $wi__input_rows && _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"), $cg__input_rows && "__tests__/template.marko_3_row_label#1:5/subscribe"), $cg__input_rows && "__tests__/template.marko_3_v#2:2/subscribe");
			}, $scope2_id, ($scope) => $scope0_page ? [{ row_label: row?.label }, {
				v,
				_: $scope($scope1_id)
			}] : []), 0, $wg__input_rows, $scope0_reason, 0, 0, void 0, 0, 0, "__tests__/template.marko_3*content");
			_filled_guard($scope0_reason, 0) && _patch_subscribers($scope2_id, "__tests__/template.marko_2_v#2/subscribers", "v");
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_row_card#1:4/subscribe", $cg__input_rows);
			$wi__input_rows && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_card__closures, _scope($scope2_id, { "ClosureScopes:v/8": $await_content__v__closures }, "__tests__/template.marko", "3:4"), $cg__input_rows && "__tests__/template.marko_2_row_card#1:4/subscribe", $wg__input_rows);
			_filled_guard($scope0_reason, 0) && _client_branch_if("__tests__/template.marko_3*content", $scope2_id) && _patch_write($scope2_id, "PatchMarkedWrite:v", v, !$sg__input_rows);
		}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 0) && 3, 0, 1);
		_filled_guard($scope0_reason, 0) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_row_label#5/subscribers", "row_label");
		$wi__input_rows && _scope($scope1_id, {
			"ClosureScopes:row_label/7": $for_content__row_label__closures,
			"ClosureScopes:row_card/6": _unfilled_if($scope0_reason, 0) && $for_content__row_card__closures
		}, "__tests__/template.marko", "2:2");
		_filled_guard($scope0_reason, 0) && _client_branch_if("__tests__/template.marko_3*content", $scope1_id) && _patch_write($scope1_id, "PatchMarkedWrite:row_label", row?.label, !$sg__input_rows);
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
