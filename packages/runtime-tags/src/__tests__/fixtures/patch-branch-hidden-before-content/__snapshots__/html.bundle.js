// tags/wrap.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a5"]], ["b>", $setup$1]);
_shells({
	a2: "a2;D ;<em> </em>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D%b/${_w0}& Db%m`)("D%l")};${((_w0) => `<main><!>${_w0}<button>Count <!></button></main>`)($template)}`)(),
	a1: "a1;D ;<p class=error> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.error) {
			const $scope1_id = _scope_id();
			_html(`<p class=error>${_text_resume($scope1_id, "a", input.error, 1, $scope0_reason, 0)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	wrap_default({ content: _content("a4", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a2");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a3", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>Count ${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		i: count,
		k: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		b: _existing_scope($childScope)
	});
}, 1);
