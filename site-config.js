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

    // 公式サイト（WordPress）。今は /portfolio/ に置いている。https://re9design.net/ に移したら書きかえる
    officialSiteUrl: "https://re9design.net/portfolio/",
    officialContactUrl: "https://re9design.net/portfolio/#CONTACT",

    // 無料診断（GitHub Pages）
    diagnosisUrl: "https://yasuhiro-k120.github.io/re9design-shindan/",

    privacyPolicy: {
      version: "2026-11-05",                  // 版（制定日 2026-11-04）。診断フォームの PRIVACY_NOTICE_VERSION と同じにする
      // 無料診断と同じ場所（GitHub Pages）に置く写し。privacy.html を一緒に載せたら true
      githubPagesPath: "privacy.html",
      githubPagesPublished: true,
      // 公式サイト（WordPress）の固定ページ。予定の URL。公開して開けることを確かめたら true
      // （WordPress が /portfolio/ にあるあいだは、固定ページの URL は /portfolio/privacy-policy/ になる点に注意）
      wordpressUrl: "https://re9design.net/privacy-policy/",
      wordpressPublished: false
    }
  };
  if (typeof module === "object" && module.exports) module.exports = SITE;
  else root.RE9_SITE = SITE;
})(this);
