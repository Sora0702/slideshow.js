$(function() {
  $("#js-slider").slick({
    arrows: true, //前、次ボタンの表示
    dots: true, //ドットナビゲーションの表示
    speed: 1000,
    slidesToShow: 1, //表示スライド数
    centerMode: true, //表示スライド数が奇数の時,現在のスライドを中央に配置
    variableWidth: true, //スライド幅の自動計算無効化
    autoplay: true, //自動でスライドする
    autoplayspeed: 4000, //次の画像に切り替わるまでの時間（ミリビョウ）
  });
});