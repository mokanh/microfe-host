<template>
  <div>
    {{ msg }}
    <Button text="Click From Host!" />
  </div>
</template>

<script>
import Button from 'OEXShared/Button';
export default {
  props: ['msg'],
  components: {Button}
};
</script>