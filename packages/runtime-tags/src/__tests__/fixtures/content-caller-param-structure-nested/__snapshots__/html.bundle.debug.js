// tags/toggle-if.marko
var toggle_if_default = _template("__tests__/tags/toggle-if.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle-if.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_open);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/toggle-if.marko", 0, { input_content: ["input.content"] });
});

// tags/toggle-for.marko
var toggle_for_default = _template("__tests__/tags/toggle-for.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_until(input.open ? 1 : 0, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle-for.marko", "1:2");
	}, 0, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_open);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/toggle-for.marko", 0, { input_content: ["input.content"] });
});

// tags/toggle-tag.marko
var toggle_tag_default = _template("__tests__/tags/toggle-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_open__OR__input_content = _write_if($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.open ? "div" : "section", {}, _content("__tests__/tags/toggle-tag.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_open__OR__input_content && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/toggle-tag.marko", "1:4"), "__tests__/tags/toggle-tag.marko_1_input_content#0:4/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_open__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id), 0, $wg__input_open);
	$wi__input_open__OR__input_content && _scope($scope0_id, {
		input_content: _write_if($scope0_reason, 1) && input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures
	}, "__tests__/tags/toggle-tag.marko", 0, { input_content: ["input.content"] });
});

// tags/param-host.marko
var param_host_default = _template("__tests__/tags/param-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_open__OR__input_label = _write_if($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_open = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope = _peek_scope_id();
	toggle_if_default({
		open: input.open,
		content: _content_resume("__tests__/tags/param-host.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>if ${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
			$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/param-host.marko", "1:2"), "__tests__/tags/param-host.marko_1_input_label#0:7/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope2 = _peek_scope_id();
	toggle_for_default({
		open: input.open,
		content: _content_resume("__tests__/tags/param-host.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>for ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
			$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/8": $wi__input_label && 1
			}, "__tests__/tags/param-host.marko", "4:2"), "__tests__/tags/param-host.marko_2_input_label#0:7/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope2_id);
		}, $scope0_id)
	});
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope3 = _peek_scope_id();
	toggle_tag_default({
		open: input.open,
		content: _content_resume("__tests__/tags/param-host.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>tag ${_text_resume($scope3_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
			$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/8": $wi__input_label && 2
			}, "__tests__/tags/param-host.marko", "7:2"), "__tests__/tags/param-host.marko_3_input_label#0:7/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope3_id);
		}, $scope0_id)
	});
	_dynamic_tag($scope0_id, "#text/3", input.open ? "div" : "section", {}, _content("__tests__/tags/param-host.marko_4*content", () => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html(`<p>own ${_text_resume($scope4_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
		$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/8": $wi__input_label && 3
		}, "__tests__/tags/param-host.marko", "10:4"), "__tests__/tags/param-host.marko_4_input_label#0:7/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope4_id);
	}, $scope0_id), 0, $wg__input_open);
	$wi__input_open__OR__input_label && _scope($scope0_id, {
		input_label: $wi__input_open && input.label,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"#childScope/0": $wi__input_open && _existing_scope($childScope),
		"#childScope/1": $wi__input_open && _existing_scope($childScope2),
		"#childScope/2": $wi__input_open && _existing_scope($childScope3)
	}, "__tests__/tags/param-host.marko", 0, { input_label: ["input.label"] });
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_open__OR__input_label << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	param_host_default({
		open: input.open,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
});

// tags/define-host.marko
var define_host_default = _template("__tests__/tags/define-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_open = _write_guard($scope0_reason, 2), $wi__input_open = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Sel = { content: _content("__tests__/tags/define-host.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__open = _write_if($scope1_reason, 0), $wg__open = _write_guard($scope1_reason, 0);
		_set_scope_reason($wg__open << 1 | $wg__open << 3);
		const $childScope = _peek_scope_id();
		toggle_if_default({
			open,
			content: _content_resume("__tests__/tags/define-host.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>if ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
				($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/define-host.marko", "2:4"), "__tests__/tags/define-host.marko_2_input_label#0:3/subscribe", $wg__input_label);
				$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope2_id);
			}, $scope1_id)
		});
		_set_scope_reason($wg__open << 1 | $wg__open << 3);
		const $childScope2 = _peek_scope_id();
		toggle_for_default({
			open,
			content: _content_resume("__tests__/tags/define-host.marko_3*content", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>for ${_text_resume($scope3_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
				($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 1
				}, "__tests__/tags/define-host.marko", "5:4"), "__tests__/tags/define-host.marko_3_input_label#0:3/subscribe", $wg__input_label);
				$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope3_id);
			}, $scope1_id)
		});
		_set_scope_reason($wg__open << 1 | $wg__open << 3);
		const $childScope3 = _peek_scope_id();
		toggle_tag_default({
			open,
			content: _content_resume("__tests__/tags/define-host.marko_4*content", () => {
				const $scope4_reason = _scope_reason();
				const $scope4_id = _scope_id();
				_html(`<p>tag ${_text_resume($scope4_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
				($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 2
				}, "__tests__/tags/define-host.marko", "8:4"), "__tests__/tags/define-host.marko_4_input_label#0:3/subscribe", $wg__input_label);
				$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope4_id);
			}, $scope1_id)
		});
		_dynamic_tag($scope1_id, "#text/3", open ? "div" : "section", {}, _content("__tests__/tags/define-host.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			_html(`<p>own ${_text_resume($scope5_id, "#text/0", input.label, $wg__input_label * 2)}</p>`);
			($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope5_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_label/5": $wi__input_label && 3
			}, "__tests__/tags/define-host.marko", "11:6"), "__tests__/tags/define-host.marko_5_input_label#0:3/subscribe", $wg__input_label);
			$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope5_id);
		}, $scope1_id), 0, $wg__open);
		($wi__input_label || $wi__open) && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__open && _existing_scope($childScope),
			"#childScope/1": $wi__open && _existing_scope($childScope2),
			"#childScope/2": $wi__open && _existing_scope($childScope3)
		}, "__tests__/tags/define-host.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason($wg__input_open << 1);
	const $childScope4 = _peek_scope_id();
	Sel.content({ open: input.open });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_label: $wi__input_open && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"#childScope/0": $wi__input_open && _existing_scope($childScope4)
	}, "__tests__/tags/define-host.marko", 0, { input_label: ["input.label"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_set_scope_reason(10 | $wg__input_label << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		open,
		label: input.label
	});
	_set_scope_reason(34 | $wg__input_label << 3);
	const $childScope2 = _peek_scope_id();
	define_host_default({
		open,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
