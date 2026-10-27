// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<div id=inner><!> <!></div>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D%c%;<div id=inner><!> <!></div>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%c%l%;<div id=outer><!> <!></div><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%l%;<div id=outer><!> <!></div><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $scope0_page = _page_render(), $cg__input_inner = _client_guard($scope0_reason, 4), $wi__input_msg__OR__input_inner = _write_if($scope0_reason, 0), $cg__input_outer = _client_guard($scope0_reason, 2), $wi__input_outer__OR__input_msg__OR__input_inner = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_inner__closures = new Set();
	const $input_outer__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.outer, (a) => {
			const $scope2_id = _scope_id();
			_html(`<div id=outer>${_patch_text($scope2_id, "#text/0", input.msg, void 0, $scope0_reason, 3)} ${_patch_text($scope2_id, "#text/1", a, 2, $scope0_reason, 2)}</div>`);
			_try($scope2_id, "#text/2", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", input.inner, (b) => {
					const $scope4_id = _scope_id();
					_html(`<div id=inner>${_patch_text($scope4_id, "#text/0", input.msg, void 0, $scope0_reason, 3)} ${_patch_text($scope4_id, "#text/1", b, 2, $scope0_reason, 4)}</div>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope4_id, $cg__input_msg ? "__tests__/template.marko_4_input_msg#0:6/init" : "__tests__/template.marko_4_input_msg#0:6/subscribe");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope4_id, { "ClosureSignalIndex:input_msg/10": $wi__input_msg && 1 }, "__tests__/template.marko", "7:8"), $cg__input_msg && "__tests__/template.marko_4_input_msg#0:6/subscribe");
				}, 1, "__tests__/template.marko_4*content", 1);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_inner ? "__tests__/template.marko_3_input_inner#0:7/init" : "__tests__/template.marko_3_input_inner#0:7/subscribe");
				$scope0_page && $wi__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "6:6"), $cg__input_inner && "__tests__/template.marko_3_input_inner#0:7/subscribe", 0);
				$wi__input_msg__OR__input_inner && _resume_branch($scope3_id);
			}, () => {
				const $scope6_reason = _scope_reason();
				const $scope6_id = _scope_id();
				_html("<em>inner loading</em>");
			}, void 0, "__tests__/template.marko_6*content", void 0, "__tests__/template.marko_3*content", 1, void 0, 2);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_msg ? "__tests__/template.marko_2_input_msg#0:6/init" : "__tests__/template.marko_2_input_msg#0:6/subscribe");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:4"), $cg__input_msg && "__tests__/template.marko_2_input_msg#0:6/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_outer ? "__tests__/template.marko_1_input_outer#0:5/init" : "__tests__/template.marko_1_input_outer#0:5/subscribe");
		$scope0_page && $wi__input_outer__OR__input_msg__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 2) && $input_outer__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), $cg__input_outer && "__tests__/template.marko_1_input_outer#0:5/subscribe", 0);
		$wi__input_outer__OR__input_msg__OR__input_inner && _resume_branch($scope1_id);
	}, () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html("<em>outer loading</em>");
	}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_msg/10": $wi__input_msg && _unfilled_if($scope0_reason, 3) && $input_msg__closures,
		"ClosureScopes:input_inner/11": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures,
		"ClosureScopes:input_outer/9": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_outer__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
