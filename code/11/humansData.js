export async function getData() {
    const MIN_SIZE = 5;
    const MAX_SIZE = 20;
    const GENDERS = ['male', 'female'];
    const ADDRESSES = ['Wall Street', 'Broadway', 'Central Park', 'Times Square'];

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const randomName = (gender) => {
        const male_names = ['John', 'Bob', 'Oliver', 'Liam'];
        const female_names = ['Alice', 'Emily', 'Ann', 'Mary']
        const surnames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis'];
        let dict = {};
        dict.lastname = surnames[randomInt(0, surnames.length - 1)];
        if (gender === 'male') {
            dict.firstname = male_names[randomInt(0, male_names.length - 1)]
        }
        else {
            dict.firstname = female_names[randomInt(0, female_names.length - 1)]
        }
        return dict;
    };

    const randomGender = () => GENDERS[randomInt(0, GENDERS.length - 1)];

    const randomAddress = () => ADDRESSES[randomInt(0, ADDRESSES.length - 1)];

    const randomPhone = () => `(${randomInt(100, 999)}) ${randomInt(100, 999)}-${randomInt(1000, 9999)}`;

    const randomAge = () => randomInt(17, 80);

    const randomHuman = () => {
        const gender = randomGender();
        const { firstname, lastname } = randomName(gender);
        const address = randomAddress();
        const phone = randomPhone();
        const age = randomAge();
        return { firstname, lastname, gender, address, phone, age };
    };

    const arr = [];
    const size = randomInt(MIN_SIZE, MAX_SIZE);
    for (let i = 0; i < size; i++) {
        arr.push(randomHuman());
    }
    return arr;
}