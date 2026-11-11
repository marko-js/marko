// tags/card.marko
const $template$1 = "<section><button>x</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>x</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	let c = input.content;
	_html(`<section><button>x</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", $fg__input_content && "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_client_branch(input.content), _client_branch(open), $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0)));
});

// tags/relay.marko
const $template = "<section><button>y</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["c0"]];
_shells({ c: "c !c0;D b%;<section><button>y</button><!></section>" });
var relay_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	let picked = input.content;
	let c = picked;
	_html(`<section><button>y</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "c0");
	_patch_render($scope0_id, "c1", $fg__input_content && "e");
	_patch_fill($scope0_id, "vc2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_client_branch(input.content), _client_branch(open), _client_branch(picked), $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0)));
});

// template.marko
_shells({
	a3: "a3",
	a1: "a1",
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup$1], ["b>", $setup])};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_mark($scope2_id, "a", input.label, 2, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0");
			}, $scope1_id) });
			_patch_child_end();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			relay_default({ content: _content_resume("a3", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<em>relayed ${_text_mark($scope3_id, "a", input.label, 2, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a2", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}), $cg__input_label && "a2");
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a5", "e");
}, 1);
