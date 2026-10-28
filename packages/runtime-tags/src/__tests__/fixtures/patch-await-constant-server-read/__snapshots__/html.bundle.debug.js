// template.marko
const $template = "<!><!><button>interactive</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>interactive</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", Promise.resolve(1), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope1_id, "#text/1", x, 2, 0, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_label ? "__tests__/template.marko_1_input_label#0:4/init" : "__tests__/template.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {}, "__tests__/template.marko", "1:2"), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe");
	}, 1, "__tests__/template.marko_1*content", void 0, 1);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_label__closures }, "__tests__/template.marko", 0);
}, 1);
