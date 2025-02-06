/** const express = require("express");
const axios = require("axios");
const path = require("path");
const cheerio = require("cheerio");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/ytdl", async (req, res) => {
    const { url, format } = req.query;

 if (!url.startsWith("https://youtu.be") && !url.startsWith("https://www.youtube.com")  || !format) {
    return res.status(400).json({ error: "Please provide a valid YouTube link to download and format mp3 or mp4" });
    } 

    try { **/

/**
        const e = await axios.get("https://api.mp3youtube.cc/v2/sanity/key", {
            headers: {
                "authority": "api.mp3youtube.cc",
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
                "content-type": "application/x-www-form-urlencoded",
                "key": e.data.key,
                "origin": "https://iframe.y2meta-uk.com",
                "referer": "https://iframe.y2meta-uk.com/",
                "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
            }
        });

        const v = g.data.url;
        const videoResponse = await axios.get(v, {
            responseType: "stream",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
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
            }
        });

        res.json({ downloadUrl: v }); **/

 /**     const d = await axios.post(
            'https://www.mediamister.com/get_youtube_video',
            new URLSearchParams({ url: url }).toString(),
      {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": "https://www.mediamister.com",
                "Referer": "https://www.mediamister.com/free-youtube-video-downloader"
              },
            }
        );

        const $ = cheerio.load(d.data);

        const title = $("h2").first().text().trim();
        const thumbnail = $(".yt_thumb img").attr("src");

        let downloadUrl = null;

          if (format === 'mp4') {
            downloadUrl = $('.yt_format:contains("Download Video") a').eq(3).attr('href');
        } else if (format === 'mp3') {
            downloadUrl = $('.yt_format:contains("Download Audio") a').eq(6).attr('href');
          }

       if (!downloadUrl) {
            return res.status(404).json({ error: `No ${format} download link found` });
        } 
    
        res.json({title, thumbnail, downloadUrl});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/info", async (req, res) => {
    try {
        const url = req.query.url;
        if (!url) return res.status(400).json({ error: "URL is required" });

        let data = JSON.stringify({ query: url });

        let config = {
            method: "POST",
            url: "https://mp3juice.at/api/yt-data",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "sec-ch-ua-platform": '"Android"',
                "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                "dnt": "1",
                "sec-ch-ua-mobile": "?1",
                "origin": "https://mp3juice.at",
                "sec-fetch-site": "same-origin",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "referer": "https://mp3juice.at/",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8,pt;q=0.7",
                "priority": "u=1, i"
            },
            data: data
        };

        const response = await axios.request(config);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); **/

const _0x1a3b = require('express');
const _0x2c5e = require('axios');
const _0xgh = require("path");

const _0x3e7f = _0x1a3b();

_0x3e7f.use(_0x1a3b.static("public"));

_0x3e7f.get("/", (_0x4a9c, _0x5bd1) => {
    _0x5bd1.sendFile(_0xgh.join(__dirname, "public", "index.html"));
});

_0x3e7f.get('/ytdl', async (_0x4a9c, _0x5bd1) => {
  const { _0x1b5a, _0x2d7c } = _0x4a9c.query;

  if (!_0x1b5a || !_0x2d7c) {
    return _0x5bd1.status(400).json({ error: 'Missing URL and format parameter' });
  }

  try {
    const _0x6ef2 = await _0x2c5e.get(`https://api.flvto.online/@api/search/YouTube/${_0x1b5a}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'sec-ch-ua-platform': '"Android"',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'dnt': '1',
        'sec-ch-ua-mobile': '?1',
        'origin': 'https://ytmp4.is',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://ytmp4.is/',
        'accept-language': 'en-US,en;q=0.9,vi;q=0.8,pt;q=0.7,fr;q=0.6',
        'priority': 'u=1, i'
      }
    });

    const _0x7f9d = _0x6ef2.data.items[0];
    const _0x8b1e = JSON.stringify({
      id: _0x7f9d.id,
      fileType: _0x2d7c,
    });

    const _0x9c3f = {
      method: 'POST',
      url: 'https://ht.flvto.online/converter',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Content-Type': 'application/json',
        'sec-ch-ua-platform': '"Android"',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        'dnt': '1',
        'sec-ch-ua-mobile': '?1',
        'origin': 'https://ht.flvto.online',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': `https://ht.flvto.online/button?url=${_0x1b5a}&fileType=${_0x2d7c}&el=189`,
        'accept-language': 'en-US,en;q=0.9,vi;q=0.8,pt;q=0.7,fr;q=0.6',
        'priority': 'u=1, i'
      },
      data: _0x8b1e
    };

    const _0xad5f = await _0x2c5e.request(_0x9c3f);

    const _0xbb7e = {
      id: _0x7f9d.id,
      title: _0x7f9d.title,
      description: _0x7f9d.description,
      tags: _0x7f9d.tags,
      thumbDefault: _0x7f9d.thumbDefault,
      thumbMedium: _0x7f9d.thumbMedium,
      thumbHigh: _0x7f9d.thumbHigh,
      channelTitle: _0x7f9d.channelTitle,
      channelId: _0x7f9d.channelId,
      publishedAt: _0x7f9d.publishedAt,
      duration: _0x7f9d.duration,
      viewCount: _0x7f9d.viewCount,
      ...(_0x2d7c === 'mp4' ? _0xad5f.data.formats[0] : { link: _0xad5f.data.link, filesize: _0xad5f.data.filesize, progress: _0xad5f.data.progress, duration: _0xad5f.data.duration, status: _0xad5f.data.status, msg: _0xad5f.data.msg })
    };

    _0x5bd1.json(_0xbb7e);
  } catch (_0xcdef) {
    _0x5bd1.status(500).json({ error: _0xcdef.response?.data || _0xcdef.message });
  }
});

const _0xdedf = process.env.PORT || 3000;
_0x3e7f.listen(_0xdedf, () => {
  console.log(`Server is running on port ${_0xdedf}`);
});


