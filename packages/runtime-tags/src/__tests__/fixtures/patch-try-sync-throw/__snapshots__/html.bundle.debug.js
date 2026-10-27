// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom() {
	throw new Error("boom");
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<em><!><!></em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 1), $cg__input_boom = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $input_boom__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.message, void 0, $scope0_reason, 1)}${_patch_text($scope1_id, "#text/1", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_message ? "__tests__/template.marko_1_input_message#0:5/init" : "__tests__/template.marko_1_input_message#0:5/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_boom ? "__tests__/template.marko_1_input_boom#0:6/init" : "__tests__/template.marko_1_input_boom#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), $cg__input_message && "__tests__/template.marko_1_input_message#0:5/subscribe"), $cg__input_boom && "__tests__/template.marko_1_input_boom#0:6/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_patch_text($scope2_id, "#text/0", err.message)}</b>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "8:6");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:input_message/8": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_message__closures,
		"ClosureScopes:input_boom/9": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_boom__closures
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1);
