// tags/show-await.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $setup$1 = [["a>"], []];
_shells({
	b2: "b2;D ;<p> </p>",
	b3: "b3;D ;<p> </p>",
	b4: `b4;${$Row_content__walks};${$Row_content__template}`,
	b: `b a>;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_promise = _updates_from($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content("b4", ({ text }) => {
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 0);
		const $Row_content__text__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__text = _write_if($scope1_reason, 0), $uf__text = _updates_from($scope1_reason, 0), $ui__text2 = _unfilled_if($scope1_reason, 0);
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id(), $ui__text = _unfilled_if($scope1_reason, 0), $fg__input_promise = _filled_guard($scope0_reason, 0);
			$fg__input_promise && $ui__text && _patch_write($scope2_id, "xc", x, !_server_guard($scope0_reason, 0));
			_html(`<p>${_text_mark($scope2_id, "a", x + ":" + text, 1, ($uf__input_promise | $uf__text) << 1, 0)}</p>`);
			_unfilled_if($scope1_reason, 0) && _patch_subscribe($scope2_id, "b0");
			_patch_render($scope2_id, "b1", ((_filled_guard($scope1_reason, 0) ? " >d" : "") + ($fg__input_promise ? " c" : "")).slice(1), ($uf__input_promise | $uf__text) << 1, 0);
			_subscribe($ui__text && $Row_content__text__closures, _scope($scope2_id, { c: $wi__text && ($ui__text || _unfilled_if($scope0_reason, 0)) && x }), _client_guard($scope1_reason, 0) && "b0");
		}, 1, "b2", $ui__input_promise);
		$cg__input_promise && _patch_render($scope1_id, "b5");
		($wi__input_promise || $wi__text) && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, {
			d: $wi__input_promise && ($ui__input_promise || $ui__text2) && text,
			_: $wi__input_promise && _scope_with_id($scope0_id),
			g: $wi__text && $wi__text && ($ui__text2 || $ui__input_promise) && $Row_content__text__closures
		}), $cg__input_promise && "b5", 0) || _filled_guard($scope1_reason, 0) && $ui__input_promise && _patch_write($scope1_id, "xd", text, !_server_guard($scope1_reason, 0));
		($wi__input_promise || $wi__text) && _resume_branch($scope1_id);
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ text: input.label });
	_patch_child_end();
	_scope($scope0_id, {
		f: $wi__input_promise && $input_promise__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
