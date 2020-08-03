export const store = {
    state: {
      dynamicComponent: ''
    },
    changeComponent(newComp) {
      this.state.dynamicComponent = newComp;
    }
  };