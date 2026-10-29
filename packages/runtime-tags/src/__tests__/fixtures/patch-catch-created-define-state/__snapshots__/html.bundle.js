// lazy-child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var lazy_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { g: count });
});

// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $LazyBody_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $LazyBody_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $ChildBody_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks);
const $ChildBody_content__template = $template;
const $OwnBody_content__walks = " Db%l";
const $OwnBody_content__template = "<button>own:<!></button>";
const $Inner_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Inner_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
function boom(error) {
	throw error;
}
const $LazyChild_withLoadAssets = withLoadAssets(() => lazy_child_default, "b", flush, "_b");
_shells({
	c15: /*@__PURE__*/ (() => `c15${_shell_marker(_shell_setup([[], []], [">b>", [[""], []]], [">b>", _shell_setup([["c2"], []], ["b>", $setup$1])], [">c>", [[""], []]], [">c>", _shell_setup([["c5"], []], ["a>", $setup])], [">d>", [[], ["c7"]]], [">e>", [[""], []]], [">e>", _shell_setup([[], []], [">a>", [[""], []]], [">a>", _shell_setup([["c11"], []], ["b>", $setup$1])])]))};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D l/${_w0}&/${_w1}&/${_w2}&/${_w3}&b`)($LazyBody_content__walks, $ChildBody_content__walks, $OwnBody_content__walks, $Outer_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<b> </b>${_w0}${_w1}${_w2}${_w3}<!>`)($LazyBody_content__template, $ChildBody_content__template, $OwnBody_content__template, $Outer_content__template)}`)(),
	c16: "c16;D ;<p> </p>",
	c: "c !;b%;<!><!><!>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	const LazyBody = { content: _content("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		$LazyChild_withLoadAssets({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_init($scope1_id, "c1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), "c2");
	}, $scope0_id) };
	const ChildBody = { content: _content("c3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
		child_default({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_init($scope2_id, "c4");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2),
			Cf: $wi__input_label && 1
		}), "c5");
	}, $scope0_id) };
	const OwnBody = { content: _content("c6", () => {
		const $scope6_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<button>own:${_text_resume($scope6_id, "b", count, 2)}</button>${_el_resume($scope6_id, "a")}`);
		_script($scope6_id, "c7");
		_patch_fill($scope6_id, "vc8", count, 1);
		_scope($scope6_id, { c: count });
	}, $scope0_id) };
	const Inner = { content: _content("c9", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope3 = _peek_scope_id($scope3_id, "b", 2);
		$LazyChild_withLoadAssets({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_init($scope3_id, "c10");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope3),
			Cf: $wi__input_label && 2
		}), "c11");
	}, $scope0_id) };
	const Outer = { content: _content("c12", () => {
		const $scope7_id = _scope_id();
		_scope_reason();
		const $childScope4 = _peek_scope_id($scope7_id, "a", 3, 0, $scope0_id);
		Inner.content({});
		_patch_child_end();
		_scope($scope7_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope4)
		});
	}, $scope0_id) };
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_resume($scope4_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope4_id, $cg__input_error ? "c13" : "c14");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope4_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "c14");
	}, void 0, (err) => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html(`<b>${_text_resume($scope5_id, "a", err.message, 1, 4, 0)}</b>`);
		const $childScope5 = _peek_scope_id($scope5_id, "b", 4, 0, $scope0_id);
		LazyBody.content({});
		_patch_child_end();
		const $childScope6 = _peek_scope_id($scope5_id, "c", 5, 0, $scope0_id);
		ChildBody.content({});
		_patch_child_end();
		const $childScope7 = _peek_scope_id($scope5_id, "d", 6, 0, $scope0_id);
		OwnBody.content({});
		_patch_child_end();
		const $childScope8 = _peek_scope_id($scope5_id, "e", 7, 0, $scope0_id);
		Outer.content({});
		_patch_child_end();
		_scope($scope5_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope5),
			c: _existing_scope($childScope6),
			d: _existing_scope($childScope7),
			e: _existing_scope($childScope8)
		});
	}, 0, "c15", "c16", 1, 1, 1);
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc17", input.label, !_server_guard($scope0_reason, 0));
}, 1);
