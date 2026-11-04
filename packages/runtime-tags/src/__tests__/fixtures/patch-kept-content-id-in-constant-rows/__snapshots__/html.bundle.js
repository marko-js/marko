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
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `D l/${_w0}&b`)($walks)};${((_w0) => `<p> </p>${_w0}<!>`)($template)}`,
	a0: "a0; b D ;<input type=radio name=r><label> </label>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_for_of([1, 2], (n) => {
			const $scope2_id = _scope_id();
			const rid = _id("A");
			_html(`<input type=radio name=r${_attr("id", rid, $scope2_id, "a", 0, 0)}>${_el_mark($scope2_id, "a", 0)}<label${_attr("for", rid, $scope2_id, "b", 0, 0)}>${_text_mark($scope2_id, "c", n, 1, 0, 0)}</label>${_el_mark($scope2_id, "b", 0)}`);
			_scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a0", 0, 0);
		_scope($scope1_id, {});
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
