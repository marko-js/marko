// template.marko
const never = new Promise(() => {});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $changes__closures = /* @__PURE__ */ new Set();
	let changes = 0;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("outer", 1), () => {
			const $scope2_id = _scope_id();
			_try($scope2_id, "a", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "a", never, () => {
					_scope_id();
					_html("slow sibling");
				}, 0);
				_await($scope4_id, "b", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 2), () => {
					_scope_id();
					_html("never");
				}, 0);
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught: ${_text_resume($scope5_id, "a", err.message, $wg__err_message * 2)}`);
				_write_if($scope5_reason, 0) && _scope($scope5_id, {});
			}, void 0, "a0");
			_html(`<div>changes: ${_text_resume($scope2_id, "c", changes, 2)}</div>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a1");
			_subscribe($changes__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading outer...");
	}, void 0, "a3");
	_scope($scope0_id, {
		b: changes,
		c: $changes__closures
	});
	_resume_branch($scope0_id);
}, 1);
