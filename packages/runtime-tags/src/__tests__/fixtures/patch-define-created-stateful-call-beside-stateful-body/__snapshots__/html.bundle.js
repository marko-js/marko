// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Inner_content__template);
_shells({
	a: "a !a10;b%b%b%b ;<!><!><!><!><button id=t>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)(),
	a1: "a1 a13!a0;D%b%l ;<em><!><!></em><button class=inc>+</button>",
	a3: "a3;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("a4", ({ isOpen, text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0);
		let n = 1;
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", text, 1, $scope2_reason, 1)}${_text_resume($scope4_id, "b", n, 2)}</em><button class=inc>+</button>${_el_resume($scope4_id, "c")}`);
				_script($scope4_id, "a0");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		_script($scope2_id, "a5", $wg__isOpen, _filled_guard($scope2_reason, 1), "e");
		_patch_fill($scope2_id, "va6", n, 1);
		_scope($scope2_id, {
			e: text,
			f: n
		}) || _filled_guard($scope2_reason, 1) && _patch_write($scope2_id, "xe", text, !_server_guard($scope2_reason, 1));
		$wg__isOpen || _resume_branch($scope2_id);
	}, $scope0_id) };
	const Outer = { content: _content_resume("a8", ({ on, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
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
				_html(`<i>${_text_resume($scope5_id, "a", label, 1, $scope3_reason, 1)}</i>`);
				_client_guard($scope3_reason, 1) && _patch_init($scope5_id, "a7");
				_scope($scope5_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 0), void 0, void 0, void 0, ["a3"], $scope3_reason, 0);
		_client_guard($scope3_reason, 0) && _patch_write($scope3_id, "wf", label, 1);
		_scope($scope3_id, {
			f: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 1)) && label,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			Outer.content({
				on: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a9");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_dynamic_tag($scope0_id, "b", Outer, {
		on: true,
		label: "dyn"
	}, 16);
	_dynamic_tag($scope0_id, "c", Inner, {
		isOpen: true,
		text: "u"
	}, 24);
	_html(`<button id=t>toggle</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		i: open,
		j: Inner,
		l: Outer
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va11", input.label, !_server_guard($scope0_reason, 1));
}, 1);
