// tags/wrap.marko
const $template = "<button>toggle</button><div><!></div><!><!>";
const $walks = " bD%l%c";
const $setup$1 = [[], ["b1"]];
_shells({ b: "b !b1; bD%l%;<button>toggle</button><div><!></div><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}<div>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "f");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		f: input.content,
		g: open
	}) || $fg__input_content && _patch_write($scope0_id, "xf", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0;D ;<em> </em>",
	a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $fg__input_promise = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({ content: _content_resume("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 0);
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "a", v, 1, $scope0_reason, 0)}</em>`);
			_scope($scope2_id, {});
		}, 1, "a0", $ui__input_promise && 2);
		$cg__input_promise && _patch_render($scope1_id, "a1");
		_subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a1", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	$fg__input_promise && _patch_subscribers($scope0_id, "a3", "d");
	_scope($scope0_id, {
		d: input.promise,
		e: _write_if($scope0_reason, 0) && $input_promise__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_promise && _patch_write($scope0_id, "xd", input.promise, !_server_guard($scope0_reason, 0));
}, 1);
