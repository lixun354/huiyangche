export default {
	changeAddress : function(state,data){
		state.address = data;
	},
	setTransition(state, states) {
      state.states = states
   }
}