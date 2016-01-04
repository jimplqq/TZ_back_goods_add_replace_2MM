//var tiangouname = {
//    oldword: "",
//    newword: "",
//    goodnum: "",
//    html: "",
//    input: "",
//    tds: "",
//    checkbox: "",
//    shiyongduixianginpu: "",
//    strlen: "",
//    str: "",
//    itemId: ""
//}
//现在已经可以从选项页面传递数据到background页面，但back获取数据是零时态，每次back执行需要去调出数据，待解决

//chrome.runtime.sendMessage({hello: "hello from befor"}, function (response) {
//    alert(response)
//});


//货号
//setTimeout(ac(), 5000)
//act1()
//act2()
//act3()
//act4()
//act5()
//act6()
$(function () {
    act7()
    act5()
    //act8()
})


//function ac() {
//    //获取货号
//    if ($('#itemId').val() == '') {
//        tiangouname.str = $('.ui-draggable').find('textarea').val()
//        tiangouname.strlen = $('.ui-draggable').find('textarea').val().indexOf('号')
//        tiangouname.itemId = tiangouname.str.slice(tiangouname.strlen + 2, tiangouname.strlen + 8).trim()
////alert(tiangouname.goodnum)
//        $('#itemId').val(tiangouname.itemId)
//    }
//}
//
//
//function act1() {
//    //所属商家
//    tiangouname.input = $("th:contains('所属商家：')").next().children();
//    tiangouname.input.val(tiangouname.newword)
//    if (tiangouname.newword != "") {
//        $("#user_id").load("/member/getMarket/name/" + tiangouname.newword + "/r/" + Math.random());
//    }
//}
//
//
//function act2() {
//    //商品货号
//    tiangouname.itemId = $("th:contains('货号：')").next().children().val()
//    $('#goodsBaseBody').find('.small').val(tiangouname.newword + "&" + tiangouname.itemId)
//}
//
//
//function act3() {
//    //推广
//    $('textarea[name="promotion_tags"]').val("0")
//}
//
//
//function act4() {
//    //尺码
//    tiangouname.tds = $("th:contains('尺码：')").next()
//    tiangouname.checkbox = tiangouname.tds.find(".tb_props_ul input[type='checkbox']")
//    for (var i = 0; i < 13; i++) {
//        if (i % 2 != 0) {
//            tiangouname.checkbox[i].checked = 'true'
//        }
//    }
//}
//function act5() {
//    //select默认选中
//    $("th:contains('鞋制作工艺：')").next().find('select option').each(function () {
//        if ('122216632:14545464' == $(this).val()) {
//            $(this).attr('selected', 'true')
//        }
//    })
//    $("th:contains('适用对象：')").next().find("ul li:first-child input").attr('checked', 'true')
//
//    $("th:contains('适用场景：')").next().find('select option').each(function () {
//        if ('122216515:3224795' == $(this).val()) {
//            $(this).attr('selected', 'true')
//        }
//    })
//    $("th:contains('上市年份季节：')").next().find('select option').each(function () {
//        if ('122216347:854168429' == $(this).val()) {
//            $(this).attr('selected', 'true')
//        }
//    })
//}
//
//function act6() {
//    //产品描述replace可能无法执行，须将此方法放置最后
//    tiangouname.html = $('.ke-edit-iframe').contents().find('body').html()
//    tiangouname.html = tiangouname.html.replace(new RegExp(tiangouname.oldword, 'gm'), tiangouname.newword)
//    $('.ke-edit-iframe').contents().find('body').html(tiangouname.html)
//}

function act7() {
    //未审核商品列表，替换产品描述中GO2的信息
    var html = $('.ke-edit-iframe').contents().find('body').html()
    console.log(html)
    var str = html.split('<br>')
    var newHtml = ''
    for (var i = 3; i < str.length; i++) {
        newHtml = newHtml + '<br>' + str[i]
    }
    $('.ke-edit-iframe').contents().find('body').html(newHtml)
}

function act5() {
    //select默认选中
    $("th:contains('鞋制作工艺：')").next().find('select option').each(function () {
        if ('122216632:14545464' == $(this).val()) {
            $(this).attr('selected', 'true')
        }
    })
    $("th:contains('适用对象：')").next().find("ul li:first-child input").attr('checked', 'true')

    $("th:contains('适用场景：')").next().find('select option').each(function () {
        if ('122216515:3224795' == $(this).val()) {
            $(this).attr('selected', 'true')
        }
    })
    //2016春季
    $("th:contains('上市年份季节：')").next().find('select option').each(function () {
        if ('122216347:854168429' == $(this).val()) {
            $(this).attr('selected', 'true')
        }
    })
}

function act8() {
    //所属分类 原方法执行后都会刷新页面，并且会执行该方法，都会变成低帮鞋，方法不可取
    $("#category_ul").children("option[data-cid='50012027']").prop("selected", true);
}
//暂不处理 无法获取原始图片尺寸HTML5 api  naturalWidth无法使用
////判断图片尺寸是否为正方形
//function thisimage(img) {
//    var image = {};
//    image.src = img.attr('src')
//    if (image.width == image.height) {
//        return img
//    }
//    return ''
//}
////获取“产品内容相册：”中的图片，并存放长宽一致的图片
//var allimages = [];
//$('#thumbnails2 img').each(function () {
//    if (thisimage($(this)) != '') {
//        allimages.push($(this))
//    }
//})
////获取“产品封面相册：”中的图片，并存放长宽一致的图片
//var topimages = [];
//$('#thumbnails img').each(function () {
//    if (thisimage($(this)) != '') {
//        topimages.push($(this))
//    }
//})
//
//

