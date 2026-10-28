// tags/show-value.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/show-value.marko": "__tests__/tags/show-value.marko;D ;<em> </em>" });
var show_value_default = _template("__tests__/tags/show-value.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.value, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/show-value.marko", 0);
});

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section><b>${_text_resume($scope1_id, "#text/0", n)}</b> <i>${_text_resume($scope1_id, "#text/1", input.w, _write_guard($scope0_reason, 1))}</i>`);
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/2", 0);
			show_value_default({ value: input.w });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/2": _write_if($scope0_reason, 1) && _existing_scope($childScope)
			}, "__tests__/tags/card.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", n, 1);
	_scope($scope0_id, { input_w: input.w }, "__tests__/tags/card.marko", 0, { input_w: ["input.w"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3), $cg__input_n__OR__input_w = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_w = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 1, 0, 0, $wg__input_on__OR__input_n__OR__input_w, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.n,
		input_w: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.w
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_n__OR__input_w && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_n__OR__input_w && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_w && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_w && _content_withhold(input.n), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_n && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.w, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_n && _content_withhold(input.w));
}, 1);
