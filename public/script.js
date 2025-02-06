function _0x1b6d(_0x39c775,_0x4054d8){const _0x2e24ba=_0x2e24();return _0x1b6d=function(_0x1b6d46,_0x13eba2){_0x1b6d46=_0x1b6d46-0x1ab;let _0x2d59ba=_0x2e24ba[_0x1b6d46];return _0x2d59ba;},_0x1b6d(_0x39c775,_0x4054d8);}(function(_0x43305a,_0x120c00){const _0x5ac43b=_0x1b6d,_0x170c4b=_0x43305a();while(!![]){try{const _0xa02510=parseInt(_0x5ac43b(0x1ab))/0x1+parseInt(_0x5ac43b(0x1af))/0x2*(parseInt(_0x5ac43b(0x1ad))/0x3)+-parseInt(_0x5ac43b(0x1b4))/0x4+parseInt(_0x5ac43b(0x1b0))/0x5+-parseInt(_0x5ac43b(0x1b1))/0x6*(parseInt(_0x5ac43b(0x1b3))/0x7)+-parseInt(_0x5ac43b(0x1b2))/0x8+-parseInt(_0x5ac43b(0x1ac))/0x9;if(_0xa02510===_0x120c00)break;else _0x170c4b['push'](_0x170c4b['shift']());}catch(_0x1641d1){_0x170c4b['push'](_0x170c4b['shift']());}}}(_0x2e24,0x803b0));function _0x2e24(){const _0x1185ad=['2FqfBFH','2287490NfhcMa','6XDvHUv','764256bcgxCX','637357KslvSl','691384ytOrjz','413404kxpoZe','8586000FKfTLe','2903277CEwVhy','log'];_0x2e24=function(){return _0x1185ad;};return _0x2e24();}function testDebug(){const _0x554dba=_0x1b6d;let _0x192938=0xa;debugger;console[_0x554dba(0x1ae)](_0x192938);}testDebug();

const btn = document.getElementById("download");

const validate = (url) => {
    const ytRegex = new RegExp(
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/
    );
    const cleanedURL = url.split("&ab_channel")[0];
    return ytRegex.test(cleanedURL);
}

function _0x7be0(){const _0x5f571c=['2850294xeboFE','5245686kyBTXD','2632532UzbQMq','/ytdl?_0x1b5a=','141248GwAVAW','123488wcSAkE','8xGtADO','4341975pRXEBD','json','807465WDbjzR'];_0x7be0=function(){return _0x5f571c;};return _0x7be0();}function _0x2028(_0xc9d891,_0x27fe8f){const _0x7be069=_0x7be0();return _0x2028=function(_0x20285a,_0x16cf32){_0x20285a=_0x20285a-0x6d;let _0x546f68=_0x7be069[_0x20285a];return _0x546f68;},_0x2028(_0xc9d891,_0x27fe8f);}(function(_0x2bdf23,_0x12f900){const _0x3d8c9f=_0x2028,_0x2c109e=_0x2bdf23();while(!![]){try{const _0xa14b6a=parseInt(_0x3d8c9f(0x6e))/0x1+parseInt(_0x3d8c9f(0x73))/0x2+-parseInt(_0x3d8c9f(0x72))/0x3+-parseInt(_0x3d8c9f(0x6d))/0x4+-parseInt(_0x3d8c9f(0x70))/0x5+parseInt(_0x3d8c9f(0x74))/0x6+-parseInt(_0x3d8c9f(0x75))/0x7*(parseInt(_0x3d8c9f(0x6f))/0x8);if(_0xa14b6a===_0x12f900)break;else _0x2c109e['push'](_0x2c109e['shift']());}catch(_0x137553){_0x2c109e['push'](_0x2c109e['shift']());}}}(_0x7be0,0xd55fa));const fetchData=async _0x11ce32=>{const _0x54fca0=_0x2028,_0x365c6a=await fetch(_0x54fca0(0x76)+_0x11ce32+'&_0x2d7c=mp4');return await _0x365c6a[_0x54fca0(0x71)]();};

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

const showCustomAlert = (message) => {
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert show';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hide');
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 300);
    }, 3000);
};


const sub = async () => {
    const format = document.getElementById("format").value;
    const url = document.getElementById("inp").value;

    if (!url.trim()) {
        showCustomAlert("Please enter a YouTube URL.");
        return;
    }

    if (!validate(url)) {
        showCustomAlert("Invalid YouTube URL");
        return;
    }

    try {
        const _0x36a7b8=_0x24cb;(function(_0x4f4d4d,_0x47dcd9){const _0x46ceea=_0x24cb,_0x5ce8a7=_0x4f4d4d();while(!![]){try{const _0x9b5776=parseInt(_0x46ceea(0x125))/0x1*(-parseInt(_0x46ceea(0x122))/0x2)+parseInt(_0x46ceea(0x123))/0x3+parseInt(_0x46ceea(0x11a))/0x4*(parseInt(_0x46ceea(0x121))/0x5)+parseInt(_0x46ceea(0x11b))/0x6*(-parseInt(_0x46ceea(0x124))/0x7)+parseInt(_0x46ceea(0x11c))/0x8+parseInt(_0x46ceea(0x11d))/0x9*(-parseInt(_0x46ceea(0x120))/0xa)+parseInt(_0x46ceea(0x118))/0xb*(parseInt(_0x46ceea(0x11e))/0xc);if(_0x9b5776===_0x47dcd9)break;else _0x5ce8a7['push'](_0x5ce8a7['shift']());}catch(_0x99bd03){_0x5ce8a7['push'](_0x5ce8a7['shift']());}}}(_0x1c62,0xd76a5));function _0x24cb(_0x3d1c0c,_0x3f5fc8){const _0x1c6227=_0x1c62();return _0x24cb=function(_0x24cbd6,_0x13623f){_0x24cbd6=_0x24cbd6-0x117;let _0x58c53b=_0x1c6227[_0x24cbd6];return _0x58c53b;},_0x24cb(_0x3d1c0c,_0x3f5fc8);}const response=await fetch(_0x36a7b8(0x119)+url+_0x36a7b8(0x117)+format),data=await response[_0x36a7b8(0x11f)]();function _0x1c62(){const _0x2172a1=['810EFLdKT','2062080UKGPyL','7758QGAvne','7670016BcqEWl','json','19830ImhfHw','6581035GlIWVl','14OxdaNZ','4402053Updhor','78386kxiTHQ','30891KBaWpo','&_0x2d7c=','22YYAIkH','/ytdl?_0x1b5a=','4qIYSGD'];_0x1c62=function(){return _0x2172a1;};return _0x1c62();}

        if (data.url || data.link) {
            window.location.href = data.url || data.link;
        } else {
            showCustomAlert("Download link not found.");
        }
    } catch (error) {
        showCustomAlert("Error fetching download link.");
    }
};


document.getElementById('inp').addEventListener('keyup', async (e) => {
    const url = e.target.value;
    if (!validate(url)) return;
    document.getElementById('details').innerHTML = "Loading...";
    const data = await fetchData(url);
    const video = data;
    document.getElementById('details').innerHTML = `
        <a target="_blank" href="${video.url || video.link}"
        class="flex flex-col items-center rounded-lg border shadow-md md:flex-row border-gray-700 bg-[#ffffff0d]">
        <img class="pointer object-cover w-full h-96 my-2 mx-6 lg:mx-2 rounded-lg h-auto w-[94%] lg:w-64"
        src="${video.thumbHigh}" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">${video.title}</h5>
            <p class="mb-3 font-normal text-gray-200">${video.description}</p>
            <p class="mb-3 font-normal text-gray-200">Duration: ${video.duration}</p>
            <p class="mb-3 font-normal text-gray-200">Channel: ${video.channelTitle}</p>
            <p class="mb-3 font-normal text-gray-200">Views: ${formatter.format(video.viewCount)}</p>
            <p class="mb-3 font-normal text-gray-200">Published: ${video.publishedAt}</p>
        </div>
        </a>`;
});


btn.addEventListener("click", sub);
