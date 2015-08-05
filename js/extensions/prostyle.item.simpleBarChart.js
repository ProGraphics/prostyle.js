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
            var SimpleBarChart;
            (function (SimpleBarChart) {
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
                SimpleBarChart.BarDataVariableType = BarDataVariableType;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var SimpleBarChart;
            (function (SimpleBarChart) {
                var Properties = ProStyle.Models.Properties;
                var BarDataPropertyType = (function (_super) {
                    __extends(BarDataPropertyType, _super);
                    function BarDataPropertyType() {
                        var v = [];
                        v.push(new SimpleBarChart.BarDataVariableType("values", ["values"], "dummy", [], "", true));
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
                SimpleBarChart.BarDataPropertyType = BarDataPropertyType;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var SimpleBarChart;
            (function (SimpleBarChart) {
                var Properties = ProStyle.Models.Properties;
                var SimpleBarChartPropertyTypes = (function () {
                    function SimpleBarChartPropertyTypes() {
                    }
                    SimpleBarChartPropertyTypes.cacheProperties = function () {
                        SimpleBarChartPropertyTypes._propertyTypes = [];
                        SimpleBarChartPropertyTypes._barPropertyTypes = [];
                        var p = SimpleBarChartPropertyTypes._propertyTypes;
                        p.push(Properties.Cache.ANIMATION);
                        p.push(Properties.Cache.CROP_SVG);
                        p.push(Properties.Cache.OPACITY);
                        p.push(Properties.Cache.POSITION);
                        p.push(Properties.Cache.ROTATION);
                        p.push(Properties.Cache.SCALE);
                        p.push(Properties.Cache.SKEW);
                        var p = SimpleBarChartPropertyTypes._barPropertyTypes;
                        p.push(Properties.Cache.ANIMATION);
                        p.push(new Properties.SvgFillPropertyType("rgba(0,0,0,0.5)"));
                        p.push(Properties.Cache.OPACITY);
                        p.push(Properties.Cache.SKEW);
                        p.push(new SimpleBarChart.BarDataPropertyType());
                    };
                    SimpleBarChartPropertyTypes.get = function () {
                        if (SimpleBarChartPropertyTypes._propertyTypes === undefined)
                            SimpleBarChartPropertyTypes.cacheProperties();
                        return SimpleBarChartPropertyTypes._propertyTypes;
                    };
                    SimpleBarChartPropertyTypes.getForBars = function () {
                        if (SimpleBarChartPropertyTypes._barPropertyTypes === undefined)
                            SimpleBarChartPropertyTypes.cacheProperties();
                        return SimpleBarChartPropertyTypes._barPropertyTypes;
                    };
                    SimpleBarChartPropertyTypes._propertyTypes = undefined;
                    SimpleBarChartPropertyTypes._barPropertyTypes = undefined;
                    return SimpleBarChartPropertyTypes;
                })();
                SimpleBarChart.SimpleBarChartPropertyTypes = SimpleBarChartPropertyTypes;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var SimpleBarChart;
            (function (SimpleBarChart) {
                var DEFAULT_WH = 50;
                var DEFAULT_M = 1;
                var Models = ProStyle.Models;
                function serialize(model) {
                    return {};
                }
                SimpleBarChart.serialize = serialize;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var SimpleBarChart;
            (function (SimpleBarChart) {
                var Views = ProStyle.Views;
                var Util = ProStyle.Util;
                var SimpleBarChartItemView = (function (_super) {
                    __extends(SimpleBarChartItemView, _super);
                    function SimpleBarChartItemView(model, itemViewSet) {
                        _super.call(this, model, itemViewSet, Util.createChildSvgElement(itemViewSet.div, "svg", { "class": "prostyle" }));
                        this.model = model;
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
                        for (var c = 0; c < model.bars; c++) {
                            this.barDivs.push(Util.createChildSvgElement(this.g, "rect"));
                        }
                        this.maxDomain = model.maxDomainValue;
                        this.minDomain = model.minDomainValue;
                        this.domain = Math.abs(this.maxDomain - this.minDomain);
                        this.domainBase = this.maxDomain < 0 ? this.maxDomain : (this.minDomain > 0 ? this.minDomain : 0);
                    }
                    SimpleBarChartItemView.prototype.initializeItem = function (timeline, cameraSize) {
                        var story = this.model.itemModelSet.flow.story;
                        var pageAspectRatio = this.model.itemModelSet.flow.pageAspectRatio;
                        var pageSize = cameraSize.getContainedSize(pageAspectRatio);
                        this.width = (this.model.width / 100) * pageSize.width;
                        this.height = (this.model.height / 100) * pageSize.height;
                        this.margin = this.model.margin / 100 * this.width;
                        if (this.margin * (this.model.bars + 1) > this.width) {
                            this.margin = this.width / (this.model.bars + 1);
                        }
                        else {
                            this.barWidth = (this.width - this.margin * this.model.bars) / this.model.bars;
                        }
                        this.rangeBase = Math.abs(this.model.maxDomainValue - this.domainBase) / this.domain * this.height;
                        var forceProps = { width: this.width, height: this.height };
                        this.initializeProperties(story, [this.element], pageSize, timeline, this.model.init, true, forceProps);
                        forceProps = {};
                        this.initializeProperties(story, this.barDivs, pageSize, timeline, this.model.barsInit, false, forceProps, this.afterBarCssProperties.bind(this));
                    };
                    SimpleBarChartItemView.prototype.generateStepActions = function (itemViewSet, pageSize, timeline, stepIndex, label) {
                        this.generateActionsForStep(itemViewSet, [this.element], pageSize, timeline, stepIndex, label, this.model.scriptSet);
                        this.generateActionsForStep(itemViewSet, this.barDivs, pageSize, timeline, stepIndex, label, this.model.barsScriptSet, this.afterBarCssProperties.bind(this));
                    };
                    SimpleBarChartItemView.prototype.afterBarCssProperties = function (properties, buckets, containerSize) {
                        var _this = this;
                        if (this.domain <= 0)
                            return;
                        buckets.forEach(function (bucket, index) {
                            var datumFrom = Util.convertToNumber(bucket.element.proCache.data[0], _this.domainBase);
                            var datumTo = Util.convertToNumber(bucket.element.proCache.data[1], _this.domainBase);
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
                    return SimpleBarChartItemView;
                })(Views.Items.ItemView);
                SimpleBarChart.SimpleBarChartItemView = SimpleBarChartItemView;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var SimpleBarChart;
            (function (SimpleBarChart) {
                var Models = ProStyle.Models;
                var SimpleBarChartItemModel = (function (_super) {
                    __extends(SimpleBarChartItemModel, _super);
                    function SimpleBarChartItemModel(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue, init, scriptSet, barsInit, barsScriptSet) {
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
                    SimpleBarChartItemModel.prototype.serialize = function () {
                        return SimpleBarChart.serialize(this);
                    };
                    SimpleBarChartItemModel.prototype.createView = function (itemViewSet) {
                        return new SimpleBarChart.SimpleBarChartItemView(this, itemViewSet);
                    };
                    return SimpleBarChartItemModel;
                })(Models.Items.ItemModel);
                SimpleBarChart.SimpleBarChartItemModel = SimpleBarChartItemModel;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var SimpleBarChart;
            (function (SimpleBarChart) {
                var DEFAULT_WH = 50;
                var DEFAULT_M = 1;
                var Models = ProStyle.Models;
                var Serialization = ProStyle.Serialization;
                var Util = ProStyle.Util;
                function deserialize(itemSet, json) {
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
                    var propertyTypes = SimpleBarChart.SimpleBarChartPropertyTypes.get();
                    var barPropertyTypes = SimpleBarChart.SimpleBarChartPropertyTypes.getForBars();
                    var init = Serialization.PropertyListReader.read(itemSet.story, json.init, propertyTypes);
                    var barsInit = Serialization.PropertyListReader.read(itemSet.story, json.barInit || json.barsInit, barPropertyTypes);
                    var scriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Chart", json, [""], propertyTypes);
                    var barsScriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Bars", json, ["bar", "bars"], barPropertyTypes);
                    return new SimpleBarChart.SimpleBarChartItemModel(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue, init, scriptSet, barsInit, barsScriptSet);
                }
                SimpleBarChart.deserialize = deserialize;
            })(SimpleBarChart = Items.SimpleBarChart || (Items.SimpleBarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.item.simpleBarChart.js.map