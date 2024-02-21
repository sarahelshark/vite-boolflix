

<script>
    export default {
        
    }
</script>
<template>
    <div class="Debug container">
        <div class="row">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>

        </div>

   </div>
</template>
<style scoped>


.container
{
 display: flex;
  width: 80%;
  max-width: 1176px;
  margin: auto;
  gap: .5rem;
  margin-top: 2.5rem;
}

.row
{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 -1rem;
}
.card{
    width: 200px;
    aspect-ratio: 1/1;
    background-color: rgb(220, 194, 23);
}

[class^="col-"]{
  padding: 1rem;
}

.col-12
{
  width: 100%;
}
</style>