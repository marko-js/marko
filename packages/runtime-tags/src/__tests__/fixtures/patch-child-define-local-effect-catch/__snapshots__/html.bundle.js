// tags/wrap.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b3: "b3;D ;<em> </em>",
	b4: "b4 b2!b0",
	b5: "b5;D ;<em> </em>",
	b6: "b6;b%;<!><!><!>",
	b7: /*@__PURE__*/ ((_w0, _w1) => `b7 !;${_w0};${_w1}`)($Card_content__walks, $Card_content__template),
	b: /*@__PURE__*/ (() => `b a>;${((_w0) => `b/${_w0}&b`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content("b7", () => {
		const $scope1_id = _scope_id();
		const $Card_content__x__closures = /* @__PURE__ */ new Set();
		_scope_reason();
		const x = input.label + "!";
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, (v) => {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", v, 1, $scope0_reason, 2)}</em>`);
				_scope($scope4_id, {});
			}, 1, "b3");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_promise ? "b8" : "b9");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "b9", 0);
			$wi__input_promise && _resume_branch($scope2_id);
		}, void 0, (err) => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
			_script($scope3_id, "b0");
			$cg__input_label && _patch_init($scope3_id, "b1");
			_subscribe($wi__input_label && $Card_content__x__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), "b2");
		}, void 0, "b4", "b6", void 0, 1, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			b: x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			h: $wi__input_label && $Card_content__x__closures
		}), $cg__input_label && "b11", 0) || _filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vb10", x, !_server_guard($scope0_reason, 1));
		_resume_branch($scope1_id);
	}, $scope0_id, 1) };
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Card.content({});
	_patch_child_end();
	_scope($scope0_id, {
		g: $wi__input_promise && $input_promise__closures,
		f: $wi__input_label && $input_label__closures,
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
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		label: input.label,
		promise: input.promise
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
