var bars1 = ProStyle.Stories.bars1 = ProStyle.Stories.bars1 || {};

bars1.story = {
    item: {
        itemType: "layer",
        init: {bg: "#EEE", size: [32,32], corners: 1, position: {z:-1}},
        items: [
            {   itemType: "simpleBarChart",
                setup: {bars:10, domain:10, width:30, height:30, margin:1},
                barActions: [
                    {   anim: {dur:3, ease:"elastic", stagger:0.05},
                        data: [1,2,3,4,5,6,7,8,9,10]
                    },
                    {   anim: {dur:3, ease:"elastic", stagger:0.05},
                        data: [1,-2,3,-4,5,-6,7,-8,9,-10],
                        fill: "purple",
                        opacity: 50
                    },
                    {   anim: {dur:3, stagger:0.05},
                        data: [8,5,4,3,2,2,3,4,5,8],
                        fill: "orange",
                        opacity: 100
                    },
                    {   anim: {dur:3, ease:"bounce", stagger:0.05},
                        data: [1,2,3,4,5,6,7,8,9,10]
                    },
                    {   anim: 0.5,
                        data: false,
                        fill: "red"
                    }
                ]
            }
        ]
    }
};
