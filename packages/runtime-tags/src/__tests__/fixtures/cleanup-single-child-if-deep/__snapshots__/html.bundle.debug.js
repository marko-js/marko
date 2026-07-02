// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name, write } = input;
	_html(`<p>${_escape(name)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</p>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_name_write");
	writeScope($scope0_id, {
		name,
		write
	}, "__tests__/tags/child.marko", 0, {
		name: "1:9",
		write: "1:15"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $showInner__closures = new Set();
	let showOuter = true;
	let showMiddle = true;
	let showInner = true;
	const write = _resume(function(msg) {
		((el) => el())(_el_read_error).innerHTML += "\n" + msg;
	}, "__tests__/template.marko_0/write", $scope0_id);
	_html(`<button id=outer>Toggle Outer</button>${_el_resume($scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_el_resume($scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_el_resume($scope0_id, "#button/2")}<pre></pre>${_el_resume($scope0_id, "#pre/3")}`);
	_if(() => {
		if (showOuter) {
			const $scope1_id = _scope_id();
			_html("<div>");
			child_default({
				write,
				name: "Outer"
			});
			_if(() => {
				if (showMiddle) {
					const $scope2_id = _scope_id();
					_html("<div>");
					child_default({
						write,
						name: "Middle"
					});
					_if(() => {
						if (showInner) {
							const $scope3_id = _scope_id();
							child_default({
								write,
								name: "Inner"
							});
							writeScope($scope3_id, {}, "__tests__/template.marko", "17:10");
							return 0;
						}
					}, $scope2_id, "#text/1", 1, 1, 1, 0, 1);
					_html("</div>");
					_subscribe($showInner__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "14:6"));
					return 0;
				}
			}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
			_html("</div>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		showOuter,
		showMiddle,
		showInner,
		write,
		"ClosureScopes:showInner": $showInner__closures
	}, "__tests__/template.marko", 0, {
		showOuter: "1:6",
		showMiddle: "2:6",
		showInner: "3:6",
		write: "9:8"
	});
	_resume_branch($scope0_id);
}, 1);
