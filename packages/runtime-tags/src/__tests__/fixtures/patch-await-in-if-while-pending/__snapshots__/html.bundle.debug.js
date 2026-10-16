// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ;<section></section>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D%;<div id=done><!> done</div>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_promise__OR__input_msg = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $input_promise__closures = new Set();
	const $input_show__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.promise, () => {
					const $scope3_id = _scope_id();
					_html(`<div id=done>${_patch_text($scope3_id, "#text/0", input.msg, void 0, $scope0_reason, 4)} done</div>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, "__tests__/template.marko_3_input_msg#0:7/init");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_msg__closures, _scope($scope3_id, { _: $wi__input_show__OR__input_promise__OR__input_msg && _scope_with_id($scope2_id) }, "__tests__/template.marko", "6:8"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_3_input_msg#0:7/subscribe");
				}, 1, "__tests__/template.marko_3*content");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_promise#0:6/init");
				$wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 3) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_promise#0:6/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#section/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_html(`</section>${_el_resume($scope1_id, "#section/0", $wg__input_show)}`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_show#0:5/init");
		$wi__input_show__OR__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_show#0:5/subscribe", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_promise__OR__input_msg && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_1*content", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_promise: _unfilled_if($scope0_reason, 2) && input.promise,
		input_msg: _unfilled_if($scope0_reason, 0) && input.msg,
		count,
		"ClosureScopes:input_msg/11": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_msg__closures,
		"ClosureScopes:input_promise/10": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_promise__closures,
		"ClosureScopes:input_show/9": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		input_msg: ["input.msg"],
		count: "1:6"
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.msg, !_server_guard($scope0_reason, 4)));
}, 1);
