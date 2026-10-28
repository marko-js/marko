// tags/wrap.marko
_shells({ d: "d;Db%;<div><header><h2>Section title</h2><p>Some static introduction text for this wrapper.</p></header><!><footer><a href=/more>Read more</a></footer><aside><h3>Related</h3><ul><li>First related item</li><li>Second related item</li><li>Third related item</li></ul></aside></div>" });
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div><header><h2>Section title</h2><p>Some static introduction text for this wrapper.</p></header>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("<footer><a href=/more>Read more</a></footer><aside><h3>Related</h3><ul><li>First related item</li><li>Second related item</li><li>Third related item</li></ul></aside></div>");
	_scope($scope0_id, {});
});

// tags/show-value.marko
_shells({ c: "c;D ;<em> </em>" });
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/card.marko
_shells({ b: "b !;b%;<!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html("<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>");
			_set_scope_reason(0);
			_patch_child(0);
			wrap_default({ content: _content("b1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<b>${_text_resume($scope2_id, "a", n)}</b> <i>${_text_resume($scope2_id, "b", input.w, $wg__input_w)}</i>`);
				_subscribe($n__closures, _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0"));
			}, $scope1_id) });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 1);
			show_value_default({ value: input.w });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: $wi__input_w && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", n, 1);
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures,
		h: $n__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3), $cg__input_n__OR__input_w = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_w = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 1, 0, 0, $wg__input_on__OR__input_n__OR__input_w, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.n,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_n__OR__input_w && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_n__OR__input_w && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_w && _patch_fill($scope0_id, "va1", input.n, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_w && _content_withhold(input.n), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_n && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_n && _content_withhold(input.w));
}, 1);
