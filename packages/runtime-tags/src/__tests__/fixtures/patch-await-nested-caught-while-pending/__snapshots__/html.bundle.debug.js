// template.marko
const $template = "<button> </button><!><!><!>";
const $walks = " D l%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_8*content": "__tests__/template.marko_8*content",
	"__tests__/template.marko_7*content": "__tests__/template.marko_7*content",
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D%c%;<span id=last><!> <!></span>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<div id=inner><!> <!></div>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D%c%;<div id=inner><!> <!></div>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%c%l%;<div id=outer><!> <!></div><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%l%;<div id=outer><!> <!></div><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko_0_#text#3/await": "__tests__/template.marko_0_#text#3/await;D%c%;<span id=last><!> <!></span>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%;<button> </button><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_inner__closures = new Set();
	const $input_outer__closures = new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
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
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_msg#0:7/subscribe", $cg__input_msg);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope4_id, { "ClosureSignalIndex:input_msg/12": $wi__input_msg && 1 }, "__tests__/template.marko", "7:8"), $cg__input_msg && "__tests__/template.marko_4_input_msg#0:7/subscribe");
				}, 1, "__tests__/template.marko_4*content", $ui__input_inner, 1);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_inner#0:8/subscribe", 1);
				$wi__input_msg__OR__input_inner && _subscribe($ui__input_inner && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "6:6"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_3_input_inner#0:8/subscribe", 0);
				$wi__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				const $scope7_reason = _scope_reason();
				const $scope7_id = _scope_id();
				_html("<em>inner loading</em>");
			}, () => {
				const $scope8_reason = _scope_reason();
				const $scope8_id = _scope_id();
				_html("<em>inner failed</em>");
			}, "__tests__/template.marko_7*content", "__tests__/template.marko_8*content", "__tests__/template.marko_3*content", 1, 0, 3);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_msg#0:7/subscribe", $cg__input_msg);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:4"), $cg__input_msg && "__tests__/template.marko_2_input_msg#0:7/subscribe");
		}, 1, "__tests__/template.marko_2*content", $ui__input_outer, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_outer#0:6/subscribe", 1);
		$wi__input_outer__OR__input_msg__OR__input_inner && _subscribe($ui__input_outer && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_outer#0:6/subscribe", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		const $scope6_reason = _scope_reason();
		const $scope6_id = _scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "__tests__/template.marko_6*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_await($scope0_id, "#text/3", input.last, (c) => {
		const $scope5_id = _scope_id();
		_html(`<span id=last>${_text_mark($scope5_id, "#text/0", input.msg, 1, $scope0_reason, 3)} ${_text_mark($scope5_id, "#text/1", c, 2, $scope0_reason, 5)}</span>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_input_msg#0:7/subscribe", $cg__input_msg);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope5_id, { "ClosureSignalIndex:input_msg/12": $wi__input_msg && 2 }, "__tests__/template.marko", "22:2"), $cg__input_msg && "__tests__/template.marko_5_input_msg#0:7/subscribe");
	}, 1, "__tests__/template.marko_5*content", _unfilled_if($scope0_reason, 5), 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:input_msg/12": $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		"ClosureScopes:input_inner/13": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		"ClosureScopes:input_outer/11": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
