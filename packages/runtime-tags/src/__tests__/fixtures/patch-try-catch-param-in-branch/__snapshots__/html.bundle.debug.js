// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,done",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await,done",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", input.promise, () => {
					const $scope4_id = _scope_id();
					_html("done");
				}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 3) && 2);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_promise#0:7/subscribe", 1);
				$wi__input_show__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 3) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_3_input_promise#0:7/subscribe", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", err.message, 1, 4, 0)} ${_text_mark($scope2_id, "#text/1", input.title, 2, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_title#0:6/subscribe", $cg__input_title);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), $cg__input_title && "__tests__/template.marko_2_input_title#0:6/subscribe");
			}, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", 0, 1, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#6/subscribers", "input_title");
	$fg__input_promise && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_promise#7/subscribers", "input_promise");
	_scope($scope0_id, {
		input_title: input.title,
		input_promise: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.promise,
		count,
		"ClosureScopes:input_title/9": _write_if($scope0_reason, 2) && $input_title__closures,
		"ClosureScopes:input_promise/10": _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_promise: ["input.promise"],
		count: "1:6"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)), $fg__input_promise && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_promise", input.promise, !_server_guard($scope0_reason, 3)));
}, 1);
