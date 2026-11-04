// tags/card.marko
const $template$1 = "<button>clear</button><!><!><!>";
const $walks$1 = " b%b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D l/${_w0}&b`)($walks$1)};${((_w0) => `<p> </p>${_w0}<!>`)($template$1)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; b D ;<input type=radio name=r><label> </label>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</p>`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_for_of([1, 2], (n) => {
			const $scope2_id = _scope_id();
			const rid = _id("rid");
			_html(`<input type=radio name=r${_attr("id", rid, $scope2_id, "#input/0", 0, 0)}>${_el_mark($scope2_id, "#input/0", 0)}<label${_attr("for", rid, $scope2_id, "#label/1", 0, 0)}>${_text_mark($scope2_id, "#text/2", n, 1, 0, 0)}</label>${_el_mark($scope2_id, "#label/1", 0)}`);
			_scope($scope2_id, {}, "__tests__/template.marko", "3:4");
		}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
