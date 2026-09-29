<template>
    <div class="home">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        <img src="/images/cliff.JPG" />
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .home {
        min-height: 100vh;
        display: grid;
        grid-template-rows: minmax(0, 150px) 1fr;
    }
}

p {
    font-size: 20px;
    /* text-align: center; */
    padding: 20px
}

img {
    padding: 20px;
    width: 100%;
    max-width: 1000px;
    height: auto;
    object-fit: cover;
    justify-self: center;
}
</style>