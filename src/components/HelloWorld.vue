<template>
  <div>
    {{ msg }}
    <Button text='hayooo!' />
  </div>
</template>

<script>
import Button from 'OEXShared/Button';
export default {
  props: ['msg'],
  components: {Button}
};
</script>
