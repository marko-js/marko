// tags/card/index.marko
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.fn("x"), $wg__input)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { fmt, wrap, quoted, keyed, templated } = {
		fmt: _resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated", $scope0_id),
		wrap: _resume(function(s) {
			return "(" + s + input.title + ")";
		}, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated2", $scope0_id),
		"quoted": _resume((s) => s + "'" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated3", $scope0_id),
		["keyed"]: _resume((s) => s + "[" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated4", $scope0_id),
		[`templated`]: _resume((s) => s + "`" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated5", $scope0_id)
	};
	const o = {
		get: _resume((s) => s + "=" + input.title, "__tests__/template.marko_0/o", $scope0_id),
		0: _resume((s) => s + "0" + input.title, "__tests__/template.marko_0/o2", $scope0_id)
	};
	const tag = _resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_title << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_set_scope_reason($wg__input_title << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: wrap });
			_set_scope_reason($wg__input_title << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: quoted });
			_set_scope_reason($wg__input_title << 1);
			const $childScope4 = _peek_scope_id();
			card_default({ fn: keyed });
			_set_scope_reason($wg__input_title << 1);
			const $childScope5 = _peek_scope_id();
			card_default({ fn: templated });
			_set_scope_reason($wg__input_title << 1);
			const $childScope6 = _peek_scope_id();
			card_default({ fn: o.get });
			_set_scope_reason($wg__input_title << 1);
			const $childScope7 = _peek_scope_id();
			card_default({ fn: o[0] });
			_set_scope_reason($wg__input_title << 1);
			const $childScope8 = _peek_scope_id();
			card_default({ fn: tag });
			_scope($scope1_id, {
				"#childScope/0": $wi__input_title && _existing_scope($childScope),
				"#childScope/1": $wi__input_title && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3),
				"#childScope/3": $wi__input_title && _existing_scope($childScope4),
				"#childScope/4": $wi__input_title && _existing_scope($childScope5),
				"#childScope/5": $wi__input_title && _existing_scope($childScope6),
				"#childScope/6": $wi__input_title && _existing_scope($childScope7),
				"#childScope/7": $wi__input_title && _existing_scope($childScope8)
			}, "__tests__/template.marko", "17:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		fmt,
		wrap,
		quoted,
		keyed,
		templated,
		o_get: o.get,
		o_0: o[0],
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		fmt: "1:10",
		wrap: "1:15",
		quoted: "1:21",
		keyed: "1:29",
		templated: "1:36",
		o_get: ["o.get", "10:8"],
		o_0: ["o[0]", "10:8"],
		tag: "14:8",
		show: "15:6"
	});
}, 1);
