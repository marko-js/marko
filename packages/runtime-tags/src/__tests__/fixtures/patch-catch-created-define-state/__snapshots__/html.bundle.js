// lazy-child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var lazy_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_mark($scope0_id, "c", count, 2)}</button>${_el_mark($scope0_id, "a")}`);
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
	_html(`<button>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}:${_text_mark($scope0_id, "c", count, 2)}</button>${_el_mark($scope0_id, "a")}`);
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
	c11: `c11${_shell_marker([[], []], [">b>", [[""], []]], [">b>", _shell_setup([[], []], ["b>", $setup$1])], [">c>", [[""], []]], [">c>", _shell_setup([[], []], ["a>", $setup])], ["d>", [[], ["c5"]]], [">e>", [[""], []]], [">e>", _shell_setup([[], []], [">a>", [[""], []]], [">a>", _shell_setup([[], []], ["b>", $setup$1])])])};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D l/${_w0}&/${_w1}&/${_w2}&/${_w3}&b`)($LazyBody_content__walks, $ChildBody_content__walks, $OwnBody_content__walks, $Outer_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<b> </b>${_w0}${_w1}${_w2}${_w3}<!>`)($LazyBody_content__template, $ChildBody_content__template, $OwnBody_content__template, $Outer_content__template)}`,
	c12: "c12;D ;<p> </p>",
	c: "c;b%;<!><!><!>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	const LazyBody = { content: _content("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		$LazyChild_withLoadAssets({ label: input.label });
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "c1", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}), $cg__input_label && "c1", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const ChildBody = { content: _content("c2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
		child_default({ label: input.label });
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "c3", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2),
			Cf: $wi__input_label && 1
		}), $cg__input_label && "c3", 0);
		_resume_branch($scope2_id);
	}, $scope0_id) };
	const OwnBody = { content: _content("c4", () => {
		const $scope6_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<button>own:${_text_mark($scope6_id, "b", count, 2)}</button>${_el_mark($scope6_id, "a")}`);
		_script($scope6_id, "c5");
		_patch_fill($scope6_id, "vc6", count, 1);
		_scope($scope6_id, { c: count });
	}, $scope0_id) };
	const Inner = { content: _content("c7", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope3 = _peek_scope_id($scope3_id, "b", 2);
		$LazyChild_withLoadAssets({ label: input.label });
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope3_id, "c8", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope3),
			Cf: $wi__input_label && 2
		}), $cg__input_label && "c8", 0);
		_resume_branch($scope3_id);
	}, $scope0_id) };
	const Outer = { content: _content("c9", () => {
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
		_html(`<p>${_text_mark($scope4_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope4_id, "c10", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope4_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "c10");
	}, void 0, (err) => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html(`<b>${_text_mark($scope5_id, "a", err.message, 1, 4, 0)}</b>`);
		const $childScope5 = _peek_scope_id($scope5_id, "b", 4, 0, $scope0_id);
		LazyBody.content({});
		_patch_child_end();
		const $childScope6 = _peek_scope_id($scope5_id, "c", 5, 0, $scope0_id);
		ChildBody.content({});
		_patch_child_end();
		const $childScope7 = _peek_scope_id($scope5_id, "d", 6);
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
	}, 0, "c11", "c12", 1, 1, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "c13", "d");
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
}, 1);
