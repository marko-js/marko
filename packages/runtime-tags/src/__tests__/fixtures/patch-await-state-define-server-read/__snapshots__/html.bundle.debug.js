// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!>:<!></em>";
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)(),
	"__tests__/template.marko_0_#text#1/await": /*@__PURE__*/ (() => `__tests__/template.marko_0_#text#1/await >#childScope/0>;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const Row = { content: _content("__tests__/template.marko_1*content", (r) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "#text/1", r.v, 2, $scope1_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_label ? "__tests__/template.marko_1_input_label#0:4/init" : "__tests__/template.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe");
	}, $scope0_id) };
	_await($scope0_id, "#text/1", Promise.resolve(n), (x) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0, 0, $scope0_id);
		Row.content({ v: x });
		_patch_child_end();
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
	}, 1, "__tests__/template.marko_2*content", 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
