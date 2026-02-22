document.addEventListener('DOMContentLoaded', () => {
    // Data for characters (8 characters)
    // Data for characters (8 characters)
    const characterData = {
        1: {
            name: "焔　流星", jpName: "ほむら　りゅうせい",
            heroName: "ブレイズ", weapon: "炎", gender: "男", birthday: "1月5日", height: "175cm",
            school: "英紅高校", grade: "2-A", hobby: "トレーニング", specialty: "スポーツ全般",
            likes: "鍋、からあげ", dislikes: "ピーマン", weakness: "ジェットコースター",
            desc: "明るく優しく正義感が強すぎるヒーロー気質の少年。人の役に立つことでしか自分の価値を見出せず、電車のトラウマを抱えている。", stats: [15, 85, 60], color: "#f54842",
            image: "assets/ryusei.png", thumb: "assets/ryusei.png"
        },
        2: {
            name: "愛染　藍那", jpName: "あいぜん　あいな",
            heroName: "リーベ", weapon: "撃ち抜いた相手を惚れさせる", gender: "女", birthday: "9月5日", height: "150cm",
            school: "英紅高校", grade: "2-A", hobby: "恋愛小説を読む", specialty: "細かい作業",
            likes: "イチゴ", dislikes: "キノコ類", weakness: "ホラー系",
            desc: "感受性が強く誰かの痛みに深く共鳴する優しい少女。「重い」と拒絶された過去から、流星の役に立つことで存在意義を探している。", stats: [35, 40, 30], color: "#ff80df",
            image: "assets/aina.png", thumb: "assets/aina.png"
        },
        3: {
            name: "霧氷　雪景", jpName: "むひょう　ゆきかげ",
            heroName: "フロスト", weapon: "氷", gender: "男", birthday: "12月22日", height: "186cm",
            school: "英紅高校", grade: "1-C", hobby: "ゲーム", specialty: "",
            likes: "アイス", dislikes: "辛いもの", weakness: "整理整頓",
            desc: "不器用で自己評価が低いが、今はよく喋るおふざけ屋。悪人の親を持った罪悪感を抱えつつ、流星の平穏を生きる前提にしている。", stats: [40, 75, 70], color: "#86afb8",
            image: "assets/yukikage.png", thumb: "assets/yukikage.png"
        },
        4: {
            name: "稲妻　雷", jpName: "いなづま　らい",
            heroName: "スパーク", weapon: "電気", gender: "女", birthday: "11月10日", height: "152cm",
            school: "英紅高校", grade: "1-B", hobby: "ゲーム", specialty: "電子機器の扱い",
            likes: "エナドリ", dislikes: "食べづらいもの", weakness: "無茶ぶり",
            desc: "臆病で自己否定が強いコミュ障気味の少女。間違いを恐れながらも、ゲームだけは自分の居場所だと思っている。", stats: [10, 83, 20], color: "#e8d454",
            image: "assets/rai.png", thumb: "assets/rai.png"
        },
        5: {
            name: "観音寺　天音", jpName: "かんのんじ　あまね",
            heroName: "グルーヴ", weapon: "超音波", gender: "男", birthday: "10月17日", height: "178cm",
            school: "英紅高校", grade: "2-A", hobby: "ベース演奏", specialty: "音感がある",
            likes: "オムライス", dislikes: "生クリーム", weakness: "大きい音",
            desc: "無口で自己肯定感が極端に低い繊細な少年。いじめと家庭崩壊の傷から、自分が生まれたこと自体を否定している。", stats: [5, 80, 15], color: "#99d8ff",
            image: "assets/amane.png", thumb: "assets/amane.png"
        },
        6: {
            name: "美紐　りぼん", jpName: "みみょう　りぼん",
            heroName: "レース", weapon: "自由自在なリボン", gender: "女", birthday: "2月24日", height: "153cm",
            school: "英紅高校", grade: "1-B", hobby: "可愛い服収集", specialty: "メイク",
            likes: "マカロン", dislikes: "油が多いもの", weakness: "",
            desc: "明るく努力家で優しい頑張り屋。「可愛くなきゃ価値がない」という思い込みに縛られている。", stats: [55, 50, 65], color: "#ff99d1",
            image: "assets/ribon.png", thumb: "assets/ribon.png"
        },
        7: {
            name: "来栖　緋彩", jpName: "くるす　ひいろ",
            heroName: "ミラージュ", weapon: "瞬間移動", gender: "男", birthday: "8月4日", height: "176cm",
            school: "英紅高校", grade: "1-C", hobby: "SNS漁り", specialty: "SNS運用",
            likes: "映えスイーツ", dislikes: "ごぼう", weakness: "",
            desc: "陽キャで承認欲求が強い目立ちたがり。成果でしか愛されなかったため、常に「見られる自分」を演じ続けている。", stats: [45, 60, 85], color: "#ff7d99",
            image: "assets/hiiro.png", thumb: "assets/hiiro.png"
        },
        8: {
            name: "綿谷　柚乃", jpName: "わたや　ゆの",
            heroName: "バブル", weapon: "シャボン生成", gender: "女", birthday: "5月23日", height: "154cm",
            school: "英紅高校", grade: "1-B", hobby: "釣り", specialty: "家事",
            likes: "フライドポテト", dislikes: "ナッツ系", weakness: "きつめの匂い",
            desc: "ゆるく自由に見えるが境界線の薄い少女。壊れないために自分の意思を手放している。", stats: [20, 45, 70], color: "#ffd17d",
            image: "assets/yuno.png", thumb: "assets/yuno.png"
        },
        9: {
            name: "星月　一輝", jpName: "ほしつき　いっき",
            heroName: "ステラ", weapon: "魅了", gender: "男", birthday: "3月30日", height: "172cm",
            school: "蒼雄高校", grade: "2-G", hobby: "", specialty: "表情管理",
            likes: "カツ丼", dislikes: "トリュフ", weakness: "高いところ",
            desc: "キザで明るく振る舞うが本当は弱いアイドル。母のために本意ではない自分を演じている。", stats: [40, 85, 35], color: "#db99ff",
            image: "assets/ikki.png", thumb: "assets/ikki.png"
        },
        10: {
            name: "日晴　留萌", jpName: "ひばり　るも",
            heroName: "ディーバ", weapon: "気配を消す", gender: "女", birthday: "7月10日", height: "156cm",
            school: "蒼雄高校", grade: "2-G", hobby: "映画鑑賞", specialty: "体が柔らかい",
            likes: "ラーメン", dislikes: "イカ", weakness: "恋愛モノの演技",
            desc: "サバサバして口は悪いが面倒見の良い努力家。実力主義の世界で焦りと闘い続けている。", stats: [85, 70, 60], color: "#ffae78",
            image: "assets/rumo.png", thumb: "assets/rumo.png"
        },
        11: {
            name: "西園寺　夜雲", jpName: "さいおんじ　やくも",
            heroName: "シュライン", weapon: "風", gender: "男", birthday: "7月25日", height: "173cm",
            school: "蒼雄高校", grade: "1-B", hobby: "甘味巡り", specialty: "見えないけどちゃんと歩ける",
            likes: "チョコ菓子", dislikes: "コーヒー", weakness: "カエル",
            desc: "へらへらした糸目の策士で重度のシスコン。失明と家庭の借金問題が彼の執着を育てた。", stats: [75, 60, 80], color: "#48996b",
            image: "assets/yakumo.png", thumb: "assets/yakumo.png"
        },
        12: {
            name: "絹傘　氷雨", jpName: "きぬがさ　ひさめ",
            heroName: "レイニー", weapon: "太陽利用のレーザー", gender: "女", birthday: "4月19日", height: "162cm",
            school: "帝華高校", grade: "2-B", hobby: "ショッピング", specialty: "コミュニケーション",
            likes: "ラムネ", dislikes: "ゲテモノ料理", weakness: "暇",
            desc: "明るく優秀で弟思いの清楚系ギャル。病弱な弟を救うため医者を目指している。", stats: [90, 75, 50], color: "#484c99",
            image: "assets/hisame.png", thumb: "assets/hisame.png"
        },
        13: {
            name: "甘城　來舞", jpName: "あまぎ　らむ",
            heroName: "ミンティ", weapon: "触れた無機物を柔らかくする", gender: "女", birthday: "12月13日", height: "160cm",
            school: "蒼雄高校", grade: "2-A", hobby: "お菓子作り", specialty: "マルチタスク",
            likes: "チョコミント", dislikes: "トマト", weakness: "狭いところ",
            desc: "優等生で頼れるが芯の強い少女。兄を支えながらも無自覚に彼の生きる理由になっている。", stats: [65, 45, 70], color: "#7ae4f0",
            image: "assets/ramu.png", thumb: "assets/ramu.png"
        },
        14: {
            name: "寝占　亜羅夢", jpName: "ねじめ　あらん",
            heroName: "スリープ", weapon: "催眠", gender: "男", birthday: "6月30日", height: "177cm",
            school: "蒼雄高校", grade: "2-C", hobby: "寝る", specialty: "省エネ行動",
            likes: "ココア", dislikes: "レモン", weakness: "人混み",
            desc: "無気力で眠りがちな少年。期待を失った家庭で「何者にもなれなかった自分」を抱えている。", stats: [20, 60, 45], color: "#d49bcf",
            image: "assets/aran.png", thumb: "assets/aran.png"
        },
        15: {
            name: "宇佐美　宙", jpName: "うさみ　そら",
            heroName: "ユニバース", weapon: "重力操作", gender: "女", birthday: "10月30日", height: "148cm",
            school: "翠聖中学", grade: "2-C", hobby: "宇宙との交信", specialty: "独自理論構築",
            likes: "炭酸", dislikes: "梅干し", weakness: "普通",
            desc: "宇宙と交信する不思議ちゃん。「理解者はいない」と言われた言葉を真に受けている。", stats: [50, 80, 50], color: "#7a6ce6",
            image: "assets/sora.png", thumb: "assets/sora.png"
        },
        16: {
            name: "飯岡　和絃", jpName: "いいおか　ないと",
            heroName: "ウィザード", weapon: "毒性血液", gender: "男", birthday: "3月2日", height: "174cm",
            school: "蒼雄高校", grade: "2-C", hobby: "アニメ鑑賞", specialty: "絵を描く",
            likes: "グミ", dislikes: "タコ", weakness: "運動",
            desc: "チャラく振る舞うが本当はオタク気質の少年。唯一の救いだった好きなものを否定され続けている。", stats: [25, 75, 35], color: "#d6c251",
            image: "assets/naito.png", thumb: "assets/naito.png"
        },
        17: {
            name: "藤堂　ろま", jpName: "とうどう　ろま",
            heroName: "マリオネ", weapon: "相手の行動を操る", gender: "女", birthday: "12月30日", height: "149cm",
            school: "蒼雄高校", grade: "1-A", hobby: "裁縫", specialty: "クレーンゲーム",
            likes: "紅茶", dislikes: "ししゃも", weakness: "地図",
            desc: "寡黙で感情が読みづらいが行動に本音が出る少女。「怖い」と言われた過去が心に残っている。", stats: [50, 75, 40], color: "#7a4b52",
            image: "assets/roma.png", thumb: "assets/roma.png"
        },
        18: {
            name: "金盛　律幸", jpName: "かなもり　りつき",
            heroName: "ダイス", weapon: "くらったダメージ保留", gender: "男", birthday: "7月7日", height: "177cm",
            school: "蒼雄高校", grade: "1-C", hobby: "作業ゲー", specialty: "家事スキル",
            likes: "肉じゃが", dislikes: "チーズ", weakness: "運ゲー",
            desc: "皮肉屋だが本当は努力したい優しい少年。ギャンブル中毒の父の影で希望を諦めかけている。", stats: [30, 80, 90], color: "#385fd6",
            image: "assets/ritsuki.png", thumb: "assets/ritsuki.png"
        },
        19: {
            name: "猫羽　美愛", jpName: "ねこま　みあ",
            heroName: "モルフォ", weapon: "鱗粉", gender: "女", birthday: "9月19日", height: "158cm",
            school: "蒼雄高校", grade: "2-A", hobby: "人間観察", specialty: "ババ抜き",
            likes: "期間限定品", dislikes: "パクチー", weakness: "カミナリ",
            desc: "洞察力が鋭く核心を突いてしまう不思議系。本音を言うほど人が離れる経験を重ねてきた。", stats: [70, 55, 65], color: "#aa54bf",
            image: "assets/mia.png", thumb: "assets/mia.png"
        },
        20: {
            name: "宗崎　幻希", jpName: "そうざき げんき",
            heroName: "ゴスペル", weapon: "幻覚", gender: "男", birthday: "5月5日", height: "171cm",
            school: "蒼雄高校", grade: "1-B", hobby: "占い", specialty: "書道",
            likes: "ぶどうジュース", dislikes: "納豆", weakness: "機械",
            desc: "厨二的言動の奥に孤独を抱える少年。宗教に傾倒する母と妄想の世界が現実との境を曖昧にしている。", stats: [45, 70, 30], color: "#303030",
            image: "assets/genki.png", thumb: "assets/genki.png"
        },
        21: {
            name: "白河　歩夢", jpName: "しらかわ　あゆむ",
            heroName: "ドーズ", weapon: "スローに見える", gender: "男", birthday: "5月10日", height: "183cm",
            school: "蒼雄高校", grade: "2-B", hobby: "ネトゲ", specialty: "タイピング",
            likes: "ポテチ", dislikes: "牛乳", weakness: "早起き",
            desc: "本来は繊細で気弱だが、今は破天荒な別人格が前に出ている。薬物依存と人格分裂は、居場所を失った過去の副産物。", stats: [80, 70, 75], color: "#eb8531",
            image: "assets/ayumu.png", thumb: "assets/ayumu.png"
        },
        22: {
            name: "霊雨寺　幽華", jpName: "れいうじ　ゆうか",
            heroName: "スピリット", weapon: "無機物すり抜け", gender: "女", birthday: "8月21日", height: "160cm",
            school: "蒼雄高校", grade: "2-A", hobby: "神社巡り", specialty: "落とし物を見つける",
            likes: "茎わかめ", dislikes: "ブロッコリー", weakness: "顔に見えるもの",
            desc: "影が薄く常に怯えている不幸体質の少女。自分を厄病神だと信じ、人から距離を取っている。", stats: [10, 10, 95], color: "#8e79e0",
            image: "assets/yuka.png", thumb: "assets/yuka.png"
        },
        23: {
            name: "絹傘　時雨", jpName: "きぬがさ　しぐれ",
            heroName: "ドロップ", weapon: "水", gender: "男", birthday: "6月19日", height: "171cm",
            school: "帝華高校", grade: "1-B", hobby: "パズル", specialty: "折り紙",
            likes: "和菓子", dislikes: "揚げ物", weakness: "長時間立つこと",
            desc: "穏やかで控えめな虚弱体質の少年。愛されたい気持ちと「出来ない自分」への劣等感を抱えている。", stats: [65, 30, 50], color: "#6180b8",
            image: "assets/sigure.png", thumb: "assets/sigure.png"
        },
        24: {
            name: "棘間　羽莉珠", jpName: "とげま　はりす",
            heroName: "ファング", weapon: "衝撃波", gender: "女", birthday: "6月13日", height: "150cm",
            school: "英紅高校", grade: "1-C", hobby: "食べ歩き", specialty: "虫の手づかみ",
            likes: "ハンバーガー", dislikes: "上品すぎる料理", weakness: "煙草の匂い",
            desc: "感情的で荒っぽいが情に厚い少女。尊敬した父への信頼崩壊が、彼女の荒れの根源。", stats: [60, 85, 40], color: "#739e9e",
            image: "assets/harisu.png", thumb: "assets/harisu.png"
        }
    };

    // Units: 8ユニット、各ユニットは1人の仮メンバー（あとで増やせます）
    const units = {
        1: { name: '新星救済隊', members: [1, 2, 3, 4] },
        2: { name: 'MUTE&RIOT', members: [5, 6, 7, 8] },
        3: { name: 'RE:ALTIARA', members: [9, 10, 11, 12] },
        4: { name: 'しゅがー・へぶん', members: [13, 14, 15, 16] },
        5: { name: 'Crux-Rosarian', members: [17, 18, 19, 20] },
        6: { name: 'おまもりシンドローム', members: [21, 22, 23, 24] },
        7: { name: '初代ヒーロー', members: [] },
        8: { name: 'その他', members: [] }
    };

    // DOM Elements
    const charName = document.getElementById('char-name');
    const charDesc = document.getElementById('char-desc');
    const barFills = document.querySelectorAll('.bar-fill');
    const bgCircle = document.getElementById('char-bg-circle');

    // New Profile Elements
    const elHeroName = document.getElementById('char-hero-name');
    const elWeapon = document.getElementById('char-weapon');
    const elGender = document.getElementById('char-gender');
    const elBirthday = document.getElementById('char-birthday');
    const elHeight = document.getElementById('char-height');
    const elSchool = document.getElementById('char-school');
    const elGrade = document.getElementById('char-grade');
    const elHobby = document.getElementById('char-hobby');
    const elSpecialty = document.getElementById('char-specialty');
    const elLikes = document.getElementById('char-likes');
    const elDislikes = document.getElementById('char-dislikes');
    const elWeakness = document.getElementById('char-weakness');


    // Views
    const unitList = document.getElementById('unit-list');
    const charSelectionContainer = document.getElementById('char-selection-container');
    const viewer = document.querySelector('.character-viewer');

    // Navigation Buttons
    const unitBtns = document.querySelectorAll('.unit-btn');
    const unitPrev = document.getElementById('unit-prev');
    const unitNext = document.getElementById('unit-next');
    const backToUnitsBtn = document.getElementById('back-to-units');

    // Dynamic containers
    const charImagesContainer = document.getElementById('char-images');
    const charThumbsContainer = document.getElementById('char-thumbs');

    // State
    let currentCharId = 1;
    let currentUnitId = null;
    let currentUnitIndex = 0;

    // Helper: find unit containing a character
    function findUnitByCharId(charId) {
        for (const uid in units) {
            if (units[uid].members.includes(Number(charId))) return Number(uid);
        }
        return null;
    }

    // Switch displayed character (Visual update only)
    function switchCharacter(id) {
        id = Number(id);
        if (!characterData[id]) return;

        // Update current unit context if needed
        const foundUnit = findUnitByCharId(id);
        if (foundUnit !== null) {
            currentUnitId = foundUnit;
            currentUnitIndex = units[foundUnit].members.indexOf(id);
        }

        // Image swap
        const allImgs = charImagesContainer.querySelectorAll('.char-img');
        allImgs.forEach(img => {
            img.classList.remove('active');
            img.style.display = 'none';
        });
        const newImg = document.getElementById(`char-img-${id}`);
        if (newImg) {
            newImg.style.display = 'block';
            setTimeout(() => newImg.classList.add('active'), 30);
        }

        // Update text + style
        const data = characterData[id];
        charName.style.opacity = 0;
        charDesc.style.opacity = 0;

        setTimeout(() => {
            charName.innerHTML = `${data.name} <span class="jp-name">${data.jpName}</span>`;
            charDesc.innerHTML = data.desc;

            // Update Profile Fields
            if (elHeroName) elHeroName.textContent = data.heroName;
            if (elWeapon) elWeapon.textContent = data.weapon;
            if (elGender) elGender.textContent = data.gender;
            if (elBirthday) elBirthday.textContent = data.birthday;
            if (elHeight) elHeight.textContent = data.height;
            if (elSchool) elSchool.textContent = data.school;
            if (elGrade) elGrade.textContent = data.grade;
            if (elHobby) elHobby.textContent = data.hobby;
            if (elSpecialty) elSpecialty.textContent = data.specialty;
            if (elLikes) elLikes.textContent = data.likes;
            if (elDislikes) elDislikes.textContent = data.dislikes;
            if (elWeakness) elWeakness.textContent = data.weakness;

            charName.style.color = data.color;
            document.documentElement.style.setProperty('--current-theme', data.color);


            barFills.forEach((bar, index) => {
                bar.style.width = '0%';
                bar.style.backgroundColor = data.color;
                setTimeout(() => {
                    bar.style.width = `${data.stats[index]}%`;
                }, 120);
            });

            charName.style.opacity = 1;
            charDesc.style.opacity = 1;
            currentCharId = id;
        }, 180);
    }

    // Render unit members into the viewer & list
    function renderUnit(uid) {
        const unit = units[uid];
        if (!unit) return;
        charImagesContainer.innerHTML = '';
        charThumbsContainer.innerHTML = '';

        unit.members.forEach(mid => {
            const data = characterData[mid] || { name: `CHAR${mid}`, jpName: '', desc: '', stats: [0, 0, 0], color: '#ccc' };

            // 1. Create Detail Image
            const img = document.createElement('img');
            img.className = 'char-img';
            img.id = `char-img-${mid}`;
            img.src = data.image || '';
            img.alt = data.name;
            img.style.display = 'none';
            charImagesContainer.appendChild(img);

            // 2. Create Thumbnail for List View
            const btn = document.createElement('button');
            btn.className = 'char-thumb';
            btn.setAttribute('data-id', mid);
            btn.setAttribute('aria-label', `Select ${data.name}`);
            btn.innerHTML = `
            <img src="${data.thumb || 'assets/placeholder_thumb.png'}" alt="${data.name}">
            <span>${data.name}</span>
            `;
            btn.addEventListener('click', () => {
                // Click Thumb -> Go to Detail
                switchCharacter(mid);
                showView('detail');
            });
            charThumbsContainer.appendChild(btn);
        });
    }

    // View Switching Logic
    function showView(viewName) {
        // Hide all
        if (unitList) unitList.style.display = 'none';
        if (charSelectionContainer) charSelectionContainer.style.display = 'none';
        if (viewer) viewer.style.display = 'none';

        // Show requested
        if (viewName === 'units') {
            if (unitList) unitList.style.display = '';
        } else if (viewName === 'list') {
            if (charSelectionContainer) charSelectionContainer.style.display = '';
        } else if (viewName === 'detail') {
            if (viewer) viewer.style.display = '';
        }
    }

    // Unit button click -> open unit list view
    unitBtns.forEach((btn, i) => {
        const uid = i + 1;
        btn.setAttribute('data-unit', String(uid));
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!units[uid]) return;
            currentUnitId = uid;
            renderUnit(uid);
            showView('list');
        });
    });

    // Back Buttons
    if (backToUnitsBtn) {
        backToUnitsBtn.addEventListener('click', () => {
            showView('units');
        });
    }

    // Unit prev/next navigation within Detail View
    if (unitPrev) unitPrev.addEventListener('click', () => {
        if (!currentUnitId) return;
        const members = units[currentUnitId].members;
        currentUnitIndex = (currentUnitIndex - 1 + members.length) % members.length;
        switchCharacter(members[currentUnitIndex]);
    });
    if (unitNext) unitNext.addEventListener('click', () => {
        if (!currentUnitId) return;
        const members = units[currentUnitId].members;
        currentUnitIndex = (currentUnitIndex + 1) % members.length;
        switchCharacter(members[currentUnitIndex]);
    });


    // Initial Setup
    // Initialize visible section based on hash
    function showSectionByHash(hash) {
        const id = (hash && hash.replace('#', '')) || 'home';
        const sections = document.querySelectorAll('section');
        sections.forEach(s => {
            s.style.display = (s.id === id) ? '' : 'none';
        });
        setActiveNav('#' + id);
        window.scrollTo({ top: 0, behavior: 'auto' }); // auto to prevent jumpy smooth scroll on load

        // Reset to Unit List when entering Characters section from top nav
        if (id === 'characters') {
            // Only reset if we are not already deep in a view (simple logic: just reset always for now)
            showView('units');
        }
    }

    // --- Navigation: show/hide sections when nav links clicked ---
    const navLinks = document.querySelectorAll('.nav-links a');
    function setActiveNav(hash) {
        navLinks.forEach(a => {
            if (a.getAttribute('href') === hash) a.classList.add('active');
            else a.classList.remove('active');
        });
    }

    navLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const href = a.getAttribute('href');
            history.pushState(null, '', href);
            showSectionByHash(href);
        });
    });

    window.addEventListener('popstate', () => {
        showSectionByHash(location.hash || '#home');
    });

    // Initialize
    showSectionByHash(location.hash || '#home');


    // Close button for character viewer (Returns to List)
    const charClose = document.getElementById('char-close');
    if (charClose) {
        charClose.addEventListener('click', () => {
            // Close completely? or back to list?
            // "Close" usually implies leaving the modal. 
            // In this context, let's make it go back to list, as that's the parent context.
            // Or if it's "Close", maybe go back to Units? 
            // Let's make it behave like "Back to List" for now, or "Back to Units" to close the whole viewer experience.
            // Requirement says "clicking icon leads to description", so "X" probably means "Done reading".
            // Let's go back to Unit List (Top Level) to be safe, or just List.
            // The user requested: "CLICK HEROES -> Click Unit -> Show Thumbnails -> Click Icon -> Show Detail".
            // So closing detail should probably go back to "Show Thumbnails".
            showView('list');
        });
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (viewer && viewer.style.display !== 'none') {
                showView('list');
            } else if (charSelectionContainer && charSelectionContainer.style.display !== 'none') {
                showView('units');
            }
        }
    });
});
