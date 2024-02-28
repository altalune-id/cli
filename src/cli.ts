import {Command} from 'commander';
import {generate} from "random-words";

import {version} from './version';

const program = new Command();

program
    .name('@altalune/cli')
    .description('CLI tool for altalune utilities')
    .version(version);

program
    .command('hello-world')
    .description('return random generated words')
    .action(function() {
        const [words] = generate({
            exactly: 1,
            wordsPerString: 5
        });

        console.info(words);
    });

program.parse();
