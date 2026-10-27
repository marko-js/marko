// tags/wrap.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b3: /*@__PURE__*/ ((_w0, _w1) => `b3 !;${_w0};${_w1}`)($Card_content__walks, $Card_content__template),
	b: /*@__PURE__*/ (() => `b a>;${((_w0) => `b/${_w0}&b`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)(),
	b2: "b2;D ;<p> </p>"
});
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_label = _server_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_elide("b3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const x = input.label + "!";
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<p>${_patch_text($scope2_id, "a", x, void 0, $scope0_reason, 1)}</p>`);
				_script($scope2_id, "b0");
				_filled_guard($scope0_reason, 1) && _patch_effect($scope2_id, $cg__input_label ? "hb0" : "eb0", ">b");
				$cg__input_label && _patch_init($scope2_id, "b1");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b2"], $scope0_reason, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_show ? "b5" : "b6");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			b: x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}), $cg__input_label && "b7", $wg__input_show), $cg__input_show && "b6", $wg__input_show) || _filled_guard($scope0_reason, 1) && ($cg__input_show ? _patch_fill($scope1_id, "vb4", x, !$sg__input_label) : _patch_write($scope1_id, "xb", x, !$sg__input_label));
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope = _patch_child($scope0_id, "a", 0);
	Card.content({});
	_patch_child_end();
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && $input_label__closures,
		g: _write_if($scope0_reason, 2) && $input_show__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	wrap_default({
		label: input.label,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
