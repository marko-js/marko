// tags/reader.marko
var reader_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { d: input.get });
});

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b__OR__input_a = _write_guard($scope0_reason, 0), $wg__input_b = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 2), $wg__input_mode = _write_guard($scope0_reason, 6), $wi__input_b = _write_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_a = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = /* @__PURE__ */ new Set();
			const c = input.b + "!";
			const frag = { content: _content_resume("b1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", input.a + c, $wg__input_b__OR__input_a)}</em><i>${_text_resume($scope2_id, "b", c, $wg__input_b)}</i>`);
				$wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _subscribe($wi__input_b && $if_content__c__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b2", $wg__input_b__OR__input_a || $wg__input_b), "b3", $wg__input_b__OR__input_a || $wg__input_b);
				$wg__input_b__OR__input_a || $wg__input_b || $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _resume_branch($scope2_id);
			}, $scope1_id) };
			_html("<section>");
			_attr_content("a", $scope1_id, input.mode ? frag.content : null, $wg__input_mode);
			_html(`</section>${_el_resume($scope1_id, "a", $wg__input_mode)}`);
			const $childScope = _peek_scope_id();
			reader_default({ get: _resume(function() {
				return c;
			}, "b0", $scope1_id) });
			_scope($scope1_id, {
				c,
				e: _write_if($scope0_reason, 6) && frag?.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				k: $wi__input_b && $if_content__c__closures,
				b: $wi__input_b && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	$wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope($scope0_id, {
		e: $wi__input_show && input.b,
		f: _write_if($scope0_reason, 1) && input.a,
		g: $wi__input_show && input.mode,
		i: $wi__input_a && $input_a__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=m>m</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: m,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
