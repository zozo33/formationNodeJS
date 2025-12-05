const { exec } = require('child_process');

const command = process.platform === 'win32' ? 'dir ..' : 'ls -lh ..';


//envoi la commande au shell ls-lh ..
exec(command, (error, stdout, stderr) => {
    // Check for errors during execution
    if (error) {
        console.error(`Execution Error: ${error.message}`);
        return;
    }

    // Check if the command itself returned an error message to stderr
    if (stderr) {
        console.error(`Command Error Output: ${stderr}`);
        // Note: The 'error' object above only catches system execution failures, 
        // not command-level errors reported via stderr.
    }

    // Print the successful output
    console.log(`Command Output:\n${stdout}`);
});
