<template>
    <div>
        <NuxtLayout name="default">
            <h1>
                <NuxtImg src="/img/fl_main.png" alt="FIRSTLAP" />
            </h1>
            <p class="CompanyTheme">
                <span>地球にやさしく、</span>
                <span>人にやさしくなれる世の中に。</span>
            </p>
            <section id="Product">
                <div class="SectionHead">
                    <p>プロダクトラインナップ<span>Product Lineup</span></p>
                    <NuxtImg src="/img/product_main.jpg" alt="プロダクトラインナップ" />
                </div>
                <div class="ProductTable">
                    <div class="ProductCell">
                        <div class="ProductCellInner">
                            <div class="ProductImage">
                                <NuxtImg src="/img/rig1.jpg" alt="BTOパソコン - THE MASTER - シリーズ" />
                            </div>
                            <div class="ProductDescription">
                                <p class="ProductTitle">BTOパソコン - THE MASTER - シリーズ</p>
                                <p class="ProductDetail">
                                    他に類を見ない、超高性能パソコンを受注生産で承ります。
                                </p>
                                <a href="https://firstlap.shopselect.net/categories/4565474" traget="_blank">商品ページ</a>
                                <p class="ProductTitle">
                                    BTOパソコン - FIRST LAPPER - シリーズ
                                </p>
                                <p class="ProductDetail">
                                    短納期のオリジナルBTOパソコンを受注生産で承ります。
                                </p>
                                <a href="https://firstlap.shopselect.net/categories/4565475" traget="_blank">商品ページ</a>
                            </div>
                        </div>
                    </div>
                    <div class="ProductCell">
                        <div class="ProductCellInner">
                            <div class="ProductImage">
                                <NuxtImg src="/img/rig2.jpg" alt="ポータブルバッテリー" />
                            </div>
                            <div class="ProductDescription">
                                <p class="ProductTitle">ポータブルバッテリー</p>
                                <p class="ProductDetail">
                                    <span>持ち運び可能な大容量バッテリーです。</span>
                                    <span>通常の100Vコンセントも備えているため、</span>
                                    <span>非常用に、キャンプに、レジャーにと、様々なシーンでご活用いただけます。</span>
                                </p>
                                <a href="https://firstlap.shopselect.net/categories/4565478" traget="_blank">商品ページ</a>
                            </div>
                        </div>
                    </div>
                    <div class="ProductCell">
                        <div class="ProductCellInner">
                            <div class="ProductImage">
                                <NuxtImg src="/img/rig3.jpg" alt="O3O" />
                            </div>
                            <div class="ProductDescription">
                                <p class="ProductTitle">O3O</p>
                                <p class="ProductDetail">低濃度オゾン放出型空気清浄機です。</p>
                                <a href="https://firstlap.shopselect.net/categories/4565477" traget="_blank">商品ページ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="Business" id="Business">
                <div class="BusinessInner">
                    <h2>事業内容</h2>
                    <p>ITシステムの企画・制作・運営・販売に関する業務</p>
                    <p>
                        インターネット・WEB・デジタルコンテンツの企画・制作・制作・運営・販売に関する業務
                    </p>
                    <p>WEB広告に関わる業務</p>
                    <p>デジタルサイネージに関する業務</p>
                    <p>イベントの企画・制作・運営に関する業務</p>
                </div>
            </section>

            <section class="Company" id="Company">
                <div class="CompanyInner">
                    <h2>会社概要</h2>
                    <dl>
                        <dt>会社名</dt>
                        <dd>ファーストラップ株式会社</dd>
                        <dt>英文表記</dt>
                        <dd>First Lap Inc.</dd>
                        <dt>代表者</dt>
                        <dd>米竹 真哉</dd>
                        <dt>設立</dt>
                        <dd>2007年3月22日</dd>
                        <dt>資本金</dt>
                        <dd>10,000,000円</dd>
                        <dt>所在地</dt>
                        <dd>〒105-0013 東京都港区浜松町二丁目2番15号 浜松町ダイヤビル2F</dd>
                    </dl>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false,
});
</script>

<style scoped>
h1 {
    margin: 0;
    display: block;
}

h1 img {
    height: auto;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: block;
}

.CompanyTheme {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 200px;
}

.CompanyTheme span {
    display: block;
}

.SectionHead {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
    margin-bottom: 150px;
    background-color: black;
}

.SectionHead img {
    object-fit: cover;
    width: 100%;
    opacity: 0.6;
}

.SectionHead p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
    text-align: center;
    z-index: 1;
}

.SectionHead p span {
    display: block;
}

.ProductCell {
    padding: 10px;
    margin: 20px 0;
    display: block;
}

.ProductCell img {
    width: 100%;
}

.ProductCellInner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}

.ProductDescription {
    width: 48%;
    display: flex;
    margin-left: 4%;
    flex-direction: column;
    justify-content: center;
}

.ProductDescription .ProductTitle {
    margin: 0 0 5px;
    font-size: 1.2em;
    padding: 0 10px 5px;
    font-weight: 600;
}

.ProductImage {
    height: auto;
    width: 600px;
    background-color: white;
    display: inline-block;
}

.ProductCell img {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.ProductDetail {
    padding: 0 10px;
    font-size: 0.8em;
}

.ProductDescription>a {
    width: calc(100% - 60px);
    margin: 0 auto 50px;
    display: block;
    text-align: center;
    padding: 10px 20px;
    border: 1px solid;
    border-radius: 1em;
    color: black;
    background-color: white;
    transition: background-color 0.2s, color 0.2s;
    text-decoration: none;
}

.ProductDescription>a:hover {
    color: white;
    background-color: black;
    transition: background-color 0.2s, color 0.2s;
}

section.Business {
    margin: 150px auto 0;
    background-color: #efefef;
    padding: 100px 10px;
}

.BusinessInner,
.CompanyInner {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

.BusinessInner h2,
.CompanyInner h2 {
    margin: 0 auto 20px;
}

section.Company {
    background-color: #efefef;
    padding: 0 10px 100px;
}

.CompanyInner dl {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.CompanyInner dl dt {
    display: block;
    width: 5em;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid;
    font-weight: 300;
}

.CompanyInner dl dd {
    display: block;
    width: calc(100% - 5em);
    margin: 0 0 20px;
}

@media (max-width: 480px) {
    .SectionHead p {
        width: 80%;
    }

    .ProductCellInner {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .ProductImage {
        width: 100%;
    }

    .ProductDescription {
        width: 100%;
        margin-top: 30px;
    }

    .CompanyTheme {
        font-size: 22px;
    }
}
</style>