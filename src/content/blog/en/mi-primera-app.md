---
title: "My first app, or how to build a house without knowing how to lay a brick"
date: 2026-06-18
tag: "Claude Code"
excerpt: "How I built an app to organise my sheet music without knowing how to code: by talking to Claude in my own language and letting the AI lay the bricks."
lang: en
image: /images/blog-mi-primera-app.png
draft: false
---

It all started with music, as so often. I play as a hobby, just enough to enjoy it and enough not to show off in front of anyone. The problem wasn't playing: it was the mess. Sheet music everywhere, a notebook where I jotted down which pieces I was practising, another where I noted what was working and what wasn't, and a drawer full of papers I didn't even bother opening anymore. I had my music scattered across half the house and my head the same.

I needed something better. I needed an app.

The problem, of course, is that programming is something I've now left a bit behind. So for years "building myself an app" had been one of those phrases you say at dinners, alongside "this summer I'm getting in shape" or "one of these days I'll tidy the garage". Phrases not to keep.

The difference, this time, is that I had a builder who works for free and doesn't complain.

## First, the blueprint: talk to Claude before touching anything

The first thing I learned is that you don't start the house from the roof. Nor from the foundations, really. You start from the blueprint.

Before opening anything technical, I sat down to talk to Claude in the chat, like someone talking to an architect over a coffee. I told it what I wanted: a simple application to organise my sheet music and keep track of what I was practising. I said I'm not a programmer, that I was going to use Claude Code to build it and that I needed a well-written brief —the prompt— to get off to a good start.

I didn't ask it to build the app for me. I asked it to help me explain what I wanted without messing up.

And there something curious happened. Claude asked me questions. For which devices, what data I wanted to store, whether this would be on the phone or the computer. By answering a polite stranger, I discovered that I myself had no idea what I wanted until I was forced to say it out loud.

I came out of that conversation with a one-page brief. Ordered, clear, with everything a builder needs to know before setting foot on the site.

The blueprint was ready. The build was missing.

## The build: open the project and hand Claude Code the blueprint

This is where Claude Code comes in, which is the tool that actually puts up the walls. I opened a new project, an empty folder, the closest thing to a building plot you'll ever see, and I pasted in the brief I'd prepared in the chat.

From there, you no longer talk to it like an architect. You talk to it like the site foreman. And here's the most important piece of advice I can give you, the one that would have saved me a couple of scares: work in an orderly way.

I told it things in blocks, slowly. First the general idea. Then what data I wanted to store: the piece, the composer, the difficulty, the days I'd practised it, my notes from each session. Then the processes: how to add a new score, how to log a rehearsal, how to mark a piece as mastered. Later the flows, which is the fancy word for "how you move around inside the app". And finally, the least important thing and the one we all like most, the look. The colour, the buttons, that it looked decent on the phone because I was going to use it with the instrument in front of me, not sitting at a desk.

I didn't dump it all at once. That's what I did at the start, and it's like giving a builder the instructions for the whole house by shouting them from the street. He gets lost, you get lost, and you both end up putting up a wall where the door was supposed to go.

One thing at a time. Like when you learn a piece: bar by bar, without trying to play the whole thing on the first day.

## The storeroom: the database in Supabase

The time came to store things somewhere. Because an app that remembers nothing is like me at eight in the morning: very willing, but with no useful information.

That's what Supabase is for, which is where the database lives. The storeroom of the house, basically. The room where everything you write is kept so it's still there when you close the door and leave. My scores, my sessions, my notes: all safely stored.

But I told Claude Code to take me by the hand, step by step, taking nothing for granted. And it did. Where to click, what table to create, what name to give each column. I went along executing like someone following grandma's recipe: without fully understanding the chemistry, but trusting that the cake would rise.

The cake rose. The app, at last, remembered everything I wasn't able to remember.

## The safe and the door to the street: GitHub and Vercel

Two things were left, and both sound more complicated than they are.

The first, putting the code somewhere safe. For that I uploaded everything to GitHub, which is the safe where you keep the finished work: a secure, orderly copy you can always go back to if one day you decide to knock down a wall and regret it. Five minutes. Claude Code dictated the steps to me.

The second, opening the door. Because a beautiful house with the shutter down is no use to anyone. I connected the project to Vercel and, almost without realising it, my app stopped living only on my computer and got its own address on the internet. Production, those in the know call it. I call it the day I could open it from my phone, with the instrument in my hands, and see at a glance what I needed to rehearse.

I inaugurated it on my own. No red ribbon, no speeches. But I inaugurated it.

## What I really built

I'm not going to fool you by saying I've now upgraded my skill as a programmer. I'm not one, nor do I intend to be; besides, I no longer need to, I have Claude. I still don't know how to lay a brick.

Well-applied AI frees you from the task and increases your focus on the goal and the result.

But I built a house. Small, with its leaks, made to measure and to solve something that was only mine: the mess of a music lover who wanted to enjoy playing and not waste half an afternoon looking for the score. I made it in an afternoon and a bit, talking to a machine in my own language, without having ever touched a line of code in my life.

The hard part wasn't the code, it was being clear about the goal. And that one, would you believe it, I did know.
