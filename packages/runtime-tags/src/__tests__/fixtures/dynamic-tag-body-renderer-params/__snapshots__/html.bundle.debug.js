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
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wg__input_show__OR__input_native__OR__input_label = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($wg__input_show << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 0) << 5 | $wg__input_show__OR__input_native__OR__input_label << 7 | $wg__input_show << 11 | _write_guard($scope0_reason, 4) << 13);
	const $childScope = _peek_scope_id();
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("__tests__/template.marko_1*content", ({ content }) => {
			const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope1_id, "#button/0")}`);
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "#text/0", content, {}, 0, 0, $wg__content);
					_scope($scope2_id, {}, "__tests__/template.marko", "6:8");
					return 0;
				}
			}, $scope1_id, "#text/1");
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				content,
				open
			}, "__tests__/template.marko", "3:6", {
				content: "3:14",
				open: "4:12"
			});
		}, $scope0_id) })
	});
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
