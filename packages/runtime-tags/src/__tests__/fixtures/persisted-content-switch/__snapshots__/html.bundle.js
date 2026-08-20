// tags/widget/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template_persisted("b", (input) => {
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
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a4;${_w0};${_w1}`)(((_w0) => `D/${_w0}&%b l`)("D%l"), ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)),
	a2: "a2;Db%;<i>B:<!></i>",
	a3: "a3,<b>A</b>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_kind = _source_guard($scope0_reason, 0), $sg__input_inner = _source_guard($scope0_reason, 1), $si__input_inner = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	widget_default({ content: _content_elide("a1", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope6_id = _scope_id();
				_html("<b>A</b>");
				$scope0_reason && writeScope($scope6_id, {});
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:<!>${_patch_text($scope2_id, "a", input.kind, $scope0_owned, 0)}${_el_resume($scope2_id, "a")}</i>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_kind__closures, writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: 1
				}));
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, ["a3", "a2"]);
		$scope0_reason && _subscribe($input_kind__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	if ($scope0_reason) _if(() => {
		{
			const $scope3_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			widget_default({ content: _content_elide("a0", () => {
				_persisted_reason();
				const $scope4_id = _scope_id();
				if ($scope0_reason) _if(() => {
					if (input.inner === "a") {
						const $scope7_id = _scope_id();
						_html("<b>A</b>");
						$scope0_reason && writeScope($scope7_id, {});
						return 0;
					} else if (input.inner === "b") {
						const $scope5_id = _scope_id();
						_html(`<i>B:<!>${_escape(input.inner)}${_el_resume($scope5_id, "a")}</i>`);
						_subscribe($si__input_inner && $input_inner__closures, writeScope($scope5_id, {
							_: _scope_with_id($scope4_id),
							Cj: 1
						}));
						return 1;
					}
				}, $scope4_id, "a", $sg__input_inner, $sg__input_inner, $sg__input_inner, 0, 1);
				_subscribe($si__input_inner && $input_inner__closures, writeScope($scope4_id, { _: _scope_with_id($scope3_id) }));
				_resume_branch($scope4_id);
			}, $scope3_id) });
			writeScope($scope3_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	$scope0_reason ? writeScope($scope0_id, {
		f: input.kind,
		g: input.inner,
		h: open,
		i: $input_kind__closures,
		a: _existing_scope($childScope),
		j: $input_inner__closures
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.inner);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
