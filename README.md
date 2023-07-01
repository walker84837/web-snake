# web-snake

A simple snake game implemented in TypeScript, compiled to JavaScript. This project contains a basic implementation of the classic snake game using HTML5 canvas and JavaScript, and CSS for styling.

## Features

- Control the snake's movement using arrow keys.
- Eat food to increase the snake's length and score.
- Avoid colliding with the boundaries or the snake's own body.
- Responsive design that adapts to different screen sizes.
- Randomly generated food position for each game session.

## Known Issues

- The snake may occasionally overlap with itself in certain cases.
- There aren't any pause-resume features.
- The canvas isn't aligned with the snake's dimensions.
- There are no comfort features, like pressing two arrows at the same time, which would move the snake diagonally.
- There is no score & high score counter.
- There is no game-over screen.
- The when moving down or up, the view is moved down or up, making gameplay more uncomfortable.

## What's different?

- This snake game implementation introduces a responsive design, allowing the game to adapt to different screen sizes.
- The game supports arrow key controls for essential controls.
- The project is **originally** written in TypeScript (I plan on rewriting the TypeScript code and recompiling the JS script) for improved code organization and type safety.

## Getting Started

To run the game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/walker84837/web-snake.git`
2. Open the `index.html` file in your web browser.
3. Start playing the snake game!

## Contributing

Contributions are welcome! Feel free to create pull requests and issues if you have any ideas for improvements or bug fixes. Make sure to follow the existing code style and add relevant tests for your changes.

## License

This project is licensed under the [Unlicense](LICENSE).
