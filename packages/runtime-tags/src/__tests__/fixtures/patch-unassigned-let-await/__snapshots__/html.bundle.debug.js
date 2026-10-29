// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await;D%c%;<p><!> <!></p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let x = input.v;
	_await($scope0_id, "#text/0", Promise.resolve(x), (r) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", r)} ${_text_resume($scope1_id, "#text/1", input.w, _write_guard($scope0_reason, 1) * 2)}</p>`);
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, {}, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_w#0:4/subscribe");
	}, 1, 0);
	_scope($scope0_id, { "ClosureScopes:input_w/6": $wi__input_w && $input_w__closures }, "__tests__/template.marko", 0) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
