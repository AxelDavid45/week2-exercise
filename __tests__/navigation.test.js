import Navigation from "../js/modules/Navigation.js";


test('Init the navigation without elements', () => {
    const nav = new Navigation();
    expect(nav.elements.length).toBe(0);
});

test('Test the search index of an element, otherwise add it', () => {
   const nav = new Navigation();
   expect(nav.searchIndexOfElement('categories')).toBe(1);

});
