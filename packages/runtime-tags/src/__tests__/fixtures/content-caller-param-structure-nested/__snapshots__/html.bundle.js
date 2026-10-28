// tags/toggle-if.marko
var toggle_if_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_open);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// tags/toggle-for.marko
var toggle_for_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_until(input.open ? 1 : 0, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_open);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// tags/toggle-tag.marko
var toggle_tag_default = _template("g", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_open__OR__input_content = _write_if($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.open ? "div" : "section", {}, _content("g0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_open__OR__input_content && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "g1", $wg__input_content);
		$wg__input_content || $wi__input_open__OR__input_content && _resume_branch($scope1_id);
	}, $scope0_id), 0, $wg__input_open);
	$wi__input_open__OR__input_content && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.content,
		f: $wi__input_content && $input_content__closures
	});
});

// tags/param-host.marko
var param_host_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_open__OR__input_label = _write_if($scope0_reason, 0), $wg__input_open = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_open = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope = _peek_scope_id();
	toggle_if_default({
		open: input.open,
		content: _content_resume("d1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>if ${_text_resume($scope1_id, "a", input.label, $wg__input_label * 2)}</p>`);
			$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "d0", $wg__input_label);
			$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope2 = _peek_scope_id();
	toggle_for_default({
		open: input.open,
		content: _content_resume("d3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>for ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</p>`);
			$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Ci: $wi__input_label && 1
			}), "d2", $wg__input_label);
			$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope2_id);
		}, $scope0_id)
	});
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope3 = _peek_scope_id();
	toggle_tag_default({
		open: input.open,
		content: _content_resume("d5", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>tag ${_text_resume($scope3_id, "a", input.label, $wg__input_label * 2)}</p>`);
			$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
				_: _scope_with_id($scope0_id),
				Ci: $wi__input_label && 2
			}), "d4", $wg__input_label);
			$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope3_id);
		}, $scope0_id)
	});
	_dynamic_tag($scope0_id, "d", input.open ? "div" : "section", {}, _content("d6", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<p>own ${_text_resume($scope4_id, "a", input.label, $wg__input_label * 2)}</p>`);
		$wi__input_open__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, {
			_: _scope_with_id($scope0_id),
			Ci: $wi__input_label && 3
		}), "d7", $wg__input_label);
		$wg__input_label || $wi__input_open__OR__input_label && _resume_branch($scope4_id);
	}, $scope0_id), 0, $wg__input_open);
	$wi__input_open__OR__input_label && _scope($scope0_id, {
		h: $wi__input_open && input.label,
		i: $wi__input_label && $input_label__closures,
		a: $wi__input_open && _existing_scope($childScope),
		b: $wi__input_open && _existing_scope($childScope2),
		c: $wi__input_open && _existing_scope($childScope3)
	});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_open__OR__input_label << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	param_host_default({
		open: input.open,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/define-host.marko
var define_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_open = _write_guard($scope0_reason, 2), $wi__input_open = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Sel = { content: _content("b8", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__open = _write_if($scope1_reason, 0), $wg__open = _write_guard($scope1_reason, 0);
		_set_scope_reason($wg__open << 1 | $wg__open << 3);
		const $childScope = _peek_scope_id();
		toggle_if_default({
			open,
			content: _content_resume("b1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>if ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</p>`);
				($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_label);
				$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope2_id);
			}, $scope1_id)
		});
		_set_scope_reason($wg__open << 1 | $wg__open << 3);
		const $childScope2 = _peek_scope_id();
		toggle_for_default({
			open,
			content: _content_resume("b3", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>for ${_text_resume($scope3_id, "a", input.label, $wg__input_label * 2)}</p>`);
				($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}), "b2", $wg__input_label);
				$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope3_id);
			}, $scope1_id)
		});
		_set_scope_reason($wg__open << 1 | $wg__open << 3);
		const $childScope3 = _peek_scope_id();
		toggle_tag_default({
			open,
			content: _content_resume("b5", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`<p>tag ${_text_resume($scope4_id, "a", input.label, $wg__input_label * 2)}</p>`);
				($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 2
				}), "b4", $wg__input_label);
				$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope4_id);
			}, $scope1_id)
		});
		_dynamic_tag($scope1_id, "d", open ? "div" : "section", {}, _content("b6", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_html(`<p>own ${_text_resume($scope5_id, "a", input.label, $wg__input_label * 2)}</p>`);
			($wi__input_label || $wi__open) && _subscribe($wi__input_label && $input_label__closures, _scope($scope5_id, {
				_: _scope_with_id($scope1_id),
				Cf: $wi__input_label && 3
			}), "b7", $wg__input_label);
			$wg__input_label || ($wi__input_label || $wi__open) && _resume_branch($scope5_id);
		}, $scope1_id), 0, $wg__open);
		($wi__input_label || $wi__open) && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__open && _existing_scope($childScope),
			b: $wi__open && _existing_scope($childScope2),
			c: $wi__open && _existing_scope($childScope3)
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_open << 1);
	const $childScope4 = _peek_scope_id();
	Sel.content({ open: input.open });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: $wi__input_open && input.label,
		f: $wi__input_label && $input_label__closures,
		a: $wi__input_open && _existing_scope($childScope4)
	});
});

// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: open,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
