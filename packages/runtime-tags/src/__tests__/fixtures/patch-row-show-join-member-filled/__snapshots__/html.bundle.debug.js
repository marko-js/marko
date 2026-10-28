// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%b%;<!><!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<div>shown</div>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_id = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item_on", item?.on, !_server_guard($scope0_reason, 1));
		_html("<div>");
		const $show = item.on ? input.id : "";
		_show_start($show, 1, $wg__input_items__OR__input_id, "</div>");
		_html("shown");
		_show_end($scope1_id, "#div/0", $show, 1, $wg__input_items__OR__input_id, "</div>", 0, "#div/0", void 0, void 0, $scope0_reason, 0);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/template.marko_1_input_id#0:5_item_on#3/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_id", _filled_guard($scope0_reason, 1) && "item_on");
		_scope($scope1_id, {
			item_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.on,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { item_on: ["item.on", "1:6"] });
	}, "k", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_try($scope0_id, "#text/1", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", input.id, 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_3_input_id#0:5/init" : "__tests__/template.marko_3_input_id#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope3_id, {
			_: $wi__input_id && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_id/6": $wi__input_id && 1
		}, "__tests__/template.marko", "4:2"), "__tests__/template.marko_3_input_id#0:5/subscribe");
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`loading ${_text_resume($scope2_id, "#text/0", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_input_id#0:5/subscribe", $wg__input_id);
		$wg__input_id || _resume_branch($scope2_id);
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_3*content", 1);
	_scope($scope0_id, {
		input_id: input.id,
		"ClosureScopes:input_id/6": $wi__input_id && $input_id__closures
	}, "__tests__/template.marko", 0, { input_id: ["input.id"] }) || _filled_guard($scope0_reason, 2) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.id) : _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.id, !_server_guard($scope0_reason, 2)));
}, 1);
