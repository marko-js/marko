var createError = require('raptor-util').createError;
'use strict';
var packaging = require('raptor-packaging');
var File = require('raptor-files/File');
var resources = require('raptor-resources');
var optimizer = require('raptor-optimizer');
var logger = require('raptor-logging').logger(module);
var promises = require('raptor-promises');
function buildManifest(input, context) {
    var templateResource;
    if (input.templatePath) {
        templateResource = resources.findResource(input.templatePath);
        //All paths will be resolved relative to this resource
        if (!templateResource || !templateResource.exists()) {
            templateResource = resources.createFileResource(input.templatePath);
        }
    }
    if (input.packagePath) {
        var packageResource = templateResource ? templateResource.resolve(input.packagePath) : resources.findResource(input.packagePath);
        if (!packageResource.exists()) {
            throw createError(new Error('Unable to configure page optimizer. The package resource at path "' + packageResource.getPath() + '" does not exist.'));
        }
        module.exports = packaging.getPackageManifest(packageResource);
        return;
    } else {
        var packageManifest = packaging.createPackageManifest(null, templateResource);
        if (input.dependencies) {
            packageManifest.setDependencies(input.dependencies);
        } else if (input.invokeBody) {
            input.invokeBody(packageManifest);
        }
        module.exports = packageManifest;
        return;
    }
}
module.exports = {
    process: function (input, context) {
        var pageOptimizer = input.optimizer;
        if (!pageOptimizer) {
            pageOptimizer = optimizer.pageOptimizer;
        }
        if (!pageOptimizer) {
            throw createError(new Error('Page optimizer not configured for application. require("raptor/optimizer").configure(config) or provide an optimizer as input using the "optimizer" attribute.'));
        }
        var optimizedPage;
        var optimizerRenderContext = optimizer.getRenderContext(context);
        function doOptimizePage() {
            var enabledExtensions = input.enabledExtensions;
            if (enabledExtensions) {
                if (!packaging.isExtensionCollection(enabledExtensions)) {
                    if (typeof enabledExtensions === 'string') {
                        enabledExtensions = enabledExtensions.split(/\s*,\s*/);
                    }
                    enabledExtensions = packaging.createExtensionCollection(enabledExtensions);
                }
            }
            var contextEnabledExtensions = optimizerRenderContext.getEnabledExtensions();
            if (contextEnabledExtensions) {
                if (!enabledExtensions) {
                    enabledExtensions = contextEnabledExtensions;
                } else {
                    enabledExtensions.addAll(contextEnabledExtensions);
                }
            }
            if (logger.isDebugEnabled()) {
                logger.debug('Enabled page extensions: ' + (enabledExtensions ? enabledExtensions.toString() : '(empty)'));
            }
            var cacheKey = input.cacheKey || input.name;
            var optimizerContext = context.getAttributes().optimizerContext || {};
            optimizerContext.renderContext = context;
            optimizerContext.enabledExtensions = enabledExtensions;
            optimizedPage = pageOptimizer.optimizePageCached(optimizerContext, cacheKey, function () {
                var packageManifest = buildManifest(input, context);
                var basePath = input.basePath;
                if (basePath instanceof File) {
                    basePath = basePath.getAbsolutePath();
                }
                return {
                    name: input.name,
                    basePath: basePath,
                    packageManifest: packageManifest,
                    enabledExtensions: enabledExtensions,
                    context: optimizerContext
                };
            });
            if (promises.isPromise(optimizedPage)) {
                optimizedPage.fail(function (e) {
                    logger.error('Unable to optimize page. Exception: ' + e, e);
                });
            }
            return optimizedPage;
        }
        var waitFor = optimizerRenderContext.getWaitFor();
        if (waitFor && waitFor.length) {
            logger.debug('Waiting for ' + waitFor.length + ' promise(s) to complete before optimizing page.');
            optimizedPage = promises.all(waitFor).then(doOptimizePage);
        } else {
            optimizedPage = doOptimizePage();
        }
        context.getAttributes().optimizedPage = optimizedPage;
    }
};