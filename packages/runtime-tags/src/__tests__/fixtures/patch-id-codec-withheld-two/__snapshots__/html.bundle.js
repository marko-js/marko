// tags/keeper.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button>toggle</button><!><!>" });
var keeper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let content = input.content;
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", content, {});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", content, 1);
	_patch_fill($scope0_id, "vb2", show, 1);
	_scope($scope0_id, {
		f: content,
		g: show
	}) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<!>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix = _write_guard($scope0_reason, 0), $wi__input_prefix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	keeper_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id("A");
		_html(`<label${_attr("for", uid)}>${_text_resume($scope1_id, "b", input.prefix + " " + uid, $wg__input_prefix)}</label><input${_attr("id", uid)}${_attr("title", input.prefix + " " + uid)}>${_el_resume($scope1_id, "c", $wg__input_prefix)}`);
		_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope1_id, {
			d: $wi__input_prefix && uid,
			_: _scope_with_id($scope0_id)
		}), "a0", $wg__input_prefix);
		$wg__input_prefix || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	keeper_default({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		const uid = _id("B");
		_html(`<label${_attr("for", uid)}>${_text_resume($scope2_id, "b", input.prefix + " " + uid, $wg__input_prefix)}</label><input${_attr("id", uid)}${_attr("title", input.prefix + " " + uid)}>${_el_resume($scope2_id, "c", $wg__input_prefix)}`);
		_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope2_id, {
			d: $wi__input_prefix && uid,
			_: _scope_with_id($scope0_id),
			Cf: $wi__input_prefix && 1
		}), "a2", $wg__input_prefix);
		$wg__input_prefix || _resume_branch($scope2_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		e: input.prefix,
		f: $wi__input_prefix && $input_prefix__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.prefix, !_server_guard($scope0_reason, 0));
}, 1);
