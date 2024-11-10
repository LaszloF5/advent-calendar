import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

export default function App() {
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');
  const [needName, setNeedName] = useState(true);
  const itemNum = 24;
  const item = Array.from({ length: itemNum }, (_, index) => itemNum - index - 1);
  const [isBack, setIsBack] = useState(Array(itemNum).fill(false));
  const currDay = Number(new Date().toISOString().split("T")[0].slice(-2));

  const story = [
    ['1. nap. \nAz angyal hírül adja Zakariásnak János születését. Az angyal, Gábriel, megjelenik Zakariásnak a templomban, és közli vele, hogy felesége, Erzsébet, fiút fog szülni, akit Jánosnak kell nevezniük. Ez a gyermek az Úr útját fogja készíteni'],
    ['2. nap. \nAngyali híradás Máriának. Gábriel megjelenik Máriának, és elmondja neki, hogy fiút fog szülni, akit Jézusnak neveznek majd, és hogy Isten Fia lesz. Mária alázattal elfogadja az angyali hírt.'],
    ['3. nap. \nMária látogatása Erzsébetnél. Mária meglátogatja Erzsébetet, és amikor Erzsébet meghallja Mária köszöntését, a méhében lévő gyermek megmozdul, Erzsébet pedig áldást mond Máriára.'],
    ['4. nap. \nJózsef álma. József elhatározza, hogy titokban elbocsátja Máriát, miután megtudja, hogy gyermeket vár. Azonban egy angyal megjelenik neki álmában, és közli vele, hogy a gyermek a Szentlélektől fogant, így József végül magához veszi Máriát.'],
    ['5. nap. \nA népszámlálás meghirdetése. Caesar Augustus népszámlálást hirdet, így mindenki visszatér szülővárosába. József és Mária Betlehembe indulnak, mivel József Dávid házából származik.'],
    ['6. nap. \nJózsef és Mária megérkeznek Betlehembe. Hosszú út után Betlehembe érnek, ahol nincs számukra hely a szálláson, így egy egyszerű istállóban keresnek menedéket.'],
    ['7. nap. \nJézus megszületik. Az éjszaka folyamán Mária világra hozza Jézust. Az újszülöttet bepólyálja, és egy jászolba helyezi, mivel nem találnak helyet a fogadóban.'],
    ['8. nap. \nAngyalok jelennek meg a pásztoroknak. Kinn a mezőn pásztorok őrzik a nyájat, amikor megjelenik nekik egy angyal, és elmondja a jó hírt: "Ma megszületett a Megváltó, aki az Úr Krisztus."'],
    ['9. nap. \nAz angyalok éneke. Hirtelen egy mennyei sereg jelenik meg az angyallal, és dicséretet zengenek: "Dicsőség a magasságban Istennek, és békesség a földön az embereknek."'],
    ['10. nap. \nA pásztorok útnak indulnak. A pásztorok Betlehembe sietnek, hogy lássák a gyermek Jézust. Rátalálnak Máriára, Józsefre és a jászolban fekvő gyermekre.'],
    ['11. nap. \nA pásztorok hírül adják a történteket. Miután találkoztak Jézussal, a pásztorok mindenfelé elmondják, amit láttak és hallottak. Az emberek csodálkozva hallgatják őket.'],
    ['12. nap. \nMária szívében megőrzi a történteket. Mária elmélyedve, szívében megőrzi és fontolgatja mindazt, amit látott és hallott az angyalokról és a pásztorokról.'],
    ['13. nap. \nJézus névadása. Nyolc nap elteltével elnevezik a gyermeket Jézusnak, ahogyan az angyal meghagyta Máriának.'],
    ['14. nap. \nA bölcsek elindulnak kelet felől. Keleten bölcsek látják meg a különleges csillagot, amely egy király születését jelzi, és útnak indulnak, hogy köszöntsék őt.'],
    ['15. nap. \nA bölcsek Heródesnél érdeklődnek. Jeruzsálembe érve a bölcsek megkérdezik Heródest, hogy hol találják a zsidók újszülött királyát, mert látni akarják őt.'],
    ['16. nap. \nHeródes tanácsot kér a papoktól. Heródes megdöbben a hír hallatán, és összehívja a papokat és írástudókat, hogy megtudja, hol kell születnie a Messiásnak.'],
    ['17. nap. \nA próféta jövendölése Betlehemről. A papok elmondják, hogy a próféciák szerint a Messiás Betlehemben születik, mivel az Dávid városa.'],
    ['18. nap. \nHeródes megbízza a bölcseket. Heródes azt kéri a bölcsektől, hogy miután megtalálták a gyermeket, térjenek vissza hozzá, hogy ő is hódolhasson előtte.'],
    ['19. nap. \nA bölcsek követik a csillagot. A bölcsek Betlehembe mennek, és örömmel veszik észre, hogy a csillag megáll egy ház felett, ahol a gyermek Jézus van.'],
    ['20. nap. \nA bölcsek hódolata és ajándékai. A bölcsek belépnek, és hódolnak Jézus előtt, majd ajándékokat adnak: aranyat, tömjént és mirhát.'],
    ['21. nap. \nFigyelmeztetés álomban. Álomban figyelmeztetést kapnak, hogy ne térjenek vissza Heródeshez, így más úton térnek haza.'],
    ['22. nap. \nAz Úr figyelmezteti Józsefet. Egy angyal álmában figyelmezteti Józsefet, hogy meneküljön Egyiptomba, mert Heródes a gyermek életére tör.'],
    ['23. nap. \nA menekülés Egyiptomba. József azonnal útra kel Máriával és Jézussal, és Egyiptomba menekülnek, hogy biztonságban legyenek.'],
    ['24. nap. \nJézus születésének örömhíre. A hírek terjednek Jézus születéséről, aki később a világ Megváltója lesz. Az emberek reménnyel és örömmel várják az ígéretes jövőt.'],
  ];

  const handleName = (e) => {
    e.preventDefault();
    localStorage.removeItem('name');
    setName(tempName);
    localStorage.setItem('name', JSON.stringify(tempName));
    setNeedName(false);
    setTempName('');
  };

  const handleClick = (index, date) => {
    if (date <= currDay) {
      setIsBack((prevState) => {
        const newState = prevState.map((state, i) => i === index ? !state : state);
        if (newState !== prevState) {
          localStorage.setItem('cards', JSON.stringify(newState));
        }
        return newState;
      });
    } else {
      alert("Legyél türelmes.");
    }
  };

  useEffect(() => {
    const openedCards = JSON.parse(localStorage.getItem('cards'));
    if (openedCards) {
      setIsBack(openedCards);
    }
  }, []);

  useEffect(() => {
    const yourName = JSON.parse(localStorage.getItem('name'));
    if (yourName) {
      setName(yourName);
      setNeedName(false);
    } else {
      setNeedName(true);
    }
  }, []);

  const handleTestName = () => {
    localStorage.removeItem('name');
  }

  return (
    <div className="App">
      <h1>Advent calendar {name}</h1>
      <button onClick={handleTestName}>Delete all names</button>
      {needName && (<form onSubmit={handleName} className="form-name">
        <label className="form-name_label" htmlFor='nameId'>
          Name:
          </label>
          <input 
            className="form-name_input" 
            type="text" 
            id='nameId'
            value={tempName} 
            onChange={(e) => setTempName(e.target.value)} 
            required 
            placeholder="ex.: James" />
        <button type="submit" className="form-name_btn">Submit</button>
      </form>)}
      <div className="container">
        {item.map((value, index) => (
          <Card
            key={index}
            index={index}
            date={index + 1}
            value={value}
            isBack={isBack[index]}
            name={name}
            story={story}
            onClick={() => handleClick(index, index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
