/*!
 * VERSION: 0.20.0
 * DATE: 03-Sep-2015
 * UPDATES AND DOCS AT: https://prostyle.io/plus/
 * 
 * This file is part of ProStyle Plus, a set of premium extensions for ProStyle. It may be
 * used for free for personal projects or licensed per website domain name for commercial use.
 * 
 * @copyright - Copyright (c) 2013-2015, Pro Graphics, Inc. All rights reserved. 
 * @license - This work is subject to the terms at https://prostyle.io/plus/license/
 * @author: Gary Chamberlain, gary@pro.graphics.
 * 
 **/

/// <reference path="../../../ts/prostyle.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
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
            var BarChart;
            (function (BarChart) {
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
                BarChart.BarDataVariableType = BarDataVariableType;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="BarDataVariableType.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var BarChart;
            (function (BarChart) {
                var Properties = ProStyle.Models.Properties;
                var BarDataPropertyType = (function (_super) {
                    __extends(BarDataPropertyType, _super);
                    function BarDataPropertyType() {
                        var v = [];
                        v.push(new BarChart.BarDataVariableType("values", ["values"], "dummy", [], "", true));
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
                BarChart.BarDataPropertyType = BarDataPropertyType;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="BarChartItemModel.ts" />
/// <reference path="BarDataPropertyType.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var BarChart;
            (function (BarChart) {
                var Properties = ProStyle.Models.Properties;
                var BarChartPropertyTypes = (function () {
                    function BarChartPropertyTypes() {
                    }
                    BarChartPropertyTypes.cacheProperties = function () {
                        BarChartPropertyTypes._propertyTypes = [];
                        BarChartPropertyTypes._barPropertyTypes = [];
                        var p = BarChartPropertyTypes._propertyTypes;
                        p.push(Properties.Cache.ANIMATION);
                        p.push(Properties.Cache.CLASS);
                        p.push(Properties.Cache.CROP_SVG);
                        p.push(Properties.Cache.OPACITY);
                        p.push(Properties.Cache.POSITION);
                        p.push(Properties.Cache.ROTATION);
                        p.push(Properties.Cache.SCALE);
                        p.push(Properties.Cache.SKEW);
                        var p = BarChartPropertyTypes._barPropertyTypes;
                        p.push(Properties.Cache.ANIMATION);
                        p.push(Properties.Cache.CLASS);
                        p.push(new Properties.SvgFillPropertyType("rgba(0,0,0,0.5)"));
                        p.push(Properties.Cache.OPACITY);
                        p.push(Properties.Cache.SKEW);
                        p.push(new BarChart.BarDataPropertyType());
                    };
                    BarChartPropertyTypes.get = function () {
                        if (BarChartPropertyTypes._propertyTypes === undefined)
                            BarChartPropertyTypes.cacheProperties();
                        return BarChartPropertyTypes._propertyTypes;
                    };
                    BarChartPropertyTypes.getForBars = function () {
                        if (BarChartPropertyTypes._barPropertyTypes === undefined)
                            BarChartPropertyTypes.cacheProperties();
                        return BarChartPropertyTypes._barPropertyTypes;
                    };
                    BarChartPropertyTypes._propertyTypes = undefined;
                    BarChartPropertyTypes._barPropertyTypes = undefined;
                    return BarChartPropertyTypes;
                })();
                BarChart.BarChartPropertyTypes = BarChartPropertyTypes;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="BarChartItemModel.ts" />
/// <reference path="BarChartPropertyTypes.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var BarChart;
            (function (BarChart) {
                var DEFAULT_WH = 50;
                var DEFAULT_M = 1;
                function serialize(model) {
                    return {};
                }
                BarChart.serialize = serialize;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="BarChartItemModel.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var BarChart;
            (function (BarChart) {
                var Views = ProStyle.Views;
                var Util = ProStyle.Util;
                var BarChartItemView = (function (_super) {
                    __extends(BarChartItemView, _super);
                    function BarChartItemView(model, itemViewSet) {
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
                    BarChartItemView.prototype.initializeItem = function (timeline, cameraSize) {
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
                    BarChartItemView.prototype.generateStepActions = function (itemViewSet, pageSize, timeline, stepIndex, label) {
                        this.generateActionsForStep(itemViewSet, [this.element], pageSize, timeline, stepIndex, label, this.model.scriptSet);
                        this.generateActionsForStep(itemViewSet, this.barDivs, pageSize, timeline, stepIndex, label, this.model.barsScriptSet, this.afterBarCssProperties.bind(this));
                    };
                    BarChartItemView.prototype.afterBarCssProperties = function (properties, buckets, containerSize) {
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
                    return BarChartItemView;
                })(Views.Items.ItemView);
                BarChart.BarChartItemView = BarChartItemView;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="serialize.ts" />
/// <reference path="BarChartItemView.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var BarChart;
            (function (BarChart) {
                var Models = ProStyle.Models;
                var BarChartItemModel = (function (_super) {
                    __extends(BarChartItemModel, _super);
                    function BarChartItemModel(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue, init, scriptSet, barsInit, barsScriptSet) {
                        _super.call(this, itemSet, "barChart", "BarChart", [init, barsInit], [scriptSet, barsScriptSet]);
                        this.bars = bars;
                        this.width = width;
                        this.height = height;
                        this.margin = margin;
                        this.minDomainValue = minDomainValue;
                        this.maxDomainValue = maxDomainValue;
                        this.barsInit = barsInit;
                        this.barsScriptSet = barsScriptSet;
                    }
                    BarChartItemModel.prototype.serialize = function () {
                        return BarChart.serialize(this);
                    };
                    BarChartItemModel.prototype.createView = function (itemViewSet) {
                        return new BarChart.BarChartItemView(this, itemViewSet);
                    };
                    return BarChartItemModel;
                })(Models.Items.ItemModel);
                BarChart.BarChartItemModel = BarChartItemModel;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var bs = 28;
        var bx2 = 1 << bs;
        var bm = bx2 - 1;
        var bx = bx2 >> 1;
        var bd = bs >> 1;
        var bdm = (1 << bd) - 1;
        var log2 = Math.log(2);
        var a;
        var b;
        function badd(a, b) {
            var al = a.length, bl = b.length;
            if (al < bl)
                return badd(b, a);
            var c = 0, r = [], n = 0;
            for (; n < bl; n++) {
                c += a[n] + b[n];
                r[n] = c & bm;
                c >>>= bs;
            }
            for (; n < al; n++) {
                c += a[n];
                r[n] = c & bm;
                c >>>= bs;
            }
            if (c)
                r[n] = c;
            return r;
        }
        function beq(a, b) {
            if (a.length != b.length)
                return 0;
            for (var n = a.length - 1; n >= 0; n--)
                if (a[n] != b[n])
                    return 0;
            return 1;
        }
        function bsub(a, b) {
            var al = a.length, bl = b.length, c = 0, r = [];
            if (bl > al) {
                return [];
            }
            if (bl == al) {
                if (b[bl - 1] > a[bl - 1])
                    return [];
                if (bl == 1)
                    return [a[0] - b[0]];
            }
            for (var n = 0; n < bl; n++) {
                c += a[n] - b[n];
                r[n] = c & bm;
                c >>= bs;
            }
            for (; n < al; n++) {
                c += a[n];
                r[n] = c & bm;
                c >>= bs;
            }
            if (c) {
                return [];
            }
            if (r[n - 1])
                return r;
            while (n > 1 && r[n - 1] == 0)
                n--;
            return r.slice(0, n);
        }
        function bmul(a, b) {
            b = b.concat([0]);
            var al = a.length, bl = b.length, r = [], n, nn, aa, c, m;
            var g, gg, h, hh, ghhb;
            for (n = al + bl; n >= 0; n--)
                r[n] = 0;
            for (n = 0; n < al; n++) {
                if (aa = a[n]) {
                    c = 0;
                    hh = aa >> bd;
                    h = aa & bdm;
                    m = n;
                    for (nn = 0; nn < bl; nn++, m++) {
                        g = b[nn];
                        gg = g >> bd;
                        g = g & bdm;
                        var ghh = g * hh + h * gg;
                        ghhb = ghh >> bd;
                        ghh &= bdm;
                        c += r[m] + h * g + (ghh << bd);
                        r[m] = c & bm;
                        c = (c >> bs) + gg * hh + ghhb;
                    }
                }
            }
            n = r.length;
            if (r[n - 1])
                return r;
            while (n > 1 && r[n - 1] == 0)
                n--;
            return r.slice(0, n);
        }
        function blshift(a, b) {
            var n, c = 0, r = [];
            for (n = 0; n < a.length; n++) {
                c |= (a[n] << b);
                r[n] = c & bm;
                c >>= bs;
            }
            if (c)
                r[n] = c;
            return r;
        }
        function brshift(a) {
            var c = 0, n, cc, r = [];
            for (n = a.length - 1; n >= 0; n--) {
                cc = a[n];
                c <<= bs;
                r[n] = (cc | c) >> 1;
                c = cc & 1;
            }
            while (r.length > 1 && r[r.length - 1] == 0) {
                r = r.slice(0, -1);
            }
            this.a = r;
            this.c = c;
            return this;
        }
        function zeros(n) { var r = []; while (n-- > 0)
            r[n] = 0; return r; }
        function toppart(x, start, len) {
            var n = 0;
            while (start >= 0 && len-- > 0)
                n = n * bx2 + x[start--];
            return n;
        }
        function bdiv(x, y) {
            var n = x.length - 1, t = y.length - 1, nmt = n - t;
            if (n < t || n == t && (x[n] < y[n] || n > 0 && x[n] == y[n] && x[n - 1] < y[n - 1])) {
                this.q = [0];
                this.mod = x;
                return this;
            }
            if (n == t && toppart(x, t, 2) / toppart(y, t, 2) < 4) {
                var q = 0, xx;
                for (;;) {
                    xx = bsub(x, y);
                    if (xx.length == 0)
                        break;
                    x = xx;
                    q++;
                }
                this.q = [q];
                this.mod = x;
                return this;
            }
            var shift, shift2;
            shift2 = Math.floor(Math.log(y[t]) / log2) + 1;
            shift = bs - shift2;
            if (shift) {
                x = x.concat();
                y = y.concat();
                for (i = t; i > 0; i--)
                    y[i] = ((y[i] << shift) & bm) | (y[i - 1] >> shift2);
                y[0] = (y[0] << shift) & bm;
                if (x[n] & ((bm << shift2) & bm)) {
                    x[++n] = 0;
                    nmt++;
                }
                for (i = n; i > 0; i--)
                    x[i] = ((x[i] << shift) & bm) | (x[i - 1] >> shift2);
                x[0] = (x[0] << shift) & bm;
            }
            var i, j, x2, y2, q = zeros(nmt + 1);
            y2 = zeros(nmt).concat(y);
            for (;;) {
                x2 = bsub(x, y2);
                if (x2.length == 0)
                    break;
                q[nmt]++;
                x = x2;
            }
            var yt = y[t], top = toppart(y, t, 2);
            for (i = n; i > t; i--) {
                var m = i - t - 1;
                if (i >= x.length)
                    q[m] = 1;
                else if (x[i] == yt)
                    q[m] = bm;
                else
                    q[m] = Math.floor(toppart(x, i, 2) / yt);
                var topx = toppart(x, i, 3);
                while (q[m] * top > topx)
                    q[m]--;
                y2 = y2.slice(1);
                x2 = bsub(x, bmul([q[m]], y2));
                if (x2.length == 0) {
                    q[m]--;
                    x2 = bsub(x, bmul([q[m]], y2));
                }
                x = x2;
            }
            if (shift) {
                for (i = 0; i < x.length - 1; i++)
                    x[i] = (x[i] >> shift) | ((x[i + 1] << shift2) & bm);
                x[x.length - 1] >>= shift;
            }
            while (q.length > 1 && q[q.length - 1] == 0)
                q = q.slice(0, q.length - 1);
            while (x.length > 1 && x[x.length - 1] == 0)
                x = x.slice(0, x.length - 1);
            this.mod = x;
            this.q = q;
            return this;
        }
        function bmod(p, m) {
            if (m.length == 1) {
                if (p.length == 1)
                    return [p[0] % m[0]];
                if (m[0] < bdm)
                    return [simplemod(p, m[0])];
            }
            var r = bdiv(p, m);
            return r.mod;
        }
        function simplemod(i, m) {
            if (m > bdm)
                return bmod(i, [m]);
            var c = 0, v;
            for (var n = i.length - 1; n >= 0; n--) {
                v = i[n];
                c = ((v >> bd) + (c << bd)) % m;
                c = ((v & bdm) + (c << bd)) % m;
            }
            return c;
        }
        function bmodexp(xx, y, m) {
            var r = [1], n, an, a, x = xx.concat();
            var mu = [];
            n = m.length * 2;
            mu[n--] = 1;
            for (; n >= 0; n--)
                mu[n] = 0;
            mu = bdiv(mu, m).q;
            for (n = 0; n < y.length; n++) {
                for (a = 1, an = 0; an < bs; an++, a <<= 1) {
                    if (y[n] & a)
                        r = bmod2(bmul(r, x), m, mu);
                    x = bmod2(bmul(x, x), m, mu);
                }
            }
            return r;
        }
        function bmod2(x, m, mu) {
            var xl = x.length - (m.length << 1);
            if (xl > 0) {
                return bmod2(x.slice(0, xl).concat(bmod2(x.slice(xl), m, mu)), m, mu);
            }
            var ml1 = m.length + 1, ml2 = m.length - 1, rr;
            var q3 = bmul(x.slice(ml2), mu).slice(ml1);
            var r1 = x.slice(0, ml1);
            var r2 = bmul(q3, m).slice(0, ml1);
            var r = bsub(r1, r2);
            if (r.length == 0) {
                r1[ml1] = 1;
                r = bsub(r1, r2);
            }
            for (var n = 0;; n++) {
                rr = bsub(r, m);
                if (rr.length == 0)
                    break;
                r = rr;
                if (n >= 3)
                    return bmod2(r, m, mu);
            }
            return r;
        }
        function sub2(a, b) {
            var r = bsub(a, b);
            if (r.length == 0) {
                this.a = bsub(b, a);
                this.sign = 1;
            }
            else {
                this.a = r;
                this.sign = 0;
            }
            return this;
        }
        function signedsub(a, b) {
            if (a.sign) {
                if (b.sign) {
                    return sub2(b, a);
                }
                else {
                    this.a = badd(a, b);
                    this.sign = 1;
                }
            }
            else {
                if (b.sign) {
                    this.a = badd(a, b);
                    this.sign = 0;
                }
                else {
                    return sub2(a, b);
                }
            }
            return this;
        }
        function modinverse(x, n) {
            var y = n.concat(), t, r, bq, a = [1], b = [0], ts;
            a.sign = 0;
            b.sign = 0;
            while (y.length > 1 || y[0]) {
                t = y.concat();
                r = bdiv(x, y);
                y = r.mod;
                var q = r.q;
                x = t;
                t = b.concat();
                ts = b.sign;
                bq = bmul(b, q);
                bq.sign = b.sign;
                r = signedsub(a, bq);
                b = r.a;
                b.sign = r.sign;
                a = t;
                a.sign = ts;
            }
            if (beq(x, [1]) == 0)
                return [0];
            if (a.sign) {
                a = bsub(n, a);
            }
            return a;
        }
        function crt_RSA(m, d, p, q) {
            var xp = bmodexp(bmod(m, p), bmod(d, bsub(p, [1])), p);
            var xq = bmodexp(bmod(m, q), bmod(d, bsub(q, [1])), q);
            var t = bsub(xq, xp);
            if (t.length == 0) {
                t = bsub(xp, xq);
                t = bmod(bmul(t, modinverse(p, q)), q);
                t = bsub(q, t);
            }
            else {
                t = bmod(bmul(t, modinverse(p, q)), q);
            }
            return badd(bmul(t, p), xp);
        }
        function t2b(s) {
            var bits = s.length * 8, bn = 1, r = [0], rn = 0, sn = 0, sb = 1;
            var c = s.charCodeAt(0);
            for (var n = 0; n < bits; n++) {
                if (bn > bm) {
                    bn = 1;
                    r[++rn] = 0;
                }
                if (c & sb)
                    r[rn] |= bn;
                bn <<= 1;
                if ((sb <<= 1) > 255) {
                    sb = 1;
                    c = s.charCodeAt(++sn);
                }
            }
            return r;
        }
        function b2t(b) {
            var bits = b.length * bs, bn = 1, bc = 0, r = [0], rb = 1, rn = 0;
            for (var n = 0; n < bits; n++) {
                if (b[bc] & bn)
                    r[rn] |= rb;
                if ((rb <<= 1) > 255) {
                    rb = 1;
                    r[++rn] = 0;
                }
                if ((bn <<= 1) > bm) {
                    bn = 1;
                    bc++;
                }
            }
            while (r[rn] == 0) {
                rn--;
            }
            var rr = '';
            for (var n = 0; n <= rn; n++)
                rr += String.fromCharCode(r[n]);
            return rr;
        }
        var b64s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';
        function textToBase64(t) {
            var r = '';
            var m = 0;
            var a = 0;
            var tl = t.length - 1;
            var c;
            for (var n = 0; n <= tl; n++) {
                c = t.charCodeAt(n);
                r += b64s.charAt((c << m | a) & 63);
                a = c >> (6 - m);
                m += 2;
                if (m == 6 || n == tl) {
                    r += b64s.charAt(a);
                    if ((n % 45) == 44) {
                        r += "\n";
                    }
                    m = 0;
                    a = 0;
                }
            }
            return r;
        }
        function base64ToText(t) {
            var r = '';
            var m = 0;
            var a = 0;
            var c;
            for (var n = 0; n < t.length; n++) {
                c = b64s.indexOf(t.charAt(n));
                if (c >= 0) {
                    if (m) {
                        r += String.fromCharCode((c << (8 - m)) & 255 | a);
                    }
                    a = c >> m;
                    m += 2;
                    if (m == 8) {
                        m = 0;
                    }
                }
            }
            return r;
        }
        function rc4(key, text) {
            var i, x, y, t, x2, kl = key.length;
            var s = [];
            for (i = 0; i < 256; i++)
                s[i] = i;
            y = 0;
            for (var j = 0; j < 2; j++) {
                for (x = 0; x < 256; x++) {
                    y = (key.charCodeAt(x % kl) + s[x] + y) % 256;
                    t = s[x];
                    s[x] = s[y];
                    s[y] = t;
                }
            }
            var z = "";
            for (x = 0; x < text.length; x++) {
                x2 = x & 255;
                y = (s[x2] + y) & 255;
                t = s[x2];
                s[x2] = s[y];
                s[y] = t;
                z += String.fromCharCode((text.charCodeAt(x) ^ s[(s[x2] + s[y]) % 256]));
            }
            return z;
        }
        function ror(a, n) { n &= 7; return n ? ((a >> n) | ((a << (8 - n)) & 255)) : a; }
        function hash(s, l) {
            var sl = s.length, r = [], rr = '', v = 1, lr = 4;
            for (var n = 0; n < l; n++)
                r[n] = (v = ((v * v * 5081 + n) & 255));
            while (sl--) {
                lr = r[sl % l] ^= ror(s.charCodeAt(sl), lr) ^ r[r[(sl * 5081) % l] % l];
            }
            for (var n = 0; n < l; n++)
                rr += String.fromCharCode(r[n] ^
                    ror(r[r[(n * 171) % l] % l], r[n]));
            return rr;
        }
        function rsaDecode(key, text) {
            text = base64ToText(text);
            var sessionKeyLength = text.charCodeAt(0);
            var sessionKeyEncryptedText = text.substr(1, sessionKeyLength);
            text = text.substr(sessionKeyLength + 1);
            var sessionKeyEncrypted = t2b(sessionKeyEncryptedText);
            var sessionkey = crt_RSA(sessionKeyEncrypted, key[0], key[1], key[2]);
            sessionkey = b2t(sessionkey);
            text = rc4(sessionkey, text);
            return text;
        }
        function c() {
            if (ProStyle["pl"])
                return;
            var hn = window.location.hostname.trim().toLowerCase();
            if (hn === '' || hn === 'localhost' || hn === '127.0.0.1')
                return;
            ProStyle["hn"] = hn;
            var plk = ProStyle["plusLicense"];
            if (plk === undefined) {
                ProStyle["pl"] = 2;
            }
            else {
                var k = [[239800443, 61606552, 84], [201280845, 11], [166507101, 13]];
                var pld = rsaDecode(k, plk);
                ProStyle["pld"] = pld;
                ProStyle["pl"] = pld === hn ? 1 : 3;
            }
        }
        Extensions.c = c;
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="BarChartItemModel.ts" />
/// <reference path="BarChartPropertyTypes.ts" />
/// <reference path="../../l.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Items;
        (function (Items) {
            var BarChart;
            (function (BarChart) {
                var DEFAULT_WH = 50;
                var DEFAULT_M = 1;
                var Serialization = ProStyle.Serialization;
                var Util = ProStyle.Util;
                function deserialize(itemSet, json) {
                    Extensions.c();
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
                    var propertyTypes = BarChart.BarChartPropertyTypes.get();
                    var barPropertyTypes = BarChart.BarChartPropertyTypes.getForBars();
                    var init = Serialization.PropertyListReader.read(itemSet.story, json.init, propertyTypes);
                    var barsInit = Serialization.PropertyListReader.read(itemSet.story, json.barInit || json.barsInit, barPropertyTypes);
                    var scriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Chart", json, [""], propertyTypes);
                    var barsScriptSet = Serialization.ScriptSetReader.readJson(itemSet, "Bars", json, ["bar", "bars"], barPropertyTypes);
                    return new BarChart.BarChartItemModel(itemSet, bars, width, height, margin, minDomainValue, maxDomainValue, init, scriptSet, barsInit, barsScriptSet);
                }
                BarChart.deserialize = deserialize;
            })(BarChart = Items.BarChart || (Items.BarChart = {}));
        })(Items = Extensions.Items || (Extensions.Items = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.item.barchart.js.map