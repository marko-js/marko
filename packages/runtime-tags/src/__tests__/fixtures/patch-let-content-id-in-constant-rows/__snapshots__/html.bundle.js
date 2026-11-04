// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D l/${_w0}&b`)($walks)};${((_w0) => `<p> </p>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		forOf([1, 2], (n) => {
			_scope_id();
			const rid = _id("A");
			_html(`<input type=radio name=r${_attr("id", rid)}><label${_attr("for", rid)}>${_escape(n)}</label>`);
		});
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
