// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "#text/0", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_3*content", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/template.marko_2_input_promise#0:4/init" : "__tests__/template.marko_2_input_promise#0:4/subscribe");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_promise && "__tests__/template.marko_2_input_promise#0:4/subscribe", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.title, $wg__input_title)}</em>`);
		_subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:6"), "__tests__/template.marko_1_input_title#0:3/subscribe", $wg__input_title);
		$wg__input_title || _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1);
	_html("</main>");
	_scope($scope0_id, {
		input_title: input.title,
		"ClosureScopes:input_title/5": $wi__input_title && $input_title__closures,
		"ClosureScopes:input_promise/6": $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
}, 1);
