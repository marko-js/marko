// tags/labeler.marko
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	_scope($scope0_id, {});
	return $return;
});

// tags/wrapper.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0;b%b ;<!><!><button>+</button>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.content, { value: n });
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_render($scope0_id, "c1", $fg__input_content && "e");
	_patch_fill($scope0_id, "vc2", n, 1);
	_scope($scope0_id, {
		e: input.content,
		f: n
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_suffix = _write_guard($scope0_reason, 0), $wi__input_suffix = _write_if($scope0_reason, 0), $uf__input_suffix = _updates_from($scope0_reason, 0), $fg__input_suffix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	wrapper_default({ content: _content_resume("a3", ({ value }) => {
		const $scope1_reason = _scope_reason(), $wg__value = _write_guard($scope1_reason, 0), $wi__value = _write_if($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_set_scope_reason($uf__input_suffix << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		let label = labeler_default({ title: value + input.suffix });
		($wi__input_suffix || $wi__value) && _var($scope1_id, "b", $childScope, "a0");
		_patch_child_end();
		_html(`<p>${_text_mark($scope1_id, "c", label, $wg__input_suffix || $wg__value)}</p>`);
		_patch_render($scope1_id, "a1", "f" + (_filled_guard($scope0_reason, 0) ? " >d" : ""), (2 | $uf__input_suffix) << 1, 0);
		_subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			f: $wi__input_suffix && value,
			_: _scope_with_id($scope0_id),
			a: ($wi__input_suffix || $wi__value) && _existing_scope($childScope)
		}), _client_guard($scope0_reason, 0) && "a2", $wg__input_suffix || $wg__value);
		$wg__input_suffix || $wg__value || $wg__input_suffix && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	$fg__input_suffix && _patch_subscribers($scope0_id, "a4", "d");
	_scope($scope0_id, {
		d: input.suffix,
		e: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope2)
	}) || $fg__input_suffix && _patch_write($scope0_id, "xd", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
