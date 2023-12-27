<template>
  <div>
    {{ msg }}
    <HelloWorld />
  </div>
</template>

<script>
import Button from 'OEXShared/Button';
import HelloWorld from 'OEXShared/HelloWorld';
export default {
  props: ['msg'],
  components: {Button, HelloWorld}
};
</script>