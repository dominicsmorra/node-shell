const pwd = require('./pwd');
const fs = require('fs');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
        pwd();
        process.stdout.write('\nprompt > '); 
        // process.stdout.write(process.cwd());
    } 
    else if(cmd === 'ls'){
        fs.readdir('./', 'utf8', (err, files) => {
            if (err)
            {
                throw err
            }
            else{
                process.stdout.write('\n' + files.join('\n'))
                process.stdout.write('\nprompt > ');
            }
        })
        process.stdout.write('\nprompt > '); 
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }

    
});
