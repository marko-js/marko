// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template);
_shells({
	a2: `a2${_shell_marker([[], []], [">>a>", [[""], []]], [">>a>", _shell_setup([[], []], ["a>", $setup])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template)}`,
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], [">a>", [[""], []]], [">a>", _shell_setup([[], []], ["a>", $setup])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_next = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_next__closures = /* @__PURE__ */ new Set();
	const Tree = { content: _content("a4", () => {
		const $scope1_id = _scope_id(), $ui__input_next = _unfilled_if($scope0_reason, 1);
		_scope_reason();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</span>`);
			$cg__input_label && _patch_render($scope2_id, "a0");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0", $wg__input_label);
		}, $scope1_id) });
		_patch_child_end();
		_await($scope1_id, "b", input.next, () => {
			const $scope3_id = _scope_id();
			const $childScope2 = _peek_scope_id($scope3_id, "a", 1, 0, $scope0_id);
			Tree.content({});
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope2) });
		}, 1, "a2", $ui__input_next);
		$cg__input_next && _patch_render($scope1_id, "a5");
		_subscribe($ui__input_next && $input_next__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_next && "a5", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			const $childScope3 = _peek_scope_id($scope4_id, "a", 2, 0, $scope0_id);
			Tree.content({});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__input_show && _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 2);
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.next,
		g: $wi__input_label && $input_label__closures,
		h: _write_if($scope0_reason, 1) && $input_next__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a6", "d"), _filled_guard($scope0_reason, 1) && $ui__input_show && _patch_write($scope0_id, "xe", input.next, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "a7", "e"));
}, 1);
