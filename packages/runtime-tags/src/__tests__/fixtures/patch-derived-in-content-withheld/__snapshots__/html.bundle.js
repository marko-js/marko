// tags/toggle.marko
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var toggle_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, 1, 0, 0, ["b1"], $scope0_reason, 1);
	$fg__input_content && $cg__input_open && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && $cg__input_open && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// tags/wrapper.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a6"]], ["a>", $setup$1]);
_shells({
	a1: "a1",
	a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = false;
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	wrapper_default({ content: _content("a5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrapper_content__label__closures = /* @__PURE__ */ new Set();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xb", label, !$sg__input_label);
		_set_scope_reason(10);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		toggle_default({
			open,
			content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", label, 1, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 0) && $wrapper_content__label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id)
		});
		_patch_child_end();
		_filled_guard($scope0_reason, 0) && _patch_subscribers($scope1_id, "a2", "b");
		_subscribe($open__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			b: label,
			_: _scope_with_id($scope0_id),
			i: $wi__input_label && $wrapper_content__label__closures,
			a: _existing_scope($childScope)
		}), $cg__input_label && "a3", 0), "a4", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		f: open,
		g: $wi__input_label && $input_label__closures,
		h: $open__closures,
		a: _existing_scope($childScope2)
	});
}, 1);
