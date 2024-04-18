<template>
    <nav ref="el">
        <a href="#Product">プロダクト</a>
        <a href="#Business">事業内容</a>
        <a href="#Company">会社概要</a>
        <a href="https://thebase.com/inquiry/firstlap-shopselect-net" target="_blank" >お問い合わせ</a>
    </nav>
</template>
<script setup>
 const el = ref(null)
   const { width, height } = useElementSize(el)

</script>