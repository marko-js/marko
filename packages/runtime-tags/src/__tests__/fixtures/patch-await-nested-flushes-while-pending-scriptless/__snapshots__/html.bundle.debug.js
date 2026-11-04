// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content,<em>inner loading</em>",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content,<em>outer loading</em>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<div id=inner><!> <!></div>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D%c%;<div id=inner><!> <!></div>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%c%l%;<div id=outer><!> <!></div><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%l%;<div id=outer><!> <!></div><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_inner__closures = new Set();
	const $input_outer__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_outer = _unfilled_if($scope0_reason, 2);
		_await($scope1_id, "#text/0", input.outer, (a) => {
			const $scope2_id = _scope_id();
			_html(`<div id=outer>${_text_mark($scope2_id, "#text/0", input.msg, 1, $scope0_reason, 3)} ${_text_mark($scope2_id, "#text/1", a, 2, $scope0_reason, 2)}</div>`);
			_try($scope2_id, "#text/2", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id(), $ui__input_inner = _unfilled_if($scope0_reason, 4);
				_await($scope3_id, "#text/0", input.inner, (b) => {
					const $scope4_id = _scope_id();
					_html(`<div id=inner>${_text_mark($scope4_id, "#text/0", input.msg, 1, $scope0_reason, 3)} ${_text_mark($scope4_id, "#text/1", b, 2, $scope0_reason, 4)}</div>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_msg#0:4/subscribe", $cg__input_msg);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope4_id, { "ClosureSignalIndex:input_msg/7": $wi__input_msg && 1 }, "__tests__/template.marko", "5:8"), $cg__input_msg && "__tests__/template.marko_4_input_msg#0:4/subscribe");
				}, 1, "__tests__/template.marko_4*content", $ui__input_inner, 1);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_inner#0:5/subscribe", 1);
				$wi__input_msg__OR__input_inner && _subscribe($ui__input_inner && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:6"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_3_input_inner#0:5/subscribe", 0);
				$wi__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				const $scope6_reason = _scope_reason();
				const $scope6_id = _scope_id();
				_html("<em>inner loading</em>");
			}, void 0, "__tests__/template.marko_6*content", void 0, "__tests__/template.marko_3*content", 1, 0, 2);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_msg#0:4/subscribe", $cg__input_msg);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope2_id, {}, "__tests__/template.marko", "2:4"), $cg__input_msg && "__tests__/template.marko_2_input_msg#0:4/subscribe");
		}, 1, "__tests__/template.marko_2*content", $ui__input_outer, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_outer#0:3/subscribe", 1);
		$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe($ui__input_outer && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_outer#0:3/subscribe", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_scope($scope0_id, {
		"ClosureScopes:input_msg/7": $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		"ClosureScopes:input_inner/8": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		"ClosureScopes:input_outer/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	}, "__tests__/template.marko", 0);
}, 1);
