// template.marko
const $template = "<button class=inc> </button><section></section>";
const $walks = " D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button class=inc> </button><section></section>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_rec_name__closures = new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const frag = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.rec.name, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/template.marko_1_input_rec_name#0:6/init" : "__tests__/template.marko_1_input_rec_name#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_rec_name__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("#section/2", $scope0_id, input.on ? frag.content : null, 0, void 0, $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "#section/2", _mask_group($scope0_reason, 2))}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_rec_name: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.rec?.name,
		n,
		frag_content: _unfilled_if($scope0_reason, 2) && frag?.content,
		"ClosureScopes:input_rec_name/12": _write_if($scope0_reason, 1) && $input_rec_name__closures
	}, "__tests__/template.marko", 0, {
		input_rec_name: ["input.rec.name"],
		n: "1:6",
		frag_content: ["frag.content", "3:9"]
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.rec?.name, !_server_guard($scope0_reason, 1));
}, 1);
