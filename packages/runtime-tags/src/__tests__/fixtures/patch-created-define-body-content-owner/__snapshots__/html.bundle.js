// template.marko
const $Wrap_content2__walks = "D lD%l";
const $Wrap_content2__template = "<p> </p><div><!></div>";
_shells({
	a5: "a5 a4!a2; D%c%;<button><!>:<!></button>",
	a: "a !a8;b%b ;<!><!><button>+</button>",
	a7: `a7 >a>a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Wrap_content2__walks)};${$Wrap_content2__template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Wrap = { content: _content("a0", ({ content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<p>${_text_mark($scope3_id, "a", count)}</p><div>`);
		_dynamic_tag($scope3_id, "b", content, {}, 2, 0, 0, _write_guard($scope3_reason, 0), $scope3_reason, 0);
		_html("</div>");
		_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__n__closures = /* @__PURE__ */ new Set();
			let n = 0;
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 1, 0, $scope0_id);
			Wrap.content({ content: _content("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "b", input.label, 1, $scope0_reason, 2)}:${_text_mark($scope2_id, "c", n, 2)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a2");
				$cg__input_label && _patch_render($scope2_id, "a3");
				_subscribe($if_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a3"), "a4");
			}, $scope1_id, 0) });
			_patch_child_end();
			_patch_fill($scope1_id, "va6", n, 1);
			_scope($scope1_id, {
				b: n,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				j: $if_content__n__closures,
				a: _existing_scope($childScope)
			});
			_resume_branch($scope1_id);
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a7"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		g: count,
		i: $count__closures,
		h: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a9", "f");
}, 1);
