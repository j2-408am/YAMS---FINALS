const searchInput = document.getElementById('searchBar');
const optionList = document.getElementById('optionList');
const searchForm = document.getElementById('searchForm');

// This is the list of all the suggested search terms (characters, elements, etc.)
const suggestedSearches = [
    "Hu Tao", "Thoma", "Xiangling", "Bennett", "Diluc",
    "Zhongli", "Noelle", "Itto", "Gorou", "Ningguang",
    "Collei", "Kinich", "Baizhu", "Alhaitham", "Yaoyao",
    "Venti", "Jean", "Sucrose", "Xiao", "Heizou",
    "Ayato", "Kokomi", "Barbara", "Xingqiu", "Tartaglia",
    "Eula", "Kaeya", "Qiqi", "Chongyun", "Wriothesley",
    "Sara", "Lisa", "Raiden", "Yae Miko", "Sethos",
    "Geo", "Dendro", "Electro", "Hydro", "Anemo", "Pyro", "Cryo"
];

// Map character names to their respective HTML page filenames
const characterPages = {
    "Hu Tao": "../../../elements/PYRO/Hu Tao/hutao.html",
    "Thoma": "../../../elements/PYRO/Thoma/thoma.html",
    "Xiangling": "../../../elements/PYRO/Xiangling/xiangling.html",
    "Bennett": "../../../elements/PYRO/Bennett/bennett.html",
    "Diluc": "../../../elements/PYRO/Diluc/diluc.html",
    "Zhongli": "../../../elements/GEO/Zhongli/zhongli.html",
    "Noelle": "../../../elements/GEO/Noelle/noelle.html",
    "Itto": "../../../elements/GEO/Itto/itto.html",
    "Gorou": "../../../elements/GEO/Gorou/gorou.html",
    "Ningguang": "../../../elements/GEO/Ningguang/ningguang.html",
    "Collei": "../../../elements/DENDRO/Collei/collei.html",
    "Kinich": "../../../elements/DENDRO/Kinich/kinich.html",
    "Baizhu": "../../../elements/DENDRO/Baizhu/baizhu.html",
    "Alhaitham": "../../../elements/DENDRO/Alhaitham/alhaitham.html",
    "Yaoyao": "../../../elements/DENDRO/Yaoyao/yaoyao.html",
    "Venti": "../../../elements/ANEMO/Venti/venti.html",
    "Jean": "../../../elements/ANEMO/Jean/jean.html",
    "Sucrose": "../../../elements/ANEMO/Sucrose/sucrose.html",
    "Xiao": "../../../elements/ANEMO/Xiao/xiao.html",
    "Heizou": "../../../elements/ANEMO/Heizou/heizou.html",
    "Ayato": "../../../elements/HYDRO/Ayato/ayato.html",
    "Kokomi": "../../../elements/HYDRO/Kokomi/kokomi.html",
    "Barbara": "../../../elements/HYDRO/Barbara/barbara.html",
    "Xingqiu": "../../../elements/HYDRO/Xingqiu/xingqiu.html",
    "Tartaglia": "../../../elements/HYDRO/Tartaglia/tartaglia.html",
    "Eula": "../../../elements/CRYO/Eula/eula.html",
    "Kaeya": "../../../elements/CRYO/Kaeya/kaeya.html",
    "Qiqi": "../../../elements/CRYO/Qiqi/qiqi.html",
    "Chongyun": "../../../elements/CRYO/Chongyun/chongyun.html",
    "Wriothesley": "../../../elements/CRYO/Wriothesley/wriothesley.html",
    "Sara": "../../../elements/ELECTRO/Sara/sara.html",
    "Lisa": "../../../elements/ELECTRO/Lisa/lisa.html",
    "Raiden": "../../../elements/ELECTRO/Raiden/raiden.html",
    "Yae Miko": "../../../elements/ELECTRO/Yae/yae.html",
    "Sethos": "../../../elements/ELECTRO/Sethos/sethos.html",
    "Geo": "../../elements/geochar.html",
    "Anemo": "../../elements/anemochar.html",
    "Hydro": "../../elements/hydrochar.html",
    "Electro": "../../elements/electrochar.html",
    "Pyro": "../../elements/pyrochar.html",
    "Cryo": "../../elements/cryochar.html",
    "Dendro": "../../elements/dendrochar.html"
};

// For when user types their input in the search bar
searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase();
    optionList.innerHTML = '';

    if (input) {
        const filtered = suggestedSearches.filter(item =>
            item.toLowerCase().startsWith(input)
        );

        filtered.forEach(match => {
            const li = document.createElement('li');
            li.textContent = match;
            li.addEventListener('click', () => {
                searchInput.value = match;
                optionList.innerHTML = '';

                // Redirect to character page if available
                if (characterPages[match]) {
                    window.location.href = characterPages[match];
                }
            });

            optionList.appendChild(li);
        });
    }
});

searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the form from reloading the page

    const input = searchInput.value.trim().toLowerCase(); // Get input and make it lowercase

    // Find a match in characterPages ignoring case
    const match = Object.keys(characterPages).find(name => name.toLowerCase() === input);

    if (match) {
        window.location.href = characterPages[match]; // Go to the correct page
    } else {
        alert("Character not found. Please try another name.");
    }
});