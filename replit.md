# YouTube Downloader

## Overview

This project is a Node.js and Express web app that serves a YouTube downloader interface from `public/`. The `/ytdl` endpoint uses the existing external conversion services to return MP3 or MP4 download information.

## Running on Replit

- Workflow: `Start application`
- Command: `PORT=5000 npm start`
- Preview port: `5000`
- Install dependencies with `npm install` when setting up a fresh environment.

The app does not currently require a project secret. Its download endpoint depends on third-party services, so those services must be reachable for downloads to complete.

## User preferences

- Keep the existing animated background and `public/bg.png` background styling unchanged when making UI updates unless explicitly asked otherwise.