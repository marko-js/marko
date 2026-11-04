// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}` });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	card_default({ content: _content_resume("c1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<b>");
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
		_html("</b>");
		$cg__input_content && _patch_render($scope1_id, "c0");
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_content && "c0", $wg__input_content);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		d: input.content,
		e: $wi__input_content && $input_content__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "c2", "d");
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_mark($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				$cg__input_label && _patch_render($scope2_id, "a0");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0", $wg__input_label);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
