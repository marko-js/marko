// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	const $Item_content__subscribers = /* @__PURE__ */ new Set();
	const Item = { content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>x</span>${_el_resume($scope1_id, "a")}`);
		_subscribe($Item_content__subscribers, _scope($scope1_id, {}));
	}, $scope0_id) };
	Item.content({});
	_await($scope0_id, "b", resolveAfter(1, 1), (v) => {
		const $scope2_id = _scope_id();
		_try($scope2_id, "a", () => {
			_scope_reason();
			_scope_id();
			Item.content({});
			_html(_escape((() => {
				throw new Error("ERROR!");
			})()));
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "a", err.message, $wg__err_message * 2)}`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "a2");
	}, 0);
	_script($scope0_id, "a3", 0);
	_scope($scope0_id, { B1: $Item_content__subscribers });
}, 1);
