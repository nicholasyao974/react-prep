# MacOS Computer Setup

This guide is mostly running commands in the Terminal app.

## 1. Configuring ZSH

MacOS ships with ZSH, to double check that you have it installed run this command in your terminal

```sh
which zsh
```

It should log `/bin/zsh` but anything except `zsh not found` is great

Run this command to set `zsh` as your default shell:

```sh
chsh -s $(which zsh)
```

Close and open a new terminal and if you are prompted to make a choice, choose `q`.

### 1.1 Installing oh-my-zsh

We're going to install oh-my-zsh to make your terminal/shell experience a bit more pleasant.

> Oh My Zsh is a delightful, open source, community-driven framework for
> managing your Zsh configuration. It comes bundled with thousands of helpful
> functions, helpers, plugins, themes, and a few things that make you shout...

Copy this command into your terminal

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 1.2 Configuring ZSH

Zsh installs a command `omz` to configure itself. To set your theme to "bira" run:

```sh
omz theme set bira
```

Close your terminal and open a new one.

## 2. Preparing build tools

Instal XCode Command-line Developer Tools

Running this command will show a system prompt, asking you to confirm in order to install the command-line developer tools:

```sh
xcode-select --install
```

## 3. Setup Visual Studio Code

Install Visual Studio Code if it isn't already installed

https://code.visualstudio.com/download

In your terminal, open VS Code with:

```
code .
```

If you see a 'command not found: code' error, try opening VS code by clicking on the Visual Studio Code program in your Applications folder and then open the command pallette (command + shift + p) and run `Shell Command: install 'code' command in PATH`.

### 3.1 Installing extensions

Install the following VS Code extensions

- ESLint
- Prettier
- Live Share
- vscode-icons (optional, but pretty :wink:)
- GitLens (optional)

In your terminal, run:

```shell
code --list-extensions
```

You should see the IDs of each of these extensions logged like this:

```
dbaeumer.vscode-eslint
esbenp.prettier-vscode
ms-vsliveshare.vsliveshare
vscode-icons-team.vscode-icons
eamodio.gitlens
```

### 3.3 Make VS Code your default Git editor

Run this command in your terminal:

```sh
git config --global core.editor "code --wait"
```

## 4. Preparing to use Node

### 4.1 Install NVM

NVM is a tool to install and manage NodeJS versions.

First, check if you have installed nvm before

```sh
type nvm
```

If you see something like `nvm is a shell function from /home/username/.nvm/nvm.sh` you've already installed NVM and can go to section 4.5, if you see a `nvm not found` message then keep reading.

Next, check if you have node installed

```sh
which node
```

If it logs "node not found", that's perfect. We want NVM to manage node and npm on our dev machine.

If it logs anything else e.g. `/usr/bin/node`, you need to uninstall node, this differs depending on
how you installed it. Contact a facilitator if you get stuck

Enter this command into your terminal to download and install nvm:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

This command will initialise NVM when you open a terminal

```sh
cat << 'EOF' >> ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF
```

Now run this command to reload your `~/.zshrc`

```sh
omz reload
```

### 4.2 Installing Node and NPM with NVM

Install the latest "Long Term Support" (i.e. very stable) version of node

Run this command in your terminal:

```sh
nvm install --lts
```

Then, also in your terminal, run:

```sh
nvm alias default node
```

To confirm, run this command. We're expecting something in the `v16.x` range

```sh
nvm current
```
