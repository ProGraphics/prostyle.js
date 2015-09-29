ProStyle.Stories.mousemove = {
    frame: {
        padding:5,
        aspectRatio: 10,
        init: {bg:"#EEE"}
    },
    items: [
        {   text:"move",
            init: { font: 35, pos:[-45,10], rot:-90 },
            scripts: [
                { action:{anim:{dur:2.5, ease:"linear"}, rot:810, pos:{x:45}} },
                { action:{anim:{dur:.25, ease:"sine", rep:[9, 'yoyo']}, pos:{y:-20}} }
            ]
        }
    ]
};
