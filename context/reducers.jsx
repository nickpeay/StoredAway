import React from 'react';

export const contextReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      // Add item to container
      return {
        containers: [
          ...state.containers,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            items: action.payload.items,
          },
        ],
      };
    case 'delete':
      // Remove item from container
      return [
        ...state.filter((container) => container.id !== action.payload.id),
      ];
    // case 'edit':
    //   // Edit item in container
    //   console.log(state, action);
    //   return state;
    default:
      throw new Error();
  }
};
