// tags/child.marko
const $Count_content__walks = "D l";
const $Count_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Count_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Count_content__walks);
const $setup = [["a>b4"], ["b2"]];
_shells({
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0 b4;${_w0};${_w1}`)($Count_content__walks, $Count_content__template),
	b: /*@__PURE__*/ (() => `b a>b4!b2;${((_w0) => `b/${_w0}& b`)($Count_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Count_content__template)}`)()
});
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Count = { content: _content_elide("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", n)}</p>`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1");
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Count.content({});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb3", n, 1);
	_scope($scope0_id, {
		c: n,
		d: $n__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
