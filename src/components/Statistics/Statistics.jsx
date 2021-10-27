import PropTypes from "prop-types";
import s from "./Statistics.module.scss";

export function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => (
          <li
            style={{ backgroundColor: getRandomColor() }}
            className={s.item}
            key={stat.id}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function randomInt() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
}
