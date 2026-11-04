// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Inner_content__template);
_shells({
	a: "a !a11;b%b%b%b ;<!><!><!><!><button id=t>toggle</button>",
	a2: `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`,
	a1: "a1 a13!a0;D%b%l ;<em><!><!></em><button class=inc>+</button>",
	a3: "a3;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("a4", ({ isOpen, text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $fg__text = _filled_guard($scope2_reason, 1);
		let n = 1;
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "a", text, 1, $scope2_reason, 1)}${_text_mark($scope4_id, "b", n, 2)}</em><button class=inc>+</button>${_el_mark($scope4_id, "c")}`);
				_script($scope4_id, "a0");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope2_reason, 0);
		_script($scope2_id, "a5", $wg__isOpen, $fg__text, "e");
		$fg__text && _client_guard($scope2_reason, 0) && _patch_render($scope2_id, "a6", "e");
		_patch_fill($scope2_id, "va7", n, 1);
		_scope($scope2_id, {
			e: text,
			f: n
		}) || $fg__text && _patch_write($scope2_id, "xe", text, !_server_guard($scope2_reason, 1));
		$wg__isOpen || _resume_branch($scope2_id);
	}, $scope0_id) };
	const Outer = { content: _content_resume("a9", ({ on, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__on = _write_guard($scope3_reason, 0);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope3_id, "a", 0);
		Inner.content({
			isOpen: true,
			text: "const"
		});
		_patch_child_end();
		_if(() => {
			if (on) {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_mark($scope5_id, "a", label, 1, $scope3_reason, 1)}</i>`);
				_client_guard($scope3_reason, 1) && _patch_render($scope5_id, "a8");
				_scope($scope5_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", 1, $wg__on, 1, 0, 0, ["a3"], $scope3_reason, 0);
		_unfilled_if($scope3_reason, 0) && _patch_write($scope3_id, "wf", label, 1);
		_scope($scope3_id, {
			f: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 1)) && label,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 3);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			Outer.content({
				on: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a10");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_dynamic_tag($scope0_id, "b", Outer, {
		on: true,
		label: "dyn"
	}, 16);
	_dynamic_tag($scope0_id, "c", Inner, {
		isOpen: true,
		text: "u"
	}, 24);
	_html(`<button id=t>toggle</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a11");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a10", "h");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		i: open,
		j: Inner,
		l: Outer
	}) || $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 1));
}, 1);
