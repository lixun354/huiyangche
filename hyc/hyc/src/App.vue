<template>
  <div id="app">
  	<transition :name="$store.state.states">
	    <router-view/>
	  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  }
}
</script>

<style>
.turn-on-enter {
   transform: translate3d(100%, 0, 0);
}.turn-on-leave{
	 transform: translate3d(0, 0, 0);
}
.turn-on-leave-to {
   /*transform: translate3d(100%, 0, 0);*/ 
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 0.4s ease;
}

.turn-off-enter {
   transform: translate3d(-100%, 0, 0);
}.turn-off-leave{
	 transform: translate3d(0, 0, 0);
}
.turn-off-leave-to {
   /*transform: translate3d(100%, 0, 0);*/ 
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: transform 0.4s ease;
}

</style>
