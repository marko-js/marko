// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<div id=done>done</div>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await,<div id=done>done</div>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_msg = _write_guard($scope0_reason, 0), $cg__input_msg = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		_await($scope2_id, "#text/0", input.promise, () => {
			const $scope3_id = _scope_id();
			_html("<div id=done>done</div>");
		}, 1, "__tests__/template.marko_3*content", $ui__input_promise && 2);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_promise#0:6/subscribe", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_promise#0:6/subscribe", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>loading ${_text_mark($scope1_id, "#text/0", input.msg, $wg__input_msg * 2)}</em>`);
		$cg__input_msg && _patch_render($scope1_id, "__tests__/template.marko_1_input_msg#0:5/subscribe");
		_subscribe($wi__input_msg && $input_msg__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"), $cg__input_msg && "__tests__/template.marko_1_input_msg#0:5/subscribe", $wg__input_msg);
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_2*content", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_msg: input.msg,
		count,
		"ClosureScopes:input_msg/8": $wi__input_msg && $input_msg__closures,
		"ClosureScopes:input_promise/9": $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_msg#5/subscribers", "input_msg");
}, 1);
