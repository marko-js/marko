// tags/field.marko
_shells({ c: "c; b D ;<input><label> </label>" });
var field_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_id = _updates_from($scope0_reason, 1), $ui__input_id__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_id = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attr("id", input.id, $scope0_id, "a", $scope0_reason, 1)}${_attr("title", input.label + " " + input.id, $scope0_id, "a", $scope0_reason, 0)}>${_el_mark($scope0_id, "a", $uf__input_id || _updates_from($scope0_reason, 0))}<label${_attr("for", input.id, $scope0_id, "b", $scope0_reason, 1)}>${_text_mark($scope0_id, "c", input.label, 1, $scope0_reason, 2)}</label>${_el_mark($scope0_id, "b", $uf__input_id)}`);
	_patch_render($scope0_id, "c0", (($fg__input_id ? " f" : "") + ($fg__input_label ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: $ui__input_id__OR__input_label && input.id,
		g: $ui__input_id__OR__input_label && input.label
	}) || ($fg__input_id && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.id, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
});

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
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id("A", 1);
		_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		field_default({
			id: uid,
			label: input.label
		});
		_patch_child_end();
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: $wi__input_label && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 0) && "a0", 0);
		_resume_branch($scope1_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope2)
	});
}, 1);
