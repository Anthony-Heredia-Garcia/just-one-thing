function createUser(email, password) {
    if (!email || !email.includes('@') || !password || password.trim () === '') {
    console.log('Invalid input!');
    return;
}

const user = {
    email: email,
    password: password,
};

database.insert(user);
}


function validateEmail (email, password) {
    if (!email || !email.includes('@') || !password || password.trim () === '') 
        console.log('Invalid input!');
        createUser(email, password)
}

const user = {
    email: email,
    password: password,
}

function createUser(user) {
    database.insert(user);
}