// tags/card2.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["c0"]];
_shells({ c: "c !c0;D b%;<section><button>clear</button><!></section>" });
var card2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.item;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_for_of(c, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", i, {});
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_html("</section>");
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", c, 1);
	_scope($scope0_id, {}) || _client_branch(input.item);
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card2_default({ item: attrTags(attrTag({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}</b>`);
				$cg__input_label && _patch_render($scope2_id, "a0");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0", $wg__input_label);
			}, $scope1_id) }), { content: _content_resume("a3", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<i>${_text_mark($scope3_id, "a", input.label, $wg__input_label)}</i>`);
				$cg__input_label && _patch_render($scope3_id, "a1");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}), $cg__input_label && "a1", $wg__input_label);
			}, $scope1_id) }) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a5", "e");
}, 1);
