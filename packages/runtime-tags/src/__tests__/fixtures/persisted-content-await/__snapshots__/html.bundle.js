// tags/card/index.marko
const $template = "<section><!></section>";
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_value = _source_if($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({ content: _content_elide("a1", () => {
				_persisted_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", Promise.resolve(input.value), () => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", input.value, $scope0_owned, 2)}${_el_resume($scope3_id, "a")}</em>`);
					_subscribe($si__input_value && $input_value__closures, writeScope($scope3_id, {
						_: _scope_with_id($scope2_id),
						Cf: 1
					}));
					_resume_branch($scope3_id);
				}, void 0, "a0");
				$scope0_reason && _subscribe($si__input_value && $input_value__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.value,
		f: $input_value__closures
	});
}, 1, () => [card_default]);
