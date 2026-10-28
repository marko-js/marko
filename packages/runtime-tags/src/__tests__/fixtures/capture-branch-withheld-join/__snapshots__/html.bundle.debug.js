// tags/reader.marko
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/reader.marko", 0, { get: "1:10" });
});

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b__OR__input_a = _write_guard($scope0_reason, 0), $wg__input_b = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 2), $wg__input_mode = _write_guard($scope0_reason, 6), $wi__input_b = _write_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_a = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = new Set();
			const c = input.b + "!";
			const frag = { content: _content_resume("__tests__/tags/child.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_text_resume($scope2_id, "#text/0", input.a + c, $wg__input_b__OR__input_a)}</em><i>${_text_resume($scope2_id, "#text/1", c, $wg__input_b)}</i>`);
				$wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _subscribe($wi__input_b && $if_content__c__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "3:4"), "__tests__/tags/child.marko_2_input_a#0:5/subscribe", $wg__input_b__OR__input_a || $wg__input_b), "__tests__/tags/child.marko_2_c#1:2/subscribe", $wg__input_b__OR__input_a || $wg__input_b);
				$wg__input_b__OR__input_a || $wg__input_b || $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _resume_branch($scope2_id);
			}, $scope1_id) };
			_html("<section>");
			_attr_content("#section/0", $scope1_id, input.mode ? frag.content : null, $wg__input_mode);
			_html(`</section>${_el_resume($scope1_id, "#section/0", $wg__input_mode)}`);
			const $childScope = _peek_scope_id();
			reader_default({ get: _resume(function() {
				return c;
			}, "__tests__/tags/child.marko_1/get", $scope1_id) });
			_scope($scope1_id, {
				c,
				frag_content: _write_if($scope0_reason, 6) && frag?.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				"ClosureScopes:c/10": $wi__input_b && $if_content__c__closures,
				"#childScope/1": $wi__input_b && _existing_scope($childScope)
			}, "__tests__/tags/child.marko", "1:2", {
				c: "2:10",
				frag_content: ["frag.content", "3:11"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	$wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope($scope0_id, {
		input_b: $wi__input_show && input.b,
		input_a: _write_if($scope0_reason, 1) && input.a,
		input_mode: $wi__input_show && input.mode,
		"ClosureScopes:input_a/8": $wi__input_a && $input_a__closures
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"],
		input_mode: ["input.mode"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $wg__input_x = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(10282 | ($wg__input_show << 7 | $wg__input_x << 9));
	const $childScope = _peek_scope_id();
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_set_scope_reason(8232 | (_write_guard($scope0_reason, 0) << 1 | $wg__input_show << 7 | $wg__input_x << 9 | _write_guard($scope0_reason, 3) << 11));
	const $childScope2 = _peek_scope_id();
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
		mode: m
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=m>m</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		m,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		m: "2:6"
	});
}, 1);
