const initialState = {
  menuItems: [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'External Link', url: 'https://example.com' },
  ],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;