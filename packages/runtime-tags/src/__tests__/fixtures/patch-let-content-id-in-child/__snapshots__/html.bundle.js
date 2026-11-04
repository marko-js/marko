// tags/field.marko
_shells({ c: "c; b D ;<input><label> </label>" });
var field_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<input${_attr("id", uid, $scope0_id, "a", 0, 0)}>${_el_mark($scope0_id, "a", 0)}<label${_attr("for", uid, $scope0_id, "b", 0, 0)}>${_text_mark($scope0_id, "c", input.label, 1, $scope0_reason, 0)}</label>${_el_mark($scope0_id, "b", 0)}`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $setup = [[], ["b0"]];
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
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
		card_default({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			field_default({ label: input.label });
			_patch_child_end();
			$cg__input_label && _patch_render($scope2_id, "a0");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: $wi__input_label && _existing_scope($childScope)
			}), $cg__input_label && "a0", 0);
			_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
