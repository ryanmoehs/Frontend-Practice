const evenOrOdd = require('./p1');
const reverseString = require('./p2');
const sortByLength = require('./p3');

test('Even or Odd Number', () => {
    expect(evenOrOdd(2)).toBe("Even");
    expect(evenOrOdd(3)).toBe("Odd");
    expect(evenOrOdd(0)).toBe("Even");
    expect(evenOrOdd(-2)).toBe("Even");
}
);

test('Reversed String', () => {
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("How are you?")).toBe("?uoy era woH");
    expect(reverseString("I am a student")).toBe("tneduts a ma I");
}
);

test('Sort Array by String Length', () => {
    expect(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])).toEqual(["Eyes", "Glasses", "Monocles", "Telescopes"]);
    expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toEqual(["", "Pizza", "Brains", "Moderately"]);
    expect(sortByLength(["Longer", "Longest", "Short"])).toEqual(["Short", "Longer", "Longest"]);
}
);
