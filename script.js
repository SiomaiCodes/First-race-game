console.log('Welcome to the race game');
        let checkpoint = 0;
        let running = true;
        while (running) {
            const num1 = Math.floor(Math.random() * 100) + 1;
            const num2 = Math.floor(Math.random() * 100) + 1;
            let question = num1 + num2;
            let guess = prompt("What is " + num1 + " + " + num2 + "?");
            guess = Number(guess);
            if (isNaN(guess)) {
                alert('Please enter a valid number');
            } else if (guess !== question) {
                alert('Incorrect! Try again.');
            } else {
                // checkpoint
                checkpoint += 10;
                alert(`Correct!, you reached checkpoint: ${checkpoint}`);
                running = true;
            }
            if (checkpoint === 50) {
                alert('Halfway there!');
            } else if (checkpoint === 100) {
                alert('Win!');
                running = false; //end game
            }
        }

