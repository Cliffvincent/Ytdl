const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/ytdl", async (req, res) => {
    const { url, format } = req.query;

    if (!url.startsWith("https://youtu.be") && !url.startsWith("https://www.youtube.com")) {
        return res.status(400).json({ error: "Please provide a valid YouTube link to download" });
    }

    try {
        const e = await axios.get("https://api.mp3youtube.cc/v2/sanity/key", {
            headers: {
                "authority": "api.mp3youtube.cc",
                "accept": "*/*",
                "content-type": "application/json",
                "origin": "https://iframe.y2meta-uk.com",
                "referer": "https://iframe.y2meta-uk.com/",
                "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
            }
        });

        const requestBody = `link=${encodeURIComponent(url)}&format=${format}&audioBitrate=128&videoQuality=360&vCodec=h264`;
        const g = await axios.post("https://api.mp3youtube.cc/v2/converter", requestBody, {
            headers: {
                "authority": "api.mp3youtube.cc",
                "accept": "*/*",
                "content-type": "application/x-www-form-urlencoded",
                "key": e.data.key,
                "origin": "https://iframe.y2meta-uk.com",
                "referer": "https://iframe.y2meta-uk.com/",
                "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
            }
        });

const v = g.data.url;
        const url = await axios.get(v, { responseType: "stream", headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "sec-ch-ua": '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": '"Android"',
            "dnt": "1",
            "upgrade-insecure-requests": "1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "navigate",
            "sec-fetch-dest": "iframe",
            "referer": "https://iframe.y2meta-uk.com/",
            "accept-language": "en-US,en;q=0.9,vi;q=0.8,pt;q=0.7,fr;q=0.6",
            "priority": "u=0, i"
        }});


        res.json({ downloadUrl: v});
    } catch (error) {
        res.status(500).json({ error: error});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});