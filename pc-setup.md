# Windows 10 Computer Setup

Instructions to help you set up the Linux subsystem on Windows 10.

We'll be doing all our work inside a Windows Subsystem for Linux (WSL) environment. This means you'll need to work through all the setup steps below, even if you've already been using node, VS Code, etc. in your Windows environment.

There is also a video walkthrough of the setup [here](https://youtu.be/vMOvoB20flI) that you can refer to if you get stuck on any of the steps outlined below.

> **Note: this file has been adapted and not everything from the video will apply**

<details>
<summary><b>1. Installing WSL</b></summary>
<br/>
1.1. Go to the start Menu and type `Check for updates`. Make sure that your Windows
     has the most recent updates (Optional as well as Recommended ones, but you don't
     need to upgrade to Windows 11 if you don't want to).

- Press the Windows key and type `winver` and press Enter
- Confirm that your Windows is version 2004 and higher (Build 19041 and higher) or any Windows 11 version

  1.2. Go to the Start Menu and open Windows Powershell as an Administrator

- Put this command in Powershell `wsl --install` and hit enter
- Restart your computer

  1.3. Open Ubuntu from the Start Menu and let it finish installation:

- When prompted, enter a username (e.g. your first name) and a password - this is the username that Linux will run as by default
- **IMPORTANT:** When you type in your password, you will notice nothing happens, this is a feature in Linux for security purposes.
- For Full Name, Room Number, etc. you can hit Enter to leave them blank
- If it says installing for more than 5 minutes, close the Ubuntu window and re-open it
</details>

<details>
<summary><b>2. Configure your Windows Terminal</b></summary>
<br/>
2.1. Open your Windows Terminal application (find this by typing `Windows Terminal` in the Start menu, it is NOT the same as Powershell) 
     and select the dropdown next to the new tab button then select Settings, then "Open JSON file"

Scroll down until you find this section:

```json
        {
            "guid": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
            "hidden": false,
            "name": "Ubuntu-20.04",
            "source": "Windows.Terminal.Wsl"
        },
```

Copy the value of the "guid" field, then paste it in to the `defaultProfile` property near the top of the file.

```json
"defaultProfile": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
```

2.2. Next, add these properties to the Ubuntu section (the same section you got the "guid" from in the previous step)

```json
"colorScheme": "One Half Dark",
"startingDirectory": "\\\\wsl$\\Ubuntu20.04LTS\\home\\[your_Linux_username]"
```

2.3. Once you have pasted it in, your Linux section should look like this (but instead of `maia`, it would say YOUR username):

```json
        {
            "guid": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
            "hidden": false,
            "name": "Ubuntu20.04LTS",
            "source": "Windows.Terminal.Wsl",
            "colorScheme": "One Half Dark",
            "startingDirectory": "\\\\wsl$\\Ubuntu20.04LTS\\home\\maia"
        },
```

Note that the `"source": "Windows.Terminal.Wsl",` line needs a comma at the end of it.

If you see a 'network name cannot be found' error when you load windows terminal double check that the "name" part of the json (ie "Ubuntu20.04LTS" in the above example) exactly matches the bit between `wsl$\\[exact-name-match-here]\\home` in the "startingDirectory" part.

</details>

<details>
<summary><b>3. Installing linux software</b></summary>
<br/>
To install most of the linux software you need, we'll run three commands.

3.1 This one updates your package sources:

```sh
sudo apt-get update
```

3.2. This will install all the packages we need (it might take a while):

```sh
sudo apt-get install build-essential python-is-python3 zsh
```

3.3. Finally, this will set `zsh` as your default shell:

```sh
chsh -s $(which zsh)
```

If those all succeeded, you can restart your Ubuntu terminal, and you should be in `zsh`

If you get a page full of info about "This is the Z Shell configuration for new users...", press q (Quit and do nothing)

3.4. Installing oh-my-zsh

We're going to install oh-my-zsh to make your terminal/shell experience a bit more pleasant.

> Oh My Zsh is a delightful, open source, community-driven framework for
> managing your Zsh configuration. It comes bundled with thousands of helpful
> functions, helpers, plugins, themes, and a few things that make you shout...

Enter this command into your Ubuntu terminal (note that it's one long line, even if it displays as two lines on the page where you're reading this):

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

3.5. Configuring ZSH

Zsh installs a command `omz` to configure itself. To set your theme to "bira" run:

```sh
omz theme set bira
```

For the remainder of these setup instructions, and at the start of Bootcamp, when we say "terminal" we mean this Ubuntu terminal, i.e. an Ubuntu tab within the Windows Terminal application -- you'll know it's right if you can see the penguin!

At the bottom of this file we'll tell you how to run a terminal within VS Code but please use the Ubuntu terminal for these setup instructions and for any `npm install` actions throughout Bootcamp, and please don't use Git Bash for any Bootcamp work

If the prompt in your terminal is now a little arrow and a tilde (~), instead of "yourname@...", that's OK (you'll change it again in a later step)

3.6. Starting in the right directory

Restart your terminal.

If your terminal is opening at a `/` (or `[user]@machineId /`) prompt instead of a `~` (or `[user]@machineId ~`) prompt, this means the terminal
is opening at root and we need to change that.

To make it open at home (`~`) instead. We're going to run this snippet to add a couple more lines to the bottom of your `~/.zshrc` file.

```sh
cat << 'EOF' >> ~/.zshrc
if [[ $(pwd) == / ]]; then
    cd ~
fi
EOF
```

Restart your terminal.

You should now be at the home directory `~`.

</details>    
     
<details>      
<summary><b>4. Install NVM</b></summary>
<br/>
NVM is a tool to install and manage NodeJS versions.

4.1. Check if you have installed nvm before

```sh
type nvm
```

If you see something like `nvm is a shell function from /home/username/.nvm/nvm.sh` you've already installed NVM and can go to section 6.
If you see a `nvm not found` message then keep reading.

4.2. First, check if you have node installed

```sh
which node
```

If that logs a path in "Program Files", you've installed NodeJS at some point with the official installer.
Open Add/Remove Programs from the Start Menu and uninstall NodeJS.

If it logs "node not found", that's perfect. We want NVM to manage node and npm on our dev machine.

4.3. Enter this command into your terminal to download and install nvm:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This command will initialise NVM when you open a terminal

```sh
cat << 'EOF' >> ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF
```

4.4. Now run this command to reload your `~/.zshrc`

```sh
omz reload
```

</details>
    
<details>    
<summary><b>5. Installing Node and NPM with NVM</b></summary>
<br/>
Install the latest "Long Term Support" (i.e. very stable) version of node

5.1. Run this command in your terminal:

```sh
nvm install --lts
```

5.2. Then, also in your terminal, run:

```sh
nvm alias default node
```

5.3. To confirm, run this command. We're expecting something in the `v16.x` range

```sh
nvm current
```

</details>

<details>
<summary><b>6. Configure WSL</b></summary>
<br/>
6.1. Limit your WSL virtual machine so that it can't consume too much RAM

- In File Explorer (aka "Windows Explorer" or "This PC"), go to `C:\Users\[your_Windows_username]`
- On the `View` tab, tick the checkboxes for `File name extensions` and `Hidden items`
- Right-click in your `C:\Users\[your_Windows_username]` folder and choose `New` then `Text Document`; this will open up Notepad
- Rename the new file as `.wslconfig`, making sure that it does NOT have an extra `.txt` extension
- Paste this text into body of the `.wslconfig` file, and then save it:

```
[wsl2]
memory=2GB # Limits VM memory in WSL2 to 2 GB
processors=2 # Makes the WSL2 VM use two virtual processors
```

6.2. Restart your PC

</details>
