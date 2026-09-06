// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D%;<section><!></section>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)("D%l");
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}&%b l`)("D%l"), ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1)),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;Db%;<i>B:<!></i>",
	"__tests__/template.marko_6*shell": "__tests__/template.marko_6*shell,<b>A</b>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_kind = _source_guard($scope0_reason, 0), $sg__input_inner = _source_guard($scope0_reason, 1), $si__input_inner = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_kind__closures = new Set();
	const $input_inner__closures = new Set();
	let open = true;
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	widget_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope6_id = _scope_id();
				_html("<b>A</b>");
				$scope0_reason && _scope($scope6_id, {}, "__tests__/template.marko", "4:6");
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_patch_text($scope2_id, "#text/0", input.kind, 2, $scope0_owned, 0)}</i>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_kind": 1
				}, "__tests__/template.marko", "5:6"));
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, ["__tests__/template.marko_6*shell", "__tests__/template.marko_2*shell"], $scope0_owned, 0);
		$scope0_reason && _subscribe($input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		$sg__input_kind || $scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id) });
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope3_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			widget_default({ content: _content_elide("__tests__/template.marko_4*content", () => {
				const $scope4_reason = _persisted_reason();
				const $scope4_id = _scope_id();
				if ($scope0_reason) _if(() => {
					if (input.inner === "a") {
						const $scope7_id = _scope_id();
						_html("<b>A</b>");
						$scope0_reason && _scope($scope7_id, {}, "__tests__/template.marko", "9:8");
						return 0;
					} else if (input.inner === "b") {
						const $scope5_id = _scope_id();
						_html(`<i>B:${_text_resume($scope5_id, "#text/0", input.inner, 2)}</i>`);
						_subscribe($si__input_inner && $input_inner__closures, _scope($scope5_id, {
							_: _scope_with_id($scope4_id),
							"ClosureSignalIndex:input_inner": 1
						}, "__tests__/template.marko", "10:8"));
						return 1;
					}
				}, $scope4_id, "#text/0", $sg__input_inner, $sg__input_inner, $sg__input_inner, 0, 1);
				_subscribe($si__input_inner && $input_inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "8:6"));
				$sg__input_inner || _resume_branch($scope4_id);
			}, $scope3_id) });
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_kind: input.kind,
		input_inner: input.inner,
		open,
		"ClosureScopes:input_kind": $input_kind__closures,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_inner": $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_kind: ["input.kind"],
		input_inner: ["input.inner"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.inner);
}, 1, () => [widget_default]);
