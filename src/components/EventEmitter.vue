<template>
  <div class='wrapper'>
    <button @click='$emit("click", "click")'>
      click me to emit click event
    </button>
    <button @click='$emit("click-two", "click-two")'>
      click me to emit click-two event
    </button>
    <button @click='$emit("test-event", "test-event")'>
      click me to emit test-event
    </button>
    <button @click='$emit("camelCaseEvent", "camelCaseEvent")'>
      click me to emit camelCaseEvent
    </button>
    <button @click='$emit("test-event-two", "test-event-two")'>
      click me to emit test-event-two
    </button>
  </div>
</template>
