// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function check(title, fail) {
	if (fail) {
		const err = new Error("boom " + title, { cause: new Error("cause") });
		err.extra = "extra";
		throw err;
	}
	return title;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<em> </em>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_fail = _write_guard($scope0_reason, 0), $cg__input_slow = _client_guard($scope0_reason, 3), $wi__input_slow = _write_if($scope0_reason, 3), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_slow__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_await($scope3_id, "#text/0", input.slow, (v) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "#text/0", v, 1, $scope0_reason, 3)}</em>`);
			_scope($scope5_id, {}, "__tests__/template.marko", "10:4");
		}, 1, "__tests__/template.marko_5*content", 1);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, $cg__input_slow ? "__tests__/template.marko_3_input_slow#0:5/init" : "__tests__/template.marko_3_input_slow#0:5/subscribe");
		$wi__input_slow && _subscribe(_unfilled_if($scope0_reason, 3) && $input_slow__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2"), $cg__input_slow && "__tests__/template.marko_3_input_slow#0:5/subscribe", 0);
		$wi__input_slow && _resume_branch($scope3_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", check(input.title, input.fail), $wg__input_title__OR__input_fail)}</p>`);
			_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "14:6"), "__tests__/template.marko_2_input_title#0:3/subscribe", $wg__input_title__OR__input_fail), "__tests__/template.marko_2_input_fail#0:4/subscribe", $wg__input_title__OR__input_fail);
			$wg__input_title__OR__input_fail || _resume_branch($scope2_id);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<p>${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message)}</p>`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "16:8");
		}, void 0, "__tests__/template.marko_4*content", "__tests__/template.marko_2*content");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "13:4");
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_3*content", 1);
	_scope($scope0_id, {
		input_title: input.title,
		input_fail: input.fail,
		"ClosureScopes:input_title/6": $wi__input_title && $input_title__closures,
		"ClosureScopes:input_fail/7": $wi__input_fail && $input_fail__closures,
		"ClosureScopes:input_slow/8": $wi__input_slow && _unfilled_if($scope0_reason, 3) && $input_slow__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_fail: ["input.fail"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.fail, !_server_guard($scope0_reason, 2)));
}, 1);
