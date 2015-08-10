ProStyle.Stories.tap = {
    frame: {
        padding:5,
        aspectRatio: 3,
        init: {background:"#EEE"}
    },
    items: [
        {   itemType:"layer",
            init: { size:[10,30], pos:{x:-40,z:-1}, bg:"rgba(0,0,0,0.5)" },
            scripts: [
                { scriptType:"step1", action:{anim:{dur:2, ease:"linear"}, pos:-13} },
                { scriptType:"step2", action:{anim:{dur:2, ease:"linear"}, pos:13} },
                { scriptType:"step3", action:{anim:{dur:2, ease:"linear"}, pos:40} }
            ]
        },
        {   text: "1", init: {size:25, pos:-40, color:"white"} },
        {   text: "2", init: {size:25, pos:-13, color:"white"} },
        {   text: "3", init: {size:25, pos:13, color:"white"} },
        {   text: "4", init: {size:25, pos:40, color:"white"} }
    ]
};
