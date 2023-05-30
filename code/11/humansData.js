export async function getData() {
    const MIN_SIZE = 5;
    const MAX_SIZE = 20;
    const GENDERS = ['male', 'female'];
    const ADDRESSES = ['Wall Street', 'Broadway', 'Central Park', 'Times Square'];

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const randomName = () => {
        const names = ['John', 'Bob', 'Alice', 'Emily', 'Oliver', 'Liam'];
        const surnames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis'];
        return { firstName: names[randomInt(0, names.length - 1)], lastName: surnames[randomInt(0, surnames.length - 1)] };
    };

    const randomGender = () => GENDERS[randomInt(0, GENDERS.length - 1)];

    const randomAddress = () => ADDRESSES[randomInt(0, ADDRESSES.length - 1)];

    const randomPhone = () => `(${randomInt(100, 999)}) ${randomInt(100, 999)}-${randomInt(1000, 9999)}`;

    const randomAge = () => randomInt(17, 80);

    const randomHuman = () => {
        const { firstName, lastName } = randomName();
        const gender = randomGender();
        const address = randomAddress();
        const phone = randomPhone();
        const age = randomAge();
        return { firstName, lastName, gender, address, phone, age };
    };

    const arr = [];
    const size = randomInt(MIN_SIZE, MAX_SIZE);
    for (let i = 0; i < size; i++) {
        arr.push(randomHuman());
    }
    return arr;
}