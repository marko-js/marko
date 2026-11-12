// tags/wrap.marko
const $template = "<div><!></div>";
_shells({ b: "b;D%;<div><!></div>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
const $D_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $D_content__template = $template;
_shells({ a: `a !a5;${((_w0) => `/${_w0}& D l`)($D_content__walks)};${((_w0) => `${_w0}<button> </button>`)($D_content__template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	const D = { content: _content("a3", ({ v }) => {
		const $scope1_id = _scope_id();
		const $D_content__z__closures = /* @__PURE__ */ new Set();
		_scope_reason();
		const $scope1_page = _page_render();
		const z = v + $global$1.flag;
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		wrap_default({ content: _content("a2", () => {
			_scope_reason();
			const $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`<p${_attr("data-z", z + $global$1.mark, $scope2_id, "a", 4, 0)}></p>${_el_mark($scope2_id, "a")}`);
			_fill_global_subscribe("a0", $scope2_id);
			_subscribe(_unfilled_if() && $D_content__z__closures, _scope($scope2_id, { _: $scope2_page && _scope_with_id($scope1_id) }));
		}, $scope1_id) });
		_patch_child_end();
		_fill_global_subscribe("a4", $scope1_id);
		_unfilled_if() && _patch_write($scope1_id, "wf", z, 1);
		_scope($scope1_id, {
			f: _unfilled_if() && z,
			g: $scope1_page && _unfilled_if() && $D_content__z__closures,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	D.content({ v: "a" });
	_patch_child_end();
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		d: n,
		a: _existing_scope($childScope2)
	});
}, 1);
