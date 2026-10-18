// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Inner_content__template);
_shells({
	a: "a !a5;b%b%b%b ;<!><!><!><!><button id=t>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0 a9 a10;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("a2", ({ isOpen, text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0);
		let n = 1;
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", text, _write_guard($scope2_reason, 1))}${_text_resume($scope4_id, "b", n, 2)}</em><button class=inc>+</button>${_el_resume($scope4_id, "c")}`);
				_script($scope4_id, "a1");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen);
		_script($scope2_id, "a3", $wg__isOpen, 1);
		_scope($scope2_id, {
			e: text,
			f: n
		});
		$wg__isOpen || _resume_branch($scope2_id);
	}, $scope0_id) };
	const Outer = { content: _content_resume("a4", ({ on, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__label = _write_guard($scope3_reason, 2), $wg__on = _write_guard($scope3_reason, 1);
		_set_scope_reason(0);
		Inner.content({
			isOpen: true,
			text: "const"
		});
		if ($scope0_page) _if(() => {
			if (on) {
				const $scope5_id = _scope_id();
				_html(`<i>${_text_resume($scope5_id, "a", label, $wg__label)}</i>`);
				_write_if($scope3_reason, 0) && _scope($scope5_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", _write_guard($scope3_reason, 0), $wg__on, 0, 0, 1);
		_write_if($scope3_reason, 1) && _scope($scope3_id, { f: label });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a");
			Outer.content({
				on: true,
				label: input.label
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_dynamic_tag($scope0_id, "b", Outer, {
		on: true,
		label: "dyn"
	});
	_dynamic_tag($scope0_id, "c", Inner, {
		isOpen: true,
		text: "u"
	});
	_html(`<button id=t>toggle</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wj", Inner, 1);
	_patch_write($scope0_id, "wl", Outer, 1);
	_patch_value($scope0_id, "va7", open, 1);
	$scope0_page ? _scope($scope0_id, {
		h: _write_if($scope0_reason, 0) && input.label,
		i: open,
		j: Inner,
		l: Outer
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1));
}, 1);
