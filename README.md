# Mass DM

![image](https://user-images.githubusercontent.com/71920969/119238368-fbfb1c00-bb39-11eb-9380-a9962604ec8a.png)

**Description:** Tool which messages everyone in a Discord server (If user has DM's off they cannot be messaged).

**Features:**

- 2 New DM Modes (`Normal` & `Timeout`).
- Bypassing/Avoiding spam flags from Discord.

- Normal Mode:
  - DM Speed: Attempts to dm in under 1 second between each user.
- Timeout Mode:
  - DM Speed: 3 - 9 second timeouts between each DM.
  - Chance of bot flagging: Very Low.

Must have [Node.JS LTS Version](https://nodejs.org/en/) installed & and some sort of text editor.
Put your bot token in the `settings.json`.

**Example: Token**
```
{
    "token": "NzYzNjM5ODE2Mzg1JKaykuk.X36o_w.LkrJSMHlUIpj_p93Xo9agfEg50k"
}
```

**Example: Message**
```
{
    "token": "NzYzNjM5ODE2Mzg1JKaykuk.X36o_w.LkrJSMHlUIpj_p93Xo9agfEg50k",
    "message": "Test\nTest\n\ntest"
}
```

**Result:**

![Result](https://media.discordapp.net/attachments/790498161533517835/864837793510064138/unknown.png)

**Setup:**
1. Run `Launch.bat` file to install required modules.
2. Run `run.bat` file to start the programme.

**Note:** All your bots intents must be toggled on. How to do so? `Dev Portal > Bot > Privileged Gateway Intents` **(toggle both intents on)**

**Permission Required:** `Administrator`.

## Disclaimer: 
This is tool was made for educational purposes and proof of concepts. I'm not accountable for any unlawful, unprecedented action and any violation of ToS administered by a third party.

If normal mode was used you are subject to your bot being flagged by discord. How to solve this issue:
   - Go call for an [appeal](https://support.discord.com/hc/en-us/requests/new?ticket_form_id=360000029731) and selecting "Appeal an Action Trust and Safety took on my bot" as the Report Type for your bot so the bot is removed from being flagged.
   - Just make a new bot.

Unverified bots cannot Mass DM servers over 1k+ members. Make sure your bot is verified if you attempt to Mass DM servers over 1k members.

## Contact Me

﹒[Discord](https://discord.com/users/358310460187082763)
﹒[Discord Server](https://discord.gg/4nSYqZ8KAA)
﹒[Telegram](https://t.me/clairvoyant7teen)
﹒[Steam](https://steamcommunity.com/id/seven777teen/)
