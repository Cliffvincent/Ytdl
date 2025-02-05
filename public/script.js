const btn = document.getElementById("download");

const validate = (url) => {
    const ytRegex = new RegExp(
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/
    );
    const cleanedURL = url.split("&ab_channel")[0];
    return ytRegex.test(cleanedURL);
}

const fetchData = async (url) => {
    const response = await fetch(`/info?url=${url}`);
    return await response.json();
};

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
];

const timeSince = (date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
}

const sub = async () => {
    const format = document.getElementById("format").value;
    const url = document.getElementById("inp").value;

    if (!validate(url)) return alert("Invalid YouTube URL");

    try {
        const response = await fetch(`/ytdl?url=${url}&format=${format}`);
        const data = await response.json();

        if (data.downloadUrl) {
            window.location.href = data.downloadUrl;
        } else {
            alert("Download link not found.");
        }
    } catch (error) {
        alert("Error fetching download link.");
    }
};


document.getElementById('inp').addEventListener('keyup', async (e) => {
    const url = e.target.value;
    if (!validate(url)) return;
    document.getElementById('details').innerHTML = "Loading...";
    const data = await fetchData(url);
    const video = data.items[0];
    document.getElementById('details').innerHTML = `
        <a target="_blank" href="${video.url}"
        class="flex flex-col items-center rounded-lg border shadow-md md:flex-row border-gray-700 bg-[#ffffff0d]">
        <img class="pointer object-cover w-full h-96 my-2 mx-6 lg:mx-2 rounded-lg h-auto w-[94%] lg:w-64"
        src="${video.thumbnail}" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">${video.title}</h5>
            <p class="mb-3 font-normal text-gray-200">${video.duration}</p>
        </div>
        </a>`;
});

btn.addEventListener("click", sub);
