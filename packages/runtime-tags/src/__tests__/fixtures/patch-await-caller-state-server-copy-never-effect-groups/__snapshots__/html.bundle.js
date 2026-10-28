// tags/show-await.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $setup$1 = [["a>b5"], []];
_shells({
	b1: "b1;D ;<p> </p>",
	b2: "b2;D ;<p> </p>",
	b3: /*@__PURE__*/ ((_w0, _w1) => `b3 b5;${_w0};${_w1}`)($Row_content__walks, $Row_content__template),
	b: /*@__PURE__*/ (() => `b a>b5;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)()
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content("b3", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__text = _write_if($scope1_reason, 0);
		_await($scope1_id, "a", text && input.promise, (x) => {
			const $scope2_id = _scope_id();
			_filled_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && _patch_write($scope2_id, "xc", x, !_server_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0));
			_html(`<p>${_text_resume($scope2_id, "a", x, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
			_script($scope2_id, "b0", 1, (_filled_guard($scope0_reason, 0) || _filled_guard($scope1_reason, 0)) && ($cg__input_promise || _client_guard($scope1_reason, 0) ? 2 : 1), _filled_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "c");
			_scope($scope2_id, { c: x });
		}, 1, "b1", _unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && 2);
		$cg__input_promise && _patch_write($scope1_id, "xd", text, !(_filled_guard($scope1_reason, 0) && $cg__input_promise));
		_patch_init_entry($scope1_id, "b4", [_filled_guard($scope0_reason, 0) && ">d", _filled_guard($scope1_reason, 0) && "d"], (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0);
		($wi__input_promise || $wi__text) && _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_promise && $input_promise__closures, _scope($scope1_id, {
			d: $wi__input_promise && text,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "b5", 0);
		($wi__input_promise || $wi__text) && _resume_branch($scope1_id);
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ text: input.label });
	_patch_child_end();
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.promise,
		f: $wi__input_promise && $input_promise__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb6", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
