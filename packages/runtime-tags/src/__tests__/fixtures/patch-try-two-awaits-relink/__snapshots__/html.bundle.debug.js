// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<em> </em>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<div><!><!></div>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>x</button></main>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fast = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $cg__input_slow = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_fast__OR__input_slow = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fast__closures = new Set();
	const $input_show__closures = new Set();
	const $input_slow__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.fast, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_resume($scope4_id, "#text/0", a, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "5:10");
				}, 1, "__tests__/template.marko_4*content");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_fast ? "__tests__/template.marko_2_input_fast#0:5/init" : "__tests__/template.marko_2_input_fast#0:5/subscribe");
				_write_if($scope0_reason, 0) && _subscribe(_unfilled_if($scope0_reason, 3) && $input_fast__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:8"), $cg__input_fast && "__tests__/template.marko_2_input_fast#0:5/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_await($scope1_id, "#text/1", input.slow, (b) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "#text/0", b, 1, $scope0_reason, 4)}</em>`);
			_scope($scope5_id, {}, "__tests__/template.marko", "7:8");
		}, 1, "__tests__/template.marko_5*content", 1);
		_html("</div>");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_show ? "__tests__/template.marko_1_input_show#0:4/init" : "__tests__/template.marko_1_input_show#0:4/subscribe");
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, $cg__input_slow ? "__tests__/template.marko_1_input_slow#0:6/init" : "__tests__/template.marko_1_input_slow#0:6/subscribe");
		$wi__input_show__OR__input_fast__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 4) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_show && "__tests__/template.marko_1_input_show#0:4/subscribe", $wg__input_show), $cg__input_slow && "__tests__/template.marko_1_input_slow#0:6/subscribe", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_fast__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_fast: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.fast,
		"ClosureScopes:input_fast/8": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_fast__closures,
		"ClosureScopes:input_show/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures,
		"ClosureScopes:input_slow/9": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_slow__closures
	}, "__tests__/template.marko", 0, { input_fast: ["input.fast"] }) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.fast, !_server_guard($scope0_reason, 3));
}, 1);
