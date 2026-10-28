// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	card_default({ content: o });
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
});

// tags/host.marko
var host_default = _template("__tests__/tags/host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_wrap = _write_guard($scope0_reason, 4), $wg__input_label = _write_guard($scope0_reason, 6), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (flag) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.wrap, {}, 0, 0, $wg__input_wrap);
			_scope($scope1_id, {}, "__tests__/tags/host.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", input.native ? "section" : input.wrap, {}, _content_resume("__tests__/tags/host.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				_html(`<i>${_text_resume($scope3_id, "#text/0", input.label, $wg__input_label)}</i>`);
				$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/tags/host.marko", "5:6"), "__tests__/tags/host.marko_3_input_label#0:8/subscribe", $wg__input_label);
				$wg__input_label || $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _resume_branch($scope3_id);
			}, $scope2_id, ($scope) => [{ input_label: input.label }, { _: $scope($scope0_id) }]), 0, $wg__input_wrap__OR__input_native);
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/host.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", _write_guard($scope0_reason, 2), _write_guard($scope0_reason, 5));
	_script($scope0_id, "__tests__/tags/host.marko_0");
	_scope($scope0_id, {
		input_wrap: input.wrap,
		input_native: _write_if($scope0_reason, 0) && input.native,
		input_label: _write_if($scope0_reason, 2) && input.label,
		flag,
		"ClosureScopes:input_label/12": $wi__input_label && $input_label__closures
	}, "__tests__/tags/host.marko", 0, {
		input_wrap: ["input.wrap"],
		input_native: ["input.native"],
		input_label: ["input.label"],
		flag: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 3), $wg__input_show__OR__input_label__OR__input_native = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			outer_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "1:17"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
				$wg__input_label || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id) });
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_html("<main>");
	_set_scope_reason($wg__input_show << 1 | _write_guard($scope0_reason, 5) << 3 | _write_guard($scope0_reason, 1) << 5 | $wg__input_show__OR__input_label__OR__input_native << 7 | $wg__input_show << 11 | $wg__input_label << 13);
	const $childScope = _peek_scope_id();
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("__tests__/template.marko_3*content", ({ content }) => {
			const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "#button/0")}`);
			_if(() => {
				if (open) {
					const $scope4_id = _scope_id();
					_dynamic_tag($scope4_id, "#text/0", content, {}, 0, 0, $wg__content);
					_scope($scope4_id, {}, "__tests__/template.marko", "7:8");
					return 0;
				}
			}, $scope3_id, "#text/1");
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, {
				content,
				open
			}, "__tests__/template.marko", "4:6", {
				content: "4:14",
				open: "5:12"
			});
		}, $scope0_id) })
	});
	_html("</main>");
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 3) && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
