// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = /* @__PURE__ */ new Set();
	let clicks = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div>`);
	let $catch;
	forOf(["render"], (label) => {
		$catch = attrTags($catch, { content: _content_resume("a0", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`caught ${_escape(label)}: ${_text_resume($scope3_id, "b", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, $scope0_id, { 2: label }) });
	});
	_try($scope0_id, "b", _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html(_escape((() => {
			throw new Error("sync");
		})()));
	}, $scope0_id), { catch: $catch });
	_html("</div><div>");
	let $catch2;
	forOf([`update ${clicks}`], (label) => {
		$catch2 = attrTags($catch2, { content: _content_resume("a2", (err) => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "a", label, 2)}: ${_text_resume($scope4_id, "b", err.message, _serialize_guard($scope4_reason, 0) * 2)}`);
			_scope($scope4_id, {});
		}, $scope0_id, { 2: label }) });
	});
	_try($scope0_id, "c", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`clicks ${_text_resume($scope1_id, "a", (() => {
			return clicks;
		})(), 2)}`);
		_subscribe($clicks__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a4");
	}, $scope0_id), { catch: $catch2 });
	_html("</div>");
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		d: clicks,
		e: $clicks__closures
	});
}, 1);
