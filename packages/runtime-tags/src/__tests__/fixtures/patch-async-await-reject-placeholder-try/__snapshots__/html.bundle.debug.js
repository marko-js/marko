// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<em> </em>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,loading",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.promise, (value) => {
				const $scope5_id = _scope_id();
				_html(`<em>${_text_resume($scope5_id, "#text/0", value, 1, $scope0_reason, 0)}</em>`);
				_scope($scope5_id, {}, "__tests__/template.marko", "5:8");
			}, 1, "__tests__/template.marko_5*content", _unfilled_if($scope0_reason, 0) && 2, 1);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/template.marko_2_input_promise#0:3/init" : "__tests__/template.marko_2_input_promise#0:3/subscribe");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), $cg__input_promise && "__tests__/template.marko_2_input_promise#0:3/subscribe", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html("loading");
		}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_2*content", 1, 0, 2);
		$wi__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, 1, 4, 0)}</b>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "9:6");
	}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, { "ClosureScopes:input_promise/4": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures }, "__tests__/template.marko", 0);
}, 1);
