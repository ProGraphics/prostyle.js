/*!
 * @license: MIT License - See https://github.com/GaryChamberlain/prostyle-item-simpleBarChart/LICENSE
 * @author: Gary Chamberlain, gary@pro.graphics.
 **/

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var simpleBarChart;
            (function (simpleBarChart) {
                var Variables = ProStyle.Models.Properties.Variables;
                var BarDataVariableType = (function (_super) {
                    __extends(BarDataVariableType, _super);
                    function BarDataVariableType(label, jsonNames, cssName, defaultValue, text, alwaysInitializeCss) {
                        _super.call(this, label, jsonNames, cssName, text, defaultValue, alwaysInitializeCss);
                    }
                    BarDataVariableType.prototype.scrubValue = function (value) {
                        var d = [];
                        if (typeof value === 'number') {
                            return [[undefined, value]];
                        }
                        else if (typeof value === 'string') {
                            var parts = value.split(",");
                            parts.forEach(function (part) {
                                d.push([0, ProStyle.Util.convertToNumber(part.trim())]);
                            });
                        }
                        else if (value instanceof Array) {
                            value.forEach(function (datum) {
                                if (datum instanceof Array) {
                                    d.push([
                                        datum.length > 0 ? ProStyle.Util.convertToNumber(datum[0]) : 0,
                                        datum.length > 1 ? ProStyle.Util.convertToNumber(datum[1]) : 0
                                    ]);
                                }
                                else {
                                    d.push([0, ProStyle.Util.convertToNumber(datum)]);
                                }
                            });
                        }
                        return d;
                    };
                    BarDataVariableType.prototype.writeCssBucket = function (story, model, containerSize, bucket, value) {
                        var proCache = bucket.element["proCache"] || {};
                        bucket.element["proCache"] = proCache;
                        var index = bucket.elementIndex;
                        var proData = proCache.data = [0, 0];
                        if (value.length > index) {
                            var datum = value[index];
                            if (datum.length > 0)
                                proData[0] = datum[0];
                            if (datum.length > 1)
                                proData[1] = datum[1];
                        }
                    };
                    return BarDataVariableType;
                })(Variables.VariableType);
                simpleBarChart.BarDataVariableType = BarDataVariableType;
            })(simpleBarChart = Items.simpleBarChart || (Items.simpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var simpleBarChart;
            (function (simpleBarChart) {
                var Properties = ProStyle.Models.Properties;
                var BarDataPropertyType = (function (_super) {
                    __extends(BarDataPropertyType, _super);
                    function BarDataPropertyType() {
                        var v = [];
                        v.push(new simpleBarChart.BarDataVariableType("values", ["values"], "dummy", [], "", true));
                        _super.call(this, "data", ["data"], v);
                    }
                    BarDataPropertyType.prototype.createPropertyFromBoolean = function (json) {
                        return _super.prototype.createPropertyFromBoolean.call(this, false);
                    };
                    BarDataPropertyType.prototype.createProperty = function (json) {
                        var property = new Properties.Property(this);
                        property["values"].setValue(json);
                        return property;
                    };
                    BarDataPropertyType.prototype.createPropertyFromNumber = function (json) {
                        return this.createProperty(json);
                    };
                    BarDataPropertyType.prototype.createPropertyFromString = function (json) {
                        return this.createProperty(json);
                    };
                    BarDataPropertyType.prototype.createPropertyFromArray = function (json) {
                        return this.createProperty(json);
                    };
                    BarDataPropertyType.prototype.renderLabel = function (property) {
                        return this.renderVariables(property, false, true);
                    };
                    return BarDataPropertyType;
                })(Properties.PropertyType);
                simpleBarChart.BarDataPropertyType = BarDataPropertyType;
            })(simpleBarChart = Items.simpleBarChart || (Items.simpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var simpleBarChart;
            (function (simpleBarChart) {
                var Models = ProStyle.Models;
                var Extension = (function (_super) {
                    __extends(Extension, _super);
                    function Extension(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue, init, scriptSet, barsInit, barsScriptSet) {
                        _super.call(this, itemSet, "simpleBarChart", "SimpleBarChart", [init, barsInit], [scriptSet, barsScriptSet]);
                        this.bars = bars;
                        this.width = width;
                        this.height = height;
                        this.margin = margin;
                        this.minDomainValue = minDomainValue;
                        this.maxDomainValue = maxDomainValue;
                        this.barsInit = barsInit;
                        this.barsScriptSet = barsScriptSet;
                    }
                    return Extension;
                })(Models.Items.Item);
                simpleBarChart.Extension = Extension;
            })(simpleBarChart = Items.simpleBarChart || (Items.simpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var simpleBarChart;
            (function (simpleBarChart) {
                var Properties = ProStyle.Models.Properties;
                var Props = (function () {
                    function Props() {
                    }
                    Props.cacheProperties = function () {
                        Props._propertyTypes = [];
                        Props._barPropertyTypes = [];
                        var p = Props._propertyTypes;
                        p.push(Properties.Cache.ANIMATION);
                        p.push(Properties.Cache.CROP_SVG);
                        p.push(Properties.Cache.OPACITY);
                        p.push(Properties.Cache.POSITION);
                        p.push(Properties.Cache.ROTATION);
                        p.push(Properties.Cache.SCALE);
                        p.push(Properties.Cache.SKEW);
                        var p = Props._barPropertyTypes;
                        p.push(Properties.Cache.ANIMATION);
                        p.push(new Properties.SvgFillPropertyType("rgba(0,0,0,0.5)"));
                        p.push(Properties.Cache.OPACITY);
                        p.push(Properties.Cache.SKEW);
                        p.push(new simpleBarChart.BarDataPropertyType());
                    };
                    Props.getPropertyTypes = function () {
                        if (Props._propertyTypes === undefined)
                            Props.cacheProperties();
                        return Props._propertyTypes;
                    };
                    Props.getBarPropertyTypes = function () {
                        if (Props._barPropertyTypes === undefined)
                            Props.cacheProperties();
                        return Props._barPropertyTypes;
                    };
                    Props._propertyTypes = undefined;
                    Props._barPropertyTypes = undefined;
                    return Props;
                })();
                simpleBarChart.Props = Props;
            })(simpleBarChart = Items.simpleBarChart || (Items.simpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var simpleBarChart;
            (function (simpleBarChart) {
                var Render = ProStyle.Render;
                var Util = ProStyle.Util;
                var Renderer = (function (_super) {
                    __extends(Renderer, _super);
                    function Renderer(simpleBarChartItem, itemSetElem) {
                        _super.call(this, simpleBarChartItem, itemSetElem, Util.createChildSvgElement(itemSetElem.div, "svg", { "class": "pro" }));
                        this.simpleBarChartItem = simpleBarChartItem;
                        this.barDivs = [];
                        this.width = 0;
                        this.height = 0;
                        this.margin = 0;
                        this.barWidth = 0;
                        this.maxDomain = 0;
                        this.minDomain = 0;
                        this.domain = 0;
                        this.domainBase = 0;
                        this.rangeBase = 0;
                        this.g = Util.createChildSvgElement(this.element, "g");
                        for (var c = 0; c < simpleBarChartItem.bars; c++) {
                            this.barDivs.push(Util.createChildSvgElement(this.g, "rect"));
                        }
                        this.maxDomain = simpleBarChartItem.maxDomainValue;
                        this.minDomain = simpleBarChartItem.minDomainValue;
                        this.domain = Math.abs(this.maxDomain - this.minDomain);
                        this.domainBase = this.maxDomain < 0 ? this.maxDomain : (this.minDomain > 0 ? this.minDomain : 0);
                    }
                    Renderer.prototype.initializeItem = function (timeline, cameraSize) {
                        var item = this.simpleBarChartItem;
                        var story = item.itemSet.flow.story;
                        var pageAspectRatio = item.itemSet.flow.pageAspectRatio;
                        var pageSize = cameraSize.getContainedSize(pageAspectRatio);
                        this.width = (item.width / 100) * pageSize.width;
                        this.height = (item.height / 100) * pageSize.height;
                        this.margin = this.simpleBarChartItem.margin / 100 * this.width;
                        if (this.margin * (this.simpleBarChartItem.bars + 1) > this.width) {
                            this.margin = this.width / (this.simpleBarChartItem.bars + 1);
                        }
                        else {
                            this.barWidth = (this.width - this.margin * this.simpleBarChartItem.bars) / this.simpleBarChartItem.bars;
                        }
                        this.rangeBase = Math.abs(this.simpleBarChartItem.maxDomainValue - this.domainBase) / this.domain * this.height;
                        var forceProps = { width: this.width, height: this.height };
                        this.initializeProperties(story, [this.element], pageSize, timeline, item.init, true, forceProps);
                        forceProps = {};
                        this.initializeProperties(story, this.barDivs, pageSize, timeline, item.barsInit, false, forceProps, this.afterBarCssProperties.bind(this));
                    };
                    Renderer.prototype.generateStepActions = function (itemSet, pageSize, timeline, stepIndex, label) {
                        var item = this.simpleBarChartItem;
                        this.generateActionsForStep(itemSet, [this.element], pageSize, timeline, stepIndex, label, item.scriptSet);
                        this.generateActionsForStep(itemSet, this.barDivs, pageSize, timeline, stepIndex, label, item.barsScriptSet, this.afterBarCssProperties.bind(this));
                    };
                    Renderer.prototype.afterBarCssProperties = function (properties, buckets, containerSize) {
                        var _this = this;
                        if (this.domain <= 0)
                            return;
                        buckets.forEach(function (bucket, index) {
                            var datumFrom = Util.convertToNumber(bucket.element.proCache.data[0], _this.domainBase);
                            var datumTo = Util.convertToNumber(bucket.element.proCache.data[1], _this.domainBase);
                            console.log(bucket.element.proCache, datumFrom, datumTo);
                            var y = (_this.maxDomain - Math.max(datumFrom, datumTo)) / _this.domain * _this.height;
                            var h = ((_this.maxDomain - Math.min(datumFrom, datumTo)) / _this.domain * _this.height) - y;
                            var radius = _this.barWidth / 8;
                            bucket.attr = {
                                x: _this.margin / 2 + index * (_this.margin + _this.barWidth),
                                width: _this.barWidth,
                                y: y,
                                height: h,
                                rx: radius,
                                ry: radius
                            };
                        });
                    };
                    return Renderer;
                })(Render.Items.Item);
                simpleBarChart.Renderer = Renderer;
            })(simpleBarChart = Items.simpleBarChart || (Items.simpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var simpleBarChart;
            (function (simpleBarChart) {
                var DEFAULT_WH = 50;
                var DEFAULT_M = 1;
                var Models = ProStyle.Models;
                var Serialization = ProStyle.Serialization;
                var Util = ProStyle.Util;
                function readJson(itemSet, json) {
                    var bars = Math.max(1, Math.min(Util.convertToNumber(Util.getSetup(json, "bars")), 100));
                    var width = Math.max(0, Util.convertToNumber(Util.getSetup(json, "width"), DEFAULT_WH));
                    var height = Math.max(0, Util.convertToNumber(Util.getSetup(json, "height"), DEFAULT_WH));
                    var margin = Math.max(0, Util.convertToNumber(Util.getSetup(json, "margin"), DEFAULT_M));
                    var minDomainValue = 0;
                    var maxDomainValue = 0;
                    var domain = Util.getSetup(json, "domain");
                    if (typeof domain === 'number') {
                        maxDomainValue = domain;
                    }
                    else if (domain instanceof Array) {
                        minDomainValue = domain.length > 0 ? Util.convertToNumber(domain[0]) : 0;
                        maxDomainValue = domain.length > 1 ? Util.convertToNumber(domain[1]) : 0;
                    }
                    if (maxDomainValue < minDomainValue) {
                        var swap = maxDomainValue;
                        maxDomainValue = minDomainValue;
                        minDomainValue = swap;
                    }
                    var propertyTypes = simpleBarChart.Props.getPropertyTypes();
                    var barPropertyTypes = simpleBarChart.Props.getBarPropertyTypes();
                    var init = Serialization.PropertyListReader.read(itemSet.story, json.init, propertyTypes);
                    var barsInit = Serialization.PropertyListReader.read(itemSet.story, json.barInit || json.barsInit, barPropertyTypes);
                    var scriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Chart", json, [""], propertyTypes);
                    var barsScriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Bars", json, ["bar", "bars"], barPropertyTypes);
                    return new simpleBarChart.Extension(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue, init, scriptSet, barsInit, barsScriptSet);
                }
                simpleBarChart.readJson = readJson;
            })(simpleBarChart = Items.simpleBarChart || (Items.simpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.item.simpleBarChart.js.map