$(function () {
	var breakPoint = 768,
		isSp = !1,
        $win = $(window),
        winH = $win.height(),
        winW = $win.width(),
        winTop = $win.scrollTop(),
        $body = $('body'),
		winCenter = winTop + (winH/2),
		$scrollContents = $('.scroll-contents'),
		$scrollInner    = $('.scroll-inner'),
		$container      = $('.g-container') 
	;

	const contentElem = document.querySelector('.page-cont-inner');

	document.body.addEventListener('wheel', (e) => {
		const winW = window.innerWidth;
		const breakPoint = 1024; // あなたのブレークポイントの値に置き換えてください

		// .modal-wrapperクラスに.showクラスがついているかどうかを判定
		const isModalHidden = document.querySelector('.modal-wrapper.show') === null;

		if (winW > breakPoint && isModalHidden) {
			const delta = e.deltaY;
			// ウィールイベントのデフォルトの挙動を無効にする
			e.preventDefault();
			// deltaに基づいて.content内の.itemをスクロールする
			contentElem.scrollTop += delta;
		}
	}, { passive: false });

	$win.on({
		
		load: function () {
			$('.page-wrapper').addClass('show');	
			modalToggle();
			if(!isSp){
				setAnchor();
			}
			showElement();
			playVideo();

			setTimeout(function(){
				$('.opening').addClass('hide');
			},3000);
				

		},
		scroll: function () {
			showElement();
			setSlider1();
			setSlider2();
			setSlider3();
			setSlider4();
			playVideo();
		},
		resize: function () {
			
		}
	});
	scrollNav();

	$('.page-cont-inner').on({
		scroll: function () {
		  // スクロールイベントの処理
		  winH = $win.height(), winTop = $win.scrollTop(), winCenter = winTop + winH / 2, winEnd = winTop + winH,
		  showElement()
		  scrollNav();
		  setSlider1();
		  setSlider2();
		  setSlider3();
		  setSlider4();
		  playVideo();
		}
	});

	const swiper1 = new Swiper(".item-slider1", {
		slidesPerView: 1.2,
		centeredSlides : true,
		spaceBetween:10,
		speed: 1000,
		loop: true,
		// ページネーションが必要なら追加
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: false,

	});

	const swiper2 = new Swiper(".item-slider2", {
		slidesPerView: 1.2,
		centeredSlides : true,
		spaceBetween:10,
		speed: 1000,
		loop: true,
		// ページネーションが必要なら追加
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: false,
	});
	const swiper3 = new Swiper(".item-slider3", {
		slidesPerView: 1.2,
		centeredSlides : true,
		spaceBetween:10,
		speed: 1000,
		loop: true,
		// ページネーションが必要なら追加
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: false,
	});
	const swiper4 = new Swiper(".item-slider4", {
		slidesPerView: 1.2,
		loopAdditionalSlides: 1,
		centeredSlides : true,
		spaceBetween:10,
		speed: 1000,
		loop: true,
		// ページネーションが必要なら追加
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: false,
	});

	function modalToggle(){
		$('.modal-btn').each(function(){
			$(this).on('click',function(){
				var target = $(this).data('target');
				var modal = document.getElementById(target);
				$(modal).addClass('show');
				$body.addClass('noscroll');
				return false;
			});
		});
		$('.close-btn').on('click',function(){
			$('.modal-wrapper').removeClass('show');
			$body.removeClass('noscroll');
			return false;
		}); 

		$('.modal-wrapper').click(function (e) {
			if (!$(e.target).closest('.modal-cont').length) {
				$('.modal-wrapper').removeClass('show');
				$body.removeClass('noscroll');
			}
		})
	}


	function scrollNav() {
		const anchors = document.querySelectorAll(".sec");
	
		anchors.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	
			// 要素がビューポートに入ったらactiveクラスを付与
			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				// アクティブなセクションのIDを取得
				const currentSectionId = element.id; // elementから直接IDを取得
				// アクティブなセクションに対応するアンカーリンクを検索し、色を変更
				$('.anchor-sec[data-section="' + currentSectionId + '"]').addClass('current');
			} else {
				$('.anchor-sec[data-section="' + element.id + '"]').removeClass('current');
			}
		});
	}

	function setAnchor() {
		$('a[href^="#"]').click(function () {
		  const speed = 600;
		  let href = $(this).attr('href');
		  let target = $(href == '#' || href == '' ? 'html' : href);
		  let position = target.offset().top - $('.page-cont-inner').offset().top + $('.page-cont-inner').scrollTop(); // この行を変更
		  $('.page-cont-inner').animate({ scrollTop: position - 15 }, speed, 'swing');
		  return false;
		});
	}

	function setSlider1() {
		const slider1 = document.querySelectorAll(".item-slider1");

		slider1.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;

			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				swiper1.params.autoplay.delay = 1000;
				swiper1.params.autoplay.disableOnInteraction = false;
				swiper1.autoplay.start();
			}else{
				swiper1.autoplay.stop();
			}
		});

	}
	function setSlider2() {
		const slider2 = document.querySelectorAll(".item-slider2");

		slider2.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	
			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				swiper2.params.autoplay.delay = 1000;
				swiper2.params.autoplay.disableOnInteraction = false;
				swiper2.autoplay.start();
			}else{
				swiper2.autoplay.stop();
			}
		});
	}
	function setSlider3() {
		const slider3 = document.querySelectorAll(".item-slider3");

		slider3.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	
			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				swiper3.params.autoplay.delay = 1000;
				swiper3.params.autoplay.disableOnInteraction = false;
				swiper3.autoplay.start();
			}else{
				swiper3.autoplay.stop();
			}
		});
	}
	function setSlider4() {
		const slider4 = document.querySelectorAll(".item-slider4");

		slider4.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
	
			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				swiper4.params.autoplay.delay = 1000;
				swiper4.params.autoplay.disableOnInteraction = false;
				swiper4.autoplay.start();
			}else{
				swiper4.autoplay.stop();
			}
		});
	}

	function playVideo(){
			// 交差を検知したい要素
		const video = document.querySelectorAll(".movie");

		// 要素が表示されたら実行する動作
		
		video.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;
			var $video = $('video');

			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				$video[0].play();
			}
		});
		

	}



	
});

	// 交差を検知したい要素
	const element = document.querySelectorAll(".scroll-in");

	// 要素が表示されたら実行する動作
	function showElement() {
		element.forEach((element) => {
			var rect = element.getBoundingClientRect();
			var windowHeight = window.innerHeight || document.documentElement.clientHeight;

			// 要素がビューポートに入ったらactiveクラスを付与
			if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
				element.classList.add("show");
			}
		});
	}

