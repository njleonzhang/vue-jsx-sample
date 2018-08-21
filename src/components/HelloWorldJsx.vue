<script>
import SlotSample from './SlotSampleJsx'
import ScopedSlotSample from './ScopedSlotSampleJsx'
import EventEmitter from './EventEmitter'
import VModelCom from './VModelCom'
import SyncModifier from './SyncModifier'

export default {
  components: {
    SlotSample,
    ScopedSlotSample,
    EventEmitter,
    VModelCom,
    SyncModifier
  },
  render () {
    return (
      <div class='hello'>
        I am write using jsx, see the version by <a href='/#/'>template</a>

        <div class='wrapper'>
          {
            this.hello && (
              <div class='content'>hello</div>
            )
          }
        </div>
        <div class='wrapper'>
          {
            this.hello
              ? (
                <div class='content1'>content1</div>
              )
              : (
                <div class='content2'> content2 </div>
              )
          }
        </div>

        <div class='wrapper'>
          <ul>
            {
              this.items.map(item => (
                <li>{ item.name }</li>
              ))
            }
          </ul>
        </div>
        <slot-sample {
        ...{
          default: ({ data }) => {
            return (
              <div>{ data }</div>
            )
          }
        }}>
          <div>
            I am the slot
          </div>

          <div slot='namedSlot'>I am the named slot</div>
        </slot-sample>

        <scoped-slot-sample {
        ...{
          scopedSlots: {
            default: ({ data }) => {
              return (
                <div>{ data }</div>
              )
            }
          }
        }
        }>
        </scoped-slot-sample>

        <event-emitter
          onClick={ this.handleClick }
          onClick-two={ this.handleClickTwo }
          on-camelCaseEvent={ this.handleCamelCaseEvent }
          {...{
            on: {
              'test-event': this.handleTestEvent,
              'test-event-two': this.handleTestEventTwo
            }
          }}>
        </event-emitter>

        <div>
          <v-model-com
            value={ this.vMoldeValue }
            onInput={ val => { this.vMoldeValue = val } }
          >
          </v-model-com>
          <span>number in input is { this.vMoldeValue } </span>
        </div>

        <div>
          <sync-modifier
            data={ this.syncModifierValue }
            {
            ...{
              on: {
                'update:data': val => { this.syncModifierValue = val }
              }
            }
            }
          >
          </sync-modifier>
          <span>number in input is { this.syncModifierValue } </span>
        </div>
      </div>
    )
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
    handleCamelCaseEvent (data) {
      console.log(data)
    },
    handleTestEvent (data) {
      console.log(data)
    },
    handleTestEventTwo (data) {
      console.log(data)
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
