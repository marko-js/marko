// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	let $catch;
	forOf([`empty ${n}`], (label) => {
		$catch = attrTags($catch, {});
	});
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "#text/0", n === 1 ? (() => {
			throw new Error("body");
		})() : `body ${n}`));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_1_n#3/subscribe");
	}, $scope0_id), { catch: $catch });
	_html("</div><div>");
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let $catch2;
		forOf([`inner ${n}`], (label) => {
			$catch2 = attrTags($catch2, { content: _content_resume("__tests__/template.marko_3*content", (err) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`${_text_resume($scope3_id, "#text/0", label)} caught ${_text_resume($scope3_id, "#text/1", err.message, _serialize_guard($scope3_reason, 0) * 2)}${_text_resume($scope3_id, "#text/2", n > 1 && err.message === "body 1" ? (() => {
					throw new Error("from catch");
				})() : "", 2)}`);
				_subscribe($n__closures, _scope($scope3_id, {
					err_message: err?.message,
					_: _scope_with_id($scope2_id),
					"ClosureSignalIndex:n": 2
				}, "__tests__/template.marko", "20:10", { err_message: ["err.message", "20:17"] }), "__tests__/template.marko_3_n#3/subscribe");
			}, $scope2_id, () => [{ label }]) });
		});
		_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_4*content", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_html(_text_resume($scope4_id, "#text/0", n ? (() => {
				throw new Error("body " + n);
			})() : "ok"));
			_subscribe($n__closures, _scope($scope4_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:n": 3
			}, "__tests__/template.marko", "18:6"), "__tests__/template.marko_4_n#3/subscribe");
		}, $scope2_id), { catch: $catch2 });
		_subscribe($n__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:n": 1
		}, "__tests__/template.marko", "14:4"), "__tests__/template.marko_2_n#3/subscribe", 0);
		_resume_branch($scope2_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5*content", (outer) => {
		const $scope5_reason = _scope_reason(), $sg__outer_message = _serialize_guard($scope5_reason, 0);
		const $scope5_id = _scope_id();
		_html(`outer caught ${_text_resume($scope5_id, "#text/0", outer.message, $sg__outer_message * 2)}`);
		_serialize_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "15:6");
	}, $scope0_id) }) });
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
