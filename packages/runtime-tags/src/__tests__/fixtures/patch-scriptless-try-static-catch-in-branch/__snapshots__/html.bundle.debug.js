// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<p>oops</p>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_promise = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_mark($scope4_id, "#text/0", value, 1, $scope0_reason, 2)}</em>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "4:8");
				}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 2) && 2);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_promise#0:4/subscribe", 1);
				$wi__input_show__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_promise#0:4/subscribe", 0);
				$wi__input_show__OR__input_promise && _resume_branch($scope2_id);
			}, void 0, () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html("<p>oops</p>");
			}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", 0, 0, 1);
			$wi__input_show__OR__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_promise && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_promise#4/subscribers", "input_promise");
	_scope($scope0_id, {
		input_promise: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise,
		"ClosureScopes:input_promise/5": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) || $fg__input_promise && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_promise", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
