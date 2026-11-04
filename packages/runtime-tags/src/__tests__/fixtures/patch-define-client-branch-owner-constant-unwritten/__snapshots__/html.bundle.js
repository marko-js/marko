// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
_shells({ a: `a;${((_w0) => `b/${_w0}&b`)($D_content__walks)};${((_w0) => `<!>${_w0}<!>`)($D_content__template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const D = { content: _content("a2", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0);
		const k = "z";
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(k)}</span><button>${_text_mark($scope2_id, "c", n)}</button>${_el_mark($scope2_id, "b")}`);
				_script($scope2_id, "a0");
				_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
				return 0;
			}
		}, $scope1_id, "a", $wg__on, $wg__on);
		_scope($scope1_id, {
			e: _write_if($scope1_reason, 0) && k,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ on: 1 });
	_patch_child_end();
	_scope($scope0_id, {
		b: n,
		c: $n__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
