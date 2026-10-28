// counter.marko
var counter_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// other.marko
var other_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</i>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/chooser.marko
var chooser_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "e0");
	_scope($scope0_id, {
		e: input.Tag,
		f: input.label,
		g: show
	});
});

// tags/card.marko
var card_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "d0");
	_scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("f", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	card_default({ content: o });
	_script($scope0_id, "f0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_label__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 0, 0, $wg__input_which__OR__input_label);
	_set_scope_reason($wg__input_which__OR__input_label << 1);
	const $childScope = _peek_scope_id();
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("c1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_label__OR__input_show && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c0", $wg__input_label);
				$wg__input_label || $wi__input_label__OR__input_show && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_label__OR__input_show && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", $wg__input_show, $wg__input_show);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		f: $wi__input_label && input.which,
		g: _write_if($scope0_reason, 1) && input.label,
		b: _write_if($scope0_reason, 0) && _existing_scope($childScope),
		j: $wi__input_label && $input_label__closures
	});
}, 1);
