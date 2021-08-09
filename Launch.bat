@echo off
title Launching Modules v.1.1.0
:top
cls
echo This will start to attempt to install a package manager and modules on your system.
echo Tip: Keep pressing Enter untill you see: "Is this OK? (yes)" and press Enter again
    call npm init
    echo Now you wait for the rest of the modules to be installed.
    call npm install discord.js@12.5.3
    call npm install chalk
pause
cls
exit
