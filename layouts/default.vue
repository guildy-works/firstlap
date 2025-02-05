<template>
    <header>
        <div class="SiteBlanding">
            <img src="/img/fl_logo.png" alt="FIRSTLAP">
            <Navbar />
        </div>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <p>© First Lap Inc.</p>
    </footer>
</template>

<style>
body {
    margin: 0;
}

header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: white;
    height: 56px;
}

.SiteBlanding {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.SiteBlanding img {
    height: 56px;
    width: auto;
}

.SiteBlanding nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

.SiteBlanding nav a {
    font-size: 14px;
    padding: 0 10px;
    color: #020202;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.SiteBlanding nav a:hover {
    color: #ffffff;
    background-color: #020202;
}

footer {
    background-color: black;
    padding: 10px;
}

footer>p {
    margin: 0;
    color: white;
    text-align: center;
}
</style>
