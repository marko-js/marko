// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("boom");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	const $input_show__closures = new Set();
	let x = input.v;
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.show ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_show ? "__tests__/template.marko_1_input_show#0:4/init" : "__tests__/template.marko_1_input_show#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_show__closures, _scope($scope1_id, { _: $wi__input_show && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), $cg__input_show && "__tests__/template.marko_1_input_show#0:4/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", x)}</b>`);
		_subscribe($x__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"));
	}, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", x, 1);
	_scope($scope0_id, {
		x,
		"ClosureScopes:x/7": $x__closures,
		"ClosureScopes:input_show/6": $wi__input_show && _unfilled_if($scope0_reason, 1) && $input_show__closures
	}, "__tests__/template.marko", 0, { x: "4:6" });
	_resume_branch($scope0_id);
}, 1);
