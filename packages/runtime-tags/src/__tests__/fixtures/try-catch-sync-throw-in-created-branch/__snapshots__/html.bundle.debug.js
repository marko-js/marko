// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope6_id = _scope_id();
				_html(_escape((() => {
					throw new Error("if body");
				})()));
				_scope($scope6_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_show#0:5/subscribe");
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`caught ${_text_resume($scope5_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "8:4");
	}, void 0, "__tests__/template.marko_5*content");
	_try($scope0_id, "#text/2", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope8_id = _scope_id();
				_try($scope8_id, "#text/0", () => {
					_scope_reason();
					const $scope9_id = _scope_id();
					_html(_escape((() => {
						throw new Error("try body");
					})()));
				}, void 0, (err) => {
					const $scope10_reason = _scope_reason(), $wg__err_message3 = _write_guard($scope10_reason, 0);
					const $scope10_id = _scope_id();
					_html(`caught ${_text_resume($scope10_id, "#text/0", err.message, $wg__err_message3 * 2)}`);
					_write_if($scope10_reason, 0) && _scope($scope10_id, {}, "__tests__/template.marko", "15:8");
				}, void 0, "__tests__/template.marko_10*content");
				_scope($scope8_id, {}, "__tests__/template.marko", "12:4");
				return 0;
			}
		}, $scope2_id, "#text/0");
		_subscribe($show__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:show/6": 1
		}, "__tests__/template.marko", "11:2"), "__tests__/template.marko_2_show#0:5/subscribe");
	}, void 0, (err) => {
		const $scope7_reason = _scope_reason(), $wg__err_message2 = _write_guard($scope7_reason, 0);
		const $scope7_id = _scope_id();
		_html(`outer caught ${_text_resume($scope7_id, "#text/0", err.message, $wg__err_message2 * 2)}`);
		_write_if($scope7_reason, 0) && _scope($scope7_id, {}, "__tests__/template.marko", "18:4");
	}, void 0, "__tests__/template.marko_7*content");
	_try($scope0_id, "#text/3", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope12_id = _scope_id();
				_try($scope12_id, "#text/0", () => {
					_scope_reason();
					const $scope13_id = _scope_id();
					_html(_escape((() => {
						throw new Error("try body");
					})()));
				}, void 0, () => {
					_scope_reason();
					const $scope14_id = _scope_id();
					_html(_escape((() => {
						throw new Error("catch");
					})()));
				}, void 0, "__tests__/template.marko_14*content");
				_scope($scope12_id, {}, "__tests__/template.marko", "22:4");
				return 0;
			}
		}, $scope3_id, "#text/0");
		_subscribe($show__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:show/6": 2
		}, "__tests__/template.marko", "21:2"), "__tests__/template.marko_3_show#0:5/subscribe");
	}, void 0, (err) => {
		const $scope11_reason = _scope_reason(), $wg__err_message4 = _write_guard($scope11_reason, 0);
		const $scope11_id = _scope_id();
		_html(`outer caught ${_text_resume($scope11_id, "#text/0", err.message, $wg__err_message4 * 2)}`);
		_write_if($scope11_reason, 0) && _scope($scope11_id, {}, "__tests__/template.marko", "30:4");
	}, void 0, "__tests__/template.marko_11*content");
	_try($scope0_id, "#text/4", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope16_id = _scope_id();
				_try($scope16_id, "#text/0", () => {
					_scope_reason();
					const $scope17_id = _scope_id();
					_html(_escape((() => {
						throw new Error("try body");
					})()));
				}, void 0, (err) => {
					const $scope18_reason = _scope_reason(), $wg__err_message6 = _write_guard($scope18_reason, 0);
					const $scope18_id = _scope_id();
					_html(_text_resume($scope18_id, "#text/0", (() => {
						throw new Error(`catch of ${err.message}`);
					})(), $wg__err_message6));
					_write_if($scope18_reason, 0) && _scope($scope18_id, {}, "__tests__/template.marko", "37:8");
				}, void 0, "__tests__/template.marko_18*content");
				_scope($scope16_id, {}, "__tests__/template.marko", "34:4");
				return 0;
			}
		}, $scope4_id, "#text/0");
		_subscribe($show__closures, _scope($scope4_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:show/6": 3
		}, "__tests__/template.marko", "33:2"), "__tests__/template.marko_4_show#0:5/subscribe");
	}, void 0, (err) => {
		const $scope15_reason = _scope_reason(), $wg__err_message5 = _write_guard($scope15_reason, 0);
		const $scope15_id = _scope_id();
		_html(`outer caught ${_text_resume($scope15_id, "#text/0", err.message, $wg__err_message5 * 2)}`);
		_write_if($scope15_reason, 0) && _scope($scope15_id, {}, "__tests__/template.marko", "42:4");
	}, void 0, "__tests__/template.marko_15*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:show/6": $show__closures }, "__tests__/template.marko", 0);
}, 1);
