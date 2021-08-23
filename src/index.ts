const prompts = require('prompts');

const questions = [
    {
        type: 'text',
        name: 'username',
        message: 'What is your GitHub username?'
    },
];

(async () => {
    const response = await prompts(questions);
})();
