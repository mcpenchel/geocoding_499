import places from 'places.js';

const initAutocomplete = () => {
  const addressInput = document.getElementById('autocomplete-address-input');
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAutocomplete };