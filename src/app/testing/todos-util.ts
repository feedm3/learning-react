/**
 * As we want to mock this function, we need to put it into a separate file. It's not possible to
 * only mock a single function from a file.
 */

export const getClientWidth = (element: HTMLElement) => {
    return element.clientWidth;
};