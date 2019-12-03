import Mock from "mockjs"


var data=Mock.mock({
    "allgooddata|9":[
        {
            "allNav|+1":['十元专区','潮流数码','家用电器','化妆个护','时尚奢品','汇吃零食','送女友','送男友','其他'],
            "connect|10":[
                {
                    "id|+1":1,
                    "img":"@image(50x60)",
                    "title":"@ctitle(3)",
                    "price|100-999":1,
                    "phone|13000000000-19000000000":1
                }
            ]
        }
    ]
})
// 所有商品的数据
Mock.mock("/allgoodmock","get",{
    allgooddata:data.allgooddata
})