<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex x12>
        <HelloWorld msg="Bienvenue sur notre site" />
      </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld";
  export default {

    components: {
      HelloWorld

    },
    data: () => ({

    })
  }
</script>

<style>

</style>
