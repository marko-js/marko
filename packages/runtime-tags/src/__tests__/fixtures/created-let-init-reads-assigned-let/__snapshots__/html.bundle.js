// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let c = input.content;
	_html(`<section><button>x</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/relay.marko
var relay_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let c = input.content;
	_html(`<section><button>y</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 0, 0, 0);
	_html("</section>");
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			card_default({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				$wg__input_label || _resume_branch($scope2_id);
			}, $scope1_id) });
			relay_default({ content: _content_resume("a3", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<em>relayed ${_text_resume($scope3_id, "a", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}), "a2", $wg__input_label);
				$wg__input_label || _resume_branch($scope3_id);
			}, $scope1_id) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
