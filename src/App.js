import React, { useState, useEffect } from "react";
import ScandinavianCard from "./ScandinavianCard";
import Card from "./Card";
import "./App.css";
import santaHat from "./santa-hat.png";

export default function App() {
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");
  const [needName, setNeedName] = useState(true);
  const [visibleChangeNameForm, setVisibleChangeNameForm] = useState(false);
  const [selectedStory, setSelectedStory] = useState("");
  const itemNum = 24;
  const item = Array.from(
    { length: itemNum },
    (_, index) => itemNum - index - 1
  );
  const [isBack, setIsBack] = useState(Array(itemNum).fill(false));

  const imgClasses = ["img1", "img2", "img3", "img4", "img5", "img6"];
  const scandinavianImgClasses = ["img1", "img2", "img3"];

  const story1 = [
    [
      "1. nap \nAngyali híradás Zakariásnak \nAz angyal, Gábriel, megjelenik Zakariásnak a templomban, és közli vele, hogy felesége, Erzsébet, fiút fog szülni, akit Jánosnak kell nevezniük. Ez a gyermek az Úr útját fogja készíteni.",
    ],
    [
      "2. nap \nAngyali híradás Máriának \nGábriel megjelenik Máriának, és elmondja neki, hogy fiút fog szülni, akit Jézusnak neveznek majd, és hogy Isten Fia lesz. Mária alázattal elfogadja az angyali hírt.",
    ],
    [
      "3. nap \nMária látogatása Erzsébetnél \nMária meglátogatja Erzsébetet, és amikor Erzsébet meghallja Mária köszöntését, a méhében lévő gyermek megmozdul, Erzsébet pedig áldást mond Máriára.",
    ],
    [
      "4. nap \nJózsef álma \nJózsef elhatározza, hogy titokban elbocsátja Máriát, miután megtudja, hogy gyermeket vár. Azonban egy angyal megjelenik neki álmában, és közli vele, hogy a gyermek a Szentlélektől fogant, így József végül magához veszi Máriát.",
    ],
    [
      "5. nap \nA népszámlálás meghirdetése \nAugustus Caesar népszámlálást hirdet, így mindenki visszatér szülővárosába. József és Mária Betlehembe indulnak, mivel József Dávid házából származik.",
    ],
    [
      "6. nap \nJózsef és Mária megérkeznek Betlehembe \nHosszú út után Betlehembe érnek, ahol nincs számukra hely a szálláson, így egy egyszerű istállóban keresnek menedéket.",
    ],
    [
      "7. nap \nJézus megszületik \nAz éjszaka folyamán Mária világra hozza Jézust. Az újszülöttet bepólyálja, és egy jászolba helyezi, mivel nem találnak helyet a fogadóban.",
    ],
    [
      '8. nap \nAngyalok jelennek meg a pásztoroknak \nKinn a mezőn pásztorok őrzik a nyájat, amikor megjelenik nekik egy angyal, és elmondja a jó hírt: "Ma megszületett a Megváltó, aki az Úr Krisztus."',
    ],
    [
      '9. nap \nAz angyalok éneke \nHirtelen egy mennyei sereg jelenik meg az angyallal, és dicséretet zengenek: "Dicsőség a magasságban Istennek, és békesség a földön az embereknek."',
    ],
    [
      "10. nap \nA pásztorok útnak indulnak \nA pásztorok Betlehembe sietnek, hogy lássák a gyermek Jézust. Rátalálnak Máriára, Józsefre és a jászolban fekvő gyermekre.",
    ],
    [
      "11. nap \nA pásztorok hírül adják a történteket, \nMiután találkoztak Jézussal, a pásztorok mindenfelé elmondják, amit láttak és hallottak. Az emberek csodálkozva hallgatják őket.",
    ],
    [
      "12. nap \nMária szívében megőrzi a történteket \nMária elmélyedve, szívében megőrzi és fontolgatja mindazt, amit látott és hallott az angyalokról és a pásztorokról.",
    ],
    [
      "13. nap \nJézus névadása \nNyolc nap elteltével elnevezik a gyermeket Jézusnak, ahogyan az angyal meghagyta Máriának.",
    ],
    [
      "14. nap \nA bölcsek elindulnak kelet felől \nKeleten bölcsek látják meg a különleges csillagot, amely egy király születését jelzi, és útnak indulnak, hogy köszöntsék őt.",
    ],
    [
      "15. nap \nA bölcsek Heródesnél érdeklődnek \nJeruzsálembe érve a bölcsek megkérdezik Heródest, hogy hol találják a zsidók újszülött királyát, mert látni akarják őt.",
    ],
    [
      "16. nap \nHeródes tanácsot kér a papoktól \nHeródes megdöbben a hír hallatán, és összehívja a papokat és írástudókat, hogy megtudja, hol kell születnie a Messiásnak.",
    ],
    [
      "17. nap \nA próféta jövendölése Betlehemről \nA papok elmondják, hogy a próféciák szerint a Messiás Betlehemben születik, mivel az Dávid városa.",
    ],
    [
      "18. nap \nHeródes megbízza a bölcseket \nHeródes azt kéri a bölcsektől, hogy miután megtalálták a gyermeket, térjenek vissza hozzá, hogy ő is hódolhasson előtte.",
    ],
    [
      "19. nap \nA bölcsek követik a csillagot \nA bölcsek Betlehembe mennek, és örömmel veszik észre, hogy a csillag megáll egy ház felett, ahol a gyermek Jézus van.",
    ],
    [
      "20. nap \nA bölcsek hódolata és ajándékai \nA bölcsek belépnek, és hódolnak Jézus előtt, majd ajándékokat adnak: aranyat, tömjént és mirhát.",
    ],
    [
      "21. nap \nFigyelmeztetés álomban \nÁlomban figyelmeztetést kapnak, hogy ne térjenek vissza Heródeshez, így más úton térnek haza.",
    ],
    [
      "22. nap \nAz Úr figyelmezteti Józsefet \nEgy angyal álmában figyelmezteti Józsefet, hogy meneküljön Egyiptomba, mert Heródes a gyermek életére tör.",
    ],
    [
      "23. nap \nMenekülés Egyiptomba \nJózsef azonnal útra kel Máriával és Jézussal, és Egyiptomba menekülnek, hogy biztonságban legyenek.",
    ],
    [
      `24. nap \nJézus születésének örömhíre \nA hírek terjednek Jézus születéséről, aki később a világ Megváltója lesz. Az emberek reménnyel és örömmel várják az ígéretes jövőt. \nÁldott, békés, boldog karácsonyt ${name}`,
    ],
  ];

  const story2 = [
    [
      "1. nap \nA hosszú éjszakák kezdete \nA világot a tél leghosszabb éjszakája borítja be. A skandinávok Yule-t ünneplik, az év azon időszakát, amikor az istenek és emberek közötti határok elmosódnak. Egy fiatal harcos, Leif, a tűz mellett hallgatja a régiek történeteit a Yule-éjszaka csodáiról és veszélyeiről.",
    ],
    [
      "2. nap \nA látogató érkezése \nEgy titokzatos idegen, Odin, álruhában érkezik Leif falujába. Azt mondja, fontos küldetése van, és útitársat keres, aki segít neki visszaszerezni valamit, amit elloptak tőle.",
    ],
    [
      "3. nap \nA veszteség története \nOdin elmeséli, hogy Loki, a csalás istene, ellopta a Yule Csillagát, egy mágikus tárgyat, amely a tél közepén fényt hoz a világba. Nélküle az emberek és az istenek is elveszhetnek a sötétségben.",
    ],
    [
      "4. nap \nAz indulás \nLeif elfogadja a kihívást, és útra kel Odinnal. Elhagyják a falut, és a hóval borított erdő mélyébe merészkednek.",
    ],
    [
      "5. nap \nA trollok erdeje \nÚtjuk során belebotlanak egy trollcsaládba, akik nem örülnek a betolakodóknak. Leif bátorsága és Odin bölcsessége segít nekik legyőzni a trollokat anélkül, hogy harcolniuk kellene.",
    ],
    [
      "6. nap \nA varázsló figyelmeztetése \nEgy magányos varázsló kunyhójában keresnek menedéket. A varázsló elmondja, hogy Loki a Kilenc Világot járja, és csapdák várnak rájuk mindenhol.",
    ],
    [
      "7. nap \nA bifrösti híd titka \nOdin elvezeti Leifet a Bifröstre, a szivárványhídra, amely az istenek birodalmába vezet. A híd azonban eltűnni látszik, és csak a Yule Csillag fénye hozhatja vissza.",
    ],
    [
      "8. nap \nA hóóriás barlangja \nEgy barlangban hatalmas hóóriással találkoznak. A lény haraggal fordul feléjük, de Odin egy ravasz trükkel meggyőzi, hogy engedje tovább őket.",
    ],
    [
      "9. nap \nFreya ajándéka \nAz istennő, Freya megjelenik előttük, és egy varázstárgyat ad Leifnek: egy csillogó karkötőt, amely megvédi őket Loki illúzióitól.",
    ],
    [
      "10. nap \nA jégmezők átka \nA csapat egy végtelen jégmezőn kel át, ahol Leif kezd elveszni a reménytelenségben. Odin történeteket mesél neki, hogy bátorítsa.",
    ],
    [
      "11. nap \nA farkasok árnyéka \nSköll és Hati, a napot és a holdat üldöző farkasok tűnnek fel az égen, és veszélybe sodorják őket. Leifnek sikerül elterelnie a figyelmüket.",
    ],
    [
      "12. nap \nLoki nyomai \nVégre rátalálnak Loki nyomaira egy elhagyott templomban. Odin biztos benne, hogy közel járnak.",
    ],
    [
      "13. nap \nA jéghegy titka \nEgy hatalmas jéghegy belsejében Loki titkos rejtekhelyét találják, de a hely őrzője, egy ősi jégsárkány, az útjukat állja.",
    ],
    [
      "14. nap \nA sárkány legyőzése \nLeif és Odin együttműködnek, hogy legyőzzék a jégsárkányt. Végül nem erővel, hanem Leif bátorságával és együttérzésével sikerül.",
    ],
    [
      "15. nap \nLoki csapdája \nAmikor belépnek a jéghegy belsejébe, Loki illúziókkal támad rájuk. Freya ajándékának köszönhetően sikerül átlátniuk a trükkjein.",
    ],
    [
      "16. nap \nA Yule Csillag megpillantása \nMegtalálják a Yule Csillagot, de az elérhetetlennek tűnik egy varázslatos üvegszférában.",
    ],
    [
      "17. nap \nLoki feltűnik \nLoki személyesen is megjelenik, és csábító ajánlatot tesz Leifnek: ha csatlakozik hozzá, hatalmat ígér neki.",
    ],
    [
      "18. nap \nLeif választása \nLeif nemet mond Loki ajánlatára, és kiáll a fény és az igazság mellett.",
    ],
    [
      "19. nap \nA varázslat megszegése \nOdin mágiájával és Leif erejével sikerül feltörni az üvegszférát, és visszaszerezni a Yule Csillagot.",
    ],
    [
      "20. nap \nA hazaút kezdete \nA Yule Csillag fényével az út sokkal könnyebbnek tűnik, de Loki bosszút esküszik.",
    ],
    [
      "21. nap \nAz utolsó akadály \nLoki utolsó csapdája egy hatalmas jégvihar formájában jelenik meg. Leif önfeláldozása segíti Odint a továbbjutásban.",
    ],
    [
      "22. nap \nA fény visszatérése \nA faluban a Yule Csillag fénye újra ragyogni kezd, és a hosszú éjszakák megszűnnek.",
    ],
    [
      "23. nap \nAz istenek ajándéka \nOdin megjutalmazza Leifet a bátorságáért, és Freya egy különleges áldással illeti.",
    ],
    [
      `24. nap \nA Yule-éjszaka ünnepe \nA falubeliek együtt ünneplik a Yule-t, immár a fény és a melegség örömében. Leif története példaképpé válik mindenki számára. \nBoldog Yule-t ${name}`,
    ],
  ];

  const [apiDate, setApiDate] = useState("");

  const toggleChangeName = () => {
    setVisibleChangeNameForm(!visibleChangeNameForm);
  };

  useEffect(() => {
    const getDate = async () => {
      try {
        const response = await fetch(
          "https://api.timezonedb.com/v2.1/get-time-zone?key=A3P9B4RA1JC2&format=json&by=position&lat=47.4979&lng=19.0402"
        );
        if (!response.ok) {
          throw new Error("Hiba a kéréssel!");
        }
        const date = await response.json();
        setApiDate(date.formatted.replaceAll("-", " ").slice(0, 10));
      } catch (error) {
        console.error("Hiba: ", error);
      }
    };
    getDate();
  }, []);

  const handleName = (e) => {
    e.preventDefault();
    localStorage.removeItem("name");
    const validName = tempName.trim();
    setName(validName);
    localStorage.setItem("name", JSON.stringify(validName));
    localStorage.setItem("story", JSON.stringify(selectedStory));
    setNeedName(false);
    setTempName("");
    setVisibleChangeNameForm(false);
  };

  useEffect(() => {
    const openedCards = JSON.parse(localStorage.getItem("cards"));
    if (openedCards) {
      setIsBack(openedCards);
    }
  }, []);

  useEffect(() => {
    const yourName = JSON.parse(localStorage.getItem("name"));
    const yourtStory = JSON.parse(localStorage.getItem("story"));
    if (yourName) {
      setName(yourName);
      setNeedName(false);
    } else {
      setNeedName(true);
    }
    if (yourtStory) {
      setSelectedStory(yourtStory);
    }
  }, []);

  const handleClick = (index, date) => {
    if (date <= Number(apiDate.slice(-2))) {
      setIsBack((prevState) => {
        const newState = prevState.map((state, i) =>
          i === index ? !state : state
        );
        if (newState !== prevState) {
          localStorage.setItem("cards", JSON.stringify(newState));
        }
        return newState;
      });
    } else {
      alert("Légy türelmes.");
    }
  };

  const handleDeleteName = () => {
    localStorage.removeItem("name");
    setIsBack((prevState) => {
      const newState = prevState.map((state, i) => {
        return state === true ? false : state;
      });
      localStorage.setItem("cards", JSON.stringify(newState));
      localStorage.removeItem('story');
      setNeedName(true);
      setSelectedStory("");
      setName("");
      return newState;
    });
  };

  const handleChangeStory = () => {
    if (selectedStory === "scandinavianStory") {
      setIsBack((prevState) => {
        const newState = prevState.map((state, i) => {
          return state === true ? false : state;
        });
        localStorage.setItem("cards", JSON.stringify(newState));
        return newState;
      });
      localStorage.removeItem('story');
      setSelectedStory("christianStory");
      localStorage.setItem('story', JSON.stringify("christianStory"));
    } else {
      setIsBack((prevState) => {
        const newState = prevState.map((state, i) => {
          return state === true ? false : state;
        });
        localStorage.setItem("cards", JSON.stringify(newState));
        return newState;
      });
      localStorage.removeItem('story');
      setSelectedStory("scandinavianStory");
      localStorage.setItem('story', JSON.stringify("scandinavianStory"));
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="h1">Adventi kalendárium</h1>

        {name.length > 0 && (
          <div className="btn-container">
            <button onClick={handleDeleteName} className="delete-name-btn">
              Név törlése
            </button>
            <button onClick={toggleChangeName} className="change-name-btn">
              Név módosítása
            </button>
            <button onClick={handleChangeStory} className="change-story-btn">
              Történetváltás
            </button>
          </div>
        )}
      </header>
      {visibleChangeNameForm ? (
        <>
          <img className="santaHat" src={santaHat} alt="Santa hat" />
          <form
            onSubmit={handleName}
            className="form-name modify-name"
            autoComplete="off"
          >
            <label className="form-name_label" htmlFor="changeNameId">
              Név:
            </label>
            <input
              autoFocus
              className="form-name_input"
              type="text"
              id="changeNameId"
              value={tempName}
              onChange={(e) => {
                const cleanedData = e.target.value.trimStart();
                setTempName(cleanedData);
              }}
              required
              placeholder="pl.: Ádám"
            />
            <button type="submit" className="form-name_btn">
              Küldés
            </button>
          </form>
        </>
      ) : (
        <>
          {needName ? (
            <>
              <img className="santaHat2" src={santaHat} alt="Santa hat" />
              <form
                onSubmit={handleName}
                className="form-name"
                autoComplete="off"
              >
                <label className="form-name_label" htmlFor="nameId">
                  Név:
                </label>
                <input
                  autoFocus
                  className="form-name_input"
                  type="text"
                  id="nameId"
                  value={tempName}
                  onChange={(e) => {
                    const cleanedData = e.target.value.trimStart();
                    setTempName(cleanedData);
                  }}
                  required
                  placeholder="pl.: Zoé"
                />
                <p className="white-p">Válassz történetet!</p>
                <label className="white-label" htmlFor="scandinavianStory">
                  Skandináv történet
                  <input
                    type="radio"
                    id="scandinavianStory"
                    name="story"
                    value="scandinavianStory"
                    onChange={(e) => setSelectedStory(e.target.value)}
                    required
                  />
                </label>
                <label className="white-label" htmlFor="christianStory">
                  Keresztény történet
                  <input
                    type="radio"
                    id="christianStory"
                    name="story"
                    value="christianStory"
                    onChange={(e) => setSelectedStory(e.target.value)}
                    required
                  />
                </label>
                <button type="submit" className="form-name_btn">
                  Küldés
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="snowflakes" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="snowflake">
                    &#10052;
                  </div>
                ))}
              </div>
              <div className="container">
                {item.map((value, index) =>
                  selectedStory === "scandinavianStory" ? (
                    <ScandinavianCard
                      key={index}
                      index={index}
                      date={index + 1}
                      value={value}
                      isBack={isBack[index]}
                      name={name}
                      story2={story2}
                      scandinavianImgClass={
                        scandinavianImgClasses[
                          index % scandinavianImgClasses.length
                        ]
                      }
                      onClick={() => handleClick(index, index + 1)}
                    />
                  ) : (
                    <Card
                      key={index}
                      index={index}
                      date={index + 1}
                      value={value}
                      isBack={isBack[index]}
                      name={name}
                      story1={story1}
                      imgClass={imgClasses[index % imgClasses.length]}
                      onClick={() => handleClick(index, index + 1)}
                    />
                  )
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
