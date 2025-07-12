This is a 53-man roster builder for the 2025 NFL Season for the Jacksonville Jaguars

## Getting Started

First install the dependecies, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tech Stack

- NextJS (App-Router) with Typescript
- Styling with Tailwind and Shadcn-UI
- TRPC for typesafe Backend-Communication (for the sake of demonstration, the data is just pulled from a json. So this can be simply run)
- Zustand for Statemanagement with persist-middleware to keep the state. In case of reloads or something
- biome/ultracite for linting and formatting (My Laptop is to slow for eslint)




## How to plan your Roster?

1. Select Players for every Postion Group (You can just click on players to )
2. You can see the total number of players in the upper right corner
3. Once you are finished, you can view your team in the depth chart 


## ToDos

1. Use a Database for Data, automatically update the Rosters
2. Use Depth-Chart Positions for the Players on the Depth Chart
3. Allow Players to be moved on the Depth-Chart