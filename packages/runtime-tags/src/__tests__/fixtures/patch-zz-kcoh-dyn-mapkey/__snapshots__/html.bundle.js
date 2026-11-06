// tags/get.marko
const $template$1 = "<button>x</button>";
const $setup$1 = [[], []];
_shells({ c: "c; ;<button>x</button>" });
var get_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_m = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button>x</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0", 1, $fg__input_m, "d");
	_scope($scope0_id, { d: input.m }) || $fg__input_m && _patch_write($scope0_id, "xd", input.m, !_server_guard($scope0_reason, 0));
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
	a2: `a2|2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template$1}`,
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	$fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const f = _bind_resume(function() {
					console.log("fn", input.label);
				}, "a0", $scope2_id);
				_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				get_default({ m: /* @__PURE__ */ new Map([[f, 1]]) });
				_patch_child_end();
				_client_guard($scope0_reason, 1) && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}));
				_resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "a4", "e");
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 1) && $input_label__closures
	});
}, 1);
