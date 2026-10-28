// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D%c%;<em><!>:<!></em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D%c%;<em><!>:<!></em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>interactive</button></main>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_outer = _client_guard($scope0_reason, 3), $cg__input_inner = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_outer__OR__input_inner = _write_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_inner__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.outer, (outer) => {
				const $scope2_id = _scope_id();
				const $await_content__outer__closures = new Set();
				_await($scope2_id, "#text/0", input.inner, (inner) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "#text/0", outer, void 0, $scope0_reason, 3)}:${_text_resume($scope3_id, "#text/1", inner, 2, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, $cg__input_outer ? "__tests__/template.marko_3_outer#2:2/init" : "__tests__/template.marko_3_outer#2:2/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 3) && $await_content__outer__closures, _scope($scope3_id, {}, "__tests__/template.marko", "4:8"), $cg__input_outer && "__tests__/template.marko_3_outer#2:2/subscribe");
				}, 1, "__tests__/template.marko_3*content");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_inner ? "__tests__/template.marko_2_input_inner#0:6/init" : "__tests__/template.marko_2_input_inner#0:6/subscribe");
				$wi__input_show__OR__input_outer__OR__input_inner && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope2_id, { "ClosureScopes:outer/9": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $await_content__outer__closures }, "__tests__/template.marko", "3:6"), $cg__input_inner && "__tests__/template.marko_2_input_inner#0:6/subscribe", 0);
				$wi__input_show__OR__input_outer__OR__input_inner && _resume_branch($scope2_id);
			}, 1, "__tests__/template.marko_2*content");
			$cg__input_outer && _patch_init($scope1_id, "__tests__/template.marko_1_input_outer#0:5/init");
			$wi__input_show__OR__input_outer__OR__input_inner && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_outer: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.outer,
		input_inner: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.inner,
		"ClosureScopes:input_inner/8": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_outer: ["input.outer"],
		input_inner: ["input.inner"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.outer, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.inner, !_server_guard($scope0_reason, 4)));
}, 1);
