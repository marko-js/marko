// tags/card/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0,loading",
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a5: /*@__PURE__*/ ((_w0, _w1) => `a5;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({ content: _content_elide("a4", () => {
				_persisted_reason();
				const $scope2_id = _scope_id();
				_try($scope2_id, "a", _content_resume("a3", () => {
					const $scope3_id = _scope_id();
					_persisted_reason();
					_await($scope3_id, "a", Promise.resolve(input.value), () => {
						const $scope4_id = _scope_id();
						_html(`<em>${_patch_text($scope4_id, "a", input.value, void 0, $scope0_owned, 2)}</em>`);
						_scope($scope4_id, {
							_: _scope_with_id($scope3_id),
							Cf: 1
						});
					}, 1, "a2");
					$scope0_reason && _subscribe(_source_if($scope0_reason, 2) && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					$scope0_reason && _resume_branch($scope3_id);
				}, $scope2_id), { placeholder: attrTag({ content: _content_record("a0", $scope2_id) }) });
				$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a5"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		e: input.value,
		f: $input_value__closures
	});
}, 1, () => [card_default]);
