/*
 * Re9 design サイト共通の設定（URL・連絡先・プライバシーポリシーの版）
 * - index.html（無料診断）と privacy.html（プライバシーポリシー）が読み込む
 * - WordPress に貼るプライバシーポリシーも、ここの値から作る（tests フォルダで npm run build:wp-privacy）
 * - URL を変えるときは、ここだけを書きかえる
 * - 「実際に開けることを確かめた URL」だけを使う。公開前のページは *Published を false のままにする
 * 秘密の値（パスワード・API キーなど）はここに書かない（公開されるファイル）
 */
(function (root) {
  var SITE = {
    businessName: "Re9 design",
    representative: "川添 康大",
    location: "神奈川県伊勢原市",
    contactEmail: "re9design.2025@gmail.com",

    // 公式サイト（WordPress）。2026-11-07 に /portfolio/ から https://re9design.net/ へ引っ越した（WordPress 本体は /portfolio/ のまま、表示の住所だけルート）
    officialSiteUrl: "https://re9design.net/",
    officialContactUrl: "https://re9design.net/#CONTACT",

    // 無料診断（GitHub Pages）
    diagnosisUrl: "https://yasuhiro-k120.github.io/re9design-shindan/",

    // アクセス解析（GA4）。測定 ID（G- で始まる）を入れると、無料診断のページで計測が始まる。空なら何も読み込まない
    // ・入れる前に、プライバシーポリシーを GA4 を使う版に改定して公開しておく（公開前チェックで確かめる）
    // ・テストモード（自分の PC・?mode=test など）では読み込まない
    // ・Googleタグマネージャー（GTM）で同じイベントを送る場合は、ここを空にする（二重に数えないため）
    analytics: {
      ga4MeasurementId: "G-ZPEX5Q84RC"
    },

    // スパム対策（Cloudflare Turnstile）。サイトキー（公開してよい値）を入れると、診断フォームに確認欄が出る
    // ・秘密キーはここに書かない。GAS のスクリプト プロパティ TURNSTILE_SECRET に入れる
    // ・Cloudflare の管理画面で、診断ページを置くドメインをこのウィジェットに登録しておく
    turnstile: {
      siteKey: ""
    },

    privacyPolicy: {
      version: "2026-11-09-2",                // 版（制定日 2026-11-04、改定 2026-11-05・2026-11-07・2026-11-09・2026-11-09-2）。診断フォームの PRIVACY_NOTICE_VERSION と同じにする
      // 無料診断と同じ場所（GitHub Pages）に置く写し。privacy.html を一緒に載せたら true
      githubPagesPath: "privacy.html",
      githubPagesPublished: true,
      // 公式サイト（WordPress）の固定ページ。予定の URL。公開して開けることを確かめたら true
      // （引っ越し前の /portfolio/privacy-policy/ は、ここへ 301 で転送している）
      wordpressUrl: "https://re9design.net/privacy-policy/",
      wordpressPublished: true
    }
  };
  if (typeof module === "object" && module.exports) module.exports = SITE;
  else root.RE9_SITE = SITE;
})(this);
