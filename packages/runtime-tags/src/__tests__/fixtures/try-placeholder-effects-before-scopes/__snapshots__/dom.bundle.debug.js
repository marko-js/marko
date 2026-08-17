// tags/child.marko
const $template$2 = "<section> </section>";
const $walks$2 = " D l";
const $setup$2 = () => {};
const $input_workspace_id__script = _script("__tests__/tags/child.marko_0_input_workspace_id#5", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("child mounted", $scope.input_workspace_id);
	},
	onDestroy: function() {
		console.log("child destroyed", $scope.input_workspace_id);
	}
}));
const $input_workspace_id = /*@__PURE__*/ _const("input_workspace_id", $input_workspace_id__script);
const $input_active = ($scope, input_active) => _attr_class($scope["#section/0"], input_active ? "on" : "off");
const $input_workspace_name = ($scope, input_workspace_name) => _text($scope["#text/1"], input_workspace_name);
const $input$1 = ($scope, input) => {
	$input_workspace($scope, input.workspace);
	$input_active($scope, input.active);
};
const $input_workspace = ($scope, input_workspace) => {
	$input_workspace_id($scope, input_workspace?.id);
	$input_workspace_name($scope, input_workspace?.name);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, 0, $input$1);

// tags/shell.marko
const $template$1 = "<div><a href=#b>open b</a><!></div>";
const $walks$1 = " Db%l";
const $if_content__selectedId__OR__ws_id = /*@__PURE__*/ _or(1, ($scope) => $input_active($scope["#childScope/0"], $scope._.ws_id === $scope._._.selectedId));
const $if_content__selectedId = /*@__PURE__*/ _closure_get("selectedId", $if_content__selectedId__OR__ws_id, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__selectedId($scope);
	$if_content__ws._($scope);
	$if_content__ws_id._($scope);
};
const $if_content__ws = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_workspace($scope["#childScope/0"], $scope._.ws));
const $if_content__ws_id = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__selectedId__OR__ws_id);
const $for_content__if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup);
const $for_content__ws = /*@__PURE__*/ _const("ws", ($scope) => {
	$for_content__ws_id($scope, $scope.ws?.id);
	$for_content__if($scope, $scope.ws ? 0 : 1);
	$if_content__ws($scope);
});
const $for_content__input_workspaces__OR__id = /*@__PURE__*/ _or(3, ($scope) => $for_content__ws($scope, $scope._.input_workspaces.find((w) => w.id === $scope.id)));
const $for_content__input_workspaces = /*@__PURE__*/ _for_closure("#text/1", $for_content__input_workspaces__OR__id);
const $for_content__setup = $for_content__input_workspaces;
const $for_content__ws_id = /*@__PURE__*/ _const("ws_id", $if_content__ws_id);
const $for_content__id = /*@__PURE__*/ _const("id", $for_content__input_workspaces__OR__id);
const $for_content__$params = ($scope, $params2) => $for_content__id($scope, $params2[0]);
const $selectedId__closure = /*@__PURE__*/ _closure($if_content__selectedId);
const $selectedId = /*@__PURE__*/ _let("selectedId/6", $selectedId__closure);
const $input_status__OR__open__script = _script("__tests__/tags/shell.marko_0_input_status#4_open#8", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("shell mounted", $scope.input_status);
		const abort = new AbortController();
		document.addEventListener("click", (e) => {
			if (e.defaultPrevented) return;
			const a = e.target.closest("a[href]");
			if (!a) return;
			e.preventDefault();
			$scope.open(a.getAttribute("href").slice(1));
		}, {
			capture: true,
			signal: abort.signal
		});
		return { abort };
	},
	onDestroy: function() {
		console.log("shell destroyed", $scope.input_status);
		this.abort.abort();
	}
}));
const $input_status__OR__open = /*@__PURE__*/ _or(9, $input_status__OR__open__script);
const $open2 = /*@__PURE__*/ _const("open", $input_status__OR__open);
const $for = /*@__PURE__*/ _for_of("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $openIds = /*@__PURE__*/ _let("openIds/7", ($scope) => {
	$open2($scope, $open($scope));
	$for($scope, [$scope.openIds, (id) => id]);
});
function $setup$1($scope) {
	$selectedId($scope, "a");
	$openIds($scope, ["a"]);
}
const $input_status = /*@__PURE__*/ _const("input_status", ($scope) => {
	_attr($scope["#div/0"], "data-status", $scope.input_status);
	$input_status__OR__open($scope);
});
const $input = ($scope, input) => {
	$input_status($scope, input.status);
	$input_workspaces($scope, input.workspaces);
};
const $input_workspaces = /*@__PURE__*/ _const("input_workspaces", $for_content__input_workspaces);
const $open = ($scope) => (id) => {
	$selectedId($scope, id);
	if (!$scope.openIds.includes(id)) $openIds($scope, $scope.openIds.concat(id));
};
_resume("__tests__/tags/shell.marko_0/open", $open);
var shell_default = /*@__PURE__*/ _template("__tests__/tags/shell.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__workspaces = /*@__PURE__*/ _closure_get("workspaces", ($scope) => $input_workspaces($scope["#childScope/0"], $scope._._.workspaces), ($scope) => $scope._._, "__tests__/template.marko_3_workspaces#1/pending");
const $await_content__setup = ($scope) => {
	$await_content__workspaces($scope);
	$setup$1($scope["#childScope/0"]);
	$input_status($scope["#childScope/0"], "ready");
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter({ ok: true }, 1));
};
const $placeholder_content__workspaces = /*@__PURE__*/ _closure_get("workspaces", ($scope) => $input_workspaces($scope["#childScope/0"], $scope._.workspaces));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__workspaces($scope);
	$setup$1($scope["#childScope/0"]);
	$input_status($scope["#childScope/0"], "loading");
};
const $placeholder_content = _content_resume("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $placeholder_content__setup);
const $workspaces = /*@__PURE__*/ _const("workspaces");
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	"a";
	["a"];
	$workspaces($scope, [{
		id: "a",
		name: "A"
	}, {
		id: "b",
		name: "B"
	}]);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
