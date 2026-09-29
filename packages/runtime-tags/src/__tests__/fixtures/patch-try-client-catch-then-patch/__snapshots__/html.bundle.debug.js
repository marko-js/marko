// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom() {
	throw new Error("boom");
}
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<em><!><!></em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.message, void 0, $scope0_reason, 0)}${_text_resume($scope1_id, "#text/1", count === 1 ? boom() : "", 2)}</em>`);
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_message#0:5/subscribe"), "__tests__/template.marko_1_count#0:6/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "8:6");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content");
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_message/7": $input_message__closures,
		"ClosureScopes:count/8": $count__closures
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1, 0);
