/// <reference path="greensock.d.ts" />
declare module Pro.Motion.Util {
    function autoButton(btn: any, action: any, start?: number, speedup?: number): void;
}
declare module Pro.Motion.Util {
    function checkBrowserSupport(): boolean;
}
declare module Pro.Motion.Util {
    function configureMetaViewport(): void;
}
declare module Pro.Motion.Util {
    function contentLoaded(win: any, fn: any): void;
}
declare module Pro.Motion.Util {
    function convertToNumber(n: any, fallback?: number, stripTrailingNonDigits?: boolean): number;
    function convertToNumber2(n: any): number;
}
declare module Pro.Motion.Util {
    function logError(method: string, message: string): void;
}
declare module Pro.Motion.Util {
    function querySelector(selector: string, context?: NodeSelector): Element;
}
declare module Pro.Motion.Util {
    function createChildDivElement(parentDiv: HTMLDivElement, cssClass?: string): HTMLDivElement;
}
declare module Pro.Motion.Util {
    function createChildImageElement(parentDiv: HTMLDivElement, cssClass: string, src: string, width?: number, height?: number): HTMLImageElement;
}
declare module Pro.Motion.Util {
    function createStyleElement(id: string): HTMLStyleElement;
}
declare module Pro.Motion.Util {
    function createSvgElement(name: any, attrs: any, opt_parent: any): SVGElement;
}
declare module Pro.Motion.Util {
    function prefixCssStyleIfNeeded(cssStyle: string): string;
}
declare module Pro.Motion.Util {
    function encodeStyle(cssStyle: string, value: string): string;
}
declare module Pro.Motion.Util {
    function encodeStyles(cssStyles: any): string;
}
declare module Pro.Motion.Util {
    function encodeStyleSheet(styles: any): string;
}
declare module Pro.Motion.Util {
    function getElementText(element: HTMLElement): string;
}
declare module Pro.Motion.Util {
    function lowercaseProperties(json: any): any;
}
declare module Pro.Motion.Util {
    function getSetup(json: any, name: string): any;
}
declare module Pro.Motion.Util {
    function getSign(n: number): number;
}
declare module Pro.Motion.Util {
    function getGSTransform(div: HTMLElement): any;
}
declare module Pro.Motion.Util {
    function getStyleElement(styleId: string): HTMLStyleElement;
}
declare module Pro.Motion.Util {
    function insertIntoArray(array: any[], index: number, item: any): void;
}
declare module Pro.Motion.Util {
    function isAbsoluteUrl(url: string): boolean;
}
declare module Pro.Motion.Util {
    function logStepValues(flowIndex: number, pageIndex: number, itemIndex: number, stepIndex: number, values: any): void;
}
declare module Pro.Motion.Util {
    function logWarning(method: string, message: string): void;
}
declare module Pro.Motion.Util {
    function makeArray(a: any): any;
}
declare module Pro.Motion.Util {
    function querySelectorAll(selector: string, context?: NodeSelector): any;
}
declare module Pro.Motion.Util {
    function setElementText(element: HTMLElement, text: string): void;
}
declare module Pro.Motion.Util {
    function splitNoParens(s: string): string[];
}
declare module Pro.Motion.Util {
    function svgAddClass(svgElement: SVGElement, className: string): void;
}
declare module Pro.Motion.Util {
    function svgGetBounds(svgElement: SVGElement): any;
}
declare module Pro.Motion.Util {
    function svgRemoveClass(svgElement: SVGElement, className: string): void;
}
declare module Pro.Motion.Util {
    function throttle(fn: any, delay: any): () => void;
}
declare module Pro.Motion.Util {
}
declare module Pro.Motion.Types {
    enum EazeEffect {
        Back = 0,
        Bounce = 1,
        Circle = 2,
        Curve = 3,
        Elastic = 4,
        Expo = 5,
        Linear = 6,
        Sine = 7,
        SlowMo = 8,
        SlowMoBack = 9,
        Stepped = 10,
        Stop = 11,
        StopAndReturn = 12,
    }
}
declare module Pro.Motion.Types {
    enum EazeAmount {
        Less = 0,
        Normal = 1,
        More = 2,
        Extra = 3,
    }
}
declare module Pro.Motion.Types {
    enum EazeEnding {
        In = 0,
        Out = 1,
        InOut = 2,
    }
}
declare module Pro.Motion.Types {
    class Eaze {
        static DEFAULT_EFFECT: EazeEffect;
        static DEFAULT_AMOUNT: EazeAmount;
        static DEFAULT_ENDING: EazeEnding;
        static DEFAULT: Eaze;
        effect: EazeEffect;
        amount: EazeAmount;
        ending: EazeEnding;
        ease: Ease;
        constructor(effect?: EazeEffect, amount?: EazeAmount, ending?: EazeEnding);
        private setBackEase(inOut);
        private setCurveEase(inOut);
        private setElasticEase(inOut);
        private setSlowMoEase(index, yoyo?);
        private setSteppedEase();
        static getByText(text: string): Eaze;
    }
}
declare module Pro.Motion.Types {
    class Size {
        width: number;
        height: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_HEIGHT: number;
        static MIN: number;
        static MAX: number;
        constructor(width?: number, height?: number);
        aspectRatio(): number;
        getContainedSize(innerAspectRatio: number): Size;
    }
}
declare module Pro.Motion.Types {
    class Scale {
        x: number;
        y: any;
        constructor(x?: number, y?: any);
        static fromJson(json: any): Scale;
        equals(other: Scale): boolean;
    }
}
declare module Pro.Motion.Types {
    class Xyz {
        x: number;
        y: number;
        z: number;
        constructor(x?: number, y?: number, z?: number);
        static fromJson(json: any): Xyz;
        equals(other: Xyz): boolean;
    }
}
declare module Pro.Motion.Types {
    class Placement {
        position: Xyz;
        rotation: Xyz;
        scale: Scale;
        opacity: number;
        constructor(position: Xyz, rotation: Xyz, scale: Scale, opacity?: number);
        duplicate(): Placement;
        adjust(offset: Placement): void;
        renderCss(containerSize: Types.Size, bucket?: any, centerAlignment?: boolean): any;
        static fromJson(json: any): Placement;
        equals(other: Placement): boolean;
    }
}
declare module Pro.Motion.Types {
    class Shadow {
        x: number;
        y: number;
        blur: number;
        color: any;
        spread: number;
        inset: boolean;
        constructor(x?: number, y?: number, blur?: number, color?: any, spread?: number, inset?: boolean);
        render(xScale: number, yScale: number, isBoxShadow: boolean): string;
        static fromJson(json: any[]): Shadow;
        toJson(): any[];
        equals(other: Shadow): boolean;
    }
}
declare module Pro.Motion.Types {
    class Stacks {
        current: Placement;
        future: Placement;
        futureOffset: Placement;
        past: Placement;
        pastOffset: Placement;
        constructor(current: Placement, future: Placement, futureOffset: Placement, past: Placement, pastOffset: Placement);
        static fromJson(json: any): Stacks;
    }
}
declare module Pro.Motion.Util {
}
declare module Pro.Motion.Svg.fastForward {
    var svg: string;
}
declare module Pro.Motion.Svg.logo {
    var svg: string;
}
declare module Pro.Motion.Svg.pause {
    var svg: string;
}
declare module Pro.Motion.Svg.play {
    var svg: string;
}
declare module Pro.Motion.Svg.toStart {
    var svg: string;
}
declare module Pro.Motion.Config {
    interface IAutoConfig {
        start?: boolean;
        advance?: boolean;
        advanceDelay?: number;
        restart?: boolean;
        resize?: boolean;
    }
}
declare module Pro.Motion.Config {
    interface IControlsConfig {
        type: string;
    }
}
declare module Pro.Motion.Config {
    interface IKeyboardConfig {
        play: number[];
        pause: number[];
        togglePlay: number[];
        back: number[];
        playNext: number[];
        start: number[];
        end: number[];
    }
}
declare module Pro.Motion.Config {
    interface ITouchConfig {
    }
}
declare module Pro.Motion.Config {
    interface IConfig {
        auto?: IAutoConfig;
        controls?: IControlsConfig;
        keyboard?: IKeyboardConfig;
        touch?: ITouchConfig;
        mouseWheel?: boolean;
        debugBar?: boolean;
    }
}
declare module Pro.Motion.Config {
    interface ITrackControlsConfig extends IControlsConfig {
        autoHide?: boolean;
        color?: string;
        highlightColor?: string;
        backColor?: string;
        stepColor1?: string;
        stepColor2?: string;
        startHint?: boolean;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    interface IVariable {
        defaultValueOverride: any;
        type: IVariableType;
        getValue(getDefaultIfMissing?: boolean): any;
        setValue(value: any): any;
        render(includeLabel: boolean, includeText: any): string;
    }
}
declare module Pro.Motion.Models {
    class Model {
        initPropertyLists: Properties.PropertyList[];
        init: Properties.PropertyList;
        constructor(initPropertyLists: Properties.PropertyList[]);
    }
}
declare module Pro.Motion.Stories {
    var rootUrl: string;
    var Config: {
        "default": {
            auto: {
                start: boolean;
                advance: boolean;
                advanceDelay: number;
                restart: boolean;
                resize: boolean;
            };
            controls: {
                type: string;
                autoHide: boolean;
                color: string;
                highlightColor: string;
                backColor: string;
                stepColor1: string;
                stepColor2: string;
                startHint: boolean;
            };
            keyboard: boolean;
            touch: boolean;
            mouseWheel: boolean;
            debugBar: boolean;
        };
    };
}
declare module Pro.Motion.Models {
    import Types = Pro.Motion.Types;
    class Canvas extends Model {
        padding: number;
        imageRootUrl: string;
        private adjustedImageRootUrl;
        constructor(init: Properties.PropertyList, padding: number, imageRootUrl: string);
        private setAdjustedImageRootUrl(imageRootUrl);
        adjustBackgroundImage(bg: string, containerSize: Types.Size): string;
        adjustImageUrl(url: string): string;
    }
}
declare module Pro.Motion.Models {
    class Frame extends Model {
        aspectRatio: number;
        padding: number;
        constructor(init: Properties.PropertyList, aspectRatio: number, padding: number);
    }
}
declare module Pro.Motion.Models {
    class Story {
        canvas: Canvas;
        frame: Frame;
        flows: Flows.Flow[];
        classes: any;
        constructor(canvas: Canvas, frame: Frame, flows: Flows.Flow[], classes: any);
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    interface IVariableType {
        label: string;
        text: string;
        jsonNames: string[];
        cssName: string;
        defaultValue: any;
        alwaysInitializeCss: boolean;
        createVariable(): IVariable;
        scrubValue(value: any): any;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, variable: IVariable, buckets: any[], initializing: boolean): any;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: any): any;
    }
}
declare module Pro.Motion.Models.Properties {
    interface IPropertyType {
        label: string;
        jsonNames: string[];
        variableTypes: Variables.IVariableType[];
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromObject(json: {}): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    interface IProperty {
        type: IPropertyType;
        getVariable(jsonName: string): Variables.IVariable;
        renderLabel(): string;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, buckets: any[], initializing?: boolean): any;
    }
}
declare module Pro.Motion.Models.Properties {
    class PropertyList {
        propertyTypes: IPropertyType[];
        properties: IProperty[];
        constructor(propertyTypes: IPropertyType[], properties: IProperty[]);
        getPropertyOfType(propertyType: IPropertyType): IProperty;
        hasAnythingSet(): boolean;
    }
}
declare module Pro.Motion.Models {
    interface IItemSet {
        items: Items.Item[];
        flow: Flows.Flow;
        story: Story;
    }
}
declare module Pro.Motion.Models {
    class Page extends Model implements IItemSet {
        flow: Flows.Flow;
        steps: Step[];
        items: Items.Item[];
        canvasScriptSet: Scripts.ScriptSet;
        frameScriptSet: Scripts.ScriptSet;
        pageScriptSet: Scripts.ScriptSet;
        story: Models.Story;
        constructor(init: Properties.PropertyList, flow: Flows.Flow);
        insertStep(index: number): void;
        deleteStep(index: number): void;
        deleteItem(index: number): void;
    }
}
declare module Pro.Motion.Models.Flows {
    class Flow {
        story: Story;
        flowType: string;
        placement: Types.Placement;
        pageAspectRatio: number;
        defaultPageClass: string;
        pages: Page[];
        constructor(story: Story, flowType: string, placement: Types.Placement, pageAspectRatio: number, defaultPageClass?: string);
        getDefaultPageClassName(): string;
        getDefaultPageClassValue(): any;
    }
}
declare module Pro.Motion.Models.Flows {
    class SimpleFlow extends Flow {
        constructor(story: Story, placement: Types.Placement, defaultPageClass: string, pageAspectRatio: number);
        getDefaultPageClassName(): string;
    }
}
declare module Pro.Motion.Extensions.Flows.unknown {
    import Models = Pro.Motion.Models;
    import Types = Pro.Motion.Types;
    class Extension extends Models.Flows.SimpleFlow {
        constructor(story: Models.Story, placement: Types.Placement, defaultPageClass: string, pageAspectRatio: number);
    }
}
declare module Pro.Motion.Render {
    import Properties = Pro.Motion.Models.Properties;
    interface AfterCssBuckets {
        (properties: Properties.IProperty[], buckets: any[], containerSize: Types.Size): void;
    }
}
declare module Pro.Motion.Render {
    import Models = Pro.Motion.Models;
    import Types = Pro.Motion.Types;
    import Scripts = Pro.Motion.Models.Scripts;
    import Properties = Pro.Motion.Models.Properties;
    class Visual {
        model: Models.Model;
        element: Element;
        div: HTMLDivElement;
        constructor(model: Models.Model, element: Element);
        initializeProperties(story: Models.Story, elements: Element[], containerSize: Types.Size, timeline: TimelineMax, init: Properties.PropertyList, centerAlignment: boolean, forceProps?: any, afterCssBuckets?: AfterCssBuckets): void;
        private generateEventTimeline(itemSet, divs, containerSize, event, rootTimeline, label, afterCssBuckets?);
        generateActionsForStep(itemSet: IItemSet, divs: Element[], containerSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string, scriptSet: Scripts.ScriptSet, afterCssBuckets?: AfterCssBuckets): void;
        static postProcessCssBuckets(buckets: any[], afterCssBuckets: AfterCssBuckets, properties: Properties.IProperty[], containerSize: Types.Size): void;
    }
}
declare module Pro.Motion.Render.Flows {
    interface IFlow {
        pageElems: Page[];
        initializePlacement(timeline: TimelineMax): any;
        pageAspectRatio(): number;
    }
}
declare module Pro.Motion.Render {
    interface IItemSet {
        items: Items.Item[];
        div: HTMLDivElement;
    }
}
declare module Pro.Motion.Render.Items {
    import Models = Pro.Motion.Models;
    class Item extends Visual {
        private item;
        itemSetElem: IItemSet;
        constructor(item: Models.Items.Item, itemSetElem: IItemSet, element?: Element);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
        generateStepActions(itemSet: IItemSet, pageSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string): void;
    }
}
declare module Pro.Motion.Models.Properties {
    class Property implements IProperty {
        type: IPropertyType;
        constructor(type: IPropertyType);
        getVariable(jsonName: string): Variables.IVariable;
        renderLabel(): string;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, buckets: any[], initializing?: boolean): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class VariableType<T> implements IVariableType {
        label: string;
        jsonNames: string[];
        cssName: string;
        text: string;
        defaultValue: T;
        alwaysInitializeCss: boolean;
        constructor(label: string, jsonNames: string[], cssName: string, text: string, defaultValue: T, alwaysInitializeCss: boolean);
        createVariable(): IVariable;
        scrubValue(value: any): any;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, variable: IVariable, buckets: any[], initializing: boolean): void;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: T): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class StringVariableType extends VariableType<string> {
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, alwaysInitializeCss: boolean);
        scrubValue(value: any): string;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class BackgroundImageVariableType extends StringVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: string): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class BooleanVariableType extends VariableType<boolean> {
        private falseValue;
        private trueValue;
        constructor(label: string, jsonNames: string[], cssName: string, falseValue: any, trueValue: any, alwaysInitializeCss?: boolean);
        scrubValue(value: any): boolean;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: boolean): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class EnumVariableType extends StringVariableType {
        private enumValues;
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, enumValues: string[], alwaysInitializeCss: boolean);
        scrubValue(value: any): string;
        getValueByIndex(index: number): string;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class BulletsVariableType extends EnumVariableType {
        constructor();
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: string): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class ColorVariableType extends StringVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, alwaysInitializeCss: boolean);
        scrubValue(value: any): string;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class NumberVariableType extends VariableType<number> {
        private _minValue;
        private _maxNumber;
        private _decimalPlaces;
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        scrubValue(value: any): number;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class ContainerDepthPctVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class ContainerHeightPctVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class ContainerWidthPctVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    import Types = Pro.Motion.Types;
    class EaseVariableType extends VariableType<Types.Eaze> {
        constructor();
        scrubValue(value: any): Types.Eaze;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: Types.Eaze): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class NumberOffsetVariableType extends NumberVariableType {
        private inverted;
        offset: number;
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, offset: number, inverted: boolean, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    import Types = Pro.Motion.Types;
    class OriginVariableType extends VariableType<Types.Xyz> {
        private transform;
        private useContainer;
        constructor(transform: boolean, useContainer?: boolean);
        scrubValue(value: any): Types.Xyz;
        private scrubArray(a);
        private scrubString(s);
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, variable: IVariable, buckets: any[], initializing: boolean): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class PercentVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class ShadowVariableType extends VariableType<Types.Shadow[]> {
        private isBoxShadow;
        constructor(cssName: string, isBoxShadow: any);
        scrubValue(value: any): Types.Shadow[];
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, shadows: Types.Shadow[]): void;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class TextAlignVariableType extends EnumVariableType {
        constructor();
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class TextWidthVariableType extends NumberVariableType {
        constructor();
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module Pro.Motion.Models.Properties {
    class PropertyType implements IPropertyType {
        label: string;
        jsonNames: string[];
        variableTypes: Variables.IVariableType[];
        constructor(label: string, jsonNames: string[], variableTypes: Variables.IVariableType[]);
        createPropertyFromArray(json: any[]): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromObject(json: {}): IProperty;
        renderLabel(property: IProperty): string;
        countOfValues(property: IProperty): number;
        renderVariables(property: IProperty, includeLabel: boolean, includeText: boolean): string;
    }
}
declare module Pro.Motion.Models.Items {
    class Item extends Model {
        itemSet: IItemSet;
        itemType: string;
        typeLabel: string;
        scriptSets: Scripts.ScriptSet[];
        scriptSet: Scripts.ScriptSet;
        constructor(itemSet: IItemSet, itemType: string, typeLabel: string, initPropertyLists: Properties.PropertyList[], scriptSets: Scripts.ScriptSet[]);
        getScriptSet(index: number): Scripts.ScriptSet;
        getCountOfStepsUsed(): number;
    }
}
declare module Pro.Motion.Render.Items {
    import Models = Pro.Motion.Models;
    class SequencedItem extends Item {
        sequencedItem: Models.Items.SequencedItem;
        constructor(sequencedItem: Models.Items.SequencedItem, itemSetElem: IItemSet);
        moveToSubStep(position: number, animate: boolean, cameraSize: Types.Size): void;
        getCountOfSubSteps(): number;
    }
}
declare module Pro.Motion.Models.Scripts {
    class Script {
        scriptSet: ScriptSet;
        type: ScriptType;
        x: number;
        y: number;
        constructor(scriptSet: ScriptSet, type: ScriptType);
    }
}
declare module Pro.Motion.Models.Scripts {
    class ScriptSet {
        itemSet: IItemSet;
        name: string;
        itemProperties: Properties.IPropertyType[];
        scripts: Script[];
        constructor(itemSet: IItemSet, name: string, itemProperties: Properties.IPropertyType[]);
        getCountOfStepsUsed(): number;
        insertStep(index: number): void;
        deleteStep(index: number): void;
    }
}
declare module Pro.Motion.Extensions.Items.unknown {
    import Models = Pro.Motion.Models;
    import Items = Models.Items;
    class Extension extends Items.Item {
        unknownType: string;
        constructor(itemSet: Models.IItemSet, unknownType: string);
    }
}
declare module Pro.Motion.Extensions.Items.unknown {
    import Models = Pro.Motion.Models;
    function readJson(itemSet: Models.IItemSet, json: any): Models.Items.Item;
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class ItemReader {
        static read(itemSet: Models.IItemSet, json: any): Models.Items.Item;
        static lookupExtension(itemType: string): any;
    }
}
declare module Pro.Motion.Render {
    import Models = Pro.Motion.Models;
    class Page extends Visual implements IItemSet {
        page: Models.Page;
        flowElem: Flows.Flow;
        flowIndex: number;
        pageIndex: number;
        steps: Step[];
        items: Items.Item[];
        constructor(page: Models.Page, flowElem: Flows.Flow, flowIndex: number, pageIndex: number);
        static createItems(itemSet: Render.IItemSet, items: Models.Items.Item[]): void;
        generateStepsActions(timeline: TimelineMax, priorStep: Render.Step): Render.Step;
    }
}
declare module Pro.Motion.Render.Flows {
    import Models = Pro.Motion.Models;
    class Flow extends Visual implements IFlow {
        private flow;
        cameraElem: Camera;
        flowIndex: number;
        pageElems: Page[];
        constructor(flow: Models.Flows.Flow, cameraElem: Camera, flowIndex: number);
        initializePlacement(timeline: TimelineMax): void;
        initializePerspective(): void;
        initializeFlowPlacement(timeline: TimelineMax): void;
        private generateCameraMovement(timeline, label);
        initializePages(timeline: TimelineMax): void;
        generatePageMovement(timeline: TimelineMax, label: string, pageIndex: number): void;
        generateStepsActions(timeline: TimelineMax, priorStep: Render.Step): Render.Step;
        pageAspectRatio(): number;
    }
}
declare module Pro.Motion.Render.Flows {
    import Models = Pro.Motion.Models;
    class SimpleFlow extends Flow {
        private simpleFlow;
        constructor(simpleFlow: Models.Flows.SimpleFlow, cameraElem: Camera, flowIndex: number);
        initializePages(timeline: TimelineMax): void;
        generatePageMovement(timeline: TimelineMax, label: string, pageIndex: number): void;
        private applyCss(timeline, div, label, duration, css, ease);
    }
}
declare module Pro.Motion.Extensions.Flows.unknown {
    import Render = Pro.Motion.Render;
    class Renderer extends Render.Flows.SimpleFlow {
        constructor(unknownFlow: Extension, cameraElem: Render.Camera, flowIndex: number);
    }
}
declare module Pro.Motion.Extensions.Flows.unknown {
    import Models = Pro.Motion.Models;
    function readJson(story: Models.Story, json: any): Models.Flows.Flow;
}
declare module Pro.Motion.Extensions.Items.unknown {
    import Items = Pro.Motion.Render.Items;
    class Renderer extends Items.Item {
        private unknownItem;
        private divs;
        constructor(unknownItem: Extension, itemSetElem: Pro.Motion.Render.IItemSet);
    }
}
declare module Pro.Motion.Models.Scripts {
    class ActionsScript extends Script {
        actions: Actions.Action[];
        constructor(scriptSet: ScriptSet, type: ScriptType);
        removeAction(action: Actions.Action): void;
    }
}
declare module Pro.Motion.Models.Actions {
    enum ActionType {
        SetProperties = 0,
    }
}
declare module Pro.Motion.Models.Actions.ActionType {
    function fromString(value: string): ActionType;
    function toString(value: ActionType): string;
}
declare module Pro.Motion.Models.Actions {
    class Action {
        script: Scripts.ActionsScript;
        actionType: ActionType;
        delay: number;
        constructor(script: Scripts.ActionsScript, actionType: ActionType, delay: number);
        saveJson(): any;
    }
}
declare module Pro.Motion.Models.Properties {
    interface IPropertySet {
        properties: IProperty[];
    }
}
declare module Pro.Motion.Models.Actions {
    class SetPropertiesAction extends Action implements Properties.IPropertySet {
        properties: Properties.IProperty[];
        constructor(script: Scripts.ActionsScript, delay: number, properties: Properties.IProperty[]);
    }
}
declare module Pro.Motion.Models.Flows {
    class PlacementFlow extends Flow {
        private defaultPageClassIfNotGiven;
        constructor(story: Story, flowType: string, placement: Types.Placement, defaultPageClass: string, pageAspectRatio: number, defaultPageClassIfNotGiven: string);
        getDefaultPageClassName(): string;
        getDefaultPageClassValue(): any;
    }
}
declare module Pro.Motion.Models.Properties {
    class AnchorPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        private parseString(s);
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class AnimationPropertyType extends PropertyType {
        constructor(initializeFontSize?: boolean);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class BackgroundPropertyType extends PropertyType {
        constructor(backgroundColor?: string);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class BorderPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class BulletsPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class ClassPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
    }
}
declare module Pro.Motion.Models.Properties {
    class ColorPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class CornersPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class CropPropertyType extends PropertyType {
        constructor(isSvg?: boolean);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class FontPropertyType extends PropertyType {
        constructor(initializeFontSize?: boolean);
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class MoveToPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
    }
}
declare module Pro.Motion.Models.Properties {
    class OpacityPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class PaddingPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class PositionPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class RotationPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class ScalePropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class SizePropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class SkewPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class ShadowPropertyType extends PropertyType {
        constructor(label?: string, jsonNames?: string[], cssName?: string);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        private parseString(s);
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        private parseObject(o);
        createPropertyFromObject(json: any): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class SvgFillPropertyType extends PropertyType {
        constructor(backgroundColor?: string);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
    }
}
declare module Pro.Motion.Models.Properties {
    class TextAlignPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class TextShadowPropertyType extends ShadowPropertyType {
        constructor();
    }
}
declare module Pro.Motion.Models.Properties {
    class TextStylePropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class TextWidthPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class TransformOriginPropertyType extends PropertyType {
        constructor(useContainer: boolean);
        private createProperty(json);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module Pro.Motion.Models.Properties {
    class Cache {
        static ANCHOR: AnchorPropertyType;
        static ANIMATION: AnimationPropertyType;
        static BACKGROUND: BackgroundPropertyType;
        static BORDER: BorderPropertyType;
        static BULLET: BulletsPropertyType;
        static CLASS: ClassPropertyType;
        static CORNERS: CornersPropertyType;
        static CROP: CropPropertyType;
        static CROP_SVG: CropPropertyType;
        static FILL_SVG: SvgFillPropertyType;
        static FONT: FontPropertyType;
        static MOVE_TO: MoveToPropertyType;
        static OPACITY: OpacityPropertyType;
        static PADDING: PaddingPropertyType;
        static POSITION: PositionPropertyType;
        static ROTATION: RotationPropertyType;
        static SCALE: ScalePropertyType;
        static SIZE: SizePropertyType;
        static SKEW: SkewPropertyType;
        static SHADOW: ShadowPropertyType;
        static TEXT_ALIGN: TextAlignPropertyType;
        static TEXT_COLOR: ColorPropertyType;
        static TEXT_SHADOW: TextShadowPropertyType;
        static TEXT_STYLE: TextStylePropertyType;
        static TEXT_WIDTH: TextWidthPropertyType;
        static TRANSFORM_ORIGIN: TransformOriginPropertyType;
        static TRANSFORM_ORIGIN_CONTAINER: TransformOriginPropertyType;
    }
}
declare module Pro.Motion.Models.Items {
    class ImageItem extends Item {
        src: string;
        width: number;
        height: number;
        constructor(itemSet: IItemSet, src: string, width: number, height: number, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet);
    }
}
declare module Pro.Motion.Models.Items {
    class LayerItem extends Item implements IItemSet {
        items: Items.Item[];
        flow: Flows.Flow;
        story: Models.Story;
        constructor(itemSet: IItemSet, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet);
    }
}
declare module Pro.Motion.Models.Items {
    class SequencedItem extends Item {
        sequenceOnStepIndex: number;
        constructor(itemSet: IItemSet, itemType: string, typeLabel: string, sequenceOnStepIndex: number, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet);
    }
}
declare module Pro.Motion.Models.Items {
    class TextItem extends Item {
        text: string;
        stackedLines: boolean;
        stackedWords: boolean;
        stackedChars: boolean;
        linesInit: Properties.PropertyList;
        linesScriptSet: Scripts.ScriptSet;
        wordsInit: Properties.PropertyList;
        wordsScriptSet: Scripts.ScriptSet;
        charsInit: Properties.PropertyList;
        charsScriptSet: Scripts.ScriptSet;
        constructor(itemSet: IItemSet, text: string, stackedLines: boolean, stackedWords: boolean, stackedChars: boolean, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet, linesInit: Properties.PropertyList, linesScriptSet: Scripts.ScriptSet, wordsInit: Properties.PropertyList, wordsScriptSet: Scripts.ScriptSet, charsInit: Properties.PropertyList, charsScriptSet: Scripts.ScriptSet);
    }
}
declare module Pro.Motion.Models.Properties.PerElement {
    class Canvas {
        private static _propertyTypes;
        static getPropertyTypes(): Properties.IPropertyType[];
    }
}
declare module Pro.Motion.Models.Properties.PerElement {
    class Frame {
        private static _propertyTypes;
        static getPropertyTypes(): Properties.IPropertyType[];
    }
}
declare module Pro.Motion.Models.Properties.PerElement {
    class ImageItem {
        private static _propertyTypes;
        static getPropertyTypes(): Properties.IPropertyType[];
    }
}
declare module Pro.Motion.Models.Properties.PerElement {
    class LayerItem {
        private static _propertyTypes;
        static getPropertyTypes(): Properties.IPropertyType[];
    }
}
declare module Pro.Motion.Models.Properties.PerElement {
    class Page {
        private static _propertyTypes;
        static getPropertyTypes(): Properties.IPropertyType[];
    }
}
declare module Pro.Motion.Models.Properties.PerElement {
    class TextItem {
        private static _propertyTypes;
        private static _linePropertyTypes;
        private static _wordPropertyTypes;
        private static _charPropertyTypes;
        private static cacheProperties();
        private static addPropertyType(arrays, propertyType);
        static getPropertyTypes(): Properties.IPropertyType[];
        static getLinePropertyTypes(): Properties.IPropertyType[];
        static getWordPropertyTypes(): Properties.IPropertyType[];
        static getCharPropertyTypes(): Properties.IPropertyType[];
    }
}
declare module Pro.Motion.Models.Properties {
    enum StaggerTargets {
        All = 0,
        Odd = 1,
        Even = 2,
        Thirds1 = 3,
        Thirds2 = 4,
        Thirds3 = 5,
    }
}
declare module Pro.Motion.Models.Properties {
    enum StaggerOrder {
        Forward = 0,
        Reverse = 1,
        Random = 2,
    }
}
declare module Pro.Motion.Models.Properties {
    class Stagger {
        delay: number;
        targets: StaggerTargets;
        order: StaggerOrder;
        static defaultDelay: number;
        static defaultTargets: StaggerTargets;
        static defaultOrder: StaggerOrder;
        constructor(delay?: number, targets?: StaggerTargets, order?: StaggerOrder);
        isDefault(): boolean;
    }
}
declare module Pro.Motion.Models.Properties.Variables {
    class Variable<T> implements IVariable {
        type: IVariableType;
        private _value;
        defaultValueOverride: T;
        constructor(type: IVariableType);
        getValue(getDefaultIfMissing?: boolean): T;
        setValue(value: T): void;
        render(includeLabel: boolean, includeText: any): string;
    }
}
declare module Pro.Motion.Models.Scripts {
    enum ScriptType {
        InitEvent = 0,
        StepEvent = 1,
        SwitchEvent = 2,
        ActionsOrphan = 3,
        PropertyOrphan = 4,
    }
}
declare module Pro.Motion.Models.Scripts.ScriptType {
    function fromString(value: string): ScriptType;
    function toString(value: ScriptType): string;
}
declare module Pro.Motion.Models.Scripts {
    class ActionsOrphan extends ActionsScript {
        scriptSet: ScriptSet;
        actions: Actions.Action[];
        constructor(scriptSet: ScriptSet);
    }
}
declare module Pro.Motion.Models.Scripts {
    class PropertiesScript extends Script implements Properties.IPropertySet {
        properties: Properties.IProperty[];
        constructor(scriptSet: ScriptSet, type: ScriptType);
    }
}
declare module Pro.Motion.Models.Scripts {
    class InitEvent extends PropertiesScript {
        scriptSet: ScriptSet;
        constructor(scriptSet: ScriptSet);
    }
}
declare module Pro.Motion.Models.Scripts {
    class PropertyOrphan extends PropertiesScript {
        scriptSet: ScriptSet;
        constructor(scriptSet: ScriptSet);
    }
}
declare module Pro.Motion.Models.Scripts {
    class StepEvent extends ActionsScript {
        stepIndex: number;
        constructor(scriptSet: ScriptSet, stepIndex: number);
    }
}
declare module Pro.Motion.Models.Scripts {
    class SwitchEvent extends ActionsScript {
        switchName: string;
        constructor(scriptSet: ScriptSet, switchName: string);
    }
}
declare module Pro.Motion.Models {
    class Step {
        autoAdvanceDelay: number;
        startLabel: string;
        stopLabel: string;
        time: number;
        constructor(autoAdvanceDelay?: number);
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class FlowReader {
        static read(story: Models.Story, json: any): Models.Flows.Flow;
        static lookupExtension(itemType: string): any;
    }
}
declare module Pro.Motion.Render {
    import Models = Pro.Motion.Models;
    class Camera extends Visual {
        story: Models.Story;
        frameElem: Frame;
        size: Types.Size;
        flowElems: Flows.Flow[];
        constructor(story: Models.Story, frameElem: Frame);
        resize(): void;
        stepStopped(timeline: TimelineMax, step: Step): void;
    }
}
declare module Pro.Motion.Render {
    import Models = Pro.Motion.Models;
    class Frame extends Visual {
        story: Models.Story;
        canvasElem: Canvas;
        size: Types.Size;
        cameraElem: Camera;
        constructor(story: Models.Story, canvasElem: Canvas);
        stepStopped(timeline: TimelineMax, step: Step): void;
        resize(): void;
    }
}
declare module Pro.Motion.Util.Events {
    interface ILiteEvent<T> {
        on(handler: {
            (data?: T): void;
        }): any;
        off(handler: {
            (data?: T): void;
        }): any;
    }
}
declare module Pro.Motion.Util.Events {
    class LiteEvent<T> implements ILiteEvent<T> {
        private handlers;
        on(handler: {
            (data?: T): void;
        }): void;
        off(handler: {
            (data?: T): void;
        }): void;
        trigger(data?: T): void;
        dispose(): void;
    }
}
declare module Pro.Motion.Play {
    import Render = Pro.Motion.Render;
    interface IPlayerProgress {
        progress: number;
        time: number;
        step: Render.Step;
        subStep: number;
    }
}
declare module Pro.Motion.Play {
    import Events = Pro.Motion.Util.Events;
    import Render = Pro.Motion.Render;
    interface IPlayer {
        timeline: TimelineMax;
        steps: Render.Step[];
        isAtStoryStart(): boolean;
        isAtStoryEnd(): boolean;
        isAtStepStart(): boolean;
        isAtStepEnd(): boolean;
        isPaused(): boolean;
        progressChanged: Events.ILiteEvent<IPlayerProgress>;
        stateChanged: Events.ILiteEvent<boolean>;
        stepComplete: Events.ILiteEvent<Render.Step>;
        seek(progress: number, animate?: boolean): any;
        seekStep(step: Render.Step, animate?: boolean): any;
        playCurrentStep(): any;
        playNextStep(animate?: boolean): any;
        togglePlay(): any;
        backStep(animate?: boolean): any;
        pause(): any;
    }
}
declare module Pro.Motion.Play {
    import Events = Pro.Motion.Util.Events;
    import Render = Pro.Motion.Render;
    class Player {
        frame: Render.Frame;
        timeline: TimelineMax;
        steps: Render.Step[];
        progressChanged: Events.LiteEvent<IPlayerProgress>;
        stateChanged: Events.LiteEvent<boolean>;
        stepComplete: Events.LiteEvent<Render.Step>;
        private animating;
        private currentStep;
        private currentSubStep;
        state: IPlayerProgress;
        constructor(frame: Render.Frame);
        refreshTimeline(frameElem: Render.Frame): void;
        isAtStoryStart(): boolean;
        isAtStoryEnd(): boolean;
        isAtStepStart(nudgeToStart?: boolean): boolean;
        isAtStepEnd(): boolean;
        isPaused(): boolean;
        isFirstStep(): boolean;
        isLastStep(): boolean;
        private triggerStateChanged();
        private triggerProgressChanged();
        private triggerStepComplete(step);
        private getNextStep(cycle?);
        private getPriorStep();
        private getStepAtTime(time);
        private moveTo(time, animate, thenPlay);
        private thenPlay(isAtStepEnd, playNextStep?);
        seek(progress: number, animate?: boolean): void;
        seekStep(step: Render.Step, animate?: boolean): void;
        private alignSequencedItemsToStep(destStep, atStepStart, atStepEnd, animate?);
        private playSubStep(subStep, animate?);
        private getRemainingSubStepCount();
        togglePlay(): void;
        playCurrentStep(): void;
        playNextStep(animate?: boolean): void;
        backStep(animate?: boolean): void;
        pause(): void;
    }
}
declare module Pro.Motion.Play {
    import Render = Pro.Motion.Render;
    import Config = Pro.Motion.Config;
    class Controls {
        resize(): void;
        static byConfig(canvasElem: Render.Canvas, config: Config.IControlsConfig): Controls;
    }
}
declare module Pro.Motion.Render {
    class Canvas extends Visual {
        private story;
        frameElem: Render.Frame;
        player: Play.IPlayer;
        controls: Play.Controls;
        autoPlay: Play.AutoPlay;
        keyboard: Play.KeyboardPlay;
        size: Types.Size;
        fullScreen: boolean;
        constructor(story: Models.Story, div: HTMLDivElement, config?: Config.IConfig);
        resize(force?: boolean): void;
        private listenForResize(config);
        private setCanvasSize();
        private generateStyles();
        private setupMouseWheel();
        private hideContextMenu();
        private showDebugBar();
    }
}
declare module Pro.Motion.Play {
    import Render = Pro.Motion.Render;
    import Config = Pro.Motion.Config;
    class AutoPlay {
        private canvasElem;
        private config;
        private timeout;
        constructor(canvasElem: Render.Canvas, config: Config.IAutoConfig);
        private stepComplete(step);
        pause(): void;
    }
}
declare module Pro.Motion.Play {
    import Render = Pro.Motion.Render;
    import Config = Pro.Motion.Config;
    class KeyboardPlay {
        private canvasElem;
        private config;
        private player;
        constructor(canvasElem: Render.Canvas, config: Config.IKeyboardConfig);
        private getDefaultConfig();
        private listenForKeyPresses(config);
        private mapKeys(map, keys, func);
        private play();
        private pause();
        private togglePlay();
        private back();
        private playNext();
        private start();
        private end();
    }
}
declare module Pro.Motion.Play {
    import Render = Pro.Motion.Render;
    import Config = Pro.Motion.Config;
    class TrackControls extends Controls {
        private canvasElem;
        private config;
        private COLOR;
        private HIGHLIGHT_COLOR;
        private BACK_COLOR;
        private STEP_COLOR_1;
        private STEP_COLOR_2;
        private bgDiv;
        private logoDiv;
        private backDiv;
        private playDiv;
        private nextDiv;
        private divScrubber;
        private divScrubberBar;
        private divScrubberStep;
        private divScrubberProgress;
        private divScrubberHoverPoint;
        private divScrubberHoverText;
        private scrubberSize;
        private bgClass;
        private btnClass;
        private scrubberClass;
        private scrubberBarClass;
        private scrubberStepClass;
        private scrubberProgressClass;
        private scrubberHoverPointClass;
        private scrubberHoverTextClass;
        private progress;
        constructor(canvasElem: Render.Canvas, config: Config.ITrackControlsConfig);
        private setupButtons();
        private setupScrubber();
        private scrubberMouseMove(e);
        private scrubberMouseClick(e);
        private setupPlayerEvents();
        private setupMenuOnMouseMove();
        private progressChanged(state);
        private stateChanged(isPaused);
        resize(): void;
        private resizeScrubber();
        private updateScrubberProgress();
        private generateStyles();
        private addButton(tooltip, svg, clickEvent);
    }
}
declare module Pro.Motion.Render.Actions {
    import Actions = Pro.Motion.Models.Actions;
    class SetPropertiesAction {
        static generateTimeline(itemSet: IItemSet, visual: Visual, divs: Element[], action: Actions.SetPropertiesAction, timeline: TimelineMax, containerSize: Types.Size, afterCssBuckets?: AfterCssBuckets): number;
        private static getMoveTo(properties, items);
        static generateMoveTo(div: HTMLDivElement, targetDiv: HTMLDivElement, timeline: TimelineMax): void;
    }
}
declare module Pro.Motion.Render.Flows {
    import Models = Pro.Motion.Models;
    class PlacementFlow extends Flow {
        constructor(flow: Models.Flows.Flow, cameraElem: Camera, flowIndex: number);
    }
}
declare module Pro.Motion.Render.Items {
    import Models = Pro.Motion.Models;
    class ImageItem extends Item {
        private imageItem;
        constructor(imageItem: Models.Items.ImageItem, itemSetElem: IItemSet);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
    }
}
declare module Pro.Motion.Render.Items {
    import Models = Pro.Motion.Models;
    class LayerItem extends Item implements IItemSet {
        private layerItem;
        items: Items.Item[];
        constructor(layerItem: Models.Items.LayerItem, itemSetElem: IItemSet);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
        generateStepActions(itemSet: IItemSet, pageSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string): void;
    }
}
declare module Pro.Motion.Render.Items {
    import Models = Pro.Motion.Models;
    class TextItem extends Item {
        private textItem;
        splitText: any;
        lines: boolean;
        words: boolean;
        chars: boolean;
        constructor(textItem: Models.Items.TextItem, itemSetElem: IItemSet);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
        generateStepActions(itemSet: IItemSet, pageSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string): void;
    }
}
declare module Pro.Motion.Render {
    import Models = Pro.Motion.Models;
    class Step {
        step: Models.Step;
        flowIndex: number;
        pageIndex: number;
        stepIndex: number;
        sequencedItems: Render.Items.SequencedItem[];
        label: string;
        startLabel: string;
        startTime: number;
        stopLabel: string;
        stopTime: number;
        time: number;
        playerStepIndex: number;
        constructor(step: Models.Step, flowIndex: number, pageIndex: number, stepIndex: number, sequencedItems: Render.Items.SequencedItem[]);
        isAtStart(time: number): boolean;
        isAtEnd(time: number): boolean;
        getSubStepCount(): number;
    }
}
declare module Pro.Motion.Render {
    class Timeline {
        timeline: TimelineMax;
        constructor(frameElem: Render.Frame, positionChanged: () => void);
        private generateTimeline(frameElem, positionChanged);
    }
}
declare module Pro.Motion.Serialization {
    import Actions = Pro.Motion.Models.Actions;
    import Scripts = Pro.Motion.Models.Scripts;
    class ActionReader {
        static readArray(script: Scripts.ActionsScript, json: any): Actions.Action[];
        static read(script: Scripts.ActionsScript, json: any): Actions.Action;
        private static readPropertiesAction(script, json);
    }
}
declare module Pro.Motion.Serialization {
    import Actions = Pro.Motion.Models.Actions;
    class ActionWriter {
        static writeArray(actions: Actions.Action[]): any[];
        static write(action: Actions.Action): any;
        private static writePropertiesAction(action);
    }
}
declare module Pro.Motion.Serialization {
    import Properties = Pro.Motion.Models.Properties;
    class PropertyReader {
        static read(type: Properties.IPropertyType, json: any): Properties.IProperty;
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    import Properties = Pro.Motion.Models.Properties;
    class PropertyListReader {
        static read(story: Models.Story, json: any, propertyTypes: Properties.IPropertyType[], className?: string, classValue?: any, priorClasses?: string[]): Properties.PropertyList;
    }
}
declare module Pro.Motion.Serialization {
    class CanvasReader {
        static read(json: any): Models.Canvas;
    }
}
declare module Pro.Motion.Serialization {
    class CanvasWriter {
        static write(canvas: Models.Canvas): any;
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class FlowWriter {
        static write(flow: Models.Flows.Flow): any;
    }
}
declare module Pro.Motion.Serialization.Flows {
    import Models = Pro.Motion.Models;
    function read_simple(story: Models.Story, json: any): Models.Flows.Flow;
}
declare module Pro.Motion.Serialization.Flows {
    import Models = Pro.Motion.Models;
    function write_simple(flow: Models.Flows.SimpleFlow, json: any): void;
}
declare module Pro.Motion.Serialization {
    class FrameReader {
        static DEFAULT_ASPECT_RATIO: number;
        static read(json: any): Models.Frame;
    }
}
declare module Pro.Motion.Serialization {
    class FrameWriter {
        static write(frame: Models.Frame): any;
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class ItemWriter {
        static write(item: Models.Items.Item): any;
    }
}
declare module Pro.Motion.Serialization.Items {
    import Models = Pro.Motion.Models;
    function read_image(itemSet: Models.IItemSet, json: any): Models.Items.Item;
}
declare module Pro.Motion.Serialization.Items {
    import Models = Pro.Motion.Models;
    function read_layer(itemSet: Models.IItemSet, json: any): Models.Items.Item;
}
declare module Pro.Motion.Serialization.Items {
    import Models = Pro.Motion.Models;
    function read_text(itemSet: Models.IItemSet, json: any): Models.Items.Item;
}
declare module Pro.Motion.Serialization {
    import Properties = Pro.Motion.Models.Properties;
    class PropertyWriter {
        static writeSet(json: any, properties: Properties.IProperty[]): void;
        static write(property: Properties.IProperty): any;
    }
}
declare module Pro.Motion.Serialization {
    import Properties = Pro.Motion.Models.Properties;
    class PropertyListWriter {
        static write(propertyList: Properties.PropertyList): any;
    }
}
declare module Pro.Motion.Serialization {
    import Scripts = Pro.Motion.Models.Scripts;
    class ScriptWriter {
        static write(script: Scripts.Script): any;
        private static writeInitEvent(script);
        private static writeStepEvent(script);
        private static writeSwitchEvent(script);
        private static writeActionsOrphan(script);
        private static writePropertyOrphan(script);
    }
}
declare module Pro.Motion.Serialization.Items {
    import Models = Pro.Motion.Models;
    function write_image(item: Models.Items.ImageItem, json: any): void;
}
declare module Pro.Motion.Serialization.Items {
    import Models = Pro.Motion.Models;
    function write_layer(item: Models.Items.LayerItem, json: any): void;
}
declare module Pro.Motion.Serialization.Items {
    import Models = Pro.Motion.Models;
    function write_text(item: Models.Items.TextItem, json: any): void;
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    import Flows = Pro.Motion.Models.Flows;
    import Items = Pro.Motion.Models.Items;
    class PageReader {
        static read(flow: Flows.Flow, json: any): Models.Page;
        private static readSteps(page, json, items);
        static readItems(itemSet: Models.IItemSet, json: any): Items.Item[];
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class PageWriter {
        static write(page: Models.Page): any;
        static writeItems(itemSet: Models.IItemSet, json: any): void;
    }
}
declare module Pro.Motion.Serialization {
    import Scripts = Pro.Motion.Models.Scripts;
    class ScriptReader {
        static read(scriptSet: Scripts.ScriptSet, json: any): Scripts.Script;
        private static readInitEvent(scriptSet, json);
        private static readStepEvent(scriptSet, json);
        private static readSwitchEvent(scriptSet, json);
        private static readActionsOrphan(scriptSet, json);
        private static readPropertyOrphan(scriptSet, json);
    }
}
declare module Pro.Motion.Serialization {
    import Scripts = Pro.Motion.Models.Scripts;
    import Properties = Pro.Motion.Models.Properties;
    class ScriptSetReader {
        private static read(itemSet, name, json, propertyTypes);
        static readJson(itemSet: Models.IItemSet, name: string, json: any, labels: string[], propertyTypes: Properties.IPropertyType[]): Scripts.ScriptSet;
    }
}
declare module Pro.Motion.Serialization {
    import Scripts = Pro.Motion.Models.Scripts;
    class ScriptSetWriter {
        static write(scriptSet: Scripts.ScriptSet): any;
    }
}
declare module Pro.Motion.Serialization {
    import Properties = Pro.Motion.Models.Properties;
    class StaggerReader {
        static read(json: any): Properties.Stagger;
    }
}
declare module Pro.Motion.Serialization {
    import Properties = Pro.Motion.Models.Properties;
    class StaggerWriter {
        static write(stagger: Properties.Stagger): number[];
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class StepReader {
        static read(page: Models.Page, json: any): Models.Step;
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class StepWriter {
        static write(step: Models.Step): any;
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class StoryReader {
        static read(json: any): Models.Story;
    }
}
declare module Pro.Motion.Serialization {
    import Models = Pro.Motion.Models;
    class StoryWriter {
        static write(story: Models.Story): any;
        static stringify(story: Models.Story): string;
    }
}
declare module Pro.Motion.Util {
    function createChildSvgElement(parent: Element, tag: string, attrs?: any): SVGElement;
}
declare module Pro.Motion {
    function reload(): void;
    function bootstrap(): void;
}
