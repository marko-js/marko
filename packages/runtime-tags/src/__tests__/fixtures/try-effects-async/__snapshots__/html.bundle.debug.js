// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = new Set();
	let clickCount = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(clickCount), (value) => {
			const $scope4_id = _scope_id();
			_html(`Async: <!>${_escape(value > 1 ? (() => {
				throw new Error("ERROR!");
			})() : value)}${_el_resume($scope4_id, "#text/0")}`);
			writeScope($scope4_id, {}, "__tests__/template.marko", "11:4");
		});
		_script($scope1_id, "__tests__/template.marko_1_clickCount");
		_subscribe($clickCount__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("LOADING...");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3_content", (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`${_escape(err)}${_el_resume($scope3_id, "#text/0", _serialize_guard($scope3_reason, 0))}`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {}, "__tests__/template.marko", "17:4");
		}, $scope0_id) })
	});
	_script($scope0_id, "__tests__/template.marko_0_clickCount");
	writeScope($scope0_id, {
		clickCount,
		"ClosureScopes:clickCount": $clickCount__closures
	}, "__tests__/template.marko", 0, { clickCount: "2:6" });
	_resume_branch($scope0_id);
}, 1);
