// child-s.marko
var child_s_default = _template("__tests__/child-s.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const isShared = input.isShared;
	let holder = input.holder;
	let verified = "?";
	_html(`<button class=s>s:<!>${_escape(verified)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child-s.marko_0_isShared_holder");
	writeScope($scope0_id, {
		isShared,
		holder
	}, "__tests__/child-s.marko", 0, {
		isShared: "6:8",
		holder: "7:6"
	});
	_resume_branch($scope0_id);
});

// child-b.marko
var child_b_default = _template("__tests__/child-b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const isInner = input.isInner;
	let inner = input.inner;
	let verified = "?";
	_html(`<button class=b>b:<!>${_escape(verified)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child-b.marko_0_isInner_inner");
	writeScope($scope0_id, {
		isInner,
		inner
	}, "__tests__/child-b.marko", 0, {
		isInner: "6:8",
		inner: "7:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
const $ChildS_withLoadAssets = withLoadAssets(child_s_default, "ready:__tests__/child-s.marko");
const $ChildB_withLoadAssets = withLoadAssets(child_b_default, "ready:__tests__/child-b.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let shared = { inner: { value: 1 } };
	let count = 0;
	_html(`<button class=main>main:<!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	$ChildS_withLoadAssets({
		holder: shared,
		isShared: _resume(function(o) {
			return o === shared;
		}, "__tests__/template.marko_0/isShared", $scope0_id)
	});
	$ChildB_withLoadAssets({
		inner: shared.inner,
		isInner: _resume(function(o) {
			return o === Object.values(shared)[0];
		}, "__tests__/template.marko_0/isInner", $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0_shared_count");
	writeScope($scope0_id, {
		shared,
		count
	}, "__tests__/template.marko", 0, {
		shared: "4:6",
		count: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
