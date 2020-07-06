import Navigation from "../js/modules/Navigation.js";

describe('Testing functionality in Navigation Class', () => {
    test('Init the navigation without elements', () => {
        const nav = new Navigation();
        expect(nav.elements.length).toBe(0);
        expect(nav.clickCounter.length).toBe(0);
    });

    test('Test the search index of an element, if exists return the index otherwise add it', () => {
        const nav = new Navigation();
        expect(nav.searchIndexOfElement('categories')).toBe(0);
        expect(nav.searchIndexOfElement('mybad')).toBe(1);
    });

    test('Rendering a message', () => {
        document.body.innerHTML = `
            <ul>
                <li id="home">
                    Home
                </li>
            </ul>
        `;
        const nav = new Navigation(['home']);
        expect(nav.renderMessage('home'))
            .toMatch('ID: home Count: 1');
        expect(nav.renderMessage('home'))
            .toMatch('ID: home Count: 2');
    });

    test('Random Color test', () => {
        //Create the element
        document.body.innerHTML = `
            <ul>
                <li id="home">
                    Home
                </li>
            </ul>
        `;

        //Create the instance
        const navigation = new Navigation(['home']);

        navigation.renderMessage('home');
        expect(document.getElementById('home').style.background).toMatch(/rgb()/);

    });
})
