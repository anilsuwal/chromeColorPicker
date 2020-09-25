<template>
  <div id="app">
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="incolor inside-decoration">
             <h4>Interior color</h4>
             <decoration></decoration>
             <button class="btn btn-dark btn-block">+ Add New Color</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="incolor outside-decoration">
             <h4>Exterior color</h4>
             <decoration></decoration>
             <button @click="addColor" class="btn btn-dark btn-block">+ Add New Color</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Decoration from './components/Decoration';
export default {
  components: {
    'decoration': Decoration
  },
  name: 'app',
  data () {
    return {
      addColor: function() {
        console.log("clicked");
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  font-size: 1rem;
}
#app {
  .row {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
      margin: 40px 0;
      padding: 30px;
      border-radius: 20px;
      background: #f5f5f5;

      .incolor {

        h4 {
          font-size: 1.3rem;
          margin-bottom: 2.2rem;
        }

        button {
          margin: 2.2rem 0;
          font-size: 18px;
          border-radius: 20px;
          padding: 14px;

          &:hover {
            cursor: pointer;
          }
        }
      }
  }
}
</style>
