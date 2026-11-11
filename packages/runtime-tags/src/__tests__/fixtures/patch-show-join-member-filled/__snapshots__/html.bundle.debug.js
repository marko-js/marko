// template.marko
const $template = "<div>shown</div><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko; b%;<div>shown</div><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 2), $cg__input_id = _client_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $fg__input_which = _filled_guard($scope0_reason, 1), $fg__input_id = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	_html("<div>");
	const $show = input.which ? input.id : "";
	_show_start($show, 1, $wg__input_which__OR__input_id, "</div>");
	_html("shown");
	_show_end($scope0_id, "#div/0", $show, 1, $wg__input_which__OR__input_id, "</div>", 0, 1, $scope0_reason, 0);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.id, 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_id#0:5/subscribe", $cg__input_id);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope2_id, {
			_: $wi__input_id && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_id/7": $wi__input_id && 1
		}, "__tests__/template.marko", "2:2"), $cg__input_id && "__tests__/template.marko_2_input_id#0:5/subscribe");
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_mark($scope1_id, "#text/0", input.id, $wg__input_id * 2)}`);
		$cg__input_id && _patch_render($scope1_id, "__tests__/template.marko_1_input_id#0:5/subscribe");
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), $cg__input_id && "__tests__/template.marko_1_input_id#0:5/subscribe", $wg__input_id);
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_2*content", 1);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_which#4_input_id#5/setup", (($fg__input_which ? " input_which" : "") + ($fg__input_id ? " input_id" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_which: _unfilled_if($scope0_reason, 0) && input.which,
		input_id: input.id,
		"ClosureScopes:input_id/7": $wi__input_id && $input_id__closures
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_id: ["input.id"]
	}) || ($fg__input_which && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which, !_server_guard($scope0_reason, 1)), $fg__input_id && _patch_write($scope0_id, "PatchMarkedWrite:input_id", input.id, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_id#5/subscribers", "input_id"));
}, 1);
