
$(function(){
    //アコーディオンタイトルをクリックしたとき
        $('.accordion-head').click(function () {
        //タイトルの次のテキストをスライドで表示
            $(this).next().slideToggle();
        //子要素のアイコンのクラスをis-openに変更する
            $(this).children('.accordion-icon').toggleClass( 'is-open' );
    
          });
          
    });


    $(function() {
        //ボタンを非表示にする
        $('.to-top').hide();
        //画面をスクロールしたとき
        $(window).scroll(function() {
            //80pxより多くスクロールした場合
            if($(this).scrollTop() > 80) {
                //ボタンをフェードインさせる
                $('.to-top').fadeIn(300);
            //それ以外の場合
            } else {
                //ボタンをフェードアウトさせる
                $('.to-top').fadeOut(300);
            }
        });
        //id属性がtopBtnの要素をクリックすると
        $('.to-top').click(function(){
        //画面の上から0pxの所まで500ミリ秒（0.5秒）かけてアニメーションしながらスクロールする
        $('html,body').animate({scrollTop: 0}, 500);
        });
      });

      // ドロワー
		jQuery(".js-drawer").on("click", function(e) {
			e.preventDefault();
			let targetClass = jQuery(this).attr("data-target");
			jQuery("." + targetClass).toggleClass("is-checked");
			return false;
        });
        
       
    

