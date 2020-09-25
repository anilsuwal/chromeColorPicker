<template>
    <div id="decoration">
        <input type="text" placeholder="Black"/>
        <h5>Swatch</h5>
        <chrome-picker v-model="colors" />
    </div>
</template>
<script>
export default {
    data() {
        colors
    }
}
</script>
<style lang="scss" scoped>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  font-size: 1rem;
}
#decoration {
    display: flex;
    align-items: center;
    justify-content: space-around;

    input[type="text"] {
        border-radius: 20px;
        width: 100%;
        color: #999999;
        padding: 15px 20px;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        &:focus {
          border: 2px solid #000000;
          outline: none;
          border-radius: 20px;
        }
    }
    h5{
        margin: 0 30px;
    }
}
</style>