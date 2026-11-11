// tags/badge.marko
const $template$1 = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.tag, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $setup = [[], ["c0"]];
_shells({ c: "c !c0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "c0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a1: `a1|2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)($template$1)}`,
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $ui__input_rows = _unfilled_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
		card_default({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			badge_default({ tag: "new" });
			_patch_child_end();
			_html(`<em>${_text_mark($scope2_id, "b", input.label, 1, $scope0_reason, 2)}</em>`);
			$cg__input_label && _patch_render($scope2_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
				_: $wi__input_rows__OR__input_label && _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			}), $cg__input_label && "a0");
		}, $scope1_id, 2) });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_label && _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 1);
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: ($ui__input_rows || $ui__input_label) && input.label,
		f: _write_if($scope0_reason, 2) && ($ui__input_label || $ui__input_rows) && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
}, 1);
