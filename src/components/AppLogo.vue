

<script>
    export default {
        
    }
</script>
<template>
   <div class="img_container">
    <img src="../assets/img/logo.194ab379.png" alt="boolflix logo"/>
   </div>
</template>
<style scoped>
img {
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    width: 190px;
    filter: drop-shadow(0 0 4px var(--bool-accent));
}
@media (max-width: 768px) {
.img_container{
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    margin: 1rem auto;
}
}


</style>