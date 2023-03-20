# Foreign Exchange Currency App Exercise

## Tools
- Build Tools & Framework: Vite, React, SWC
- Lint & Formatter: ESlint, eslint-airbnb-config, Prettier
- CSS Framework: Semantic UI React

### Prerequisite
1. ```NodeJS LTS (^16)``` is installed.
2. ```Pnpm``` and ```Git``` are installed. You can still use regular ```npm```. But I recommend to give ```pnpm``` a try.

### Instalation & Usage
1. Clone or Fork this repository
2. On your terminal, run
    ```
    $ git clone https://github.com/onpilot/test-fe-sl.git [new-directory-name]

    or
    
    $ git clone git@github.com:onpilot/test-fe-sl.git [new-directory-name]
    ```
3. Install required dependencies. Then run the app.
    ```
    $ pnpm i
    $ pnpm run dev
    ```

### Build Docker Image
- This repository uses github action to create Docker image whenever there is a ```Pull Request``` or a ```Push``` to ```main``` branch to make sure the code won't break the already running app/codebase.

- You can however create and run your own Docker image as container locally (using the provided dockerfile) with these commands:
  ```
  $ docker-compose up --build --no-recreate -d
  ```
  it will run on Port 4173 by default.
