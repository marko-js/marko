// tags/card/index.marko
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.fn("x"), $wg__input)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_key__OR__input_title = _write_guard($scope0_reason, 0), $wg__input_title__OR__input_pre = _write_guard($scope0_reason, 1), $wg__input_title = _write_guard($scope0_reason, 3), $wi__input_title = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const key = input.key;
	const o = {
		[key]: _resume((s) => s + ":" + input.title, "__tests__/template.marko_0/o", $scope0_id),
		key: input.title
	};
	const [first] = [...input.pre, _resume((s) => s + "=" + input.title, "__tests__/template.marko_0/first", $scope0_id)];
	const tag = _resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_key__OR__input_title << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: o[key] });
			_set_scope_reason($wg__input_title__OR__input_pre << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: first });
			_set_scope_reason($wg__input_title << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: tag });
			_html(`<p>${_text_resume($scope1_id, "#text/3", o.key, $wg__input_key__OR__input_title)}</p>`);
			_scope($scope1_id, {
				"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope),
				"#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3)
			}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		input_pre: $wi__input_title && input.pre,
		key,
		o,
		o_key: o.key,
		first,
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_pre: ["input.pre"],
		key: "1:8",
		o: "2:8",
		o_key: ["o.key", "2:8"],
		first: "3:9",
		tag: "4:8",
		show: "5:6"
	});
}, 1);
