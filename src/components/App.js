import React, { useState } from "react";
import { BsFillKeyboardFill } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import s from "./App.module.css";

function App() {
  const [isLucky, setIsLucky] = useState(false);

  const handleClickOnFellingLucky = () => {
    setIsLucky(!isLucky);
  };

  return (
    <div>
      <div className={s.container}>
        <a href={isLucky ? "https://www.ilmakiage.com/" : "http://google.com"}>
          <img
            className={s.image}
            src={
              isLucky
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_of_Il_makiage.svg/1920px-Logo_of_Il_makiage.svg.png?20200302051403"
                : "https://res.cloudinary.com/demo/image/fetch/fl_png8/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
            width={320}
            height={110}
            alt="google"
          />
        </a>
        <form className={s.form}>
          <input className={s.input} type="text" />
          <button className={s.searchButton} type="submit">
            <AiOutlineSearch width={24} height={24} />
          </button>
          <ul className={s.buttonsList}>
            <li className={s.buttonItem}>
              <button type="button">
                <BsFillKeyboardFill width={24} height={24} />
              </button>
            </li>
            <li>
              <button type="button">
                <HiOutlineMicrophone width={24} height={24} />
              </button>
            </li>
          </ul>
        </form>
        <ul className={s.listSearch}>
          <li className={s.listSearchItem}>
            <button className={s.listSearchButton} type="button">
              Пошук Google
            </button>
          </li>
          <li className={s.listSearchItem}>
            <button
              className={s.listSearchButton}
              type="button"
              onClick={handleClickOnFellingLucky}
            >
              Мені пощастить
            </button>
          </li>
        </ul>
        <div className={s.title}>
          Мова Google:
          <ul className={s.languageList}>
            <li className={s.languageListItem}>
              <a
                className={s.languageListItemLink}
                href="https://www.google.com/setprefs?sig=0_L8l31iUl9i7bcHrX5YLvUglnTRw%3D&amp;hl=en&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjW2sSX37z6AhV2TUEAHUc-D_AQ2ZgBCBA"
              >
                English
              </a>
            </li>
            <li className={s.languageListItem}>
              <a
                className={s.languageListItemLink}
                href="https://www.google.com/setprefs?sig=0_L8l31iUl9i7bcHrX5YLvUglnTRw%3D&amp;hl=ru&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwio65rL37z6AhUGacAKHYmkBzEQ2ZgBCBs"
              >
                русский
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
