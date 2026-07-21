// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $id__closures = new Set();
	const $payloadId__closures = new Set();
	const $count__closures = new Set();
	let id = 1;
	const payloadId = id * 100;
	let count = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter({ id: payloadId }), (data) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_id/pending");
			_script($scope2_id, "__tests__/template.marko_2_payloadId/pending");
			_script($scope2_id, "__tests__/template.marko_2_count/pending");
			_html(`<h2>Id: <!>${_escape(id)}${_el_resume($scope2_id, "#text/0")} --> <!>${_escape(payloadId)}${_el_resume($scope2_id, "#text/1")}</h2><pre>${_escape(JSON.stringify(data))}${_el_resume($scope2_id, "#text/2")}</pre><button id=inc>${_escape(id)}${_el_resume($scope2_id, "#text/4")}</button>${_el_resume($scope2_id, "#button/3")}<button id=count>${_escape(count)}${_el_resume($scope2_id, "#text/6")}</button>${_el_resume($scope2_id, "#button/5")}`);
			_script($scope2_id, "__tests__/template.marko_2_id_payloadId_data");
			_script($scope2_id, "__tests__/template.marko_2_id_count");
			_script($scope2_id, "__tests__/template.marko_2");
			writeScope($scope2_id, {
				data,
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:payloadId": 1
			}, "__tests__/template.marko", "7:4", { data: "7:10" });
			_resume_branch($scope2_id);
		});
		_subscribe($payloadId__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		id,
		payloadId,
		count,
		"ClosureScopes:id": $id__closures,
		"ClosureScopes:payloadId": $payloadId__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		id: "2:6",
		payloadId: "3:8",
		count: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
