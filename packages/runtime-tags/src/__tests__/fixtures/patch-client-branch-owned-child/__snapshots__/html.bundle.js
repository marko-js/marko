// tags/btn.marko
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0; D%b%;<i><!><!></i>" });
var btn_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<i>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}${_text_mark($scope0_id, "c", n, 2)}</i>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { g: n });
});

// tags/defn.marko
const $setup$1 = [[], []];
_shells({
	d0: "d0 !d1",
	d: "d;b%;<!><!><!>"
});
var defn_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $cg__input_tag = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Inner = { content: _content_resume("d0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<b>${_text_mark($scope1_id, "b", input.label, 1, $scope0_reason, 0)}</b>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "d1");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "d2", _client_guard($scope0_reason, 0));
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 1);
	$cg__input_tag && _patch_write($scope0_id, "wf", Inner, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "d3", "d");
	$cg__input_tag && _patch_render($scope0_id, "d4");
	_scope($scope0_id, {
		d: input.label,
		f: _unfilled_if($scope0_reason, 1) && Inner,
		h: $wi__input_label && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["c0"]];
_shells({ c: "c !c0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "c0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a2: `a2${_shell_marker([[], []], ["a>", $setup$2], ["b>", $setup$1])}`,
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "a", 2);
			card_default({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				btn_default({ label: input.label });
				_patch_child_end();
				_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 2) << 3);
				const $childScope2 = _peek_scope_id($scope2_id, "b", 1);
				defn_default({
					label: input.label,
					tag: input.tag
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0", _client_guard($scope0_reason, 1));
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a1", _client_guard($scope0_reason, 2));
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_tag__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope),
					b: _existing_scope($childScope2)
				})));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	$fg__input_label && _patch_subscribers($scope0_id, "a4", "e");
	$fg__input_tag && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: input.label,
		f: input.tag,
		g: _write_if($scope0_reason, 1) && $input_label__closures,
		h: _write_if($scope0_reason, 2) && $input_tag__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)), $fg__input_tag && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 2)));
}, 1);
