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
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 0);
		const uid = _id("A", 1);
		_html(`<input${_attr("id", uid, $scope1_id, "a", 0, 0)}${_attr("title", input.label + " " + uid, $scope1_id, "a", $scope0_reason, 0)}>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 0))}<label${_attr("for", uid, $scope1_id, "b", 0, 0)}>${_text_mark($scope1_id, "c", input.label, 1, $scope0_reason, 0)}</label>${_el_mark($scope1_id, "b", 0)}`);
		_subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			d: $ui__input_label && uid,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "a0");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
