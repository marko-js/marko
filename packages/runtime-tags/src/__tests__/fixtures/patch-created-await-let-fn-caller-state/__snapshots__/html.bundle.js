// tags/card.marko
const $template$1 = "<button> </button>";
const $walks = " D l";
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_mark($scope0_id, "b", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/inner.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c2: `c2${_shell_marker([[], []], ["a>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template$1}`,
	c: "c;b%;<!><!><!>",
	c3: `c3${_shell_marker([[], []], ["a>", $setup$2])};${((_w0) => `/${_w0}&`)($walks)};${$template$1}`,
	c4: "c4;b%;<!><!><!>"
});
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", resolveAfter("v", 1), (v) => {
				const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2);
				_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				card_default({ fn: function() {
					return v + ":" + input.label;
				} });
				_patch_child_end();
				$ui__input_label && _patch_write($scope2_id, "wc", v, 1);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "c0");
				$cg__input_label && _patch_render($scope2_id, "c1");
				_subscribe($ui__input_label && $input_label__closures, _scope($scope2_id, {
					c: $wi__input_label && v,
					a: _existing_scope($childScope)
				}), $cg__input_label && "c0", 0);
				_resume_branch($scope2_id);
			}, 1, "c2");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c4"], $scope0_reason, 1);
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "c5", "e");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: $wi__input_label && $input_label__closures
	}) || $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=label>label</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html(`<button class=label>label</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	inner_default({
		show: input.show,
		label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: label,
		b: _existing_scope($childScope)
	});
}, 1);
