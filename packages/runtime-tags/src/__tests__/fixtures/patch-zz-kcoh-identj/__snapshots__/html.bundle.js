// tags/cmp.marko
const $template$1 = "<p> </p><!><!><!>";
const $walks$1 = "D l%b%c";
const $setup$1 = [[], []];
_shells({ c: "c !;D l%b%;<p> </p><!><!><!>" });
var cmp_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.a;
	let y = input.b;
	_html(`<p>${_text_mark($scope0_id, "a", x === y ? "same" : "diff")}</p>`);
	_dynamic_tag($scope0_id, "b", x, {});
	_dynamic_tag($scope0_id, "c", y, {}, 8);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc0", x, 1);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc1", y, 1);
	_scope($scope0_id, {
		h: x,
		i: y
	}) || (_client_branch(input.a), _client_branch(input.b));
});

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a0: "a0 !a1",
	a3: `a3|2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`,
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a3", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const Inner = { content: _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope3_id, "b", input.label, 1, $scope0_reason, 1)}</b>${_el_mark($scope3_id, "a")}`);
					_script($scope3_id, "a1");
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a2", _client_guard($scope0_reason, 1));
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
				}, $scope2_id) };
				_set_scope_reason(0);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				cmp_default({
					a: Inner,
					b: Inner
				});
				_patch_child_end();
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	$fg__input_label && _patch_subscribers($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
