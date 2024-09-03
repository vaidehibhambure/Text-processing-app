const { processText } = require('../textprocessor');

test('processes text and surrounds the most used word with "foo" and "bar"', () => {
    const inputText = "hello world hello";
    const expectedOutput = "foohellofoo world foohellofoo";
    expect(processText(inputText)).toBe(expectedOutput);
});

test('handles text with no words', () => {
    const inputText = "";
    const expectedOutput = "";
    expect(processText(inputText)).toBe(expectedOutput);
});

test('handles text with only one word', () => {
    const inputText = "hello";
    const expectedOutput = "foohellofoo";
    expect(processText(inputText)).toBe(expectedOutput);
});

test('handles text with multiple most used words', () => {
    const inputText = "foo foo foo foobar foofoobar";
    const expectedOutput = "foofoofoo foofoofoo foofoofoo foobar foofoobar";
    expect(processText(inputText)).toBe(expectedOutput);
});
