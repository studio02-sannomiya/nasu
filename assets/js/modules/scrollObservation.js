export function scrollObservation(a , b){

// 要素が画面の中に入った時にクラスを付与する方法で、galleryにある画像にアニメーションを加える
// 対象の要素を全て取得（共通のクラス名がついている要素）
const allTarget = document.querySelectorAll(a); 

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation(){
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    allTarget.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add(b);
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove(b);
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);

}