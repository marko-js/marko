// tags/card.marko
const $template$1 = "<section><button>x</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [["b2"], ["b0"]];
_shells({ b: "b b2!b0;D b%;<section><button>x</button><!></section>" });
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let c = input.content;
	_html(`<section><button>x</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "we", input.content, 1);
	_patch_fill($scope0_id, "vb1", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_content_withhold(input.content), _content_withhold(open));
});

// tags/relay.marko
const $template = "<section><button>y</button><!></section>";
const $walks = "D b%l";
const $setup = [["c2"], ["c0"]];
_shells({ c: "c c2!c0;D b%;<section><button>y</button><!></section>" });
var relay_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let picked = input.content;
	let c = picked;
	_html(`<section><button>y</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "c0");
	_patch_write($scope0_id, "we", input.content, 1);
	_patch_fill($scope0_id, "vc1", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || (_content_withhold(input.content), _content_withhold(open), _content_withhold(picked));
});

// template.marko
_shells({
	a4: "a4",
	a: "a !;b%;<!><!><!>",
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup$1], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				$wg__input_label || _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			relay_default({ content: _content_resume("a4", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<em>relayed ${_text_resume($scope3_id, "a", input.label, 2, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, _client_guard($scope0_reason, 1) ? "a2" : "a3");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}));
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1));
}, 1);
