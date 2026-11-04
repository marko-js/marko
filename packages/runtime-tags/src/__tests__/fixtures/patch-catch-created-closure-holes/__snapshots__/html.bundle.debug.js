// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_msg = _updates_from($scope0_reason, 1), $cg__input_msg = _client_guard($scope0_reason, 1), $ui__input_msg__OR__input_fail = _unfilled_if($scope0_reason, 0), $wi__input_msg = _write_if($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_msg#0:3/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_fail#0:4/subscribe");
		_patch_render($scope2_id, "__tests__/template.marko_2_input_msg#0:3_input_fail#0:4/setup", ((_filled_guard($scope0_reason, 1) ? " >input_msg" : "") + (_filled_guard($scope0_reason, 2) ? " >input_fail" : "")).slice(1), $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_msg/5": $wi__input_msg && 1
		}, "__tests__/template.marko", "4:2"), $cg__input_msg && "__tests__/template.marko_2_input_msg#0:3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_fail#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_msg = _unfilled_if($scope0_reason, 1);
		$ui__input_msg && _patch_write($scope1_id, "PatchMarkedWrite:err_message", err?.message);
		const upper = input.msg.toUpperCase();
		_html(`<b${_attr("title", input.msg, $scope1_id, "#b/0", $scope0_reason, 1)}>${_text_mark($scope1_id, "#text/1", err.message, 1, 4, 0)} ${_text_mark($scope1_id, "#text/2", input.msg, 2, $scope0_reason, 1)} ${_text_mark($scope1_id, "#text/3", upper, 2, $scope0_reason, 1)} ${_text_mark($scope1_id, "#text/4", err.message + upper, 2, (2 | $uf__input_msg) << 1, 0)}</b>${_el_mark($scope1_id, "#b/0", $uf__input_msg)}`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_msg#0:3/subscribe", $cg__input_msg);
		_patch_render($scope1_id, "__tests__/template.marko_1_err_message#7_upper#8/setup", "err_message" + (_filled_guard($scope0_reason, 1) ? " upper" : ""), (2 | $uf__input_msg) << 1, 0);
		_subscribe($ui__input_msg && $input_msg__closures, _scope($scope1_id, {
			err_message: $ui__input_msg && err?.message,
			upper: _unfilled_if($scope1_reason, 0) && upper,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:4", {
			err_message: ["err.message", "6:11"],
			upper: "7:12"
		}), $cg__input_msg && "__tests__/template.marko_1_input_msg#0:3/subscribe");
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1);
	_scope($scope0_id, {
		input_msg: input.msg,
		input_fail: $wi__input_msg && $ui__input_msg__OR__input_fail && input.fail,
		"ClosureScopes:input_msg/5": $wi__input_msg && $input_msg__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && $wi__input_fail && $ui__input_msg__OR__input_fail && $input_fail__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		input_fail: ["input.fail"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_msg#3/subscribers", "input_msg"), _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail, !_server_guard($scope0_reason, 2)));
}, 1);
