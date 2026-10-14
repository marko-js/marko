// template.marko
const $template = "<main><!><!><button> </button></main>";
const $walks = "D%b%b D m";
function boom(error) {
	throw error;
}
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b%b D ;<main><!><!><button> </button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const $input_error__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", v, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "7:6");
		}, 1, "__tests__/template.marko_4*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:6/init");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_promise#0:6/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_patch_text($scope3_id, "#text/0", err.message)}</b>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "8:6");
	}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, "");
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_input_error#0:7/init");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_error#0:7/subscribe");
	}, void 0, ({ cause }) => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<i>${_patch_text($scope5_id, "#text/0", cause.code)}</i>`);
		_scope($scope5_id, {}, "__tests__/template.marko", "12:6");
	}, void 0, "__tests__/template.marko_5*content", "__tests__/template.marko_2*content", 1, "");
	_html(`<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_promise/9": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures,
		"ClosureScopes:input_error/10": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1);
