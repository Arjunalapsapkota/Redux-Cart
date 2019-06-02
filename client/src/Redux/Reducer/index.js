const defaultState = [];
const method = (state = [], action) => {
  console.log("Action received in the reducer##:", action);
  switch (action.type) {
    case "ADD": {
      // var foundIndex = items.findIndex(x => x.id == item.id);
      // items[foundIndex] = item;
      //return [...state, action.payload]
      let copy = state; // array , copy of state
      let Index = -1;
      Index = copy.findIndex(x => x.id == action.payload.id);
      if (Index > -1) {
        copy[Index] = { ...copy[Index], qty: copy[Index].qty + 1 };
      }
      return Index > -1 ? [...copy] : [...state, { ...action.payload, qty: 1 }];
    }

    case "CLEAR":
      return [];

    case "EDIT": {
      let copy = state; // array , copy of state
      console.log("state:", state);
      let Index = -1;
      Index = copy.findIndex(x => x.id == action.payload.id);
      if (Index > -1) {
        copy[Index] = {
          ...copy[Index],
          qty: action.payload.value,
          amount: copy[Index].price * action.payload.value
        };
      }
      console.log("after edit", [...copy]);
      return [...copy];
    }

    default:
      return state;
  }
};
module.exports = { method };
