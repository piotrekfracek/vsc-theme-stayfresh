//////////////////
// Templates
//////////////////

<template lang="jade">
  //- Comment
  .classElement(attr="value")
    #idElement
      h1 Text
</template>

<template lang="html">
  <!-- Comment -->
  <div attr="value" class="classElement">
    <div id="idElement">
      <h1>Text</h1>
    </div>
  </div>
</template>

//////////////////
// Styles
//////////////////

<style lang="css">
  .classSelect > #idSelector + h3:nth-child(10) {
    content: 'content';
    text-align: left;
    padding: 10px;
  }
</style>

<style lang="less">
  .classSelect > #idSelector + h3:nth-child(10) {
    content: 'content';
    text-align: left;
    padding: 10px;
    &__elocze {
      display: none;
    }
  }
</style>

<style lang="scss">
  .classSelect > #idSelector + h3:nth-child(10) {
    content: 'content';
    text-align: left;
    padding: 10px;
    & > .main {
      display: none;
    }
    @extend .main;
  }
</style>

<style lang="sass">
  .classSelect > #idSelector + h3:nth-child(10)
    content: 'content'
    text-align: left
    padding: 10px
    +transform(translate(10))
</style>


<script>
  import Processor from "processor";

  class Main {

    // Special constructor function
    constructor({config, callback}) {
      this.config   = config;
      this.callback = (time) => {
        return time / 1000;
      }
    }

    // ES6 function
    async doSomething(data) {
      const currentVer = await Processor.fetchVersion();
      const {id, time} = data;
      return Processor(currentVer).prepare({
        id:    id,
        time:  time,
        true:  true,
        false: false,
      });
    }

  }
</script>
