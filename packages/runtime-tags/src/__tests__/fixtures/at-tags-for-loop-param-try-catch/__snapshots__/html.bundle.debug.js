// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = new Set();
	let clicks = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	let $catch;
	forOf(["render"], (label) => {
		$catch = attrTags($catch, { content: _content_resume("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`caught ${_escape(label)}: ${_text_resume($scope3_id, "#text/1", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "7:8");
		}, $scope0_id, () => [{ label }]) });
	});
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(_escape((() => {
			throw new Error("sync");
		})()));
	}, $scope0_id), { catch: $catch }, 0);
	_html("</div><div>");
	let $catch2;
	forOf([`update ${clicks}`], (label) => {
		$catch2 = attrTags($catch2, { content: _content_resume("__tests__/template.marko_4*content", (err) => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html(`caught ${_text_resume($scope4_id, "#text/0", label, 2)}: ${_text_resume($scope4_id, "#text/1", err.message, _serialize_guard($scope4_reason, 0) * 2)}`);
			_scope($scope4_id, {}, "__tests__/template.marko", "16:8");
		}, $scope0_id, () => [{ label }]) });
	});
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`clicks ${_text_resume($scope1_id, "#text/0", (() => {
			if (clicks) throw new Error("click");
			return clicks;
		})(), 2)}`);
		_subscribe($clicks__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:4"), "__tests__/template.marko_1_clicks#3/subscribe");
	}, $scope0_id), { catch: $catch2 });
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		clicks,
		"ClosureScopes:clicks": $clicks__closures
	}, "__tests__/template.marko", 0, { clicks: "1:6" });
}, 1);
