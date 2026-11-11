// template.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
_shells({
	a2: "a2",
	a: `a !a8;${((_w0) => `b/${_w0}&%b b`)($Wrap_content2__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Wrap_content2__template)}`,
	a1: "a1;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $uf__input_show = _updates_from($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $ui__isOpen = _unfilled_if($scope2_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_render($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope2_reason, 0);
		$ui__isOpen && _patch_write($scope2_id, "we", label, 1);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { e: ($ui__isOpen || _unfilled_if($scope2_reason, 1)) && label });
	}, $scope0_id) };
	const Wrap = { content: _content("a5", ({ show, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $wg__show = _write_guard($scope4_reason, 1), $ui__show = _unfilled_if($scope4_reason, 1), $fg__content = _filled_guard($scope4_reason, 2);
		_if(() => {
			if (show) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "a", content, {}, 2, 0, 0, $wg__content, $scope4_reason, 2);
				_write_if($scope4_reason, 0) && _scope($scope5_id, {});
				return 0;
			}
		}, $scope4_id, "a", 1, $wg__show, 1, 0, 0, ["a3"], $scope4_reason, 1);
		$fg__content && _client_guard($scope4_reason, 1) && _patch_render($scope4_id, "a6", "e");
		_write_if($scope4_reason, 1) && _scope($scope4_id, { e: $ui__show && content }) || $fg__content && $ui__show && _patch_write($scope4_id, "xe", content, 1);
	}, $scope0_id) };
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 2);
	Wrap.content({
		show: input.show,
		content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a7", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}), $cg__input_label && "a7", 0);
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: "y"
	}, 24);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a8");
	_patch_render($scope0_id, "a10", $fg__input_other && "h", $scope0_reason, 3);
	_patch_render($scope0_id, "a11", $fg__input_other && "l");
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 3) && Panel,
		l: Tag,
		n: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope2)
	}) || (_filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a9", "g"), $fg__input_other && _patch_write($scope0_id, "xl", Tag, !_server_guard($scope0_reason, 3)));
}, 1);
