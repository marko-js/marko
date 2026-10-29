// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $template = "<button>set</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_0_#text#1/await": /*@__PURE__*/ (() => `__tests__/template.marko_0_#text#1/await;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>set</button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let x = input.v;
	_html(`<button>set</button>${_el_resume($scope0_id, "#button/0")}`);
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_w#0:5/subscribe");
	}, $scope0_id) };
	_await($scope0_id, "#text/1", Promise.resolve(x), (r) => {
		const $scope2_id = _scope_id();
		_patch_child(0, "#childScope/0");
		Body.content({});
		_patch_child_end();
	}, 1, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:input_w/7": $wi__input_w && $input_w__closures }, "__tests__/template.marko", 0) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
