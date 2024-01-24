<template>
  <div>
    {{ msg }}
    <Button />
  </div>
</template>

<script>
import Button from 'OEXShared/Button';
export default {
  props: ['msg'],
  components: {Button}
};
</script>
