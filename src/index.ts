import readline from "readline";
import { Plateau, Position, Rover } from "./entities";
import { DirectionsType } from "./types";

const lines: string[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on("line", (line) => {
  if (line.trim()) {
    lines.push(line);
  }
});

rl.on("close", () => {
  const [plateauDimensionX, plateauDimensionY] = lines[0].split(" ");

  const plateau = new Plateau(Number(plateauDimensionX), Number(plateauDimensionY));

  const rovers = lines
    .slice(1)
    .filter(Boolean)

    .map((line) => {
      const [x, y, direction, command] = line.split(" ");

      return {
        x: Number(x),
        y: Number(y),
        direction: direction as DirectionsType,
        command,
      };
    })
    .map((payload) => {
      const rover = new Rover(
        plateau,
        new Position(payload.x, payload.y),
        payload.direction
      );
      rover.run(payload.command);
      return rover;
    })
    .map((rover) => ({
      position: rover.getPosition(),
      direction: rover.getDirection(),
    }));

  console.log("rovers", rovers);

  process.exit(0);
});
