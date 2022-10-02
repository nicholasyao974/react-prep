# First things first (3hrs)

## Get the tools (1hr)

1. Computer set up

   - **Mac users** [set up](/mac-setup.md)
   - **PC users** [set up](/pc-setup.md)

2. [Download VS code](https://code.visualstudio.com/)

3. [Set Zsh as your default terminal for vsCode](https://www.shanebart.com/set-default-vscode-terminal/)

4. Get some extensions for VS code

   - Open extensions menu (button looks the one below)

     ![extensions button](https://lh4.googleusercontent.com/s3Ic3DZ_t7fXuiSG0SxAYpGZULsif0QPm_jWoTWTDvAT-PohsXBbsuzZwrGnZ3k8uWA=w2400)

   - I reccomend these ones, but feel free to get more!

     > - ESLint
     > - Prettier
     > - (optional) vscode-icons
     > - (optional) Jest Runner
     > - (optional) GitLens - Git supercharged
     > - (optional) A [theme](https://code.visualstudio.com/docs/getstarted/themes) of your choice (I like the default dark+)

     <br/>

5. Visual Studio Code settings

   In VS Code:

   1. Click the Settings cog button in the bottom left and open the Command Palette.
   2. Type `settings.json` into the little search box that appears at the top of your screen.
   3. Click on the `Preferences: Open Settings (JSON)` option to open your `settings.json` config file.

   4. Paste these contents inside the curly brackets:

      ```json
      "editor.detectIndentation": false,
      "editor.insertSpaces": true,
      "editor.tabSize": 2,
      "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
      "editor.bracketPairColorization.enabled": true,
      "editor.guides.bracketPairs":"active",
      "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[javascriptreact]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "prettier.semi": false,
      "prettier.singleQuote": true
      ```

   5. Save your `settings.json` file.

      > Note that each entry in your `settings.json` should end in a comma except for the last one, so if there are some existing entries you'll need to add a comma before pasting the above lines.
      >
      > See [Accessibility of code in VS Code or the terminal](code-accessibility.md) for suggestions on how you might customise your setup for readability.

 <br/>

## Github (2hrs)

In this section you will :

- Make a copy of this repo for your self, aslo called `forking`
- Open the project localy with vscode
- Making a change by `staging` and `commiting` to the local project, and `pushing` it to the remote
- Merging together your new changes with the existing with a `pull request`

The instructions below serve as a primer into the use of github. But as they say, practice makes perfect! Keep making updates to the repo as you tick off tasks/ solve katas (more on that later ;D)

<details>
<summary>1. Why is version control important</summary>

- Watch this [intro](https://www.youtube.com/watch?v=uUuTYDg9XoI&ab_channel=CodemySchool)
  to github
- Watch this more in depth [video series](https://app.pluralsight.com/player?name=6eec00f4-f910-4efc-9698-936948026502&mode=live&clip=0&course=code-school-git-real&author=gregg-pollack) on how to use github
  > You'll notice that in the second video, the guy uses command line tools to manipulate his git. Further down below I will show you how to do the same things through vscode. (Although feel free to try it with the command line tools)
    </details>
    <br/>

<details>
<summary>2. Create your github account</summary>

- [Create an account](https://github.com/)
- Choose a username (preferbly something that won't make you cringe 10 years down the track lol)
- Add a photo
- Log into github in vscode
  - In vs code press the following keys to open the terminal
    ```
    ctrl + shift + ~
    ```
  - Type in the following to set email
    ```
    git config --global user.email "your_email@example.com"
    ```
  - Type in the following to set name
    ```
    git config --global user.name "Your name here"
    ```
    </details>
    <br/>

<details>
<summary>3. Get the repo</summary>

- Click `Create a new Fork`, and make sure to save to your own account

  ![fork](https://lh6.googleusercontent.com/P3WaVUwoWZeOvehjDERRLUZ_f1ybsgVMgzjE2J74OHLsdLOqIa7JvaEFy5cuvP8c3-g=w2400)

- Get the URL

  ![url](https://lh5.googleusercontent.com/cuET3Dlya-I5TRM0wOdDgiZMbC6gfd4GE_cmWcNZozqM1qrH_yEUbjdwhdg2eFns0gc=w2400)

- Open vscode goto `Explorer` and click `Clone Repository`

  ![open](https://lh6.googleusercontent.com/iHqvvsyyqqvaGsFHYCslhNZWh09oYlFvvh4bO-ZtI9IkfL1GD4o_n1Vi5lLRKyGC-Mo=w2400)

- Paste in the URL and press `enter`

  ![paste](https://lh6.googleusercontent.com/_PGp8cMowJcqM1sQxhipML6IywDUuoVRQE5VaZhrfU0Ds5SyEOhK2XXuKk3WW0ofp-M=w2400)

  </details>
  <br/>

<details>
<summary>4. Make your first commit</summary>

- Create a new branch

  ![branch](https://lh6.googleusercontent.com/F6G1Mvz6nvj5DyqTO_kGNOSWFfAVXMmp-xItdCEFYxaEiR84X6TYg2zk1xsLuhbg-aU=w2400)

  _branches are what allows us to all work collaboratively_

- Tick off the first task from the main [readme](../README.md) by making the following change

  ```
  - [x] 1. [Inital Set Up](/1-SetUp/README.md)
  ```

- Stage the change by going to `Source Control` and pressing the `+` next to the file you changed

  ![stage](https://lh6.googleusercontent.com/w1sIrrHabKcyRfZe2IKPgZS7IT5bkdrWDSSJsHEHaLrBWqX27zP0MXeg65SyPlAtHvU=w2400)

- Enter a commit message and press `Commit` button

  ![commit](https://lh4.googleusercontent.com/t3TWGzGr9mKa-GCa643hBKe4vzra0FFDZNMCFJMcNn4KfCYDKqxjPi6sTgDvbdfYRuM=w2400)

  _A good commit message is meaningful and concise. It's what others will use to see what you have done as well as to remind yourself of your work_

- Push the commit to remote. (It might ask you to publish the branch first, just click ok if it does)

  ![push](https://lh6.googleusercontent.com/-ojCbxhpX54_7lgQDCRIFJ-1Q6w8eFkP4laQUCe0lxGEQTUcv1QkxNUNbc_GlayBYRo=w2400)

- Create a new pull request (PR) on github

  - Select your branch from the list of branches (you get to it by clicking on the button similar to the one below), and click `Create Pull Request`

    ![select branch](https://lh5.googleusercontent.com/UwMIYiBhEfGA5xRxO11vg4RMvBQCqxExWOZhLGq-0z1DLoNZU44fTUA26IRSPopObzA=w2400)

  - Click `Create Pull Request`

    ![create pr](https://lh6.googleusercontent.com/h8NZUIqBl2-LMtfrWIh52KlTdlDKYWalIxvziIOknGFFn-68K1kVcmcZr-N2AkdfLec=w2400)

    _Depedning on the teams your on, you may be required to fill in a description as well as the list on the right_

- Review and merge

  ![review and merge](https://lh3.googleusercontent.com/hICRLK6D6YSU0ajmFxgTuK9GwTvk8XAY3q2SvIF2wT6zcWzMYzp1_JY2kxq3JPEjiq8=w2400)

  _Have a look at the `Commits` tab and the `Files changed` tab, these are what your reviewers will be looking at when working apart of a project_

Note: You can push changes straight to your main branch and don't have to raise a PR to make a change. But most projects you'll be apart of will require you to.

</details>
<br/>

## Stretch

These are optional things that you can look into for more indepth knowledge of the covered topics. Something you can do if you would like to be further stretched/ or just have the time to do.

- [Github Skills](https://skills.github.com/)
