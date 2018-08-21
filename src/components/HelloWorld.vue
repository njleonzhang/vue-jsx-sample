<template>
  <div class="hello">
    I am write using template, see the version by <a href='/#/jsx'>jsx</a>
    <div class='wrapper'>
      <div class='content' v-if='hello'>hello</div>
    </div>
    <div class='wrapper'>
      <div class='content1' v-if='hello'> content1 </div>
      <div class='content2' v-else> content2 </div>
    </div>
    <div class='wrapper'>
      <ul>
        <li v-for='item in items' :key='item.id'>{{ item.name }}</li>
      </ul>
    </div>
    <slot-sample>
      <div>
        I am the slot
      </div>
      <div slot='namedSlot'>I am the named slot</div>
    </slot-sample>

    <scoped-slot-sample>
      <div slot-scope='{ data }'>
        {{ data }}
      </div>
    </scoped-slot-sample>

    <event-emitter
      @click='handleClick'
      @click-two='handleClickTwo'
      @camelCaseEvent='handleCamelCaseEvent'
      @test-event='handleTestEvent'
      @test-event-two='handleTestEventTwo'>
    </event-emitter>

    <div>
      <v-model-com v-model='vMoldeValue'></v-model-com>
      <v-model-com :value='vMoldeValue' @input='vMoldeValue = arguments[0]'></v-model-com>
      <span>number in input is {{ vMoldeValue }} </span>
    </div>

    <div>
      <sync-modifier :data.sync='syncModifierValue'></sync-modifier>
      <sync-modifier :data='syncModifierValue' @update:data='syncModifierValue = arguments[0]'></sync-modifier>
      <span>number in input is {{ syncModifierValue }} </span>
    </div>
  </div>
</template>

<script>
import SlotSample from './SlotSample'
import ScopedSlotSample from './ScopedSlotSample'
import EventEmitter from './EventEmitter'
import VModelCom from './VModelCom'
import SyncModifier from './SyncModifier'

export default {
  name: 'HelloWorld',
  components: {
    SlotSample,
    ScopedSlotSample,
    EventEmitter,
    VModelCom,
    SyncModifier
  },
  data () {
    return {
      hello: true,
      items: [{
        name: 'name1',
        id: 1
      }, {
        name: 'name2',
        id: 2
      }],
      vMoldeValue: 10,
      syncModifierValue: 20
    }
  },
  methods: {
    handleClick (data) {
      console.log(data)
    },
    handleClickTwo (data) {
      console.log(data)
    },
    handleTestEvent (data) {
      console.log(data)
    },
    handleTestEventTwo (data) {
      console.log(data)
    },
    handleCamelCaseEvent (data) {
      console.log(data)
    },
    updateVModelValue (val) {
      this.test = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
