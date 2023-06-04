(function($){
	/* Home */

	var Home = {
		$top: {},

        /* 初始 */
        Initial: function()
        {
        	this.$top = $('body');
            this.BindEvents();
            this.GetWorkDedailDefault();
            this.DefaultAnimation();
        },
        /* 事件 */
        BindEvents: function()
        {
        	/* PC版點擊欣佳德文字,下方會顯示欄位資訊 */
        	$('#headerabout, #headeraboutBox').on('mouseover', function(){
        		$("#headeraboutBox").css('display', 'flex');
        		$('#headerabout').find('.down-arrow').addClass('active');
        	});

        	$('#headerabout, #headeraboutBox').on('mouseout', function(){
        		$("#headeraboutBox").css('display', 'none');
        		$('#headerabout').find('.down-arrow').removeClass('active');
        	});

        	/* PC版點擊欣佳德文字,下方會顯示欄位資訊 */
        	$('#headertrustservice, #headertrustserviceBox').on('mouseover', function(){
        		$("#headertrustserviceBox").css('display', 'flex');
        	});

        	$('#headertrustservice, #headertrustserviceBox').on('mouseout', function(){
        		$("#headertrustserviceBox").css('display', 'none');
        	});

        	/* PC版觸碰信賴服務下方灰底文字時,會將該文字加上粗體動態 */
        	$('.servicebox_text').hover(function(){
        		var $this = $(this);
        		$this.css('font-weight', 'bold');
        		},function(){
        		$('.servicebox_text').css('font-weight', '');
        	});

        	/* 製作banner圖轉換,包含旁邊的白點綠框的功能 */
        	var bannerCount = $('.banner1').length;
			var currentBannerIndex = 0;

			$('.slick-dots li').click(function() {
				var index = $(this).index();
			    currentBannerIndex = index;
			    $('.banner1.active').removeClass('active').css('z-index', '-1');
			    $('.banner1').eq(currentBannerIndex).addClass('active').css('z-index', '0');
			    $('.banner1-1.active').removeClass('active').css('z-index', '-1');
			    $('.banner1-1').eq(currentBannerIndex).addClass('active').css('z-index', '1');
			    $('.slick-dots .slick-active').removeClass('slick-active');
			    $('.slick-dots li').eq(currentBannerIndex).addClass('slick-active');
			 });

			$('.slick-arrow').click(function() {
				var index = $('.slick-dots li.slick-active').index();
			    currentBannerIndex = (index+1)  % bannerCount;
			    $('.banner1.active').removeClass('active').css('z-index', '-1');
			    $('.banner1').eq(currentBannerIndex).addClass('active').css('z-index', '0');
			    $('.banner1-1.active').removeClass('active').css('z-index', '-1');
			    $('.banner1-1').eq(currentBannerIndex).addClass('active').css('z-index', '1');
			    $('.slick-dots .slick-active').removeClass('slick-active');
			    $('.slick-dots li').eq(currentBannerIndex).addClass('slick-active');
			 });

			setInterval(function() {
			    currentBannerIndex = (currentBannerIndex + 1) % bannerCount;
			    $('.banner1.active').removeClass('active').css('z-index', '-1');
			    $('.banner1').eq(currentBannerIndex).addClass('active').css('z-index', '0');
			    $('.banner1-1.active').removeClass('active').css('z-index', '-1');
			    $('.banner1-1').eq(currentBannerIndex).addClass('active').css('z-index', '1');
			    $('.slick-dots .slick-active').removeClass('slick-active');
			    $('.slick-dots li').eq(currentBannerIndex).addClass('slick-active');
			}, 5000);

			/* 當點擊menu時,會將顯示#sidebar往下移動顯示出來 */
			$('.header-menu').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('#sidebar').css('top', '0');
			    // 禁止 body 捲動
			    // $('body').css('overflow', 'hidden');
			});
			/* 當點擊sidebar時,會sidebar往上移動隱藏以來 */
			$('.header-sidebar-close').click(function() {
			    // 將 #sidebar 往上移動隱藏起來
			    $('#sidebar').css('top', '-100vh');
			    // 允許 body 捲動
			    // $('body').css('overflow', 'auto');
			});


			/* 當點擊line的up_arrow箭頭時,會將整個畫面返回最高點 */
			$('.up_arrow').click(function(){
		      $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
		    });


		    /* 當點擊headerabout_phone時,會將顯示#sidebar往下移動顯示出來 */
			$('#headerabout_phone').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('#headeraboutBox_phone').css('left', '0');
			    // 禁止 body 捲動
			    // $('body').css('overflow', 'hidden');
			});
			/* 當點擊sidebar時,會sidebar往上移動隱藏以來 */
			$('.header-sidebar-return1').click(function() {
			    // 將 #sidebar 往上移動隱藏起來
			    $('#headeraboutBox_phone, #headertrustserviceBox_phone').css('left', '-100vw');
			    // 允許 body 捲動
			    // $('body').css('overflow', 'auto');
			});

			$('.header-sidebar-close1').click(function() {
			    // 將 #sidebar 往上移動隱藏起來
			    $('#headeraboutBox_phone, #headertrustserviceBox_phone').css('left', '-100vw');
			    $('#sidebar').css('top', '-100vh');
			    // 允許 body 捲動
			    // $('body').css('overflow', 'auto');
			});

			/* 當點擊headerabout_phone時,會將顯示#sidebar往下移動顯示出來 */
			$('#headertrustservice_phone').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('#headertrustserviceBox_phone').css('left', '0');
			    // 禁止 body 捲動
			    // $('body').css('overflow', 'hidden');
			});


			$('.trustserviceBtn').click(function() {
				location.href="trustservice.html";
			});

			$('.workBtn').click(function() {
				location.href="work.html";
			});

			$('.technologyBtn').click(function() {
				location.href="technology.html";
			});


			//關於我們內頁顯示功能
			$('.aboutmain .about_more').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('.aboutdetailed').css('left', '0');
			    $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
			});

			$('.header-aboutdetailed-close').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('.aboutdetailed').css('left', '-100vw');
			    $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
			});

        	var hexagonlistCount = $('.aboutdetailed .hexagon_bg .list li').length;
			var currenthexagonlistIndex = 0;
			$('.aboutdetailed .aboutdetailed-arrow-right').click(function() {
				var opacity = $('.aboutdetailed .aboutdetailed-arrow-right').css('opacity');
				if (opacity == 0)
				{
					return false;
				}
				var index = $('.aboutdetailed .hexagon_bg .list li.active').index();
			    currenthexagonlistIndex = (index+1)  % hexagonlistCount;
			    $('.aboutdetailed .hexagon_bg .list li.active').removeClass('active');
			    $('.aboutdetailed .hexagon_bg .list li').eq(currenthexagonlistIndex).addClass('active');

			    var display_left = (index == 2) ? '0' : '1';
			    $('.aboutdetailed .aboutdetailed-arrow-left').css('opacity',display_left);
			    var display_right = (index == 1) ? '0' : '1';
			    $('.aboutdetailed .aboutdetailed-arrow-right').css('opacity',display_right);
			});

			$('.aboutdetailed .aboutdetailed-arrow-left').click(function() {
				var opacity = $('.aboutdetailed .aboutdetailed-arrow-left').css('opacity');
				if (opacity == 0)
				{
					return false;
				}
				var index = $('.aboutdetailed .hexagon_bg .list li.active').index();
			    currenthexagonlistIndex = (index-1)  % hexagonlistCount;
			    $('.aboutdetailed .hexagon_bg .list li.active').removeClass('active');
			    $('.aboutdetailed .hexagon_bg .list li').eq(currenthexagonlistIndex).addClass('active');

			    var display_left = (index == 1) ? '0' : '1';
			    $('.aboutdetailed .aboutdetailed-arrow-left').css('opacity',display_left);
			    var display_right = (index == 3) ? '0' : '1';
			    $('.aboutdetailed .aboutdetailed-arrow-right').css('opacity',display_right);
			});


			//信賴服務內頁顯示功能(H5)
			$('.trustservicemain .about_more').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('.trustservicedetailed').css('left', '0');
			    $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
			});

			$('.header-trustservicedetailed-close').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('.trustservicedetailed').css('left', '-100vw');
			    $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
			});

			var hexagonlistCount_trustservice = $('.trustservicedetailed .hexagon_bg .list li').length;
			var currenthexagonlistIndex_trustservice = 0;
			$('.trustservicedetailed .aboutdetailed-arrow-right').click(function() { //下面
				var index = $('.trustservicedetailed .hexagon_bg .list li.active').index();
			    currenthexagonlistIndex_trustservice = (index+1)  % hexagonlistCount_trustservice;
			    $('.trustservicedetailed .hexagon_bg .list li.active').removeClass('active');
			    $('.trustservicedetailed .hexagon_bg .list li').eq(currenthexagonlistIndex_trustservice).addClass('active');

			    $('.trustservicedetailed .listimg div').css('opacity', '0');
			    $('.trustservicedetailed .listimg div').eq(currenthexagonlistIndex_trustservice).css('opacity','1');

			    $('.trustservicedetailed .aboutdetailed-arrow-right').addClass('arrowDown').delay(500).queue(function() {
			      $('.trustservicedetailed .aboutdetailed-arrow-right').removeClass('arrowDown').dequeue();
			    });
			});

			$('.trustservicedetailed .aboutdetailed-arrow-left').click(function() { //上面
				var index = $('.trustservicedetailed .hexagon_bg .list li.active').index();
			    currenthexagonlistIndex_trustservice = (index-1)  % hexagonlistCount_trustservice;
			    $('.trustservicedetailed .hexagon_bg .list li.active').removeClass('active');
			    $('.trustservicedetailed .hexagon_bg .list li').eq(currenthexagonlistIndex_trustservice).addClass('active');

			    $('.trustservicedetailed .listimg div').css('opacity', '0');
			    $('.trustservicedetailed .listimg div').eq(currenthexagonlistIndex_trustservice).css('opacity','1');

			    $('.trustservicedetailed .aboutdetailed-arrow-left').addClass('arrowUp').delay(500).queue(function() {
			      $('.trustservicedetailed .aboutdetailed-arrow-left').removeClass('arrowUp').dequeue();
			    });
			});


			//信賴服務內頁顯示功能(PC)
			$('.trustservicemain .sjdmenu_box_2 .header-nav li').click(function() { //下面
				var $this = $(this);
				var index = $this.index();
			    $('.trustservicemain .sjdmenu_box_2 .header-nav li.active').removeClass('active');
			    $this.addClass('active');

			    $('.trustservicemain .listimg div').css('opacity', '0');
			    $('.trustservicemain .listimg div').eq(index).css('opacity','1');

			    $this.find('.arrow').addClass('arrowright').delay(500).queue(function() {
			    	$this.find('.arrow').removeClass('arrowright').dequeue();
			    });
			});


			//工程實績內頁顯示功能(H5)
			$('.workmain .about_more').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('.workdetailed').css('left', '0');
			    $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
			});

			$('.header-workdetailed-close').click(function() {
				// 將 #sidebar 往下移動顯示出來
			    $('.workdetailed').css('left', '-100vw');
			    $('html, body').animate({scrollTop: 0}, 'slow'); // 平滑滚动到顶部
			});


			//工程實績內頁滾動功能(H5)
			$(document).ready(function() {
			    // 每次滾動一格
			    var scrollByOne = function(direction) {
			    	var list = $(".workdetailed .list");
				    var listItems = list.find("li");
				    var numItems = listItems.length;
				    var height = listItems.outerHeight();

				    var listimg = $(".workdetailed .listimg");
				    var listimgItems = listimg.find("div");
			    var currentPosition = 0;
			        if (direction === "down") {
			            listItems.eq(currentPosition).appendTo(list);
			            listimgItems.eq(currentPosition).appendTo(listimg);
			            currentPosition = (currentPosition + 1) % numItems;
			        } else {
			            listItems.eq(currentPosition-1).prependTo(list);
			            listimgItems.eq(currentPosition-1).prependTo(listimg);
			            currentPosition = (currentPosition - 1 + numItems) % numItems;
			        }

			        // 添加/移除類(active)
				    list.find("li.active").removeClass("active");
				    var numItems1 = parseInt(numItems / 2);
				    $(".workdetailed .list").find('li').css('font-size', '3vmin');
				    $(".workdetailed .list").find('li').css('color', '#fff');
				    if (numItems <= 3)
				    {
				    	$(".workdetailed .list").find('li').eq(numItems1).addClass("active");
					    $(".workdetailed .list").find('li').eq(numItems1).css('font-size', '4vmin');
					    $(".workdetailed .list").find('li').eq(numItems1+1).css('color', '#fffc');
					    $(".workdetailed .list").find('li').eq(numItems1-1).css('color', '#fffc');

					    $(".workdetailed .listimg").find("div").css("opacity", '0');
					    $(".workdetailed .listimg").find("div").eq(numItems1).css("opacity", '1');
				    }
				    else
				    {

					    $(".workdetailed .list").find('li').eq(numItems1).addClass("active");
					    $(".workdetailed .list").find('li').eq(numItems1).css('font-size', '4vmin');
					    $(".workdetailed .list").find('li').eq(numItems1-1).css('color', '#fffc');
					    $(".workdetailed .list").find('li').eq(numItems1+1).css('color', '#fffc');
					    $(".workdetailed .list").find('li').eq(numItems1-2).css('color', '#fff9');
					    $(".workdetailed .list").find('li').eq(numItems1+2).css('color', '#fff9');
					    $(".workdetailed .list").find('li').eq(numItems1-3).css('color', '#ffffff4d');
					    $(".workdetailed .list").find('li').eq(numItems1+3).css('color', '#ffffff4d');

					    $(".workdetailed .listimg").find("div").css("opacity", '0');
					    $(".workdetailed .listimg").find("div").eq(numItems1).css("opacity", '1');
					}
				    // if (numItems < 3)
				    // {
				    // 	$(".workdetailed .list").find('li').eq(0).addClass("active");
					//     $(".workdetailed .list").find('li').css('font-size', '3vmin');
					//     $(".workdetailed .list").find('li').eq(0).css('font-size', '4vmin');
					//     $(".workdetailed .list").find('li').eq(1).css('color', '#fffc');

					//     $(".workdetailed .listimg").find("div").css("opacity", '0');
					//     $(".workdetailed .listimg").find("div").eq(0).css("opacity", '1');
				    // }
				    // else
				    // {

					//     $(".workdetailed .list").find('li').eq(3).addClass("active");
					//     $(".workdetailed .list").find('li').css('font-size', '3vmin');
					//     $(".workdetailed .list").find('li').eq(3).css('font-size', '4vmin');
					//     $(".workdetailed .list").find('li').eq(2).css('color', '#fffc');
					//     $(".workdetailed .list").find('li').eq(4).css('color', '#fffc');
					//     $(".workdetailed .list").find('li').eq(1).css('color', '#fff9');
					//     $(".workdetailed .list").find('li').eq(5).css('color', '#fff9');
					//     $(".workdetailed .list").find('li').eq(0).css('color', '#ffffff4d');
					//     $(".workdetailed .list").find('li').eq(6).css('color', '#ffffff4d');

					//     $(".workdetailed .listimg").find("div").css("opacity", '0');
					//     $(".workdetailed .listimg").find("div").eq(3).css("opacity", '1');
					// }
			    }
			  
			    // 滾輪事件
			    $(".workdetailed .list").on("wheel", function(event) {
			        event.preventDefault();
			        var delta = event.originalEvent.deltaY;
			        if (delta > 0) {
			            scrollByOne("down");
			        } else {
			            scrollByOne("up");
			        }
			    });

			    $('.workdetailed-arrow-right').on("click", function(event) {
			        event.preventDefault();
			        scrollByOne("down");
			        $('.workdetailed-arrow-right').addClass('arrowright').delay(500).queue(function() {
				      $('.workdetailed-arrow-right').removeClass('arrowright').dequeue();
				    });
			    });
			});

			//工程實績內頁滾動功能(PC)
			$(document).ready(function() {
			    // 每次滾動一格
			    var scrollByOne1 = function(direction) {
			    	var list = $(".workmain .list");
				    var listItems = list.find("li");
				    var numItems = listItems.length;
				    var height = listItems.outerHeight();

				    var listimg = $(".workmain .listimg");
				    var listimgItems = listimg.find("div");
			    var currentPosition = 0;
			        if (direction === "down") {
			            listItems.eq(currentPosition).appendTo(list);
			            listimgItems.eq(currentPosition).appendTo(listimg);
			            currentPosition = (currentPosition + 1) % numItems;
			        } else {
			            listItems.eq(currentPosition-1).prependTo(list);
			            listimgItems.eq(currentPosition-1).prependTo(listimg);
			            currentPosition = (currentPosition - 1 + numItems) % numItems;
			        }

			        // 添加/移除類(active)
				    list.find("li.active").removeClass("active");
				    var numItems1 = parseInt(numItems / 2);
				    $(".workmain .list").find('li').css('font-size', '2vmin');
				    $(".workmain .list").find('li').css('color', '#fff');
				    if (numItems <= 3)
				    {
				    	$(".workmain .list").find('li').eq(numItems1).addClass("active");
					    $(".workmain .list").find('li').eq(numItems1).css('font-size', '2.3vmin');
					    $(".workmain .list").find('li').eq(numItems1+1).css('color', '#fffc');
					    $(".workmain .list").find('li').eq(numItems1-1).css('color', '#fffc');

					    $(".workmain .listimg").find("div").css("opacity", '0');
					    $(".workmain .listimg").find("div").eq(numItems1).css("opacity", '1');
				    }
				    else
				    {

					    $(".workmain .list").find('li').eq(numItems1).addClass("active");
					    $(".workmain .list").find('li').eq(numItems1).css('font-size', '2.3vmin');
					    $(".workmain .list").find('li').eq(numItems1-1).css('color', '#fffc');
					    $(".workmain .list").find('li').eq(numItems1+1).css('color', '#fffc');
					    $(".workmain .list").find('li').eq(numItems1-2).css('color', '#fff9');
					    $(".workmain .list").find('li').eq(numItems1+2).css('color', '#fff9');
					    $(".workmain .list").find('li').eq(numItems1-3).css('color', '#ffffff4d');
					    $(".workmain .list").find('li').eq(numItems1+3).css('color', '#ffffff4d');

					    $(".workmain .listimg").find("div").css("opacity", '0');
					    $(".workmain .listimg").find("div").eq(numItems1).css("opacity", '1');
					}
				    // if (numItems < 3)
				    // {
				    // 	$(".workmain .list").find('li').eq(0).addClass("active");
					//     $(".workmain .list").find('li').css('font-size', '3vmin');
					//     $(".workmain .list").find('li').eq(0).css('font-size', '4vmin');
					//     $(".workmain .list").find('li').eq(1).css('color', '#fffc');

					//     $(".workmain .listimg").find("div").css("opacity", '0');
					//     $(".workmain .listimg").find("div").eq(0).css("opacity", '1');
				    // }
				    // else
				    // {

					//     $(".workmain .list").find('li').eq(3).addClass("active");
					//     $(".workmain .list").find('li').css('font-size', '3vmin');
					//     $(".workmain .list").find('li').eq(3).css('font-size', '4vmin');
					//     $(".workmain .list").find('li').eq(2).css('color', '#fffc');
					//     $(".workmain .list").find('li').eq(4).css('color', '#fffc');
					//     $(".workmain .list").find('li').eq(1).css('color', '#fff9');
					//     $(".workmain .list").find('li').eq(5).css('color', '#fff9');
					//     $(".workmain .list").find('li').eq(0).css('color', '#ffffff4d');
					//     $(".workmain .list").find('li').eq(6).css('color', '#ffffff4d');

					//     $(".workmain .listimg").find("div").css("opacity", '0');
					//     $(".workmain .listimg").find("div").eq(3).css("opacity", '1');
					// }
			    }
			  
			    // 滾輪事件
			    $(".workmain .list").on("wheel", function(event) {
			        event.preventDefault();
			        var delta = event.originalEvent.deltaY;
			        if (delta > 0) {
			            scrollByOne1("down");
			        } else {
			            scrollByOne1("up");
			        }
			    });
			});



			$('.workdetailed .select_type, .workdetailed .select_time, .workdetailed .select_site, .workmain .select_type, .workmain .select_time, .workmain .select_site').on("change", function() {
				var vaule = $(this).val();
				console.log(vaule);

				$('.workmain .selecttype, .workmain .selecttime, .workmain .selectsite').removeClass('active');
				if (vaule == 'typeALL' || vaule == 'timeALL' || vaule == 'siteALL')
				{
					$('.workmain .selecttype, .workmain .selecttime, .workmain .selectsite').addClass('active');
				}
				if (vaule == 'type1' || vaule == 'type2')
	        	{
	        		$('.workdetailed .select_time, .workmain .select_time').val('timeALL');
	        		$('.workdetailed .select_site, .workmain .select_site').val('siteALL');

	        		$('.workmain .selecttype').addClass('active');
	        	}
	        	if (vaule == '2010' || vaule == '2011' || vaule == '2012')
	        	{
	        		$('.workdetailed .select_type, .workmain .select_type').val('typeALL');
	        		$('.workdetailed .select_site, .workmain .select_site').val('siteALL');

	        		$('.workmain .selecttime').addClass('active');
	        	}
	        	if (vaule == 'Taichung' || vaule == 'Taipei' || vaule == 'Changhua')
	        	{
	        		$('.workdetailed .select_time, .workmain .select_time').val('timeALL');
	        		$('.workdetailed .select_type, .workmain .select_type').val('typeALL');

	        		$('.workmain .selectsite').addClass('active');
	        	}
				
			    Home.GetWorkDedail(vaule);
			});
		},
		DefaultAnimation: function()
		{
			
		},
		GetWorkDedailDefault: function()
        {
        	var bgarray = [];
        	var textarray = [];

        	bgarray = ['work02_2', 'work02_5', 'work02_3', 'work02_6', 'work02_1', 'work02_4', 'work02_7'];
        	textarray = ['建造市立圖書館', '修建高速公路', '興建公共停車場', '重建古老教堂', '建造大型商場', '興建運動場館', '擴建醫院病房'];

        	var bglength = bgarray.length;
        	var textlength = textarray.length;
        	var listimg = '';
        	var listimg_PC = '';
        	var list = '';

        	for (let i = 0; i < bglength; i++)
        	{
        		listimg +=  '<div class="listimg-item" style="background: url(./images/back/'+ bgarray[i] +'.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>';
        		listimg_PC +=  '<div class="listimg-item" style="background: url(./images/back/'+ bgarray[i] +'.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(56% 1%, 100% 21%, 100% 81%, 56% 100%, 0 76%, 0 26%);position: absolute;z-index: 1; opacity: 0;"></div>';
        	}
        	for (let i = 0; i < textlength; i++)
        	{
        		list +=  '<li>'+ textarray[i] +'</li>';
        	}

        	$('.workdetailed .listimg').html(listimg);
        	$('.workmain .listimg').html(listimg_PC);


        	$('.workdetailed .list').html(list);
        	$('.workmain .list').html(list);

        	$(".workdetailed .list").find('li').eq(3).addClass("active");
        	$(".workmain .list").find('li').eq(3).addClass("active");
		    $(".workdetailed .list").find('li').css('font-size', '3vmin');
		    $(".workdetailed .list").find('li').eq(3).css('font-size', '4vmin');
		    $(".workmain .list").find('li').css('font-size', '2vmin');
		    $(".workmain .list").find('li').eq(3).css('font-size', '2.3vmin');
		    $(".workdetailed .list").find('li').eq(2).css('color', '#fffc');
		    $(".workdetailed .list").find('li').eq(4).css('color', '#fffc');
		    $(".workdetailed .list").find('li').eq(1).css('color', '#fff9');
		    $(".workdetailed .list").find('li').eq(5).css('color', '#fff9');
		    $(".workdetailed .list").find('li').eq(0).css('color', '#ffffff4d');
		    $(".workdetailed .list").find('li').eq(6).css('color', '#ffffff4d');

		    $(".workmain .list").find('li').eq(2).css('color', '#fffc');
		    $(".workmain .list").find('li').eq(4).css('color', '#fffc');
		    $(".workmain .list").find('li').eq(1).css('color', '#fff9');
		    $(".workmain .list").find('li').eq(5).css('color', '#fff9');
		    $(".workmain .list").find('li').eq(0).css('color', '#ffffff4d');
		    $(".workmain .list").find('li').eq(6).css('color', '#ffffff4d');

		    $(".workdetailed .listimg").find("div").css("opacity", '0');
		    $(".workdetailed .listimg").find("div").eq(3).css("opacity", '1');
		    $(".workmain .listimg").find("div").css("opacity", '0');
		    $(".workmain .listimg").find("div").eq(3).css("opacity", '1');
		},
		GetWorkDedail: function(type)
        {
        	var bgarray = [];
        	var textarray = [];

        	bgarray = ['work02_2', 'work02_5', 'work02_3', 'work02_6', 'work02_1', 'work02_4', 'work02_7'];
        	textarray = ['建造市立圖書館', '修建高速公路', '興建公共停車場', '重建古老教堂', '建造大型商場', '興建運動場館', '擴建醫院病房'];

        	if (type == 'type1')
        	{
        		bgarray = ['work02_2', 'work02_6', 'work02_1', 'work02_4', 'work02_7'];
        		textarray = ['建造市立圖書館', '重建古老教堂', '建造大型商場', '興建運動場館', '擴建醫院病房'];
        	}
        	if (type == 'type2')
        	{
        		bgarray = ['work02_5', 'work02_3'];
        		textarray = ['修建高速公路', '興建公共停車場'];
        	}
        	if (type == '2010')
        	{
        		bgarray = ['work02_5', 'work02_6', 'work02_1'];
        		textarray = ['修建高速公路', '重建古老教堂', '建造大型商場'];
        	}
        	if (type == '2011')
        	{
        		bgarray = ['work02_3', 'work02_7'];
        		textarray = ['興建公共停車場', '擴建醫院病房'];
        	}
        	if (type == '2012')
        	{
        		bgarray = ['work02_2', 'work02_4'];
        		textarray = ['建造市立圖書館', '興建運動場館'];
        	}
        	if (type == 'Taichung')
        	{
        		bgarray = ['work02_2', 'work02_3', 'work02_6', 'work02_1'];
        		textarray = ['建造市立圖書館', '興建公共停車場', '重建古老教堂', '建造大型商場'];
        	}
        	if (type == 'Taipei')
        	{
        		bgarray = ['work02_5'];
        		textarray = ['修建高速公路'];
        	}
        	if (type == 'Changhua')
        	{
        		bgarray = ['work02_4', 'work02_7'];
        		textarray = ['興建運動場館', '擴建醫院病房'];
        	}

        	var bglength = bgarray.length;
        	var textlength = textarray.length;
        	var listimg = '';
        	var listimg_PC = '';
        	var list = '';

        	for (let i = 0; i < bglength; i++)
        	{
        		listimg +=  '<div class="listimg-item" style="background: url(./images/back/'+ bgarray[i] +'.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>';
        		listimg_PC +=  '<div class="listimg-item" style="background: url(./images/back/'+ bgarray[i] +'.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(56% 1%, 100% 21%, 100% 81%, 56% 100%, 0 76%, 0 26%);position: absolute;z-index: 1; opacity: 0;"></div>';
        	}
        	for (let i = 0; i < textlength; i++)
        	{
        		list +=  '<li>'+ textarray[i] +'</li>';
        		// console.log(textarray[i]);
        	}

        	$('.workdetailed .listimg').html(listimg);
        	$('.workmain .listimg').html(listimg_PC);


        	$('.workdetailed .list').html(list);
        	$('.workmain .list').html(list);

        	var numItems1 = parseInt(textlength / 2);

        	if (textlength <= 3)
		    {
		    	// $(".workdetailed .list").find('li').eq(0).addClass("active");
		    	// $(".workmain .list").find('li').eq(0).addClass("active");
			    // $(".workdetailed .list").find('li').css('font-size', '3vmin');
			    // $(".workdetailed .list").find('li').eq(0).css('font-size', '4vmin');
			    // $(".workmain .list").find('li').css('font-size', '2vmin');
		    	// $(".workmain .list").find('li').eq(0).css('font-size', '2.3vmin');
			    // $(".workdetailed .list").find('li').eq(0).css('color', '#fff');
			    // $(".workdetailed .list").find('li').eq(1).css('color', '#fffc');
			    // $(".workmain .list").find('li').eq(0).css('color', '#fff');
			    // $(".workmain .list").find('li').eq(1).css('color', '#fffc');

			    // $(".workdetailed .listimg").find("div").css("opacity", '0');
			    // $(".workdetailed .listimg").find("div").eq(0).css("opacity", '1');
			    // $(".workmain .listimg").find("div").css("opacity", '0');
			    // $(".workmain .listimg").find("div").eq(0).css("opacity", '1');



			    $(".workdetailed .list").find('li').eq(numItems1).addClass("active");
			    $(".workdetailed .list").find('li').eq(numItems1).css('font-size', '4vmin');
			    $(".workdetailed .list").find('li').eq(numItems1+1).css('color', '#fffc');
			    $(".workdetailed .list").find('li').eq(numItems1-1).css('color', '#fffc');

			    $(".workdetailed .listimg").find("div").css("opacity", '0');
			    $(".workdetailed .listimg").find("div").eq(numItems1).css("opacity", '1');

			    $(".workmain .list").find('li').eq(numItems1).addClass("active");
			    $(".workmain .list").find('li').eq(numItems1).css('font-size', '2.3vmin');
			    $(".workmain .list").find('li').eq(numItems1+1).css('color', '#fffc');
			    $(".workmain .list").find('li').eq(numItems1-1).css('color', '#fffc');

			    $(".workmain .listimg").find("div").css("opacity", '0');
			    $(".workmain .listimg").find("div").eq(numItems1).css("opacity", '1');
		    }
		    else
		    {
		    	// $(".workdetailed .list").find('li').eq(3).addClass("active");
			    // $(".workdetailed .list").find('li').css('font-size', '3vmin');
			    // $(".workdetailed .list").find('li').eq(3).css('font-size', '4vmin');
			    // $(".workdetailed .list").find('li').eq(3).css('color', '#fff');
			    // $(".workdetailed .list").find('li').eq(2).css('color', '#fffc');
			    // $(".workdetailed .list").find('li').eq(4).css('color', '#fffc');
			    // $(".workdetailed .list").find('li').eq(1).css('color', '#fff9');
			    // $(".workdetailed .list").find('li').eq(5).css('color', '#fff9');
			    // $(".workdetailed .list").find('li').eq(0).css('color', '#ffffff4d');
			    // $(".workdetailed .list").find('li').eq(6).css('color', '#ffffff4d');

			    // $(".workdetailed .listimg").find("div").css("opacity", '0');
			    // $(".workdetailed .listimg").find("div").eq(3).css("opacity", '1');

			    $(".workdetailed .list").find('li').eq(numItems1).addClass("active");
			    $(".workmain .list").find('li').eq(numItems1).addClass("active");
			    $(".workdetailed .list").find('li').css('font-size', '3vmin');
			    $(".workdetailed .list").find('li').eq(numItems1).css('font-size', '4vmin');
			    $(".workmain .list").find('li').css('font-size', '2vmin');
		    	$(".workmain .list").find('li').eq(numItems1).css('font-size', '2.3vmin');
			    $(".workdetailed .list").find('li').eq(numItems1-1).css('color', '#fffc');
			    $(".workdetailed .list").find('li').eq(numItems1+1).css('color', '#fffc');
			    $(".workdetailed .list").find('li').eq(numItems1-2).css('color', '#fff9');
			    $(".workdetailed .list").find('li').eq(numItems1+2).css('color', '#fff9');
			    $(".workdetailed .list").find('li').eq(numItems1-3).css('color', '#ffffff4d');
			    $(".workdetailed .list").find('li').eq(numItems1+3).css('color', '#ffffff4d');

			    $(".workmain .list").find('li').eq(numItems1-1).css('color', '#fffc');
			    $(".workmain .list").find('li').eq(numItems1+1).css('color', '#fffc');
			    $(".workmain .list").find('li').eq(numItems1-2).css('color', '#fff9');
			    $(".workmain .list").find('li').eq(numItems1+2).css('color', '#fff9');
			    $(".workmain .list").find('li').eq(numItems1-3).css('color', '#ffffff4d');
			    $(".workmain .list").find('li').eq(numItems1+3).css('color', '#ffffff4d');

			    $(".workdetailed .listimg").find("div").css("opacity", '0');
			    $(".workdetailed .listimg").find("div").eq(numItems1).css("opacity", '1');
			    $(".workmain .listimg").find("div").css("opacity", '0');
			    $(".workmain .listimg").find("div").eq(numItems1).css("opacity", '1');
		    }

        	// var list = 	'<div class="listimg-item" style="background: url(./images/back/sjdsbg-01.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>' +
            //             '<div class="listimg-item" style="background: url(./images/back/abg01.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>' +
            //             '<div class="listimg-item" style="background: url(./images/back/sjdindex01.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>' +
            //             '<div class="listimg-item" style="background: url(./images/back/sjdindex02.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 1;"></div>' +
            //             '<div class="listimg-item" style="background: url(./images/back/sjdindex03.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>' +
            //             '<div class="listimg-item" style="background: url(./images/back/sjdsbg-01.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>' +
            //             '<div class="listimg-item" style="background: url(./images/back/abg01.png) no-repeat;background-size: 100% 100%;height: 100%;width: 100%;clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0 75%, 0 25%);position: absolute;z-index: 1; opacity: 0;"></div>';
		},
    };

Home.Initial();



// (function($) {

// 	var	$window = $(window),
// 		$body = $('body');
// 		$bodypages = $('.body-pages');


// 	// Menu.
// 		var $menu = $('#menu');

// 		$menu.wrapInner('<div class="inner"></div>');

// 		$menu._locked = false;

// 		$menu._lock = function() {

// 			if ($menu._locked)
// 				return false;

// 			$menu._locked = true;

// 			window.setTimeout(function() {
// 				$menu._locked = false;
// 			}, 350);

// 			return true;

// 		};

// 		$menu._show = function() {

// 			if ($menu._lock())
// 				$body.addClass('is-menu-visible');

// 		};

// 		$menu._hide = function() {

// 			if ($menu._lock())
// 				$body.removeClass('is-menu-visible');

// 		};

// 		$menu._toggle = function() {

// 			if ($menu._lock())
// 				$body.toggleClass('is-menu-visible');

// 		};

// 		$menu
// 			.appendTo($body)
// 			.on('click', function(event) {
// 				event.stopPropagation();
// 			})
// 			.on('click', 'a', function(event) {

// 				var href = $(this).attr('href');

// 				event.preventDefault();
// 				event.stopPropagation();

// 				// Hide.
// 					$menu._hide();

// 				// Redirect.
// 					if (href == '#menu')
// 						return;

// 					window.setTimeout(function() {
// 						window.location.href = href;
// 					}, 350);

// 			})
// 			.append('<a class="close" href="#menu">Close</a>');

// 		$body
// 			.on('click', 'a[href="#menu"]', function(event) {

// 				event.stopPropagation();
// 				event.preventDefault();

// 				// Toggle.
// 					$menu._toggle();

// 			})
// 			.on('click', function(event) {

// 				// Hide.
// 					$menu._hide();

// 			})
// 			.on('keydown', function(event) {

// 				// Hide on escape.
// 					if (event.keyCode == 27)
// 						$menu._hide();

// 			});

})(jQuery);