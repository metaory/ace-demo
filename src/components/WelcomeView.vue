<script setup>
import { ref } from "vue";
defineProps(["user"]);
const showing = ref(true);

function close(e) {
  if (e.target.nodeName === "MAIN") showing.value = false;
}
</script>

<template>
  <main v-if="showing" @click="close">
    <section>
      <i
        ><svg
          @click="showing = false"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z"
            fill="#1C274C"
          /></svg
      ></i>
      <p>
        Welcome
        <strong>{{ user.username }}</strong>
      </p>
      <em>{{ user.attributes.email }}</em>
    </section>
  </main>
</template>

<style scoped>
main {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: hsl(270deg 60% 50% / 80%);
}

section {
  width: 40vw;
  height: 45vh;
  background-color: hsl(270deg 80% 50% / 90%);
  display: grid;
  border-radius: 8px;
  grid-template-rows: repeat(3, 1fr);
  /*
  justify-content: center;
  align-items: center;
  */
  grid-auto-flow: row;
  grid-gap: 22px;
}

strong {
  font-size: 1.5em;
  color: yellow;
}

p,
em {
  justify-self: center;
}

i {
  text-align: right;
  padding: 8px;
}
</style>
